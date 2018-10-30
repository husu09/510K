// This file was generated by a tool; you should avoid making direct changes.
// Consider using 'partial classes' to extend these types
// Input: RankingMsg.proto

#pragma warning disable 1591, 0612, 3021
namespace Assets.Scripts.Proto
{

    [global::ProtoBuf.ProtoContract()]
    public partial class RankingMo : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public RankingMo()
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

        [global::ProtoBuf.ProtoMember(5, Name = @"score")]
        public int Score
        {
            get { return __pbn__Score.GetValueOrDefault(); }
            set { __pbn__Score = value; }
        }
        public bool ShouldSerializeScore()
        {
            return __pbn__Score != null;
        }
        public void ResetScore()
        {
            __pbn__Score = null;
        }
        private int? __pbn__Score;

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class GetRanking : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public GetRanking()
        {
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"type")]
        public int Type
        {
            get { return __pbn__Type.GetValueOrDefault(); }
            set { __pbn__Type = value; }
        }
        public bool ShouldSerializeType()
        {
            return __pbn__Type != null;
        }
        public void ResetType()
        {
            __pbn__Type = null;
        }
        private int? __pbn__Type;

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class GetRankingTo : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public GetRankingTo()
        {
            Rankings = new global::System.Collections.Generic.List<RankingMo>();
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"ranking")]
        public global::System.Collections.Generic.List<RankingMo> Rankings { get; private set; }

        [global::ProtoBuf.ProtoMember(2)]
        public int myRank
        {
            get { return __pbn__myRank.GetValueOrDefault(); }
            set { __pbn__myRank = value; }
        }
        public bool ShouldSerializemyRank()
        {
            return __pbn__myRank != null;
        }
        public void ResetmyRank()
        {
            __pbn__myRank = null;
        }
        private int? __pbn__myRank;

    }

}

#pragma warning restore 1591, 0612, 3021