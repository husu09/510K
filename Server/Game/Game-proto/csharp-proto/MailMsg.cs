// This file was generated by a tool; you should avoid making direct changes.
// Consider using 'partial classes' to extend these types
// Input: MailMsg.proto

#pragma warning disable 1591, 0612, 3021
namespace Assets.Scripts.Proto
{

    [global::ProtoBuf.ProtoContract()]
    public partial class MailMo : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public MailMo()
        {
            Rewards = new global::System.Collections.Generic.List<ItemMo>();
            Params = new global::System.Collections.Generic.List<string>();
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

        [global::ProtoBuf.ProtoMember(2)]
        public int mailId
        {
            get { return __pbn__mailId.GetValueOrDefault(); }
            set { __pbn__mailId = value; }
        }
        public bool ShouldSerializemailId()
        {
            return __pbn__mailId != null;
        }
        public void ResetmailId()
        {
            __pbn__mailId = null;
        }
        private int? __pbn__mailId;

        [global::ProtoBuf.ProtoMember(3)]
        [global::System.ComponentModel.DefaultValue("")]
        public string sendName
        {
            get { return __pbn__sendName ?? ""; }
            set { __pbn__sendName = value; }
        }
        public bool ShouldSerializesendName()
        {
            return __pbn__sendName != null;
        }
        public void ResetsendName()
        {
            __pbn__sendName = null;
        }
        private string __pbn__sendName;

        [global::ProtoBuf.ProtoMember(4)]
        public long sendTime
        {
            get { return __pbn__sendTime.GetValueOrDefault(); }
            set { __pbn__sendTime = value; }
        }
        public bool ShouldSerializesendTime()
        {
            return __pbn__sendTime != null;
        }
        public void ResetsendTime()
        {
            __pbn__sendTime = null;
        }
        private long? __pbn__sendTime;

        [global::ProtoBuf.ProtoMember(5, Name = @"reward")]
        public global::System.Collections.Generic.List<ItemMo> Rewards { get; private set; }

        [global::ProtoBuf.ProtoMember(6)]
        public int isReceive
        {
            get { return __pbn__isReceive.GetValueOrDefault(); }
            set { __pbn__isReceive = value; }
        }
        public bool ShouldSerializeisReceive()
        {
            return __pbn__isReceive != null;
        }
        public void ResetisReceive()
        {
            __pbn__isReceive = null;
        }
        private int? __pbn__isReceive;

        [global::ProtoBuf.ProtoMember(7, Name = @"params")]
        public global::System.Collections.Generic.List<string> Params { get; private set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class GetMail : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public GetMail()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class GetMailTo : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public GetMailTo()
        {
            Mails = new global::System.Collections.Generic.List<MailMo>();
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"mail")]
        public global::System.Collections.Generic.List<MailMo> Mails { get; private set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class DelMail : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public DelMail()
        {
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"id")]
        public long[] Ids { get; set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class DelMailTo : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public DelMailTo()
        {
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"id")]
        public long[] Ids { get; set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class GetMailReward : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public GetMailReward()
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

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class GetMailRewardTo : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public GetMailRewardTo()
        {
            Rewards = new global::System.Collections.Generic.List<ItemMo>();
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"reward")]
        public global::System.Collections.Generic.List<ItemMo> Rewards { get; private set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class MailNo : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public MailNo()
        {
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"mail")]
        public MailMo Mail { get; set; }

    }

}

#pragma warning restore 1591, 0612, 3021
