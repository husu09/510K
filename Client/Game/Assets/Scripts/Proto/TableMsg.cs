// This file was generated by a tool; you should avoid making direct changes.
// Consider using 'partial classes' to extend these types
// Input: TableMsg.proto

#pragma warning disable 1591, 0612, 3021
namespace Assets.Scripts.Proto
{

    [global::ProtoBuf.ProtoContract()]
    public partial class MCard : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public MCard()
        {
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"value")]
        public int Value
        {
            get { return __pbn__Value.GetValueOrDefault(); }
            set { __pbn__Value = value; }
        }
        public bool ShouldSerializeValue()
        {
            return __pbn__Value != null;
        }
        public void ResetValue()
        {
            __pbn__Value = null;
        }
        private int? __pbn__Value;

        [global::ProtoBuf.ProtoMember(2, Name = @"suit")]
        public int Suit
        {
            get { return __pbn__Suit.GetValueOrDefault(); }
            set { __pbn__Suit = value; }
        }
        public bool ShouldSerializeSuit()
        {
            return __pbn__Suit != null;
        }
        public void ResetSuit()
        {
            __pbn__Suit = null;
        }
        private int? __pbn__Suit;

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class MGamePlayer : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public MGamePlayer()
        {
            handCards = new global::System.Collections.Generic.List<MCard>();
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"id")]
        [global::System.ComponentModel.DefaultValue(-1)]
        public long Id
        {
            get { return __pbn__Id ?? -1; }
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

        [global::ProtoBuf.ProtoMember(2, Name = @"handCard")]
        public global::System.Collections.Generic.List<MCard> handCards { get; private set; }

        [global::ProtoBuf.ProtoMember(3)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int cardNum
        {
            get { return __pbn__cardNum ?? -1; }
            set { __pbn__cardNum = value; }
        }
        public bool ShouldSerializecardNum()
        {
            return __pbn__cardNum != null;
        }
        public void ResetcardNum()
        {
            __pbn__cardNum = null;
        }
        private int? __pbn__cardNum;

        [global::ProtoBuf.ProtoMember(4, Name = @"team")]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int Team
        {
            get { return __pbn__Team ?? -1; }
            set { __pbn__Team = value; }
        }
        public bool ShouldSerializeTeam()
        {
            return __pbn__Team != null;
        }
        public void ResetTeam()
        {
            __pbn__Team = null;
        }
        private int? __pbn__Team;

        [global::ProtoBuf.ProtoMember(5, Name = @"multiple")]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int Multiple
        {
            get { return __pbn__Multiple ?? -1; }
            set { __pbn__Multiple = value; }
        }
        public bool ShouldSerializeMultiple()
        {
            return __pbn__Multiple != null;
        }
        public void ResetMultiple()
        {
            __pbn__Multiple = null;
        }
        private int? __pbn__Multiple;

        [global::ProtoBuf.ProtoMember(6, Name = @"score")]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int Score
        {
            get { return __pbn__Score ?? -1; }
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

        [global::ProtoBuf.ProtoMember(7)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int isAuto
        {
            get { return __pbn__isAuto ?? -1; }
            set { __pbn__isAuto = value; }
        }
        public bool ShouldSerializeisAuto()
        {
            return __pbn__isAuto != null;
        }
        public void ResetisAuto()
        {
            __pbn__isAuto = null;
        }
        private int? __pbn__isAuto;

        [global::ProtoBuf.ProtoMember(8, Name = @"state")]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int State
        {
            get { return __pbn__State ?? -1; }
            set { __pbn__State = value; }
        }
        public bool ShouldSerializeState()
        {
            return __pbn__State != null;
        }
        public void ResetState()
        {
            __pbn__State = null;
        }
        private int? __pbn__State;

        [global::ProtoBuf.ProtoMember(9)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public long opTime
        {
            get { return __pbn__opTime ?? -1; }
            set { __pbn__opTime = value; }
        }
        public bool ShouldSerializeopTime()
        {
            return __pbn__opTime != null;
        }
        public void ResetopTime()
        {
            __pbn__opTime = null;
        }
        private long? __pbn__opTime;

        [global::ProtoBuf.ProtoMember(10)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int contestScore
        {
            get { return __pbn__contestScore ?? -1; }
            set { __pbn__contestScore = value; }
        }
        public bool ShouldSerializecontestScore()
        {
            return __pbn__contestScore != null;
        }
        public void ResetcontestScore()
        {
            __pbn__contestScore = null;
        }
        private int? __pbn__contestScore;

        [global::ProtoBuf.ProtoMember(11)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int isQuit
        {
            get { return __pbn__isQuit ?? -1; }
            set { __pbn__isQuit = value; }
        }
        public bool ShouldSerializeisQuit()
        {
            return __pbn__isQuit != null;
        }
        public void ResetisQuit()
        {
            __pbn__isQuit = null;
        }
        private int? __pbn__isQuit;

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class MTable : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public MTable()
        {
            Players = new global::System.Collections.Generic.List<MGamePlayer>();
            lastCards = new global::System.Collections.Generic.List<MCard>();
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"player")]
        public global::System.Collections.Generic.List<MGamePlayer> Players { get; private set; }

        [global::ProtoBuf.ProtoMember(2, Name = @"multiple")]
        public int[] Multiples { get; set; }

        [global::ProtoBuf.ProtoMember(3, Name = @"state")]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int State
        {
            get { return __pbn__State ?? -1; }
            set { __pbn__State = value; }
        }
        public bool ShouldSerializeState()
        {
            return __pbn__State != null;
        }
        public void ResetState()
        {
            __pbn__State = null;
        }
        private int? __pbn__State;

        [global::ProtoBuf.ProtoMember(4, Name = @"lastCard")]
        public global::System.Collections.Generic.List<MCard> lastCards { get; private set; }

        [global::ProtoBuf.ProtoMember(5)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int lastCardType
        {
            get { return __pbn__lastCardType ?? -1; }
            set { __pbn__lastCardType = value; }
        }
        public bool ShouldSerializelastCardType()
        {
            return __pbn__lastCardType != null;
        }
        public void ResetlastCardType()
        {
            __pbn__lastCardType = null;
        }
        private int? __pbn__lastCardType;

        [global::ProtoBuf.ProtoMember(6)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int lastOp
        {
            get { return __pbn__lastOp ?? -1; }
            set { __pbn__lastOp = value; }
        }
        public bool ShouldSerializelastOp()
        {
            return __pbn__lastOp != null;
        }
        public void ResetlastOp()
        {
            __pbn__lastOp = null;
        }
        private int? __pbn__lastOp;

        [global::ProtoBuf.ProtoMember(7)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int roundScore
        {
            get { return __pbn__roundScore ?? -1; }
            set { __pbn__roundScore = value; }
        }
        public bool ShouldSerializeroundScore()
        {
            return __pbn__roundScore != null;
        }
        public void ResetroundScore()
        {
            __pbn__roundScore = null;
        }
        private int? __pbn__roundScore;

        [global::ProtoBuf.ProtoMember(8)]
        public MCard callCard { get; set; }

        [global::ProtoBuf.ProtoMember(9)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int callType
        {
            get { return __pbn__callType ?? -1; }
            set { __pbn__callType = value; }
        }
        public bool ShouldSerializecallType()
        {
            return __pbn__callType != null;
        }
        public void ResetcallType()
        {
            __pbn__callType = null;
        }
        private int? __pbn__callType;

        [global::ProtoBuf.ProtoMember(10)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int callOp
        {
            get { return __pbn__callOp ?? -1; }
            set { __pbn__callOp = value; }
        }
        public bool ShouldSerializecallOp()
        {
            return __pbn__callOp != null;
        }
        public void ResetcallOp()
        {
            __pbn__callOp = null;
        }
        private int? __pbn__callOp;

        [global::ProtoBuf.ProtoMember(11, Name = @"dealer")]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int Dealer
        {
            get { return __pbn__Dealer ?? -1; }
            set { __pbn__Dealer = value; }
        }
        public bool ShouldSerializeDealer()
        {
            return __pbn__Dealer != null;
        }
        public void ResetDealer()
        {
            __pbn__Dealer = null;
        }
        private int? __pbn__Dealer;

        [global::ProtoBuf.ProtoMember(12)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public long waitTime
        {
            get { return __pbn__waitTime ?? -1; }
            set { __pbn__waitTime = value; }
        }
        public bool ShouldSerializewaitTime()
        {
            return __pbn__waitTime != null;
        }
        public void ResetwaitTime()
        {
            __pbn__waitTime = null;
        }
        private long? __pbn__waitTime;

        [global::ProtoBuf.ProtoMember(13, Name = @"type")]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int Type
        {
            get { return __pbn__Type ?? -1; }
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
    public partial class Call : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public Call()
        {
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1)]
        public int callType
        {
            get { return __pbn__callType.GetValueOrDefault(); }
            set { __pbn__callType = value; }
        }
        public bool ShouldSerializecallType()
        {
            return __pbn__callType != null;
        }
        public void ResetcallType()
        {
            __pbn__callType = null;
        }
        private int? __pbn__callType;

        [global::ProtoBuf.ProtoMember(2)]
        public int cardIndex
        {
            get { return __pbn__cardIndex.GetValueOrDefault(); }
            set { __pbn__cardIndex = value; }
        }
        public bool ShouldSerializecardIndex()
        {
            return __pbn__cardIndex != null;
        }
        public void ResetcardIndex()
        {
            __pbn__cardIndex = null;
        }
        private int? __pbn__cardIndex;

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class TCall : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public TCall()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class Draw : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public Draw()
        {
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1)]
        public int cardType
        {
            get { return __pbn__cardType.GetValueOrDefault(); }
            set { __pbn__cardType = value; }
        }
        public bool ShouldSerializecardType()
        {
            return __pbn__cardType != null;
        }
        public void ResetcardType()
        {
            __pbn__cardType = null;
        }
        private int? __pbn__cardType;

        [global::ProtoBuf.ProtoMember(2)]
        public int[] cardIndexs { get; set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class TDraw : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public TDraw()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class Check : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public Check()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class TCheck : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public TCheck()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class Ready : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public Ready()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class TReady : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public TReady()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class Quit : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public Quit()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class TQuit : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public TQuit()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class Double : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public Double()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class TDouble : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public TDouble()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class Auto : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public Auto()
        {
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1)]
        public int isAuto
        {
            get { return __pbn__isAuto.GetValueOrDefault(); }
            set { __pbn__isAuto = value; }
        }
        public bool ShouldSerializeisAuto()
        {
            return __pbn__isAuto != null;
        }
        public void ResetisAuto()
        {
            __pbn__isAuto = null;
        }
        private int? __pbn__isAuto;

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class TAuto : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public TAuto()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class Reconn : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public Reconn()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class TReconn : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public TReconn()
        {
            OnConstructor();
        }

        partial void OnConstructor();

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class NUpdateGamePlayer : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public NUpdateGamePlayer()
        {
            gamePlayers = new global::System.Collections.Generic.List<MGamePlayer>();
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"gamePlayer")]
        public global::System.Collections.Generic.List<MGamePlayer> gamePlayers { get; private set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class NUpdateTable : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public NUpdateTable()
        {
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"table")]
        public MTable Table { get; set; }

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class MGamePlayerResult : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public MGamePlayerResult()
        {
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1, Name = @"multiple")]
        public int Multiple
        {
            get { return __pbn__Multiple.GetValueOrDefault(); }
            set { __pbn__Multiple = value; }
        }
        public bool ShouldSerializeMultiple()
        {
            return __pbn__Multiple != null;
        }
        public void ResetMultiple()
        {
            __pbn__Multiple = null;
        }
        private int? __pbn__Multiple;

        [global::ProtoBuf.ProtoMember(2, Name = @"peanut")]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int Peanut
        {
            get { return __pbn__Peanut ?? -1; }
            set { __pbn__Peanut = value; }
        }
        public bool ShouldSerializePeanut()
        {
            return __pbn__Peanut != null;
        }
        public void ResetPeanut()
        {
            __pbn__Peanut = null;
        }
        private int? __pbn__Peanut;

        [global::ProtoBuf.ProtoMember(3)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int rankingScore
        {
            get { return __pbn__rankingScore ?? -1; }
            set { __pbn__rankingScore = value; }
        }
        public bool ShouldSerializerankingScore()
        {
            return __pbn__rankingScore != null;
        }
        public void ResetrankingScore()
        {
            __pbn__rankingScore = null;
        }
        private int? __pbn__rankingScore;

        [global::ProtoBuf.ProtoMember(4)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public int contestScore
        {
            get { return __pbn__contestScore ?? -1; }
            set { __pbn__contestScore = value; }
        }
        public bool ShouldSerializecontestScore()
        {
            return __pbn__contestScore != null;
        }
        public void ResetcontestScore()
        {
            __pbn__contestScore = null;
        }
        private int? __pbn__contestScore;

        [global::ProtoBuf.ProtoMember(5)]
        [global::System.ComponentModel.DefaultValue(-1)]
        public long playerId
        {
            get { return __pbn__playerId ?? -1; }
            set { __pbn__playerId = value; }
        }
        public bool ShouldSerializeplayerId()
        {
            return __pbn__playerId != null;
        }
        public void ResetplayerId()
        {
            __pbn__playerId = null;
        }
        private long? __pbn__playerId;

    }

    [global::ProtoBuf.ProtoContract()]
    public partial class NTableResult : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
        {
            return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
        }
        public NTableResult()
        {
            playerResults = new global::System.Collections.Generic.List<MGamePlayerResult>();
            OnConstructor();
        }

        partial void OnConstructor();

        [global::ProtoBuf.ProtoMember(1)]
        public int baseScore
        {
            get { return __pbn__baseScore.GetValueOrDefault(); }
            set { __pbn__baseScore = value; }
        }
        public bool ShouldSerializebaseScore()
        {
            return __pbn__baseScore != null;
        }
        public void ResetbaseScore()
        {
            __pbn__baseScore = null;
        }
        private int? __pbn__baseScore;

        [global::ProtoBuf.ProtoMember(2)]
        public int winTeam
        {
            get { return __pbn__winTeam.GetValueOrDefault(); }
            set { __pbn__winTeam = value; }
        }
        public bool ShouldSerializewinTeam()
        {
            return __pbn__winTeam != null;
        }
        public void ResetwinTeam()
        {
            __pbn__winTeam = null;
        }
        private int? __pbn__winTeam;

        [global::ProtoBuf.ProtoMember(3, Name = @"playerResult")]
        public global::System.Collections.Generic.List<MGamePlayerResult> playerResults { get; private set; }

    }

}

#pragma warning restore 1591, 0612, 3021
