// This file was generated by a tool; you should avoid making direct changes.
// Consider using 'partial classes' to extend these types
// Input: Chat.proto

#pragma warning disable 1591, 0612, 3021
namespace Assets.Scripts.Proto
{

    [global::ProtoBuf.ProtoContract()]
    public partial class ChatMo : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public ChatMo()
        {
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"id")]
        public long Id
        {
            get { return __pbn__Id.GetValueOrDefault(); }
            set { __pbn__Id = value; }
        }
        public bool ShouldSerializeId()
        {
            return __pbn__Id != null;
        }
        public void ResetId()
        {
            __pbn__Id = null;
        }
        private long? __pbn__Id;

        [global::ProtoBuf.ProtoMember(2, Name = @"name")]
        [global::System.ComponentModel.DefaultValue("")]
        public string Name
        {
            get { return __pbn__Name ?? ""; }
            set { __pbn__Name = value; }
        }
        public bool ShouldSerializeName()
        {
            return __pbn__Name != null;
        }
        public void ResetName()
        {
            __pbn__Name = null;
        }
        private string __pbn__Name;

        [global::ProtoBuf.ProtoMember(3, Name = @"sex")]
        public int Sex
        {
            get { return __pbn__Sex.GetValueOrDefault(); }
            set { __pbn__Sex = value; }
        }
        public bool ShouldSerializeSex()
        {
            return __pbn__Sex != null;
        }
        public void ResetSex()
        {
            __pbn__Sex = null;
        }
        private int? __pbn__Sex;

        [global::ProtoBuf.ProtoMember(4, Name = @"title")]
        public int Title
        {
            get { return __pbn__Title.GetValueOrDefault(); }
            set { __pbn__Title = value; }
        }
        public bool ShouldSerializeTitle()
        {
            return __pbn__Title != null;
        }
        public void ResetTitle()
        {
            __pbn__Title = null;
        }
        private int? __pbn__Title;

        [global::ProtoBuf.ProtoMember(5, Name = @"content")]
        [global::System.ComponentModel.DefaultValue("")]
        public string Content
        {
            get { return __pbn__Content ?? ""; }
            set { __pbn__Content = value; }
        }
        public bool ShouldSerializeContent()
        {
            return __pbn__Content != null;
        }
        public void ResetContent()
        {
            __pbn__Content = null;
        }
        private string __pbn__Content;

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class GetChat : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public GetChat()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class GetChatTo : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public GetChatTo()
        {
            Chats = new global::System.Collections.Generic.List<ChatMo>();
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"chat")]
        public global::System.Collections.Generic.List<ChatMo> Chats { get; private set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class SendChat : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public SendChat()
        {
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"content")]
        [global::System.ComponentModel.DefaultValue("")]
        public string Content
        {
            get { return __pbn__Content ?? ""; }
            set { __pbn__Content = value; }
        }
        public bool ShouldSerializeContent()
        {
            return __pbn__Content != null;
        }
        public void ResetContent()
        {
            __pbn__Content = null;
        }
        private string __pbn__Content;

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class SendChatTo : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public SendChatTo()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class ChatNo : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public ChatNo()
        {
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"chat")]
        public ChatMo Chat { get; set; }

    }

}

#pragma warning restore 1591, 0612, 3021
