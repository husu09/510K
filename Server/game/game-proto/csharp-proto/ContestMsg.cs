// This file was generated by a tool; you should avoid making direct changes.
// Consider using 'partial classes' to extend these types
// Input: ContestMsg.proto

#pragma warning disable 1591, 0612, 3021
[global::ProtoBuf.ProtoContract()]
public partial class MContestRank : global::ProtoBuf.IExtensible
{
    private global::ProtoBuf.IExtension __pbn__extensionData;
    global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
    {
        return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
    }
    public MContestRank()
    {
        OnConstructor();
    }

    partial void OnConstructor();

    [global::ProtoBuf.ProtoMember(1)]
    public int playerId
    {
        get { return __pbn__playerId.GetValueOrDefault(); }
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
    private int? __pbn__playerId;

    [global::ProtoBuf.ProtoMember(2)]
    [global::System.ComponentModel.DefaultValue("")]
    public string playerName
    {
        get { return __pbn__playerName ?? ""; }
        set { __pbn__playerName = value; }
    }
    public bool ShouldSerializeplayerName()
    {
        return __pbn__playerName != null;
    }
    public void ResetplayerName()
    {
        __pbn__playerName = null;
    }
    private string __pbn__playerName;

    [global::ProtoBuf.ProtoMember(3)]
    public int contestScore
    {
        get { return __pbn__contestScore.GetValueOrDefault(); }
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

    [global::ProtoBuf.ProtoMember(4, Name = @"state")]
    public int State
    {
        get { return __pbn__State.GetValueOrDefault(); }
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

}

[global::ProtoBuf.ProtoContract()]
public partial class EnterContestSite : global::ProtoBuf.IExtensible
{
    private global::ProtoBuf.IExtension __pbn__extensionData;
    global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
    {
        return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
    }
    public EnterContestSite()
    {
        OnConstructor();
    }

    partial void OnConstructor();

    [global::ProtoBuf.ProtoMember(1)]
    public int siteId
    {
        get { return __pbn__siteId.GetValueOrDefault(); }
        set { __pbn__siteId = value; }
    }
    public bool ShouldSerializesiteId()
    {
        return __pbn__siteId != null;
    }
    public void ResetsiteId()
    {
        __pbn__siteId = null;
    }
    private int? __pbn__siteId;

}

[global::ProtoBuf.ProtoContract()]
public partial class TEnterContestSite : global::ProtoBuf.IExtensible
{
    private global::ProtoBuf.IExtension __pbn__extensionData;
    global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
    {
        return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
    }
    public TEnterContestSite()
    {
        OnConstructor();
    }

    partial void OnConstructor();

    [global::ProtoBuf.ProtoMember(1)]
    public int siteId
    {
        get { return __pbn__siteId.GetValueOrDefault(); }
        set { __pbn__siteId = value; }
    }
    public bool ShouldSerializesiteId()
    {
        return __pbn__siteId != null;
    }
    public void ResetsiteId()
    {
        __pbn__siteId = null;
    }
    private int? __pbn__siteId;

}

[global::ProtoBuf.ProtoContract()]
public partial class ExitContestSite : global::ProtoBuf.IExtensible
{
    private global::ProtoBuf.IExtension __pbn__extensionData;
    global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
    {
        return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
    }
    public ExitContestSite()
    {
        OnConstructor();
    }

    partial void OnConstructor();

}

[global::ProtoBuf.ProtoContract()]
public partial class TExitContestSite : global::ProtoBuf.IExtensible
{
    private global::ProtoBuf.IExtension __pbn__extensionData;
    global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
    {
        return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
    }
    public TExitContestSite()
    {
        OnConstructor();
    }

    partial void OnConstructor();

}

[global::ProtoBuf.ProtoContract()]
public partial class Apply : global::ProtoBuf.IExtensible
{
    private global::ProtoBuf.IExtension __pbn__extensionData;
    global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
    {
        return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
    }
    public Apply()
    {
        OnConstructor();
    }

    partial void OnConstructor();

    [global::ProtoBuf.ProtoMember(1)]
    public int siteId
    {
        get { return __pbn__siteId.GetValueOrDefault(); }
        set { __pbn__siteId = value; }
    }
    public bool ShouldSerializesiteId()
    {
        return __pbn__siteId != null;
    }
    public void ResetsiteId()
    {
        __pbn__siteId = null;
    }
    private int? __pbn__siteId;

}

[global::ProtoBuf.ProtoContract()]
public partial class TApply : global::ProtoBuf.IExtensible
{
    private global::ProtoBuf.IExtension __pbn__extensionData;
    global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
    {
        return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
    }
    public TApply()
    {
        OnConstructor();
    }

    partial void OnConstructor();

    [global::ProtoBuf.ProtoMember(1)]
    public int siteId
    {
        get { return __pbn__siteId.GetValueOrDefault(); }
        set { __pbn__siteId = value; }
    }
    public bool ShouldSerializesiteId()
    {
        return __pbn__siteId != null;
    }
    public void ResetsiteId()
    {
        __pbn__siteId = null;
    }
    private int? __pbn__siteId;

}

[global::ProtoBuf.ProtoContract()]
public partial class CancelApply : global::ProtoBuf.IExtensible
{
    private global::ProtoBuf.IExtension __pbn__extensionData;
    global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
    {
        return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
    }
    public CancelApply()
    {
        OnConstructor();
    }

    partial void OnConstructor();

}

[global::ProtoBuf.ProtoContract()]
public partial class TCancelApply : global::ProtoBuf.IExtensible
{
    private global::ProtoBuf.IExtension __pbn__extensionData;
    global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
    {
        return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
    }
    public TCancelApply()
    {
        OnConstructor();
    }

    partial void OnConstructor();

}

[global::ProtoBuf.ProtoContract()]
public partial class NContestSite : global::ProtoBuf.IExtensible
{
    private global::ProtoBuf.IExtension __pbn__extensionData;
    global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
    {
        return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
    }
    public NContestSite()
    {
        OnConstructor();
    }

    partial void OnConstructor();

    [global::ProtoBuf.ProtoMember(1)]
    public int siteId
    {
        get { return __pbn__siteId.GetValueOrDefault(); }
        set { __pbn__siteId = value; }
    }
    public bool ShouldSerializesiteId()
    {
        return __pbn__siteId != null;
    }
    public void ResetsiteId()
    {
        __pbn__siteId = null;
    }
    private int? __pbn__siteId;

    [global::ProtoBuf.ProtoMember(2)]
    public int playerNum
    {
        get { return __pbn__playerNum.GetValueOrDefault(); }
        set { __pbn__playerNum = value; }
    }
    public bool ShouldSerializeplayerNum()
    {
        return __pbn__playerNum != null;
    }
    public void ResetplayerNum()
    {
        __pbn__playerNum = null;
    }
    private int? __pbn__playerNum;

}

[global::ProtoBuf.ProtoContract()]
public partial class NContest : global::ProtoBuf.IExtensible
{
    private global::ProtoBuf.IExtension __pbn__extensionData;
    global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
    {
        return global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);
    }
    public NContest()
    {
        contestRanks = new global::System.Collections.Generic.List<MContestRank>();
        OnConstructor();
    }

    partial void OnConstructor();

    [global::ProtoBuf.ProtoMember(1)]
    public int contestId
    {
        get { return __pbn__contestId.GetValueOrDefault(); }
        set { __pbn__contestId = value; }
    }
    public bool ShouldSerializecontestId()
    {
        return __pbn__contestId != null;
    }
    public void ResetcontestId()
    {
        __pbn__contestId = null;
    }
    private int? __pbn__contestId;

    [global::ProtoBuf.ProtoMember(2)]
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

    [global::ProtoBuf.ProtoMember(3, Name = @"contestRank")]
    public global::System.Collections.Generic.List<MContestRank> contestRanks { get; private set; }

}

#pragma warning restore 1591, 0612, 3021
