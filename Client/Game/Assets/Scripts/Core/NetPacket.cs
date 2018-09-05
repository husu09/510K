using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Sockets;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;

public class NetPacket
{
    // 32位整形占4个字节	
    public const int INT32_LEN = 4;
    // 字节数组bytes中“头”的长度，占4个字节，即32位整型，它的值实际上就是最后bodyLenght的长度
    public const int headerLength = 4;
    // 最多传输512个字节
    public const int max_body_length = 512;
    // 总长
    public int Length
    {
        get { return headerLength + bodyLenght; }
    }
    // 数据的长度，headerLength加上bodyLenght的长度才是传输到网络上的数据的总长度
    public int bodyLenght { get; set; }

    // 存储数据byte数组
    public byte[] bytes { get; set; }

    // 发送这个数据包的socket
    public Socket socket;
    // 网络传输过程中已读取的字节长度。前面提到，在网络传输的过程中，有时会一次收到所有数据，有时则需要分几次收到，
    // readLength即用来表示已经读取的数据长度，我们会一直等待读取的长度与bodyLenght相同，确认收到一次数据。
    public int readLength { get; set; }


    // 构造函数
    public NetPacket()
    {
        readLength = 0;
        bodyLenght = 0;
        bytes = new byte[headerLength + max_body_length];
    }

    // 创建一个拷贝构造函数
    public NetPacket(NetPacket p)
    {
        bodyLenght = p.bodyLenght;
        bytes = new byte[p.bytes.Length];
        p.bytes.CopyTo(bytes, 0);
        readLength = p.readLength;
        socket = p.socket;
    }

    public void Reset()
    {
        readLength = 0;
        bodyLenght = 0;
    }

    // 在字节数组中写入一个消息标识符，即标识当前数据包的作用，这个函数要最先调用。
    // 当将所有数据写入后，最后不要忘记使用EncodeHeader函数将数据的长度写到byte数组最前面的4个字节中。
    public void BeginWrite(string msg)
    {
        // 初始化体长为0
        bodyLenght = 0;
        WriteString(msg);
    }

    // 写整型
    public void WriteInt(int number)
    {
        if (bodyLenght + INT32_LEN > max_body_length)
            return;

        byte[] bs = System.BitConverter.GetBytes(number);
        bs.CopyTo(bytes, headerLength + bodyLenght);
        bodyLenght += INT32_LEN;
    }

    // 写字符串
    public void WriteString(string str)
    {
        int len = System.Text.Encoding.UTF8.GetByteCount(str);
        this.WriteInt(len);
        if (bodyLenght + len > max_body_length)
            return;

        Encoding.UTF8.GetBytes(str, 0, str.Length, bytes, headerLength + bodyLenght);
        bodyLenght += len;
    }

    /// <summary>
    /// 写入byte数组
    /// </summary>
    public void WriteStream(byte[] bs)
    {
        WriteInt(bs.Length);
        if (bodyLenght + bs.Length > max_body_length)
            return;

        // 压入数据流
        bs.CopyTo(bytes, headerLength + bodyLenght);
        bodyLenght += bs.Length;
    }

    // 直接写入一个序列化的对象
    public void WriteObject<T>(T t)
    {
        byte[] bs = Serialize<T>(t);
        WriteStream(bs);
    }

    // 开始读取
    public void BeginRead(out string msg)
    {
        bodyLenght = 0;
        ReadString(out msg);
    }

    // 读 int
    public void ReadInt(out int number)
    {
        number = 0;
        if (bodyLenght + INT32_LEN > max_body_length)
            return;

        number = BitConverter.ToInt32(bytes, headerLength + bodyLenght);
        bodyLenght += INT32_LEN;
    }

    // 读取一个字符串
    public void ReadString(out string str)
    {
        str = "";
        int len = 0;
        ReadInt(out len);

        if (bodyLenght + len > max_body_length)
            return;

        str = Encoding.UTF8.GetString(bytes, headerLength + bodyLenght, len);

        bodyLenght += len;
    }

    // 读取byte数组
    public byte[] ReadStream()
    {
        int size = 0;
        ReadInt(out size);

        if (bodyLenght + size > max_body_length)
            return null;

        byte[] bs = new byte[size];
        for (int i = 0; i < size; i++)
        {
            bs[i] = bytes[headerLength + bodyLenght + i];
        }

        bodyLenght += size;
        return bs;
    }

    // 直接将读取的byte数组反序列化
    public T ReadObject<T>()
    {
        byte[] bs = ReadStream();
        if (bs == null)
        {
            return default(T);
        }
        return Deserialize<T>(bs);
    }

    // 将数据长度转为4个字节存到byte数组的最前面
    public void EncodeHeader()
    {
        byte[] bs = BitConverter.GetBytes(bodyLenght);

        bs.CopyTo(bytes, 0);
    }

    // 从byte数组最前面的4个字节中解析出数据的长度，并保存给bodyLenght。当在网络上接收数据的时候，
    // 我们先接收数据包的最前面4个字节，然后使用DecodeHeader即可算出后面的数据长度，再继续接收后面的数据。
    public void DecodeHeader()
    {
        bodyLenght = BitConverter.ToInt32(bytes, 0);
    }

    // 序列化对象，这里是使用的C#自带的序列化类，也可以替换为JSON等
    public byte[] Serialize<T>(T t)
    {
        using (MemoryStream stream = new MemoryStream())
        {
            try
            {
                // 创建序列化类
                BinaryFormatter bf = new BinaryFormatter();
                //序列化到stream中
                bf.Serialize(stream, t);
                stream.Seek(0, SeekOrigin.Begin);
                return stream.ToArray();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }
    }

    // 反序列化对象，这里是使用的C#自带的序列化类，也可以替换为JSON等
    public T Deserialize<T>(byte[] bs)
    {
        using (MemoryStream stream = new MemoryStream(bs))
        {
            try
            {
                BinaryFormatter bf = new BinaryFormatter();
                //stream.Seek(0, SeekOrigin.Begin);
                T t = (T)bf.Deserialize(stream);
                return t;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Deserialize:" + ex.Message);
                return default(T);
            }
        }
    }
}
