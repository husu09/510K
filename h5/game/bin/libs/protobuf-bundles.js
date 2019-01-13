var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Msg = (function() {

    /**
     * Namespace Msg.
     * @exports Msg
     * @namespace
     */
    var Msg = {};

    Msg.AucItemMo = (function() {

        /**
         * Properties of an AucItemMo.
         * @memberof Msg
         * @interface IAucItemMo
         * @property {number|Long|null} [id] AucItemMo id
         * @property {Msg.IItemMo|null} [item] AucItemMo item
         * @property {number|Long|null} [endTime] AucItemMo endTime
         * @property {string|null} [playerName] AucItemMo playerName
         * @property {number|null} [monType] AucItemMo monType
         * @property {number|null} [price] AucItemMo price
         */

        /**
         * Constructs a new AucItemMo.
         * @memberof Msg
         * @classdesc Represents an AucItemMo.
         * @implements IAucItemMo
         * @constructor
         * @param {Msg.IAucItemMo=} [properties] Properties to set
         */
        function AucItemMo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AucItemMo id.
         * @member {number|Long} id
         * @memberof Msg.AucItemMo
         * @instance
         */
        AucItemMo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AucItemMo item.
         * @member {Msg.IItemMo|null|undefined} item
         * @memberof Msg.AucItemMo
         * @instance
         */
        AucItemMo.prototype.item = null;

        /**
         * AucItemMo endTime.
         * @member {number|Long} endTime
         * @memberof Msg.AucItemMo
         * @instance
         */
        AucItemMo.prototype.endTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AucItemMo playerName.
         * @member {string} playerName
         * @memberof Msg.AucItemMo
         * @instance
         */
        AucItemMo.prototype.playerName = "";

        /**
         * AucItemMo monType.
         * @member {number} monType
         * @memberof Msg.AucItemMo
         * @instance
         */
        AucItemMo.prototype.monType = 0;

        /**
         * AucItemMo price.
         * @member {number} price
         * @memberof Msg.AucItemMo
         * @instance
         */
        AucItemMo.prototype.price = 0;

        /**
         * Creates a new AucItemMo instance using the specified properties.
         * @function create
         * @memberof Msg.AucItemMo
         * @static
         * @param {Msg.IAucItemMo=} [properties] Properties to set
         * @returns {Msg.AucItemMo} AucItemMo instance
         */
        AucItemMo.create = function create(properties) {
            return new AucItemMo(properties);
        };

        /**
         * Encodes the specified AucItemMo message. Does not implicitly {@link Msg.AucItemMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.AucItemMo
         * @static
         * @param {Msg.IAucItemMo} message AucItemMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AucItemMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.item != null && message.hasOwnProperty("item"))
                $root.Msg.ItemMo.encode(message.item, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.endTime);
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.playerName);
            if (message.monType != null && message.hasOwnProperty("monType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.monType);
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.price);
            return writer;
        };

        /**
         * Encodes the specified AucItemMo message, length delimited. Does not implicitly {@link Msg.AucItemMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.AucItemMo
         * @static
         * @param {Msg.IAucItemMo} message AucItemMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AucItemMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AucItemMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.AucItemMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.AucItemMo} AucItemMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AucItemMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.AucItemMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.item = $root.Msg.ItemMo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.endTime = reader.int64();
                    break;
                case 4:
                    message.playerName = reader.string();
                    break;
                case 5:
                    message.monType = reader.int32();
                    break;
                case 6:
                    message.price = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AucItemMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.AucItemMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.AucItemMo} AucItemMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AucItemMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AucItemMo message.
         * @function verify
         * @memberof Msg.AucItemMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AucItemMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.item != null && message.hasOwnProperty("item")) {
                var error = $root.Msg.ItemMo.verify(message.item);
                if (error)
                    return "item." + error;
            }
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isInteger(message.endTime) && !(message.endTime && $util.isInteger(message.endTime.low) && $util.isInteger(message.endTime.high)))
                    return "endTime: integer|Long expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.monType != null && message.hasOwnProperty("monType"))
                if (!$util.isInteger(message.monType))
                    return "monType: integer expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price))
                    return "price: integer expected";
            return null;
        };

        return AucItemMo;
    })();

    Msg.GetAucItem = (function() {

        /**
         * Properties of a GetAucItem.
         * @memberof Msg
         * @interface IGetAucItem
         * @property {number|null} [type] GetAucItem type
         * @property {number|null} [monType] GetAucItem monType
         * @property {number|null} [page] GetAucItem page
         * @property {number|null} [priceSort] GetAucItem priceSort
         */

        /**
         * Constructs a new GetAucItem.
         * @memberof Msg
         * @classdesc Represents a GetAucItem.
         * @implements IGetAucItem
         * @constructor
         * @param {Msg.IGetAucItem=} [properties] Properties to set
         */
        function GetAucItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAucItem type.
         * @member {number} type
         * @memberof Msg.GetAucItem
         * @instance
         */
        GetAucItem.prototype.type = 0;

        /**
         * GetAucItem monType.
         * @member {number} monType
         * @memberof Msg.GetAucItem
         * @instance
         */
        GetAucItem.prototype.monType = 0;

        /**
         * GetAucItem page.
         * @member {number} page
         * @memberof Msg.GetAucItem
         * @instance
         */
        GetAucItem.prototype.page = 0;

        /**
         * GetAucItem priceSort.
         * @member {number} priceSort
         * @memberof Msg.GetAucItem
         * @instance
         */
        GetAucItem.prototype.priceSort = 0;

        /**
         * Creates a new GetAucItem instance using the specified properties.
         * @function create
         * @memberof Msg.GetAucItem
         * @static
         * @param {Msg.IGetAucItem=} [properties] Properties to set
         * @returns {Msg.GetAucItem} GetAucItem instance
         */
        GetAucItem.create = function create(properties) {
            return new GetAucItem(properties);
        };

        /**
         * Encodes the specified GetAucItem message. Does not implicitly {@link Msg.GetAucItem.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetAucItem
         * @static
         * @param {Msg.IGetAucItem} message GetAucItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAucItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.monType != null && message.hasOwnProperty("monType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.monType);
            if (message.page != null && message.hasOwnProperty("page"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.page);
            if (message.priceSort != null && message.hasOwnProperty("priceSort"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.priceSort);
            return writer;
        };

        /**
         * Encodes the specified GetAucItem message, length delimited. Does not implicitly {@link Msg.GetAucItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetAucItem
         * @static
         * @param {Msg.IGetAucItem} message GetAucItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAucItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAucItem message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetAucItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetAucItem} GetAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAucItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetAucItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.monType = reader.int32();
                    break;
                case 3:
                    message.page = reader.int32();
                    break;
                case 4:
                    message.priceSort = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAucItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetAucItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetAucItem} GetAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAucItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAucItem message.
         * @function verify
         * @memberof Msg.GetAucItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAucItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.monType != null && message.hasOwnProperty("monType"))
                if (!$util.isInteger(message.monType))
                    return "monType: integer expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.priceSort != null && message.hasOwnProperty("priceSort"))
                if (!$util.isInteger(message.priceSort))
                    return "priceSort: integer expected";
            return null;
        };

        return GetAucItem;
    })();

    Msg.GetAucItemTo = (function() {

        /**
         * Properties of a GetAucItemTo.
         * @memberof Msg
         * @interface IGetAucItemTo
         * @property {number|null} [totalPag] GetAucItemTo totalPag
         * @property {Array.<Msg.IAucItemMo>|null} [aucItem] GetAucItemTo aucItem
         */

        /**
         * Constructs a new GetAucItemTo.
         * @memberof Msg
         * @classdesc Represents a GetAucItemTo.
         * @implements IGetAucItemTo
         * @constructor
         * @param {Msg.IGetAucItemTo=} [properties] Properties to set
         */
        function GetAucItemTo(properties) {
            this.aucItem = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAucItemTo totalPag.
         * @member {number} totalPag
         * @memberof Msg.GetAucItemTo
         * @instance
         */
        GetAucItemTo.prototype.totalPag = 0;

        /**
         * GetAucItemTo aucItem.
         * @member {Array.<Msg.IAucItemMo>} aucItem
         * @memberof Msg.GetAucItemTo
         * @instance
         */
        GetAucItemTo.prototype.aucItem = $util.emptyArray;

        /**
         * Creates a new GetAucItemTo instance using the specified properties.
         * @function create
         * @memberof Msg.GetAucItemTo
         * @static
         * @param {Msg.IGetAucItemTo=} [properties] Properties to set
         * @returns {Msg.GetAucItemTo} GetAucItemTo instance
         */
        GetAucItemTo.create = function create(properties) {
            return new GetAucItemTo(properties);
        };

        /**
         * Encodes the specified GetAucItemTo message. Does not implicitly {@link Msg.GetAucItemTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetAucItemTo
         * @static
         * @param {Msg.IGetAucItemTo} message GetAucItemTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAucItemTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.totalPag != null && message.hasOwnProperty("totalPag"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalPag);
            if (message.aucItem != null && message.aucItem.length)
                for (var i = 0; i < message.aucItem.length; ++i)
                    $root.Msg.AucItemMo.encode(message.aucItem[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetAucItemTo message, length delimited. Does not implicitly {@link Msg.GetAucItemTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetAucItemTo
         * @static
         * @param {Msg.IGetAucItemTo} message GetAucItemTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAucItemTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAucItemTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetAucItemTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetAucItemTo} GetAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAucItemTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetAucItemTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.totalPag = reader.int32();
                    break;
                case 2:
                    if (!(message.aucItem && message.aucItem.length))
                        message.aucItem = [];
                    message.aucItem.push($root.Msg.AucItemMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAucItemTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetAucItemTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetAucItemTo} GetAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAucItemTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAucItemTo message.
         * @function verify
         * @memberof Msg.GetAucItemTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAucItemTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.totalPag != null && message.hasOwnProperty("totalPag"))
                if (!$util.isInteger(message.totalPag))
                    return "totalPag: integer expected";
            if (message.aucItem != null && message.hasOwnProperty("aucItem")) {
                if (!Array.isArray(message.aucItem))
                    return "aucItem: array expected";
                for (var i = 0; i < message.aucItem.length; ++i) {
                    var error = $root.Msg.AucItemMo.verify(message.aucItem[i]);
                    if (error)
                        return "aucItem." + error;
                }
            }
            return null;
        };

        return GetAucItemTo;
    })();

    Msg.GetMyAucItem = (function() {

        /**
         * Properties of a GetMyAucItem.
         * @memberof Msg
         * @interface IGetMyAucItem
         */

        /**
         * Constructs a new GetMyAucItem.
         * @memberof Msg
         * @classdesc Represents a GetMyAucItem.
         * @implements IGetMyAucItem
         * @constructor
         * @param {Msg.IGetMyAucItem=} [properties] Properties to set
         */
        function GetMyAucItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetMyAucItem instance using the specified properties.
         * @function create
         * @memberof Msg.GetMyAucItem
         * @static
         * @param {Msg.IGetMyAucItem=} [properties] Properties to set
         * @returns {Msg.GetMyAucItem} GetMyAucItem instance
         */
        GetMyAucItem.create = function create(properties) {
            return new GetMyAucItem(properties);
        };

        /**
         * Encodes the specified GetMyAucItem message. Does not implicitly {@link Msg.GetMyAucItem.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetMyAucItem
         * @static
         * @param {Msg.IGetMyAucItem} message GetMyAucItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMyAucItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetMyAucItem message, length delimited. Does not implicitly {@link Msg.GetMyAucItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetMyAucItem
         * @static
         * @param {Msg.IGetMyAucItem} message GetMyAucItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMyAucItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetMyAucItem message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetMyAucItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetMyAucItem} GetMyAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMyAucItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetMyAucItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetMyAucItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetMyAucItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetMyAucItem} GetMyAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMyAucItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetMyAucItem message.
         * @function verify
         * @memberof Msg.GetMyAucItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMyAucItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetMyAucItem;
    })();

    Msg.GetMyAucItemTo = (function() {

        /**
         * Properties of a GetMyAucItemTo.
         * @memberof Msg
         * @interface IGetMyAucItemTo
         * @property {Array.<Msg.IAucItemMo>|null} [myItem] GetMyAucItemTo myItem
         */

        /**
         * Constructs a new GetMyAucItemTo.
         * @memberof Msg
         * @classdesc Represents a GetMyAucItemTo.
         * @implements IGetMyAucItemTo
         * @constructor
         * @param {Msg.IGetMyAucItemTo=} [properties] Properties to set
         */
        function GetMyAucItemTo(properties) {
            this.myItem = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetMyAucItemTo myItem.
         * @member {Array.<Msg.IAucItemMo>} myItem
         * @memberof Msg.GetMyAucItemTo
         * @instance
         */
        GetMyAucItemTo.prototype.myItem = $util.emptyArray;

        /**
         * Creates a new GetMyAucItemTo instance using the specified properties.
         * @function create
         * @memberof Msg.GetMyAucItemTo
         * @static
         * @param {Msg.IGetMyAucItemTo=} [properties] Properties to set
         * @returns {Msg.GetMyAucItemTo} GetMyAucItemTo instance
         */
        GetMyAucItemTo.create = function create(properties) {
            return new GetMyAucItemTo(properties);
        };

        /**
         * Encodes the specified GetMyAucItemTo message. Does not implicitly {@link Msg.GetMyAucItemTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetMyAucItemTo
         * @static
         * @param {Msg.IGetMyAucItemTo} message GetMyAucItemTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMyAucItemTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.myItem != null && message.myItem.length)
                for (var i = 0; i < message.myItem.length; ++i)
                    $root.Msg.AucItemMo.encode(message.myItem[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetMyAucItemTo message, length delimited. Does not implicitly {@link Msg.GetMyAucItemTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetMyAucItemTo
         * @static
         * @param {Msg.IGetMyAucItemTo} message GetMyAucItemTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMyAucItemTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetMyAucItemTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetMyAucItemTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetMyAucItemTo} GetMyAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMyAucItemTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetMyAucItemTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.myItem && message.myItem.length))
                        message.myItem = [];
                    message.myItem.push($root.Msg.AucItemMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetMyAucItemTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetMyAucItemTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetMyAucItemTo} GetMyAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMyAucItemTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetMyAucItemTo message.
         * @function verify
         * @memberof Msg.GetMyAucItemTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMyAucItemTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.myItem != null && message.hasOwnProperty("myItem")) {
                if (!Array.isArray(message.myItem))
                    return "myItem: array expected";
                for (var i = 0; i < message.myItem.length; ++i) {
                    var error = $root.Msg.AucItemMo.verify(message.myItem[i]);
                    if (error)
                        return "myItem." + error;
                }
            }
            return null;
        };

        return GetMyAucItemTo;
    })();

    Msg.UpAucItem = (function() {

        /**
         * Properties of an UpAucItem.
         * @memberof Msg
         * @interface IUpAucItem
         * @property {number|null} [index] UpAucItem index
         * @property {number|null} [count] UpAucItem count
         * @property {number|null} [monType] UpAucItem monType
         * @property {number|null} [price] UpAucItem price
         */

        /**
         * Constructs a new UpAucItem.
         * @memberof Msg
         * @classdesc Represents an UpAucItem.
         * @implements IUpAucItem
         * @constructor
         * @param {Msg.IUpAucItem=} [properties] Properties to set
         */
        function UpAucItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpAucItem index.
         * @member {number} index
         * @memberof Msg.UpAucItem
         * @instance
         */
        UpAucItem.prototype.index = 0;

        /**
         * UpAucItem count.
         * @member {number} count
         * @memberof Msg.UpAucItem
         * @instance
         */
        UpAucItem.prototype.count = 0;

        /**
         * UpAucItem monType.
         * @member {number} monType
         * @memberof Msg.UpAucItem
         * @instance
         */
        UpAucItem.prototype.monType = 0;

        /**
         * UpAucItem price.
         * @member {number} price
         * @memberof Msg.UpAucItem
         * @instance
         */
        UpAucItem.prototype.price = 0;

        /**
         * Creates a new UpAucItem instance using the specified properties.
         * @function create
         * @memberof Msg.UpAucItem
         * @static
         * @param {Msg.IUpAucItem=} [properties] Properties to set
         * @returns {Msg.UpAucItem} UpAucItem instance
         */
        UpAucItem.create = function create(properties) {
            return new UpAucItem(properties);
        };

        /**
         * Encodes the specified UpAucItem message. Does not implicitly {@link Msg.UpAucItem.verify|verify} messages.
         * @function encode
         * @memberof Msg.UpAucItem
         * @static
         * @param {Msg.IUpAucItem} message UpAucItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpAucItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            if (message.monType != null && message.hasOwnProperty("monType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.monType);
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.price);
            return writer;
        };

        /**
         * Encodes the specified UpAucItem message, length delimited. Does not implicitly {@link Msg.UpAucItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.UpAucItem
         * @static
         * @param {Msg.IUpAucItem} message UpAucItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpAucItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpAucItem message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.UpAucItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.UpAucItem} UpAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpAucItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.UpAucItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                case 2:
                    message.count = reader.int32();
                    break;
                case 3:
                    message.monType = reader.int32();
                    break;
                case 4:
                    message.price = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpAucItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.UpAucItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.UpAucItem} UpAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpAucItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpAucItem message.
         * @function verify
         * @memberof Msg.UpAucItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpAucItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            if (message.monType != null && message.hasOwnProperty("monType"))
                if (!$util.isInteger(message.monType))
                    return "monType: integer expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price))
                    return "price: integer expected";
            return null;
        };

        return UpAucItem;
    })();

    Msg.UpAucItemTo = (function() {

        /**
         * Properties of an UpAucItemTo.
         * @memberof Msg
         * @interface IUpAucItemTo
         */

        /**
         * Constructs a new UpAucItemTo.
         * @memberof Msg
         * @classdesc Represents an UpAucItemTo.
         * @implements IUpAucItemTo
         * @constructor
         * @param {Msg.IUpAucItemTo=} [properties] Properties to set
         */
        function UpAucItemTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UpAucItemTo instance using the specified properties.
         * @function create
         * @memberof Msg.UpAucItemTo
         * @static
         * @param {Msg.IUpAucItemTo=} [properties] Properties to set
         * @returns {Msg.UpAucItemTo} UpAucItemTo instance
         */
        UpAucItemTo.create = function create(properties) {
            return new UpAucItemTo(properties);
        };

        /**
         * Encodes the specified UpAucItemTo message. Does not implicitly {@link Msg.UpAucItemTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.UpAucItemTo
         * @static
         * @param {Msg.IUpAucItemTo} message UpAucItemTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpAucItemTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UpAucItemTo message, length delimited. Does not implicitly {@link Msg.UpAucItemTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.UpAucItemTo
         * @static
         * @param {Msg.IUpAucItemTo} message UpAucItemTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpAucItemTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpAucItemTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.UpAucItemTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.UpAucItemTo} UpAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpAucItemTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.UpAucItemTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpAucItemTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.UpAucItemTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.UpAucItemTo} UpAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpAucItemTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpAucItemTo message.
         * @function verify
         * @memberof Msg.UpAucItemTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpAucItemTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return UpAucItemTo;
    })();

    Msg.DownAucItem = (function() {

        /**
         * Properties of a DownAucItem.
         * @memberof Msg
         * @interface IDownAucItem
         * @property {number|Long|null} [id] DownAucItem id
         */

        /**
         * Constructs a new DownAucItem.
         * @memberof Msg
         * @classdesc Represents a DownAucItem.
         * @implements IDownAucItem
         * @constructor
         * @param {Msg.IDownAucItem=} [properties] Properties to set
         */
        function DownAucItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DownAucItem id.
         * @member {number|Long} id
         * @memberof Msg.DownAucItem
         * @instance
         */
        DownAucItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DownAucItem instance using the specified properties.
         * @function create
         * @memberof Msg.DownAucItem
         * @static
         * @param {Msg.IDownAucItem=} [properties] Properties to set
         * @returns {Msg.DownAucItem} DownAucItem instance
         */
        DownAucItem.create = function create(properties) {
            return new DownAucItem(properties);
        };

        /**
         * Encodes the specified DownAucItem message. Does not implicitly {@link Msg.DownAucItem.verify|verify} messages.
         * @function encode
         * @memberof Msg.DownAucItem
         * @static
         * @param {Msg.IDownAucItem} message DownAucItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownAucItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            return writer;
        };

        /**
         * Encodes the specified DownAucItem message, length delimited. Does not implicitly {@link Msg.DownAucItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.DownAucItem
         * @static
         * @param {Msg.IDownAucItem} message DownAucItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownAucItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DownAucItem message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.DownAucItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.DownAucItem} DownAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownAucItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.DownAucItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DownAucItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.DownAucItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.DownAucItem} DownAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownAucItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DownAucItem message.
         * @function verify
         * @memberof Msg.DownAucItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DownAucItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        return DownAucItem;
    })();

    Msg.DownAucItemTo = (function() {

        /**
         * Properties of a DownAucItemTo.
         * @memberof Msg
         * @interface IDownAucItemTo
         * @property {number|Long|null} [id] DownAucItemTo id
         */

        /**
         * Constructs a new DownAucItemTo.
         * @memberof Msg
         * @classdesc Represents a DownAucItemTo.
         * @implements IDownAucItemTo
         * @constructor
         * @param {Msg.IDownAucItemTo=} [properties] Properties to set
         */
        function DownAucItemTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DownAucItemTo id.
         * @member {number|Long} id
         * @memberof Msg.DownAucItemTo
         * @instance
         */
        DownAucItemTo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DownAucItemTo instance using the specified properties.
         * @function create
         * @memberof Msg.DownAucItemTo
         * @static
         * @param {Msg.IDownAucItemTo=} [properties] Properties to set
         * @returns {Msg.DownAucItemTo} DownAucItemTo instance
         */
        DownAucItemTo.create = function create(properties) {
            return new DownAucItemTo(properties);
        };

        /**
         * Encodes the specified DownAucItemTo message. Does not implicitly {@link Msg.DownAucItemTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.DownAucItemTo
         * @static
         * @param {Msg.IDownAucItemTo} message DownAucItemTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownAucItemTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            return writer;
        };

        /**
         * Encodes the specified DownAucItemTo message, length delimited. Does not implicitly {@link Msg.DownAucItemTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.DownAucItemTo
         * @static
         * @param {Msg.IDownAucItemTo} message DownAucItemTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownAucItemTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DownAucItemTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.DownAucItemTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.DownAucItemTo} DownAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownAucItemTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.DownAucItemTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DownAucItemTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.DownAucItemTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.DownAucItemTo} DownAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownAucItemTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DownAucItemTo message.
         * @function verify
         * @memberof Msg.DownAucItemTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DownAucItemTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        return DownAucItemTo;
    })();

    Msg.BuyAucItem = (function() {

        /**
         * Properties of a BuyAucItem.
         * @memberof Msg
         * @interface IBuyAucItem
         * @property {number|Long|null} [id] BuyAucItem id
         * @property {number|null} [sysId] BuyAucItem sysId
         */

        /**
         * Constructs a new BuyAucItem.
         * @memberof Msg
         * @classdesc Represents a BuyAucItem.
         * @implements IBuyAucItem
         * @constructor
         * @param {Msg.IBuyAucItem=} [properties] Properties to set
         */
        function BuyAucItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuyAucItem id.
         * @member {number|Long} id
         * @memberof Msg.BuyAucItem
         * @instance
         */
        BuyAucItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BuyAucItem sysId.
         * @member {number} sysId
         * @memberof Msg.BuyAucItem
         * @instance
         */
        BuyAucItem.prototype.sysId = 0;

        /**
         * Creates a new BuyAucItem instance using the specified properties.
         * @function create
         * @memberof Msg.BuyAucItem
         * @static
         * @param {Msg.IBuyAucItem=} [properties] Properties to set
         * @returns {Msg.BuyAucItem} BuyAucItem instance
         */
        BuyAucItem.create = function create(properties) {
            return new BuyAucItem(properties);
        };

        /**
         * Encodes the specified BuyAucItem message. Does not implicitly {@link Msg.BuyAucItem.verify|verify} messages.
         * @function encode
         * @memberof Msg.BuyAucItem
         * @static
         * @param {Msg.IBuyAucItem} message BuyAucItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyAucItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.sysId != null && message.hasOwnProperty("sysId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sysId);
            return writer;
        };

        /**
         * Encodes the specified BuyAucItem message, length delimited. Does not implicitly {@link Msg.BuyAucItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.BuyAucItem
         * @static
         * @param {Msg.IBuyAucItem} message BuyAucItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyAucItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuyAucItem message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.BuyAucItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.BuyAucItem} BuyAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyAucItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.BuyAucItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.sysId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BuyAucItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.BuyAucItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.BuyAucItem} BuyAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyAucItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuyAucItem message.
         * @function verify
         * @memberof Msg.BuyAucItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuyAucItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.sysId != null && message.hasOwnProperty("sysId"))
                if (!$util.isInteger(message.sysId))
                    return "sysId: integer expected";
            return null;
        };

        return BuyAucItem;
    })();

    Msg.BuyAucItemTo = (function() {

        /**
         * Properties of a BuyAucItemTo.
         * @memberof Msg
         * @interface IBuyAucItemTo
         */

        /**
         * Constructs a new BuyAucItemTo.
         * @memberof Msg
         * @classdesc Represents a BuyAucItemTo.
         * @implements IBuyAucItemTo
         * @constructor
         * @param {Msg.IBuyAucItemTo=} [properties] Properties to set
         */
        function BuyAucItemTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BuyAucItemTo instance using the specified properties.
         * @function create
         * @memberof Msg.BuyAucItemTo
         * @static
         * @param {Msg.IBuyAucItemTo=} [properties] Properties to set
         * @returns {Msg.BuyAucItemTo} BuyAucItemTo instance
         */
        BuyAucItemTo.create = function create(properties) {
            return new BuyAucItemTo(properties);
        };

        /**
         * Encodes the specified BuyAucItemTo message. Does not implicitly {@link Msg.BuyAucItemTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.BuyAucItemTo
         * @static
         * @param {Msg.IBuyAucItemTo} message BuyAucItemTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyAucItemTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BuyAucItemTo message, length delimited. Does not implicitly {@link Msg.BuyAucItemTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.BuyAucItemTo
         * @static
         * @param {Msg.IBuyAucItemTo} message BuyAucItemTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuyAucItemTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuyAucItemTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.BuyAucItemTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.BuyAucItemTo} BuyAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyAucItemTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.BuyAucItemTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BuyAucItemTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.BuyAucItemTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.BuyAucItemTo} BuyAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuyAucItemTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuyAucItemTo message.
         * @function verify
         * @memberof Msg.BuyAucItemTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuyAucItemTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return BuyAucItemTo;
    })();

    Msg.AucItemNo = (function() {

        /**
         * Properties of an AucItemNo.
         * @memberof Msg
         * @interface IAucItemNo
         * @property {Msg.IAucItemMo|null} [aucItem] AucItemNo aucItem
         */

        /**
         * Constructs a new AucItemNo.
         * @memberof Msg
         * @classdesc Represents an AucItemNo.
         * @implements IAucItemNo
         * @constructor
         * @param {Msg.IAucItemNo=} [properties] Properties to set
         */
        function AucItemNo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AucItemNo aucItem.
         * @member {Msg.IAucItemMo|null|undefined} aucItem
         * @memberof Msg.AucItemNo
         * @instance
         */
        AucItemNo.prototype.aucItem = null;

        /**
         * Creates a new AucItemNo instance using the specified properties.
         * @function create
         * @memberof Msg.AucItemNo
         * @static
         * @param {Msg.IAucItemNo=} [properties] Properties to set
         * @returns {Msg.AucItemNo} AucItemNo instance
         */
        AucItemNo.create = function create(properties) {
            return new AucItemNo(properties);
        };

        /**
         * Encodes the specified AucItemNo message. Does not implicitly {@link Msg.AucItemNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.AucItemNo
         * @static
         * @param {Msg.IAucItemNo} message AucItemNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AucItemNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.aucItem != null && message.hasOwnProperty("aucItem"))
                $root.Msg.AucItemMo.encode(message.aucItem, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AucItemNo message, length delimited. Does not implicitly {@link Msg.AucItemNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.AucItemNo
         * @static
         * @param {Msg.IAucItemNo} message AucItemNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AucItemNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AucItemNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.AucItemNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.AucItemNo} AucItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AucItemNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.AucItemNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.aucItem = $root.Msg.AucItemMo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AucItemNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.AucItemNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.AucItemNo} AucItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AucItemNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AucItemNo message.
         * @function verify
         * @memberof Msg.AucItemNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AucItemNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.aucItem != null && message.hasOwnProperty("aucItem")) {
                var error = $root.Msg.AucItemMo.verify(message.aucItem);
                if (error)
                    return "aucItem." + error;
            }
            return null;
        };

        return AucItemNo;
    })();

    Msg.DelItemNo = (function() {

        /**
         * Properties of a DelItemNo.
         * @memberof Msg
         * @interface IDelItemNo
         * @property {number|Long|null} [id] DelItemNo id
         */

        /**
         * Constructs a new DelItemNo.
         * @memberof Msg
         * @classdesc Represents a DelItemNo.
         * @implements IDelItemNo
         * @constructor
         * @param {Msg.IDelItemNo=} [properties] Properties to set
         */
        function DelItemNo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelItemNo id.
         * @member {number|Long} id
         * @memberof Msg.DelItemNo
         * @instance
         */
        DelItemNo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DelItemNo instance using the specified properties.
         * @function create
         * @memberof Msg.DelItemNo
         * @static
         * @param {Msg.IDelItemNo=} [properties] Properties to set
         * @returns {Msg.DelItemNo} DelItemNo instance
         */
        DelItemNo.create = function create(properties) {
            return new DelItemNo(properties);
        };

        /**
         * Encodes the specified DelItemNo message. Does not implicitly {@link Msg.DelItemNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.DelItemNo
         * @static
         * @param {Msg.IDelItemNo} message DelItemNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelItemNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            return writer;
        };

        /**
         * Encodes the specified DelItemNo message, length delimited. Does not implicitly {@link Msg.DelItemNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.DelItemNo
         * @static
         * @param {Msg.IDelItemNo} message DelItemNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelItemNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelItemNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.DelItemNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.DelItemNo} DelItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelItemNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.DelItemNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DelItemNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.DelItemNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.DelItemNo} DelItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelItemNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelItemNo message.
         * @function verify
         * @memberof Msg.DelItemNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelItemNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        return DelItemNo;
    })();

    Msg.ErrorNo = (function() {

        /**
         * Properties of an ErrorNo.
         * @memberof Msg
         * @interface IErrorNo
         * @property {string|null} [errorMsg] ErrorNo errorMsg
         */

        /**
         * Constructs a new ErrorNo.
         * @memberof Msg
         * @classdesc Represents an ErrorNo.
         * @implements IErrorNo
         * @constructor
         * @param {Msg.IErrorNo=} [properties] Properties to set
         */
        function ErrorNo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorNo errorMsg.
         * @member {string} errorMsg
         * @memberof Msg.ErrorNo
         * @instance
         */
        ErrorNo.prototype.errorMsg = "";

        /**
         * Creates a new ErrorNo instance using the specified properties.
         * @function create
         * @memberof Msg.ErrorNo
         * @static
         * @param {Msg.IErrorNo=} [properties] Properties to set
         * @returns {Msg.ErrorNo} ErrorNo instance
         */
        ErrorNo.create = function create(properties) {
            return new ErrorNo(properties);
        };

        /**
         * Encodes the specified ErrorNo message. Does not implicitly {@link Msg.ErrorNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.ErrorNo
         * @static
         * @param {Msg.IErrorNo} message ErrorNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.errorMsg);
            return writer;
        };

        /**
         * Encodes the specified ErrorNo message, length delimited. Does not implicitly {@link Msg.ErrorNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.ErrorNo
         * @static
         * @param {Msg.IErrorNo} message ErrorNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ErrorNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.ErrorNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.ErrorNo} ErrorNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.ErrorNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errorMsg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ErrorNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.ErrorNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.ErrorNo} ErrorNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ErrorNo message.
         * @function verify
         * @memberof Msg.ErrorNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ErrorNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorMsg != null && message.hasOwnProperty("errorMsg"))
                if (!$util.isString(message.errorMsg))
                    return "errorMsg: string expected";
            return null;
        };

        return ErrorNo;
    })();

    Msg.CMD = (function() {

        /**
         * Properties of a CMD.
         * @memberof Msg
         * @interface ICMD
         * @property {Array.<string>|null} [parameters] CMD parameters
         */

        /**
         * Constructs a new CMD.
         * @memberof Msg
         * @classdesc Represents a CMD.
         * @implements ICMD
         * @constructor
         * @param {Msg.ICMD=} [properties] Properties to set
         */
        function CMD(properties) {
            this.parameters = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CMD parameters.
         * @member {Array.<string>} parameters
         * @memberof Msg.CMD
         * @instance
         */
        CMD.prototype.parameters = $util.emptyArray;

        /**
         * Creates a new CMD instance using the specified properties.
         * @function create
         * @memberof Msg.CMD
         * @static
         * @param {Msg.ICMD=} [properties] Properties to set
         * @returns {Msg.CMD} CMD instance
         */
        CMD.create = function create(properties) {
            return new CMD(properties);
        };

        /**
         * Encodes the specified CMD message. Does not implicitly {@link Msg.CMD.verify|verify} messages.
         * @function encode
         * @memberof Msg.CMD
         * @static
         * @param {Msg.ICMD} message CMD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.parameters != null && message.parameters.length)
                for (var i = 0; i < message.parameters.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.parameters[i]);
            return writer;
        };

        /**
         * Encodes the specified CMD message, length delimited. Does not implicitly {@link Msg.CMD.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.CMD
         * @static
         * @param {Msg.ICMD} message CMD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CMD.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CMD message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.CMD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.CMD} CMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.CMD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.parameters && message.parameters.length))
                        message.parameters = [];
                    message.parameters.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CMD message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.CMD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.CMD} CMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CMD.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CMD message.
         * @function verify
         * @memberof Msg.CMD
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CMD.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.parameters != null && message.hasOwnProperty("parameters")) {
                if (!Array.isArray(message.parameters))
                    return "parameters: array expected";
                for (var i = 0; i < message.parameters.length; ++i)
                    if (!$util.isString(message.parameters[i]))
                        return "parameters: string[] expected";
            }
            return null;
        };

        return CMD;
    })();

    Msg.ItemMo = (function() {

        /**
         * Properties of an ItemMo.
         * @memberof Msg
         * @interface IItemMo
         * @property {number|null} [type] ItemMo type
         * @property {number|null} [sysId] ItemMo sysId
         * @property {number|null} [count] ItemMo count
         */

        /**
         * Constructs a new ItemMo.
         * @memberof Msg
         * @classdesc Represents an ItemMo.
         * @implements IItemMo
         * @constructor
         * @param {Msg.IItemMo=} [properties] Properties to set
         */
        function ItemMo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ItemMo type.
         * @member {number} type
         * @memberof Msg.ItemMo
         * @instance
         */
        ItemMo.prototype.type = 0;

        /**
         * ItemMo sysId.
         * @member {number} sysId
         * @memberof Msg.ItemMo
         * @instance
         */
        ItemMo.prototype.sysId = 0;

        /**
         * ItemMo count.
         * @member {number} count
         * @memberof Msg.ItemMo
         * @instance
         */
        ItemMo.prototype.count = 0;

        /**
         * Creates a new ItemMo instance using the specified properties.
         * @function create
         * @memberof Msg.ItemMo
         * @static
         * @param {Msg.IItemMo=} [properties] Properties to set
         * @returns {Msg.ItemMo} ItemMo instance
         */
        ItemMo.create = function create(properties) {
            return new ItemMo(properties);
        };

        /**
         * Encodes the specified ItemMo message. Does not implicitly {@link Msg.ItemMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.ItemMo
         * @static
         * @param {Msg.IItemMo} message ItemMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.sysId != null && message.hasOwnProperty("sysId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sysId);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.count);
            return writer;
        };

        /**
         * Encodes the specified ItemMo message, length delimited. Does not implicitly {@link Msg.ItemMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.ItemMo
         * @static
         * @param {Msg.IItemMo} message ItemMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ItemMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ItemMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.ItemMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.ItemMo} ItemMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.ItemMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.sysId = reader.int32();
                    break;
                case 3:
                    message.count = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ItemMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.ItemMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.ItemMo} ItemMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ItemMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ItemMo message.
         * @function verify
         * @memberof Msg.ItemMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ItemMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.sysId != null && message.hasOwnProperty("sysId"))
                if (!$util.isInteger(message.sysId))
                    return "sysId: integer expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            return null;
        };

        return ItemMo;
    })();

    Msg.GridMo = (function() {

        /**
         * Properties of a GridMo.
         * @memberof Msg
         * @interface IGridMo
         * @property {number|null} [index] GridMo index
         * @property {number|null} [type] GridMo type
         * @property {number|null} [cid] GridMo cid
         * @property {number|null} [count] GridMo count
         * @property {number|null} [effType] GridMo effType
         * @property {number|Long|null} [effValue] GridMo effValue
         */

        /**
         * Constructs a new GridMo.
         * @memberof Msg
         * @classdesc Represents a GridMo.
         * @implements IGridMo
         * @constructor
         * @param {Msg.IGridMo=} [properties] Properties to set
         */
        function GridMo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GridMo index.
         * @member {number} index
         * @memberof Msg.GridMo
         * @instance
         */
        GridMo.prototype.index = 0;

        /**
         * GridMo type.
         * @member {number} type
         * @memberof Msg.GridMo
         * @instance
         */
        GridMo.prototype.type = 0;

        /**
         * GridMo cid.
         * @member {number} cid
         * @memberof Msg.GridMo
         * @instance
         */
        GridMo.prototype.cid = 0;

        /**
         * GridMo count.
         * @member {number} count
         * @memberof Msg.GridMo
         * @instance
         */
        GridMo.prototype.count = 0;

        /**
         * GridMo effType.
         * @member {number} effType
         * @memberof Msg.GridMo
         * @instance
         */
        GridMo.prototype.effType = 0;

        /**
         * GridMo effValue.
         * @member {number|Long} effValue
         * @memberof Msg.GridMo
         * @instance
         */
        GridMo.prototype.effValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GridMo instance using the specified properties.
         * @function create
         * @memberof Msg.GridMo
         * @static
         * @param {Msg.IGridMo=} [properties] Properties to set
         * @returns {Msg.GridMo} GridMo instance
         */
        GridMo.create = function create(properties) {
            return new GridMo(properties);
        };

        /**
         * Encodes the specified GridMo message. Does not implicitly {@link Msg.GridMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.GridMo
         * @static
         * @param {Msg.IGridMo} message GridMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GridMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.cid != null && message.hasOwnProperty("cid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cid);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.count);
            if (message.effType != null && message.hasOwnProperty("effType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.effType);
            if (message.effValue != null && message.hasOwnProperty("effValue"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.effValue);
            return writer;
        };

        /**
         * Encodes the specified GridMo message, length delimited. Does not implicitly {@link Msg.GridMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GridMo
         * @static
         * @param {Msg.IGridMo} message GridMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GridMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GridMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GridMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GridMo} GridMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GridMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GridMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.cid = reader.int32();
                    break;
                case 4:
                    message.count = reader.int32();
                    break;
                case 5:
                    message.effType = reader.int32();
                    break;
                case 6:
                    message.effValue = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GridMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GridMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GridMo} GridMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GridMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GridMo message.
         * @function verify
         * @memberof Msg.GridMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GridMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (!$util.isInteger(message.cid))
                    return "cid: integer expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            if (message.effType != null && message.hasOwnProperty("effType"))
                if (!$util.isInteger(message.effType))
                    return "effType: integer expected";
            if (message.effValue != null && message.hasOwnProperty("effValue"))
                if (!$util.isInteger(message.effValue) && !(message.effValue && $util.isInteger(message.effValue.low) && $util.isInteger(message.effValue.high)))
                    return "effValue: integer|Long expected";
            return null;
        };

        return GridMo;
    })();

    Msg.GetBag = (function() {

        /**
         * Properties of a GetBag.
         * @memberof Msg
         * @interface IGetBag
         */

        /**
         * Constructs a new GetBag.
         * @memberof Msg
         * @classdesc Represents a GetBag.
         * @implements IGetBag
         * @constructor
         * @param {Msg.IGetBag=} [properties] Properties to set
         */
        function GetBag(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetBag instance using the specified properties.
         * @function create
         * @memberof Msg.GetBag
         * @static
         * @param {Msg.IGetBag=} [properties] Properties to set
         * @returns {Msg.GetBag} GetBag instance
         */
        GetBag.create = function create(properties) {
            return new GetBag(properties);
        };

        /**
         * Encodes the specified GetBag message. Does not implicitly {@link Msg.GetBag.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetBag
         * @static
         * @param {Msg.IGetBag} message GetBag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBag.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetBag message, length delimited. Does not implicitly {@link Msg.GetBag.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetBag
         * @static
         * @param {Msg.IGetBag} message GetBag message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBag.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetBag message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetBag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetBag} GetBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBag.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetBag();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetBag message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetBag
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetBag} GetBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBag.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetBag message.
         * @function verify
         * @memberof Msg.GetBag
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetBag.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetBag;
    })();

    Msg.GetBagTo = (function() {

        /**
         * Properties of a GetBagTo.
         * @memberof Msg
         * @interface IGetBagTo
         * @property {Array.<Msg.IGridMo>|null} [grid] GetBagTo grid
         */

        /**
         * Constructs a new GetBagTo.
         * @memberof Msg
         * @classdesc Represents a GetBagTo.
         * @implements IGetBagTo
         * @constructor
         * @param {Msg.IGetBagTo=} [properties] Properties to set
         */
        function GetBagTo(properties) {
            this.grid = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetBagTo grid.
         * @member {Array.<Msg.IGridMo>} grid
         * @memberof Msg.GetBagTo
         * @instance
         */
        GetBagTo.prototype.grid = $util.emptyArray;

        /**
         * Creates a new GetBagTo instance using the specified properties.
         * @function create
         * @memberof Msg.GetBagTo
         * @static
         * @param {Msg.IGetBagTo=} [properties] Properties to set
         * @returns {Msg.GetBagTo} GetBagTo instance
         */
        GetBagTo.create = function create(properties) {
            return new GetBagTo(properties);
        };

        /**
         * Encodes the specified GetBagTo message. Does not implicitly {@link Msg.GetBagTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetBagTo
         * @static
         * @param {Msg.IGetBagTo} message GetBagTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBagTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.grid != null && message.grid.length)
                for (var i = 0; i < message.grid.length; ++i)
                    $root.Msg.GridMo.encode(message.grid[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetBagTo message, length delimited. Does not implicitly {@link Msg.GetBagTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetBagTo
         * @static
         * @param {Msg.IGetBagTo} message GetBagTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBagTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetBagTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetBagTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetBagTo} GetBagTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBagTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetBagTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.grid && message.grid.length))
                        message.grid = [];
                    message.grid.push($root.Msg.GridMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetBagTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetBagTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetBagTo} GetBagTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBagTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetBagTo message.
         * @function verify
         * @memberof Msg.GetBagTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetBagTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.grid != null && message.hasOwnProperty("grid")) {
                if (!Array.isArray(message.grid))
                    return "grid: array expected";
                for (var i = 0; i < message.grid.length; ++i) {
                    var error = $root.Msg.GridMo.verify(message.grid[i]);
                    if (error)
                        return "grid." + error;
                }
            }
            return null;
        };

        return GetBagTo;
    })();

    Msg.UseItem = (function() {

        /**
         * Properties of a UseItem.
         * @memberof Msg
         * @interface IUseItem
         * @property {number|null} [index] UseItem index
         * @property {number|null} [useCount] UseItem useCount
         */

        /**
         * Constructs a new UseItem.
         * @memberof Msg
         * @classdesc Represents a UseItem.
         * @implements IUseItem
         * @constructor
         * @param {Msg.IUseItem=} [properties] Properties to set
         */
        function UseItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UseItem index.
         * @member {number} index
         * @memberof Msg.UseItem
         * @instance
         */
        UseItem.prototype.index = 0;

        /**
         * UseItem useCount.
         * @member {number} useCount
         * @memberof Msg.UseItem
         * @instance
         */
        UseItem.prototype.useCount = 0;

        /**
         * Creates a new UseItem instance using the specified properties.
         * @function create
         * @memberof Msg.UseItem
         * @static
         * @param {Msg.IUseItem=} [properties] Properties to set
         * @returns {Msg.UseItem} UseItem instance
         */
        UseItem.create = function create(properties) {
            return new UseItem(properties);
        };

        /**
         * Encodes the specified UseItem message. Does not implicitly {@link Msg.UseItem.verify|verify} messages.
         * @function encode
         * @memberof Msg.UseItem
         * @static
         * @param {Msg.IUseItem} message UseItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index);
            if (message.useCount != null && message.hasOwnProperty("useCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.useCount);
            return writer;
        };

        /**
         * Encodes the specified UseItem message, length delimited. Does not implicitly {@link Msg.UseItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.UseItem
         * @static
         * @param {Msg.IUseItem} message UseItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UseItem message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.UseItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.UseItem} UseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.UseItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.index = reader.int32();
                    break;
                case 2:
                    message.useCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UseItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.UseItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.UseItem} UseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UseItem message.
         * @function verify
         * @memberof Msg.UseItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UseItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.useCount != null && message.hasOwnProperty("useCount"))
                if (!$util.isInteger(message.useCount))
                    return "useCount: integer expected";
            return null;
        };

        return UseItem;
    })();

    Msg.UseItemTo = (function() {

        /**
         * Properties of a UseItemTo.
         * @memberof Msg
         * @interface IUseItemTo
         */

        /**
         * Constructs a new UseItemTo.
         * @memberof Msg
         * @classdesc Represents a UseItemTo.
         * @implements IUseItemTo
         * @constructor
         * @param {Msg.IUseItemTo=} [properties] Properties to set
         */
        function UseItemTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UseItemTo instance using the specified properties.
         * @function create
         * @memberof Msg.UseItemTo
         * @static
         * @param {Msg.IUseItemTo=} [properties] Properties to set
         * @returns {Msg.UseItemTo} UseItemTo instance
         */
        UseItemTo.create = function create(properties) {
            return new UseItemTo(properties);
        };

        /**
         * Encodes the specified UseItemTo message. Does not implicitly {@link Msg.UseItemTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.UseItemTo
         * @static
         * @param {Msg.IUseItemTo} message UseItemTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseItemTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UseItemTo message, length delimited. Does not implicitly {@link Msg.UseItemTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.UseItemTo
         * @static
         * @param {Msg.IUseItemTo} message UseItemTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseItemTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UseItemTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.UseItemTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.UseItemTo} UseItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseItemTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.UseItemTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UseItemTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.UseItemTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.UseItemTo} UseItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseItemTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UseItemTo message.
         * @function verify
         * @memberof Msg.UseItemTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UseItemTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return UseItemTo;
    })();

    Msg.DeleteItemNo = (function() {

        /**
         * Properties of a DeleteItemNo.
         * @memberof Msg
         * @interface IDeleteItemNo
         * @property {Array.<number>|null} [index] DeleteItemNo index
         */

        /**
         * Constructs a new DeleteItemNo.
         * @memberof Msg
         * @classdesc Represents a DeleteItemNo.
         * @implements IDeleteItemNo
         * @constructor
         * @param {Msg.IDeleteItemNo=} [properties] Properties to set
         */
        function DeleteItemNo(properties) {
            this.index = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteItemNo index.
         * @member {Array.<number>} index
         * @memberof Msg.DeleteItemNo
         * @instance
         */
        DeleteItemNo.prototype.index = $util.emptyArray;

        /**
         * Creates a new DeleteItemNo instance using the specified properties.
         * @function create
         * @memberof Msg.DeleteItemNo
         * @static
         * @param {Msg.IDeleteItemNo=} [properties] Properties to set
         * @returns {Msg.DeleteItemNo} DeleteItemNo instance
         */
        DeleteItemNo.create = function create(properties) {
            return new DeleteItemNo(properties);
        };

        /**
         * Encodes the specified DeleteItemNo message. Does not implicitly {@link Msg.DeleteItemNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.DeleteItemNo
         * @static
         * @param {Msg.IDeleteItemNo} message DeleteItemNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteItemNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && message.index.length)
                for (var i = 0; i < message.index.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.index[i]);
            return writer;
        };

        /**
         * Encodes the specified DeleteItemNo message, length delimited. Does not implicitly {@link Msg.DeleteItemNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.DeleteItemNo
         * @static
         * @param {Msg.IDeleteItemNo} message DeleteItemNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteItemNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteItemNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.DeleteItemNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.DeleteItemNo} DeleteItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteItemNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.DeleteItemNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.index && message.index.length))
                        message.index = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.index.push(reader.int32());
                    } else
                        message.index.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteItemNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.DeleteItemNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.DeleteItemNo} DeleteItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteItemNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteItemNo message.
         * @function verify
         * @memberof Msg.DeleteItemNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteItemNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.index != null && message.hasOwnProperty("index")) {
                if (!Array.isArray(message.index))
                    return "index: array expected";
                for (var i = 0; i < message.index.length; ++i)
                    if (!$util.isInteger(message.index[i]))
                        return "index: integer[] expected";
            }
            return null;
        };

        return DeleteItemNo;
    })();

    Msg.AddItemNo = (function() {

        /**
         * Properties of an AddItemNo.
         * @memberof Msg
         * @interface IAddItemNo
         * @property {Array.<Msg.IGridMo>|null} [grid] AddItemNo grid
         */

        /**
         * Constructs a new AddItemNo.
         * @memberof Msg
         * @classdesc Represents an AddItemNo.
         * @implements IAddItemNo
         * @constructor
         * @param {Msg.IAddItemNo=} [properties] Properties to set
         */
        function AddItemNo(properties) {
            this.grid = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddItemNo grid.
         * @member {Array.<Msg.IGridMo>} grid
         * @memberof Msg.AddItemNo
         * @instance
         */
        AddItemNo.prototype.grid = $util.emptyArray;

        /**
         * Creates a new AddItemNo instance using the specified properties.
         * @function create
         * @memberof Msg.AddItemNo
         * @static
         * @param {Msg.IAddItemNo=} [properties] Properties to set
         * @returns {Msg.AddItemNo} AddItemNo instance
         */
        AddItemNo.create = function create(properties) {
            return new AddItemNo(properties);
        };

        /**
         * Encodes the specified AddItemNo message. Does not implicitly {@link Msg.AddItemNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.AddItemNo
         * @static
         * @param {Msg.IAddItemNo} message AddItemNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddItemNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.grid != null && message.grid.length)
                for (var i = 0; i < message.grid.length; ++i)
                    $root.Msg.GridMo.encode(message.grid[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddItemNo message, length delimited. Does not implicitly {@link Msg.AddItemNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.AddItemNo
         * @static
         * @param {Msg.IAddItemNo} message AddItemNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddItemNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddItemNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.AddItemNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.AddItemNo} AddItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddItemNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.AddItemNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.grid && message.grid.length))
                        message.grid = [];
                    message.grid.push($root.Msg.GridMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddItemNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.AddItemNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.AddItemNo} AddItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddItemNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddItemNo message.
         * @function verify
         * @memberof Msg.AddItemNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddItemNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.grid != null && message.hasOwnProperty("grid")) {
                if (!Array.isArray(message.grid))
                    return "grid: array expected";
                for (var i = 0; i < message.grid.length; ++i) {
                    var error = $root.Msg.GridMo.verify(message.grid[i]);
                    if (error)
                        return "grid." + error;
                }
            }
            return null;
        };

        return AddItemNo;
    })();

    Msg.UpdateItemNo = (function() {

        /**
         * Properties of an UpdateItemNo.
         * @memberof Msg
         * @interface IUpdateItemNo
         * @property {Array.<Msg.IGridMo>|null} [grid] UpdateItemNo grid
         */

        /**
         * Constructs a new UpdateItemNo.
         * @memberof Msg
         * @classdesc Represents an UpdateItemNo.
         * @implements IUpdateItemNo
         * @constructor
         * @param {Msg.IUpdateItemNo=} [properties] Properties to set
         */
        function UpdateItemNo(properties) {
            this.grid = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateItemNo grid.
         * @member {Array.<Msg.IGridMo>} grid
         * @memberof Msg.UpdateItemNo
         * @instance
         */
        UpdateItemNo.prototype.grid = $util.emptyArray;

        /**
         * Creates a new UpdateItemNo instance using the specified properties.
         * @function create
         * @memberof Msg.UpdateItemNo
         * @static
         * @param {Msg.IUpdateItemNo=} [properties] Properties to set
         * @returns {Msg.UpdateItemNo} UpdateItemNo instance
         */
        UpdateItemNo.create = function create(properties) {
            return new UpdateItemNo(properties);
        };

        /**
         * Encodes the specified UpdateItemNo message. Does not implicitly {@link Msg.UpdateItemNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.UpdateItemNo
         * @static
         * @param {Msg.IUpdateItemNo} message UpdateItemNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateItemNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.grid != null && message.grid.length)
                for (var i = 0; i < message.grid.length; ++i)
                    $root.Msg.GridMo.encode(message.grid[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateItemNo message, length delimited. Does not implicitly {@link Msg.UpdateItemNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.UpdateItemNo
         * @static
         * @param {Msg.IUpdateItemNo} message UpdateItemNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateItemNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateItemNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.UpdateItemNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.UpdateItemNo} UpdateItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateItemNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.UpdateItemNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.grid && message.grid.length))
                        message.grid = [];
                    message.grid.push($root.Msg.GridMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateItemNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.UpdateItemNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.UpdateItemNo} UpdateItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateItemNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateItemNo message.
         * @function verify
         * @memberof Msg.UpdateItemNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateItemNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.grid != null && message.hasOwnProperty("grid")) {
                if (!Array.isArray(message.grid))
                    return "grid: array expected";
                for (var i = 0; i < message.grid.length; ++i) {
                    var error = $root.Msg.GridMo.verify(message.grid[i]);
                    if (error)
                        return "grid." + error;
                }
            }
            return null;
        };

        return UpdateItemNo;
    })();

    Msg.ChatMo = (function() {

        /**
         * Properties of a ChatMo.
         * @memberof Msg
         * @interface IChatMo
         * @property {number|Long|null} [id] ChatMo id
         * @property {string|null} [name] ChatMo name
         * @property {number|null} [sex] ChatMo sex
         * @property {number|null} [title] ChatMo title
         * @property {string|null} [content] ChatMo content
         */

        /**
         * Constructs a new ChatMo.
         * @memberof Msg
         * @classdesc Represents a ChatMo.
         * @implements IChatMo
         * @constructor
         * @param {Msg.IChatMo=} [properties] Properties to set
         */
        function ChatMo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatMo id.
         * @member {number|Long} id
         * @memberof Msg.ChatMo
         * @instance
         */
        ChatMo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatMo name.
         * @member {string} name
         * @memberof Msg.ChatMo
         * @instance
         */
        ChatMo.prototype.name = "";

        /**
         * ChatMo sex.
         * @member {number} sex
         * @memberof Msg.ChatMo
         * @instance
         */
        ChatMo.prototype.sex = 0;

        /**
         * ChatMo title.
         * @member {number} title
         * @memberof Msg.ChatMo
         * @instance
         */
        ChatMo.prototype.title = 0;

        /**
         * ChatMo content.
         * @member {string} content
         * @memberof Msg.ChatMo
         * @instance
         */
        ChatMo.prototype.content = "";

        /**
         * Creates a new ChatMo instance using the specified properties.
         * @function create
         * @memberof Msg.ChatMo
         * @static
         * @param {Msg.IChatMo=} [properties] Properties to set
         * @returns {Msg.ChatMo} ChatMo instance
         */
        ChatMo.create = function create(properties) {
            return new ChatMo(properties);
        };

        /**
         * Encodes the specified ChatMo message. Does not implicitly {@link Msg.ChatMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.ChatMo
         * @static
         * @param {Msg.IChatMo} message ChatMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sex);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.title);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified ChatMo message, length delimited. Does not implicitly {@link Msg.ChatMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.ChatMo
         * @static
         * @param {Msg.IChatMo} message ChatMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.ChatMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.ChatMo} ChatMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.ChatMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.sex = reader.int32();
                    break;
                case 4:
                    message.title = reader.int32();
                    break;
                case 5:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChatMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.ChatMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.ChatMo} ChatMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatMo message.
         * @function verify
         * @memberof Msg.ChatMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isInteger(message.title))
                    return "title: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        return ChatMo;
    })();

    Msg.GetChat = (function() {

        /**
         * Properties of a GetChat.
         * @memberof Msg
         * @interface IGetChat
         */

        /**
         * Constructs a new GetChat.
         * @memberof Msg
         * @classdesc Represents a GetChat.
         * @implements IGetChat
         * @constructor
         * @param {Msg.IGetChat=} [properties] Properties to set
         */
        function GetChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetChat instance using the specified properties.
         * @function create
         * @memberof Msg.GetChat
         * @static
         * @param {Msg.IGetChat=} [properties] Properties to set
         * @returns {Msg.GetChat} GetChat instance
         */
        GetChat.create = function create(properties) {
            return new GetChat(properties);
        };

        /**
         * Encodes the specified GetChat message. Does not implicitly {@link Msg.GetChat.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetChat
         * @static
         * @param {Msg.IGetChat} message GetChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetChat message, length delimited. Does not implicitly {@link Msg.GetChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetChat
         * @static
         * @param {Msg.IGetChat} message GetChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetChat message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetChat} GetChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetChat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetChat} GetChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetChat message.
         * @function verify
         * @memberof Msg.GetChat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetChat;
    })();

    Msg.GetChatTo = (function() {

        /**
         * Properties of a GetChatTo.
         * @memberof Msg
         * @interface IGetChatTo
         * @property {Array.<Msg.IChatMo>|null} [chat] GetChatTo chat
         */

        /**
         * Constructs a new GetChatTo.
         * @memberof Msg
         * @classdesc Represents a GetChatTo.
         * @implements IGetChatTo
         * @constructor
         * @param {Msg.IGetChatTo=} [properties] Properties to set
         */
        function GetChatTo(properties) {
            this.chat = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetChatTo chat.
         * @member {Array.<Msg.IChatMo>} chat
         * @memberof Msg.GetChatTo
         * @instance
         */
        GetChatTo.prototype.chat = $util.emptyArray;

        /**
         * Creates a new GetChatTo instance using the specified properties.
         * @function create
         * @memberof Msg.GetChatTo
         * @static
         * @param {Msg.IGetChatTo=} [properties] Properties to set
         * @returns {Msg.GetChatTo} GetChatTo instance
         */
        GetChatTo.create = function create(properties) {
            return new GetChatTo(properties);
        };

        /**
         * Encodes the specified GetChatTo message. Does not implicitly {@link Msg.GetChatTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetChatTo
         * @static
         * @param {Msg.IGetChatTo} message GetChatTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetChatTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chat != null && message.chat.length)
                for (var i = 0; i < message.chat.length; ++i)
                    $root.Msg.ChatMo.encode(message.chat[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetChatTo message, length delimited. Does not implicitly {@link Msg.GetChatTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetChatTo
         * @static
         * @param {Msg.IGetChatTo} message GetChatTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetChatTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetChatTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetChatTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetChatTo} GetChatTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetChatTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetChatTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.chat && message.chat.length))
                        message.chat = [];
                    message.chat.push($root.Msg.ChatMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetChatTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetChatTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetChatTo} GetChatTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetChatTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetChatTo message.
         * @function verify
         * @memberof Msg.GetChatTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetChatTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chat != null && message.hasOwnProperty("chat")) {
                if (!Array.isArray(message.chat))
                    return "chat: array expected";
                for (var i = 0; i < message.chat.length; ++i) {
                    var error = $root.Msg.ChatMo.verify(message.chat[i]);
                    if (error)
                        return "chat." + error;
                }
            }
            return null;
        };

        return GetChatTo;
    })();

    Msg.SendChat = (function() {

        /**
         * Properties of a SendChat.
         * @memberof Msg
         * @interface ISendChat
         * @property {string|null} [content] SendChat content
         */

        /**
         * Constructs a new SendChat.
         * @memberof Msg
         * @classdesc Represents a SendChat.
         * @implements ISendChat
         * @constructor
         * @param {Msg.ISendChat=} [properties] Properties to set
         */
        function SendChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendChat content.
         * @member {string} content
         * @memberof Msg.SendChat
         * @instance
         */
        SendChat.prototype.content = "";

        /**
         * Creates a new SendChat instance using the specified properties.
         * @function create
         * @memberof Msg.SendChat
         * @static
         * @param {Msg.ISendChat=} [properties] Properties to set
         * @returns {Msg.SendChat} SendChat instance
         */
        SendChat.create = function create(properties) {
            return new SendChat(properties);
        };

        /**
         * Encodes the specified SendChat message. Does not implicitly {@link Msg.SendChat.verify|verify} messages.
         * @function encode
         * @memberof Msg.SendChat
         * @static
         * @param {Msg.ISendChat} message SendChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified SendChat message, length delimited. Does not implicitly {@link Msg.SendChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.SendChat
         * @static
         * @param {Msg.ISendChat} message SendChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendChat message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.SendChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.SendChat} SendChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.SendChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendChat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.SendChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.SendChat} SendChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendChat message.
         * @function verify
         * @memberof Msg.SendChat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        return SendChat;
    })();

    Msg.SendChatTo = (function() {

        /**
         * Properties of a SendChatTo.
         * @memberof Msg
         * @interface ISendChatTo
         */

        /**
         * Constructs a new SendChatTo.
         * @memberof Msg
         * @classdesc Represents a SendChatTo.
         * @implements ISendChatTo
         * @constructor
         * @param {Msg.ISendChatTo=} [properties] Properties to set
         */
        function SendChatTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SendChatTo instance using the specified properties.
         * @function create
         * @memberof Msg.SendChatTo
         * @static
         * @param {Msg.ISendChatTo=} [properties] Properties to set
         * @returns {Msg.SendChatTo} SendChatTo instance
         */
        SendChatTo.create = function create(properties) {
            return new SendChatTo(properties);
        };

        /**
         * Encodes the specified SendChatTo message. Does not implicitly {@link Msg.SendChatTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.SendChatTo
         * @static
         * @param {Msg.ISendChatTo} message SendChatTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendChatTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SendChatTo message, length delimited. Does not implicitly {@link Msg.SendChatTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.SendChatTo
         * @static
         * @param {Msg.ISendChatTo} message SendChatTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendChatTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendChatTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.SendChatTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.SendChatTo} SendChatTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendChatTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.SendChatTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendChatTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.SendChatTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.SendChatTo} SendChatTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendChatTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendChatTo message.
         * @function verify
         * @memberof Msg.SendChatTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendChatTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return SendChatTo;
    })();

    Msg.ChatNo = (function() {

        /**
         * Properties of a ChatNo.
         * @memberof Msg
         * @interface IChatNo
         * @property {Msg.IChatMo|null} [chat] ChatNo chat
         */

        /**
         * Constructs a new ChatNo.
         * @memberof Msg
         * @classdesc Represents a ChatNo.
         * @implements IChatNo
         * @constructor
         * @param {Msg.IChatNo=} [properties] Properties to set
         */
        function ChatNo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatNo chat.
         * @member {Msg.IChatMo|null|undefined} chat
         * @memberof Msg.ChatNo
         * @instance
         */
        ChatNo.prototype.chat = null;

        /**
         * Creates a new ChatNo instance using the specified properties.
         * @function create
         * @memberof Msg.ChatNo
         * @static
         * @param {Msg.IChatNo=} [properties] Properties to set
         * @returns {Msg.ChatNo} ChatNo instance
         */
        ChatNo.create = function create(properties) {
            return new ChatNo(properties);
        };

        /**
         * Encodes the specified ChatNo message. Does not implicitly {@link Msg.ChatNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.ChatNo
         * @static
         * @param {Msg.IChatNo} message ChatNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chat != null && message.hasOwnProperty("chat"))
                $root.Msg.ChatMo.encode(message.chat, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChatNo message, length delimited. Does not implicitly {@link Msg.ChatNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.ChatNo
         * @static
         * @param {Msg.IChatNo} message ChatNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.ChatNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.ChatNo} ChatNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.ChatNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chat = $root.Msg.ChatMo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChatNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.ChatNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.ChatNo} ChatNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatNo message.
         * @function verify
         * @memberof Msg.ChatNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chat != null && message.hasOwnProperty("chat")) {
                var error = $root.Msg.ChatMo.verify(message.chat);
                if (error)
                    return "chat." + error;
            }
            return null;
        };

        return ChatNo;
    })();

    Msg.ContestRankMo = (function() {

        /**
         * Properties of a ContestRankMo.
         * @memberof Msg
         * @interface IContestRankMo
         * @property {number|null} [playerId] ContestRankMo playerId
         * @property {string|null} [playerName] ContestRankMo playerName
         * @property {number|null} [contestScore] ContestRankMo contestScore
         * @property {number|null} [state] ContestRankMo state
         */

        /**
         * Constructs a new ContestRankMo.
         * @memberof Msg
         * @classdesc Represents a ContestRankMo.
         * @implements IContestRankMo
         * @constructor
         * @param {Msg.IContestRankMo=} [properties] Properties to set
         */
        function ContestRankMo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContestRankMo playerId.
         * @member {number} playerId
         * @memberof Msg.ContestRankMo
         * @instance
         */
        ContestRankMo.prototype.playerId = 0;

        /**
         * ContestRankMo playerName.
         * @member {string} playerName
         * @memberof Msg.ContestRankMo
         * @instance
         */
        ContestRankMo.prototype.playerName = "";

        /**
         * ContestRankMo contestScore.
         * @member {number} contestScore
         * @memberof Msg.ContestRankMo
         * @instance
         */
        ContestRankMo.prototype.contestScore = 0;

        /**
         * ContestRankMo state.
         * @member {number} state
         * @memberof Msg.ContestRankMo
         * @instance
         */
        ContestRankMo.prototype.state = 0;

        /**
         * Creates a new ContestRankMo instance using the specified properties.
         * @function create
         * @memberof Msg.ContestRankMo
         * @static
         * @param {Msg.IContestRankMo=} [properties] Properties to set
         * @returns {Msg.ContestRankMo} ContestRankMo instance
         */
        ContestRankMo.create = function create(properties) {
            return new ContestRankMo(properties);
        };

        /**
         * Encodes the specified ContestRankMo message. Does not implicitly {@link Msg.ContestRankMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.ContestRankMo
         * @static
         * @param {Msg.IContestRankMo} message ContestRankMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContestRankMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
            if (message.contestScore != null && message.hasOwnProperty("contestScore"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.contestScore);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified ContestRankMo message, length delimited. Does not implicitly {@link Msg.ContestRankMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.ContestRankMo
         * @static
         * @param {Msg.IContestRankMo} message ContestRankMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContestRankMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContestRankMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.ContestRankMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.ContestRankMo} ContestRankMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContestRankMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.ContestRankMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerId = reader.int32();
                    break;
                case 2:
                    message.playerName = reader.string();
                    break;
                case 3:
                    message.contestScore = reader.int32();
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContestRankMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.ContestRankMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.ContestRankMo} ContestRankMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContestRankMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContestRankMo message.
         * @function verify
         * @memberof Msg.ContestRankMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContestRankMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId))
                    return "playerId: integer expected";
            if (message.playerName != null && message.hasOwnProperty("playerName"))
                if (!$util.isString(message.playerName))
                    return "playerName: string expected";
            if (message.contestScore != null && message.hasOwnProperty("contestScore"))
                if (!$util.isInteger(message.contestScore))
                    return "contestScore: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            return null;
        };

        return ContestRankMo;
    })();

    Msg.EnterContestSite = (function() {

        /**
         * Properties of an EnterContestSite.
         * @memberof Msg
         * @interface IEnterContestSite
         * @property {number|null} [siteId] EnterContestSite siteId
         */

        /**
         * Constructs a new EnterContestSite.
         * @memberof Msg
         * @classdesc Represents an EnterContestSite.
         * @implements IEnterContestSite
         * @constructor
         * @param {Msg.IEnterContestSite=} [properties] Properties to set
         */
        function EnterContestSite(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterContestSite siteId.
         * @member {number} siteId
         * @memberof Msg.EnterContestSite
         * @instance
         */
        EnterContestSite.prototype.siteId = 0;

        /**
         * Creates a new EnterContestSite instance using the specified properties.
         * @function create
         * @memberof Msg.EnterContestSite
         * @static
         * @param {Msg.IEnterContestSite=} [properties] Properties to set
         * @returns {Msg.EnterContestSite} EnterContestSite instance
         */
        EnterContestSite.create = function create(properties) {
            return new EnterContestSite(properties);
        };

        /**
         * Encodes the specified EnterContestSite message. Does not implicitly {@link Msg.EnterContestSite.verify|verify} messages.
         * @function encode
         * @memberof Msg.EnterContestSite
         * @static
         * @param {Msg.IEnterContestSite} message EnterContestSite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterContestSite.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.siteId);
            return writer;
        };

        /**
         * Encodes the specified EnterContestSite message, length delimited. Does not implicitly {@link Msg.EnterContestSite.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.EnterContestSite
         * @static
         * @param {Msg.IEnterContestSite} message EnterContestSite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterContestSite.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterContestSite message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.EnterContestSite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.EnterContestSite} EnterContestSite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterContestSite.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.EnterContestSite();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.siteId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterContestSite message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.EnterContestSite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.EnterContestSite} EnterContestSite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterContestSite.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterContestSite message.
         * @function verify
         * @memberof Msg.EnterContestSite
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterContestSite.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                if (!$util.isInteger(message.siteId))
                    return "siteId: integer expected";
            return null;
        };

        return EnterContestSite;
    })();

    Msg.EnterContestSiteTo = (function() {

        /**
         * Properties of an EnterContestSiteTo.
         * @memberof Msg
         * @interface IEnterContestSiteTo
         * @property {number|null} [siteId] EnterContestSiteTo siteId
         */

        /**
         * Constructs a new EnterContestSiteTo.
         * @memberof Msg
         * @classdesc Represents an EnterContestSiteTo.
         * @implements IEnterContestSiteTo
         * @constructor
         * @param {Msg.IEnterContestSiteTo=} [properties] Properties to set
         */
        function EnterContestSiteTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterContestSiteTo siteId.
         * @member {number} siteId
         * @memberof Msg.EnterContestSiteTo
         * @instance
         */
        EnterContestSiteTo.prototype.siteId = 0;

        /**
         * Creates a new EnterContestSiteTo instance using the specified properties.
         * @function create
         * @memberof Msg.EnterContestSiteTo
         * @static
         * @param {Msg.IEnterContestSiteTo=} [properties] Properties to set
         * @returns {Msg.EnterContestSiteTo} EnterContestSiteTo instance
         */
        EnterContestSiteTo.create = function create(properties) {
            return new EnterContestSiteTo(properties);
        };

        /**
         * Encodes the specified EnterContestSiteTo message. Does not implicitly {@link Msg.EnterContestSiteTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.EnterContestSiteTo
         * @static
         * @param {Msg.IEnterContestSiteTo} message EnterContestSiteTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterContestSiteTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.siteId);
            return writer;
        };

        /**
         * Encodes the specified EnterContestSiteTo message, length delimited. Does not implicitly {@link Msg.EnterContestSiteTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.EnterContestSiteTo
         * @static
         * @param {Msg.IEnterContestSiteTo} message EnterContestSiteTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterContestSiteTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterContestSiteTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.EnterContestSiteTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.EnterContestSiteTo} EnterContestSiteTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterContestSiteTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.EnterContestSiteTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.siteId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterContestSiteTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.EnterContestSiteTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.EnterContestSiteTo} EnterContestSiteTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterContestSiteTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterContestSiteTo message.
         * @function verify
         * @memberof Msg.EnterContestSiteTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterContestSiteTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                if (!$util.isInteger(message.siteId))
                    return "siteId: integer expected";
            return null;
        };

        return EnterContestSiteTo;
    })();

    Msg.ExitContestSite = (function() {

        /**
         * Properties of an ExitContestSite.
         * @memberof Msg
         * @interface IExitContestSite
         */

        /**
         * Constructs a new ExitContestSite.
         * @memberof Msg
         * @classdesc Represents an ExitContestSite.
         * @implements IExitContestSite
         * @constructor
         * @param {Msg.IExitContestSite=} [properties] Properties to set
         */
        function ExitContestSite(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ExitContestSite instance using the specified properties.
         * @function create
         * @memberof Msg.ExitContestSite
         * @static
         * @param {Msg.IExitContestSite=} [properties] Properties to set
         * @returns {Msg.ExitContestSite} ExitContestSite instance
         */
        ExitContestSite.create = function create(properties) {
            return new ExitContestSite(properties);
        };

        /**
         * Encodes the specified ExitContestSite message. Does not implicitly {@link Msg.ExitContestSite.verify|verify} messages.
         * @function encode
         * @memberof Msg.ExitContestSite
         * @static
         * @param {Msg.IExitContestSite} message ExitContestSite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitContestSite.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ExitContestSite message, length delimited. Does not implicitly {@link Msg.ExitContestSite.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.ExitContestSite
         * @static
         * @param {Msg.IExitContestSite} message ExitContestSite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitContestSite.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitContestSite message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.ExitContestSite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.ExitContestSite} ExitContestSite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitContestSite.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.ExitContestSite();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExitContestSite message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.ExitContestSite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.ExitContestSite} ExitContestSite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitContestSite.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitContestSite message.
         * @function verify
         * @memberof Msg.ExitContestSite
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitContestSite.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return ExitContestSite;
    })();

    Msg.ExitContestSiteTo = (function() {

        /**
         * Properties of an ExitContestSiteTo.
         * @memberof Msg
         * @interface IExitContestSiteTo
         */

        /**
         * Constructs a new ExitContestSiteTo.
         * @memberof Msg
         * @classdesc Represents an ExitContestSiteTo.
         * @implements IExitContestSiteTo
         * @constructor
         * @param {Msg.IExitContestSiteTo=} [properties] Properties to set
         */
        function ExitContestSiteTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ExitContestSiteTo instance using the specified properties.
         * @function create
         * @memberof Msg.ExitContestSiteTo
         * @static
         * @param {Msg.IExitContestSiteTo=} [properties] Properties to set
         * @returns {Msg.ExitContestSiteTo} ExitContestSiteTo instance
         */
        ExitContestSiteTo.create = function create(properties) {
            return new ExitContestSiteTo(properties);
        };

        /**
         * Encodes the specified ExitContestSiteTo message. Does not implicitly {@link Msg.ExitContestSiteTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.ExitContestSiteTo
         * @static
         * @param {Msg.IExitContestSiteTo} message ExitContestSiteTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitContestSiteTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ExitContestSiteTo message, length delimited. Does not implicitly {@link Msg.ExitContestSiteTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.ExitContestSiteTo
         * @static
         * @param {Msg.IExitContestSiteTo} message ExitContestSiteTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitContestSiteTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitContestSiteTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.ExitContestSiteTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.ExitContestSiteTo} ExitContestSiteTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitContestSiteTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.ExitContestSiteTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExitContestSiteTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.ExitContestSiteTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.ExitContestSiteTo} ExitContestSiteTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitContestSiteTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitContestSiteTo message.
         * @function verify
         * @memberof Msg.ExitContestSiteTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitContestSiteTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return ExitContestSiteTo;
    })();

    Msg.Apply = (function() {

        /**
         * Properties of an Apply.
         * @memberof Msg
         * @interface IApply
         * @property {number|null} [siteId] Apply siteId
         */

        /**
         * Constructs a new Apply.
         * @memberof Msg
         * @classdesc Represents an Apply.
         * @implements IApply
         * @constructor
         * @param {Msg.IApply=} [properties] Properties to set
         */
        function Apply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Apply siteId.
         * @member {number} siteId
         * @memberof Msg.Apply
         * @instance
         */
        Apply.prototype.siteId = 0;

        /**
         * Creates a new Apply instance using the specified properties.
         * @function create
         * @memberof Msg.Apply
         * @static
         * @param {Msg.IApply=} [properties] Properties to set
         * @returns {Msg.Apply} Apply instance
         */
        Apply.create = function create(properties) {
            return new Apply(properties);
        };

        /**
         * Encodes the specified Apply message. Does not implicitly {@link Msg.Apply.verify|verify} messages.
         * @function encode
         * @memberof Msg.Apply
         * @static
         * @param {Msg.IApply} message Apply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Apply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.siteId);
            return writer;
        };

        /**
         * Encodes the specified Apply message, length delimited. Does not implicitly {@link Msg.Apply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.Apply
         * @static
         * @param {Msg.IApply} message Apply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Apply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Apply message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.Apply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.Apply} Apply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Apply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.Apply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.siteId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Apply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.Apply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.Apply} Apply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Apply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Apply message.
         * @function verify
         * @memberof Msg.Apply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Apply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                if (!$util.isInteger(message.siteId))
                    return "siteId: integer expected";
            return null;
        };

        return Apply;
    })();

    Msg.ApplyTo = (function() {

        /**
         * Properties of an ApplyTo.
         * @memberof Msg
         * @interface IApplyTo
         * @property {number|null} [siteId] ApplyTo siteId
         */

        /**
         * Constructs a new ApplyTo.
         * @memberof Msg
         * @classdesc Represents an ApplyTo.
         * @implements IApplyTo
         * @constructor
         * @param {Msg.IApplyTo=} [properties] Properties to set
         */
        function ApplyTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApplyTo siteId.
         * @member {number} siteId
         * @memberof Msg.ApplyTo
         * @instance
         */
        ApplyTo.prototype.siteId = 0;

        /**
         * Creates a new ApplyTo instance using the specified properties.
         * @function create
         * @memberof Msg.ApplyTo
         * @static
         * @param {Msg.IApplyTo=} [properties] Properties to set
         * @returns {Msg.ApplyTo} ApplyTo instance
         */
        ApplyTo.create = function create(properties) {
            return new ApplyTo(properties);
        };

        /**
         * Encodes the specified ApplyTo message. Does not implicitly {@link Msg.ApplyTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.ApplyTo
         * @static
         * @param {Msg.IApplyTo} message ApplyTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.siteId);
            return writer;
        };

        /**
         * Encodes the specified ApplyTo message, length delimited. Does not implicitly {@link Msg.ApplyTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.ApplyTo
         * @static
         * @param {Msg.IApplyTo} message ApplyTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApplyTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.ApplyTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.ApplyTo} ApplyTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.ApplyTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.siteId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ApplyTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.ApplyTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.ApplyTo} ApplyTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApplyTo message.
         * @function verify
         * @memberof Msg.ApplyTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApplyTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                if (!$util.isInteger(message.siteId))
                    return "siteId: integer expected";
            return null;
        };

        return ApplyTo;
    })();

    Msg.CancelApply = (function() {

        /**
         * Properties of a CancelApply.
         * @memberof Msg
         * @interface ICancelApply
         */

        /**
         * Constructs a new CancelApply.
         * @memberof Msg
         * @classdesc Represents a CancelApply.
         * @implements ICancelApply
         * @constructor
         * @param {Msg.ICancelApply=} [properties] Properties to set
         */
        function CancelApply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CancelApply instance using the specified properties.
         * @function create
         * @memberof Msg.CancelApply
         * @static
         * @param {Msg.ICancelApply=} [properties] Properties to set
         * @returns {Msg.CancelApply} CancelApply instance
         */
        CancelApply.create = function create(properties) {
            return new CancelApply(properties);
        };

        /**
         * Encodes the specified CancelApply message. Does not implicitly {@link Msg.CancelApply.verify|verify} messages.
         * @function encode
         * @memberof Msg.CancelApply
         * @static
         * @param {Msg.ICancelApply} message CancelApply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelApply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CancelApply message, length delimited. Does not implicitly {@link Msg.CancelApply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.CancelApply
         * @static
         * @param {Msg.ICancelApply} message CancelApply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelApply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelApply message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.CancelApply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.CancelApply} CancelApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelApply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.CancelApply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelApply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.CancelApply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.CancelApply} CancelApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelApply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelApply message.
         * @function verify
         * @memberof Msg.CancelApply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelApply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return CancelApply;
    })();

    Msg.CancelApplyTo = (function() {

        /**
         * Properties of a CancelApplyTo.
         * @memberof Msg
         * @interface ICancelApplyTo
         */

        /**
         * Constructs a new CancelApplyTo.
         * @memberof Msg
         * @classdesc Represents a CancelApplyTo.
         * @implements ICancelApplyTo
         * @constructor
         * @param {Msg.ICancelApplyTo=} [properties] Properties to set
         */
        function CancelApplyTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CancelApplyTo instance using the specified properties.
         * @function create
         * @memberof Msg.CancelApplyTo
         * @static
         * @param {Msg.ICancelApplyTo=} [properties] Properties to set
         * @returns {Msg.CancelApplyTo} CancelApplyTo instance
         */
        CancelApplyTo.create = function create(properties) {
            return new CancelApplyTo(properties);
        };

        /**
         * Encodes the specified CancelApplyTo message. Does not implicitly {@link Msg.CancelApplyTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.CancelApplyTo
         * @static
         * @param {Msg.ICancelApplyTo} message CancelApplyTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelApplyTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CancelApplyTo message, length delimited. Does not implicitly {@link Msg.CancelApplyTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.CancelApplyTo
         * @static
         * @param {Msg.ICancelApplyTo} message CancelApplyTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelApplyTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelApplyTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.CancelApplyTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.CancelApplyTo} CancelApplyTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelApplyTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.CancelApplyTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelApplyTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.CancelApplyTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.CancelApplyTo} CancelApplyTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelApplyTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelApplyTo message.
         * @function verify
         * @memberof Msg.CancelApplyTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelApplyTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return CancelApplyTo;
    })();

    Msg.ContestSiteNo = (function() {

        /**
         * Properties of a ContestSiteNo.
         * @memberof Msg
         * @interface IContestSiteNo
         * @property {number|null} [siteId] ContestSiteNo siteId
         * @property {number|null} [playerNum] ContestSiteNo playerNum
         */

        /**
         * Constructs a new ContestSiteNo.
         * @memberof Msg
         * @classdesc Represents a ContestSiteNo.
         * @implements IContestSiteNo
         * @constructor
         * @param {Msg.IContestSiteNo=} [properties] Properties to set
         */
        function ContestSiteNo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContestSiteNo siteId.
         * @member {number} siteId
         * @memberof Msg.ContestSiteNo
         * @instance
         */
        ContestSiteNo.prototype.siteId = 0;

        /**
         * ContestSiteNo playerNum.
         * @member {number} playerNum
         * @memberof Msg.ContestSiteNo
         * @instance
         */
        ContestSiteNo.prototype.playerNum = 0;

        /**
         * Creates a new ContestSiteNo instance using the specified properties.
         * @function create
         * @memberof Msg.ContestSiteNo
         * @static
         * @param {Msg.IContestSiteNo=} [properties] Properties to set
         * @returns {Msg.ContestSiteNo} ContestSiteNo instance
         */
        ContestSiteNo.create = function create(properties) {
            return new ContestSiteNo(properties);
        };

        /**
         * Encodes the specified ContestSiteNo message. Does not implicitly {@link Msg.ContestSiteNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.ContestSiteNo
         * @static
         * @param {Msg.IContestSiteNo} message ContestSiteNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContestSiteNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.siteId);
            if (message.playerNum != null && message.hasOwnProperty("playerNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerNum);
            return writer;
        };

        /**
         * Encodes the specified ContestSiteNo message, length delimited. Does not implicitly {@link Msg.ContestSiteNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.ContestSiteNo
         * @static
         * @param {Msg.IContestSiteNo} message ContestSiteNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContestSiteNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContestSiteNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.ContestSiteNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.ContestSiteNo} ContestSiteNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContestSiteNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.ContestSiteNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.siteId = reader.int32();
                    break;
                case 2:
                    message.playerNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContestSiteNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.ContestSiteNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.ContestSiteNo} ContestSiteNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContestSiteNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContestSiteNo message.
         * @function verify
         * @memberof Msg.ContestSiteNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContestSiteNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                if (!$util.isInteger(message.siteId))
                    return "siteId: integer expected";
            if (message.playerNum != null && message.hasOwnProperty("playerNum"))
                if (!$util.isInteger(message.playerNum))
                    return "playerNum: integer expected";
            return null;
        };

        return ContestSiteNo;
    })();

    Msg.ContestNo = (function() {

        /**
         * Properties of a ContestNo.
         * @memberof Msg
         * @interface IContestNo
         * @property {number|null} [contestId] ContestNo contestId
         * @property {number|null} [baseScore] ContestNo baseScore
         * @property {Array.<Msg.IContestRankMo>|null} [contestRank] ContestNo contestRank
         */

        /**
         * Constructs a new ContestNo.
         * @memberof Msg
         * @classdesc Represents a ContestNo.
         * @implements IContestNo
         * @constructor
         * @param {Msg.IContestNo=} [properties] Properties to set
         */
        function ContestNo(properties) {
            this.contestRank = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContestNo contestId.
         * @member {number} contestId
         * @memberof Msg.ContestNo
         * @instance
         */
        ContestNo.prototype.contestId = 0;

        /**
         * ContestNo baseScore.
         * @member {number} baseScore
         * @memberof Msg.ContestNo
         * @instance
         */
        ContestNo.prototype.baseScore = 0;

        /**
         * ContestNo contestRank.
         * @member {Array.<Msg.IContestRankMo>} contestRank
         * @memberof Msg.ContestNo
         * @instance
         */
        ContestNo.prototype.contestRank = $util.emptyArray;

        /**
         * Creates a new ContestNo instance using the specified properties.
         * @function create
         * @memberof Msg.ContestNo
         * @static
         * @param {Msg.IContestNo=} [properties] Properties to set
         * @returns {Msg.ContestNo} ContestNo instance
         */
        ContestNo.create = function create(properties) {
            return new ContestNo(properties);
        };

        /**
         * Encodes the specified ContestNo message. Does not implicitly {@link Msg.ContestNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.ContestNo
         * @static
         * @param {Msg.IContestNo} message ContestNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContestNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contestId != null && message.hasOwnProperty("contestId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.contestId);
            if (message.baseScore != null && message.hasOwnProperty("baseScore"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.baseScore);
            if (message.contestRank != null && message.contestRank.length)
                for (var i = 0; i < message.contestRank.length; ++i)
                    $root.Msg.ContestRankMo.encode(message.contestRank[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ContestNo message, length delimited. Does not implicitly {@link Msg.ContestNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.ContestNo
         * @static
         * @param {Msg.IContestNo} message ContestNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContestNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContestNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.ContestNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.ContestNo} ContestNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContestNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.ContestNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.contestId = reader.int32();
                    break;
                case 2:
                    message.baseScore = reader.int32();
                    break;
                case 3:
                    if (!(message.contestRank && message.contestRank.length))
                        message.contestRank = [];
                    message.contestRank.push($root.Msg.ContestRankMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContestNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.ContestNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.ContestNo} ContestNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContestNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContestNo message.
         * @function verify
         * @memberof Msg.ContestNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContestNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.contestId != null && message.hasOwnProperty("contestId"))
                if (!$util.isInteger(message.contestId))
                    return "contestId: integer expected";
            if (message.baseScore != null && message.hasOwnProperty("baseScore"))
                if (!$util.isInteger(message.baseScore))
                    return "baseScore: integer expected";
            if (message.contestRank != null && message.hasOwnProperty("contestRank")) {
                if (!Array.isArray(message.contestRank))
                    return "contestRank: array expected";
                for (var i = 0; i < message.contestRank.length; ++i) {
                    var error = $root.Msg.ContestRankMo.verify(message.contestRank[i]);
                    if (error)
                        return "contestRank." + error;
                }
            }
            return null;
        };

        return ContestNo;
    })();

    Msg.Login = (function() {

        /**
         * Properties of a Login.
         * @memberof Msg
         * @interface ILogin
         * @property {string|null} [account] Login account
         */

        /**
         * Constructs a new Login.
         * @memberof Msg
         * @classdesc Represents a Login.
         * @implements ILogin
         * @constructor
         * @param {Msg.ILogin=} [properties] Properties to set
         */
        function Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Login account.
         * @member {string} account
         * @memberof Msg.Login
         * @instance
         */
        Login.prototype.account = "";

        /**
         * Creates a new Login instance using the specified properties.
         * @function create
         * @memberof Msg.Login
         * @static
         * @param {Msg.ILogin=} [properties] Properties to set
         * @returns {Msg.Login} Login instance
         */
        Login.create = function create(properties) {
            return new Login(properties);
        };

        /**
         * Encodes the specified Login message. Does not implicitly {@link Msg.Login.verify|verify} messages.
         * @function encode
         * @memberof Msg.Login
         * @static
         * @param {Msg.ILogin} message Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            return writer;
        };

        /**
         * Encodes the specified Login message, length delimited. Does not implicitly {@link Msg.Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.Login
         * @static
         * @param {Msg.ILogin} message Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.Login} Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.Login} Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Login message.
         * @function verify
         * @memberof Msg.Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            return null;
        };

        return Login;
    })();

    Msg.LoginTo = (function() {

        /**
         * Properties of a LoginTo.
         * @memberof Msg
         * @interface ILoginTo
         * @property {Msg.IPlayerMo|null} [player] LoginTo player
         * @property {Array.<Msg.IGridMo>|null} [grid] LoginTo grid
         */

        /**
         * Constructs a new LoginTo.
         * @memberof Msg
         * @classdesc Represents a LoginTo.
         * @implements ILoginTo
         * @constructor
         * @param {Msg.ILoginTo=} [properties] Properties to set
         */
        function LoginTo(properties) {
            this.grid = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginTo player.
         * @member {Msg.IPlayerMo|null|undefined} player
         * @memberof Msg.LoginTo
         * @instance
         */
        LoginTo.prototype.player = null;

        /**
         * LoginTo grid.
         * @member {Array.<Msg.IGridMo>} grid
         * @memberof Msg.LoginTo
         * @instance
         */
        LoginTo.prototype.grid = $util.emptyArray;

        /**
         * Creates a new LoginTo instance using the specified properties.
         * @function create
         * @memberof Msg.LoginTo
         * @static
         * @param {Msg.ILoginTo=} [properties] Properties to set
         * @returns {Msg.LoginTo} LoginTo instance
         */
        LoginTo.create = function create(properties) {
            return new LoginTo(properties);
        };

        /**
         * Encodes the specified LoginTo message. Does not implicitly {@link Msg.LoginTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.LoginTo
         * @static
         * @param {Msg.ILoginTo} message LoginTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.hasOwnProperty("player"))
                $root.Msg.PlayerMo.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.grid != null && message.grid.length)
                for (var i = 0; i < message.grid.length; ++i)
                    $root.Msg.GridMo.encode(message.grid[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginTo message, length delimited. Does not implicitly {@link Msg.LoginTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.LoginTo
         * @static
         * @param {Msg.ILoginTo} message LoginTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.LoginTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.LoginTo} LoginTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.LoginTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = $root.Msg.PlayerMo.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.grid && message.grid.length))
                        message.grid = [];
                    message.grid.push($root.Msg.GridMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.LoginTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.LoginTo} LoginTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginTo message.
         * @function verify
         * @memberof Msg.LoginTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.Msg.PlayerMo.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.grid != null && message.hasOwnProperty("grid")) {
                if (!Array.isArray(message.grid))
                    return "grid: array expected";
                for (var i = 0; i < message.grid.length; ++i) {
                    var error = $root.Msg.GridMo.verify(message.grid[i]);
                    if (error)
                        return "grid." + error;
                }
            }
            return null;
        };

        return LoginTo;
    })();

    Msg.PlayerMo = (function() {

        /**
         * Properties of a PlayerMo.
         * @memberof Msg
         * @interface IPlayerMo
         * @property {number|Long|null} [id] PlayerMo id
         * @property {string|null} [account] PlayerMo account
         * @property {string|null} [avatar] PlayerMo avatar
         * @property {string|null} [name] PlayerMo name
         * @property {number|null} [gender] PlayerMo gender
         * @property {number|null} [bean] PlayerMo bean
         * @property {number|null} [diamond] PlayerMo diamond
         */

        /**
         * Constructs a new PlayerMo.
         * @memberof Msg
         * @classdesc Represents a PlayerMo.
         * @implements IPlayerMo
         * @constructor
         * @param {Msg.IPlayerMo=} [properties] Properties to set
         */
        function PlayerMo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerMo id.
         * @member {number|Long} id
         * @memberof Msg.PlayerMo
         * @instance
         */
        PlayerMo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PlayerMo account.
         * @member {string} account
         * @memberof Msg.PlayerMo
         * @instance
         */
        PlayerMo.prototype.account = "";

        /**
         * PlayerMo avatar.
         * @member {string} avatar
         * @memberof Msg.PlayerMo
         * @instance
         */
        PlayerMo.prototype.avatar = "";

        /**
         * PlayerMo name.
         * @member {string} name
         * @memberof Msg.PlayerMo
         * @instance
         */
        PlayerMo.prototype.name = "";

        /**
         * PlayerMo gender.
         * @member {number} gender
         * @memberof Msg.PlayerMo
         * @instance
         */
        PlayerMo.prototype.gender = 0;

        /**
         * PlayerMo bean.
         * @member {number} bean
         * @memberof Msg.PlayerMo
         * @instance
         */
        PlayerMo.prototype.bean = 0;

        /**
         * PlayerMo diamond.
         * @member {number} diamond
         * @memberof Msg.PlayerMo
         * @instance
         */
        PlayerMo.prototype.diamond = 0;

        /**
         * Creates a new PlayerMo instance using the specified properties.
         * @function create
         * @memberof Msg.PlayerMo
         * @static
         * @param {Msg.IPlayerMo=} [properties] Properties to set
         * @returns {Msg.PlayerMo} PlayerMo instance
         */
        PlayerMo.create = function create(properties) {
            return new PlayerMo(properties);
        };

        /**
         * Encodes the specified PlayerMo message. Does not implicitly {@link Msg.PlayerMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.PlayerMo
         * @static
         * @param {Msg.IPlayerMo} message PlayerMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.account);
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.avatar);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.gender != null && message.hasOwnProperty("gender"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gender);
            if (message.bean != null && message.hasOwnProperty("bean"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.bean);
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.diamond);
            return writer;
        };

        /**
         * Encodes the specified PlayerMo message, length delimited. Does not implicitly {@link Msg.PlayerMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.PlayerMo
         * @static
         * @param {Msg.IPlayerMo} message PlayerMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.PlayerMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.PlayerMo} PlayerMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.PlayerMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.account = reader.string();
                    break;
                case 3:
                    message.avatar = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.gender = reader.int32();
                    break;
                case 6:
                    message.bean = reader.int32();
                    break;
                case 7:
                    message.diamond = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.PlayerMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.PlayerMo} PlayerMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerMo message.
         * @function verify
         * @memberof Msg.PlayerMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isInteger(message.gender))
                    return "gender: integer expected";
            if (message.bean != null && message.hasOwnProperty("bean"))
                if (!$util.isInteger(message.bean))
                    return "bean: integer expected";
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (!$util.isInteger(message.diamond))
                    return "diamond: integer expected";
            return null;
        };

        return PlayerMo;
    })();

    Msg.GetPlayer = (function() {

        /**
         * Properties of a GetPlayer.
         * @memberof Msg
         * @interface IGetPlayer
         */

        /**
         * Constructs a new GetPlayer.
         * @memberof Msg
         * @classdesc Represents a GetPlayer.
         * @implements IGetPlayer
         * @constructor
         * @param {Msg.IGetPlayer=} [properties] Properties to set
         */
        function GetPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetPlayer instance using the specified properties.
         * @function create
         * @memberof Msg.GetPlayer
         * @static
         * @param {Msg.IGetPlayer=} [properties] Properties to set
         * @returns {Msg.GetPlayer} GetPlayer instance
         */
        GetPlayer.create = function create(properties) {
            return new GetPlayer(properties);
        };

        /**
         * Encodes the specified GetPlayer message. Does not implicitly {@link Msg.GetPlayer.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetPlayer
         * @static
         * @param {Msg.IGetPlayer} message GetPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetPlayer message, length delimited. Does not implicitly {@link Msg.GetPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetPlayer
         * @static
         * @param {Msg.IGetPlayer} message GetPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetPlayer} GetPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetPlayer} GetPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPlayer message.
         * @function verify
         * @memberof Msg.GetPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetPlayer;
    })();

    Msg.GetPlayerTo = (function() {

        /**
         * Properties of a GetPlayerTo.
         * @memberof Msg
         * @interface IGetPlayerTo
         * @property {Msg.IPlayerMo|null} [player] GetPlayerTo player
         */

        /**
         * Constructs a new GetPlayerTo.
         * @memberof Msg
         * @classdesc Represents a GetPlayerTo.
         * @implements IGetPlayerTo
         * @constructor
         * @param {Msg.IGetPlayerTo=} [properties] Properties to set
         */
        function GetPlayerTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPlayerTo player.
         * @member {Msg.IPlayerMo|null|undefined} player
         * @memberof Msg.GetPlayerTo
         * @instance
         */
        GetPlayerTo.prototype.player = null;

        /**
         * Creates a new GetPlayerTo instance using the specified properties.
         * @function create
         * @memberof Msg.GetPlayerTo
         * @static
         * @param {Msg.IGetPlayerTo=} [properties] Properties to set
         * @returns {Msg.GetPlayerTo} GetPlayerTo instance
         */
        GetPlayerTo.create = function create(properties) {
            return new GetPlayerTo(properties);
        };

        /**
         * Encodes the specified GetPlayerTo message. Does not implicitly {@link Msg.GetPlayerTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetPlayerTo
         * @static
         * @param {Msg.IGetPlayerTo} message GetPlayerTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.hasOwnProperty("player"))
                $root.Msg.PlayerMo.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetPlayerTo message, length delimited. Does not implicitly {@link Msg.GetPlayerTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetPlayerTo
         * @static
         * @param {Msg.IGetPlayerTo} message GetPlayerTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPlayerTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPlayerTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetPlayerTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetPlayerTo} GetPlayerTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetPlayerTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = $root.Msg.PlayerMo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetPlayerTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetPlayerTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetPlayerTo} GetPlayerTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPlayerTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPlayerTo message.
         * @function verify
         * @memberof Msg.GetPlayerTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPlayerTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.Msg.PlayerMo.verify(message.player);
                if (error)
                    return "player." + error;
            }
            return null;
        };

        return GetPlayerTo;
    })();

    Msg.UpdatePlayerNo = (function() {

        /**
         * Properties of an UpdatePlayerNo.
         * @memberof Msg
         * @interface IUpdatePlayerNo
         * @property {Msg.IPlayerMo|null} [player] UpdatePlayerNo player
         */

        /**
         * Constructs a new UpdatePlayerNo.
         * @memberof Msg
         * @classdesc Represents an UpdatePlayerNo.
         * @implements IUpdatePlayerNo
         * @constructor
         * @param {Msg.IUpdatePlayerNo=} [properties] Properties to set
         */
        function UpdatePlayerNo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdatePlayerNo player.
         * @member {Msg.IPlayerMo|null|undefined} player
         * @memberof Msg.UpdatePlayerNo
         * @instance
         */
        UpdatePlayerNo.prototype.player = null;

        /**
         * Creates a new UpdatePlayerNo instance using the specified properties.
         * @function create
         * @memberof Msg.UpdatePlayerNo
         * @static
         * @param {Msg.IUpdatePlayerNo=} [properties] Properties to set
         * @returns {Msg.UpdatePlayerNo} UpdatePlayerNo instance
         */
        UpdatePlayerNo.create = function create(properties) {
            return new UpdatePlayerNo(properties);
        };

        /**
         * Encodes the specified UpdatePlayerNo message. Does not implicitly {@link Msg.UpdatePlayerNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.UpdatePlayerNo
         * @static
         * @param {Msg.IUpdatePlayerNo} message UpdatePlayerNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePlayerNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.hasOwnProperty("player"))
                $root.Msg.PlayerMo.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdatePlayerNo message, length delimited. Does not implicitly {@link Msg.UpdatePlayerNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.UpdatePlayerNo
         * @static
         * @param {Msg.IUpdatePlayerNo} message UpdatePlayerNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdatePlayerNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdatePlayerNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.UpdatePlayerNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.UpdatePlayerNo} UpdatePlayerNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePlayerNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.UpdatePlayerNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = $root.Msg.PlayerMo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdatePlayerNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.UpdatePlayerNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.UpdatePlayerNo} UpdatePlayerNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdatePlayerNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdatePlayerNo message.
         * @function verify
         * @memberof Msg.UpdatePlayerNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdatePlayerNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.Msg.PlayerMo.verify(message.player);
                if (error)
                    return "player." + error;
            }
            return null;
        };

        return UpdatePlayerNo;
    })();

    Msg.MailMo = (function() {

        /**
         * Properties of a MailMo.
         * @memberof Msg
         * @interface IMailMo
         * @property {number|Long|null} [id] MailMo id
         * @property {number|null} [mailId] MailMo mailId
         * @property {string|null} [sendName] MailMo sendName
         * @property {number|Long|null} [sendTime] MailMo sendTime
         * @property {Array.<Msg.IItemMo>|null} [reward] MailMo reward
         * @property {number|null} [isReceive] MailMo isReceive
         * @property {Array.<string>|null} [params] MailMo params
         */

        /**
         * Constructs a new MailMo.
         * @memberof Msg
         * @classdesc Represents a MailMo.
         * @implements IMailMo
         * @constructor
         * @param {Msg.IMailMo=} [properties] Properties to set
         */
        function MailMo(properties) {
            this.reward = [];
            this.params = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailMo id.
         * @member {number|Long} id
         * @memberof Msg.MailMo
         * @instance
         */
        MailMo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MailMo mailId.
         * @member {number} mailId
         * @memberof Msg.MailMo
         * @instance
         */
        MailMo.prototype.mailId = 0;

        /**
         * MailMo sendName.
         * @member {string} sendName
         * @memberof Msg.MailMo
         * @instance
         */
        MailMo.prototype.sendName = "";

        /**
         * MailMo sendTime.
         * @member {number|Long} sendTime
         * @memberof Msg.MailMo
         * @instance
         */
        MailMo.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MailMo reward.
         * @member {Array.<Msg.IItemMo>} reward
         * @memberof Msg.MailMo
         * @instance
         */
        MailMo.prototype.reward = $util.emptyArray;

        /**
         * MailMo isReceive.
         * @member {number} isReceive
         * @memberof Msg.MailMo
         * @instance
         */
        MailMo.prototype.isReceive = 0;

        /**
         * MailMo params.
         * @member {Array.<string>} params
         * @memberof Msg.MailMo
         * @instance
         */
        MailMo.prototype.params = $util.emptyArray;

        /**
         * Creates a new MailMo instance using the specified properties.
         * @function create
         * @memberof Msg.MailMo
         * @static
         * @param {Msg.IMailMo=} [properties] Properties to set
         * @returns {Msg.MailMo} MailMo instance
         */
        MailMo.create = function create(properties) {
            return new MailMo(properties);
        };

        /**
         * Encodes the specified MailMo message. Does not implicitly {@link Msg.MailMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.MailMo
         * @static
         * @param {Msg.IMailMo} message MailMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mailId);
            if (message.sendName != null && message.hasOwnProperty("sendName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sendName);
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.sendTime);
            if (message.reward != null && message.reward.length)
                for (var i = 0; i < message.reward.length; ++i)
                    $root.Msg.ItemMo.encode(message.reward[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.isReceive != null && message.hasOwnProperty("isReceive"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.isReceive);
            if (message.params != null && message.params.length)
                for (var i = 0; i < message.params.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.params[i]);
            return writer;
        };

        /**
         * Encodes the specified MailMo message, length delimited. Does not implicitly {@link Msg.MailMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.MailMo
         * @static
         * @param {Msg.IMailMo} message MailMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.MailMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.MailMo} MailMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.MailMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.mailId = reader.int32();
                    break;
                case 3:
                    message.sendName = reader.string();
                    break;
                case 4:
                    message.sendTime = reader.int64();
                    break;
                case 5:
                    if (!(message.reward && message.reward.length))
                        message.reward = [];
                    message.reward.push($root.Msg.ItemMo.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.isReceive = reader.int32();
                    break;
                case 7:
                    if (!(message.params && message.params.length))
                        message.params = [];
                    message.params.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MailMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.MailMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.MailMo} MailMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailMo message.
         * @function verify
         * @memberof Msg.MailMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                if (!$util.isInteger(message.mailId))
                    return "mailId: integer expected";
            if (message.sendName != null && message.hasOwnProperty("sendName"))
                if (!$util.isString(message.sendName))
                    return "sendName: string expected";
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (!$util.isInteger(message.sendTime) && !(message.sendTime && $util.isInteger(message.sendTime.low) && $util.isInteger(message.sendTime.high)))
                    return "sendTime: integer|Long expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (var i = 0; i < message.reward.length; ++i) {
                    var error = $root.Msg.ItemMo.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            if (message.isReceive != null && message.hasOwnProperty("isReceive"))
                if (!$util.isInteger(message.isReceive))
                    return "isReceive: integer expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (var i = 0; i < message.params.length; ++i)
                    if (!$util.isString(message.params[i]))
                        return "params: string[] expected";
            }
            return null;
        };

        return MailMo;
    })();

    Msg.GetMail = (function() {

        /**
         * Properties of a GetMail.
         * @memberof Msg
         * @interface IGetMail
         */

        /**
         * Constructs a new GetMail.
         * @memberof Msg
         * @classdesc Represents a GetMail.
         * @implements IGetMail
         * @constructor
         * @param {Msg.IGetMail=} [properties] Properties to set
         */
        function GetMail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetMail instance using the specified properties.
         * @function create
         * @memberof Msg.GetMail
         * @static
         * @param {Msg.IGetMail=} [properties] Properties to set
         * @returns {Msg.GetMail} GetMail instance
         */
        GetMail.create = function create(properties) {
            return new GetMail(properties);
        };

        /**
         * Encodes the specified GetMail message. Does not implicitly {@link Msg.GetMail.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetMail
         * @static
         * @param {Msg.IGetMail} message GetMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetMail message, length delimited. Does not implicitly {@link Msg.GetMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetMail
         * @static
         * @param {Msg.IGetMail} message GetMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetMail message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetMail} GetMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetMail} GetMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetMail message.
         * @function verify
         * @memberof Msg.GetMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetMail;
    })();

    Msg.GetMailTo = (function() {

        /**
         * Properties of a GetMailTo.
         * @memberof Msg
         * @interface IGetMailTo
         * @property {Array.<Msg.IMailMo>|null} [mail] GetMailTo mail
         */

        /**
         * Constructs a new GetMailTo.
         * @memberof Msg
         * @classdesc Represents a GetMailTo.
         * @implements IGetMailTo
         * @constructor
         * @param {Msg.IGetMailTo=} [properties] Properties to set
         */
        function GetMailTo(properties) {
            this.mail = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetMailTo mail.
         * @member {Array.<Msg.IMailMo>} mail
         * @memberof Msg.GetMailTo
         * @instance
         */
        GetMailTo.prototype.mail = $util.emptyArray;

        /**
         * Creates a new GetMailTo instance using the specified properties.
         * @function create
         * @memberof Msg.GetMailTo
         * @static
         * @param {Msg.IGetMailTo=} [properties] Properties to set
         * @returns {Msg.GetMailTo} GetMailTo instance
         */
        GetMailTo.create = function create(properties) {
            return new GetMailTo(properties);
        };

        /**
         * Encodes the specified GetMailTo message. Does not implicitly {@link Msg.GetMailTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetMailTo
         * @static
         * @param {Msg.IGetMailTo} message GetMailTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMailTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mail != null && message.mail.length)
                for (var i = 0; i < message.mail.length; ++i)
                    $root.Msg.MailMo.encode(message.mail[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetMailTo message, length delimited. Does not implicitly {@link Msg.GetMailTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetMailTo
         * @static
         * @param {Msg.IGetMailTo} message GetMailTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMailTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetMailTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetMailTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetMailTo} GetMailTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMailTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetMailTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.mail && message.mail.length))
                        message.mail = [];
                    message.mail.push($root.Msg.MailMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetMailTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetMailTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetMailTo} GetMailTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMailTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetMailTo message.
         * @function verify
         * @memberof Msg.GetMailTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMailTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mail != null && message.hasOwnProperty("mail")) {
                if (!Array.isArray(message.mail))
                    return "mail: array expected";
                for (var i = 0; i < message.mail.length; ++i) {
                    var error = $root.Msg.MailMo.verify(message.mail[i]);
                    if (error)
                        return "mail." + error;
                }
            }
            return null;
        };

        return GetMailTo;
    })();

    Msg.DelMail = (function() {

        /**
         * Properties of a DelMail.
         * @memberof Msg
         * @interface IDelMail
         * @property {Array.<number|Long>|null} [id] DelMail id
         */

        /**
         * Constructs a new DelMail.
         * @memberof Msg
         * @classdesc Represents a DelMail.
         * @implements IDelMail
         * @constructor
         * @param {Msg.IDelMail=} [properties] Properties to set
         */
        function DelMail(properties) {
            this.id = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelMail id.
         * @member {Array.<number|Long>} id
         * @memberof Msg.DelMail
         * @instance
         */
        DelMail.prototype.id = $util.emptyArray;

        /**
         * Creates a new DelMail instance using the specified properties.
         * @function create
         * @memberof Msg.DelMail
         * @static
         * @param {Msg.IDelMail=} [properties] Properties to set
         * @returns {Msg.DelMail} DelMail instance
         */
        DelMail.create = function create(properties) {
            return new DelMail(properties);
        };

        /**
         * Encodes the specified DelMail message. Does not implicitly {@link Msg.DelMail.verify|verify} messages.
         * @function encode
         * @memberof Msg.DelMail
         * @static
         * @param {Msg.IDelMail} message DelMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.id.length)
                for (var i = 0; i < message.id.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id[i]);
            return writer;
        };

        /**
         * Encodes the specified DelMail message, length delimited. Does not implicitly {@link Msg.DelMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.DelMail
         * @static
         * @param {Msg.IDelMail} message DelMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelMail message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.DelMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.DelMail} DelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelMail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.DelMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.id && message.id.length))
                        message.id = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.id.push(reader.int64());
                    } else
                        message.id.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DelMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.DelMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.DelMail} DelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelMail message.
         * @function verify
         * @memberof Msg.DelMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id")) {
                if (!Array.isArray(message.id))
                    return "id: array expected";
                for (var i = 0; i < message.id.length; ++i)
                    if (!$util.isInteger(message.id[i]) && !(message.id[i] && $util.isInteger(message.id[i].low) && $util.isInteger(message.id[i].high)))
                        return "id: integer|Long[] expected";
            }
            return null;
        };

        return DelMail;
    })();

    Msg.DelMailTo = (function() {

        /**
         * Properties of a DelMailTo.
         * @memberof Msg
         * @interface IDelMailTo
         * @property {Array.<number|Long>|null} [id] DelMailTo id
         */

        /**
         * Constructs a new DelMailTo.
         * @memberof Msg
         * @classdesc Represents a DelMailTo.
         * @implements IDelMailTo
         * @constructor
         * @param {Msg.IDelMailTo=} [properties] Properties to set
         */
        function DelMailTo(properties) {
            this.id = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelMailTo id.
         * @member {Array.<number|Long>} id
         * @memberof Msg.DelMailTo
         * @instance
         */
        DelMailTo.prototype.id = $util.emptyArray;

        /**
         * Creates a new DelMailTo instance using the specified properties.
         * @function create
         * @memberof Msg.DelMailTo
         * @static
         * @param {Msg.IDelMailTo=} [properties] Properties to set
         * @returns {Msg.DelMailTo} DelMailTo instance
         */
        DelMailTo.create = function create(properties) {
            return new DelMailTo(properties);
        };

        /**
         * Encodes the specified DelMailTo message. Does not implicitly {@link Msg.DelMailTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.DelMailTo
         * @static
         * @param {Msg.IDelMailTo} message DelMailTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelMailTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.id.length)
                for (var i = 0; i < message.id.length; ++i)
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id[i]);
            return writer;
        };

        /**
         * Encodes the specified DelMailTo message, length delimited. Does not implicitly {@link Msg.DelMailTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.DelMailTo
         * @static
         * @param {Msg.IDelMailTo} message DelMailTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelMailTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelMailTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.DelMailTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.DelMailTo} DelMailTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelMailTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.DelMailTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.id && message.id.length))
                        message.id = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.id.push(reader.int64());
                    } else
                        message.id.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DelMailTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.DelMailTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.DelMailTo} DelMailTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelMailTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelMailTo message.
         * @function verify
         * @memberof Msg.DelMailTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelMailTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id")) {
                if (!Array.isArray(message.id))
                    return "id: array expected";
                for (var i = 0; i < message.id.length; ++i)
                    if (!$util.isInteger(message.id[i]) && !(message.id[i] && $util.isInteger(message.id[i].low) && $util.isInteger(message.id[i].high)))
                        return "id: integer|Long[] expected";
            }
            return null;
        };

        return DelMailTo;
    })();

    Msg.GetMailReward = (function() {

        /**
         * Properties of a GetMailReward.
         * @memberof Msg
         * @interface IGetMailReward
         * @property {number|Long|null} [id] GetMailReward id
         */

        /**
         * Constructs a new GetMailReward.
         * @memberof Msg
         * @classdesc Represents a GetMailReward.
         * @implements IGetMailReward
         * @constructor
         * @param {Msg.IGetMailReward=} [properties] Properties to set
         */
        function GetMailReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetMailReward id.
         * @member {number|Long} id
         * @memberof Msg.GetMailReward
         * @instance
         */
        GetMailReward.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetMailReward instance using the specified properties.
         * @function create
         * @memberof Msg.GetMailReward
         * @static
         * @param {Msg.IGetMailReward=} [properties] Properties to set
         * @returns {Msg.GetMailReward} GetMailReward instance
         */
        GetMailReward.create = function create(properties) {
            return new GetMailReward(properties);
        };

        /**
         * Encodes the specified GetMailReward message. Does not implicitly {@link Msg.GetMailReward.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetMailReward
         * @static
         * @param {Msg.IGetMailReward} message GetMailReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMailReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            return writer;
        };

        /**
         * Encodes the specified GetMailReward message, length delimited. Does not implicitly {@link Msg.GetMailReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetMailReward
         * @static
         * @param {Msg.IGetMailReward} message GetMailReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMailReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetMailReward message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetMailReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetMailReward} GetMailReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMailReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetMailReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetMailReward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetMailReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetMailReward} GetMailReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMailReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetMailReward message.
         * @function verify
         * @memberof Msg.GetMailReward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMailReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        return GetMailReward;
    })();

    Msg.GetMailRewardTo = (function() {

        /**
         * Properties of a GetMailRewardTo.
         * @memberof Msg
         * @interface IGetMailRewardTo
         * @property {Array.<Msg.IItemMo>|null} [reward] GetMailRewardTo reward
         */

        /**
         * Constructs a new GetMailRewardTo.
         * @memberof Msg
         * @classdesc Represents a GetMailRewardTo.
         * @implements IGetMailRewardTo
         * @constructor
         * @param {Msg.IGetMailRewardTo=} [properties] Properties to set
         */
        function GetMailRewardTo(properties) {
            this.reward = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetMailRewardTo reward.
         * @member {Array.<Msg.IItemMo>} reward
         * @memberof Msg.GetMailRewardTo
         * @instance
         */
        GetMailRewardTo.prototype.reward = $util.emptyArray;

        /**
         * Creates a new GetMailRewardTo instance using the specified properties.
         * @function create
         * @memberof Msg.GetMailRewardTo
         * @static
         * @param {Msg.IGetMailRewardTo=} [properties] Properties to set
         * @returns {Msg.GetMailRewardTo} GetMailRewardTo instance
         */
        GetMailRewardTo.create = function create(properties) {
            return new GetMailRewardTo(properties);
        };

        /**
         * Encodes the specified GetMailRewardTo message. Does not implicitly {@link Msg.GetMailRewardTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetMailRewardTo
         * @static
         * @param {Msg.IGetMailRewardTo} message GetMailRewardTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMailRewardTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reward != null && message.reward.length)
                for (var i = 0; i < message.reward.length; ++i)
                    $root.Msg.ItemMo.encode(message.reward[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetMailRewardTo message, length delimited. Does not implicitly {@link Msg.GetMailRewardTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetMailRewardTo
         * @static
         * @param {Msg.IGetMailRewardTo} message GetMailRewardTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMailRewardTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetMailRewardTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetMailRewardTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetMailRewardTo} GetMailRewardTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMailRewardTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetMailRewardTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.reward && message.reward.length))
                        message.reward = [];
                    message.reward.push($root.Msg.ItemMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetMailRewardTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetMailRewardTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetMailRewardTo} GetMailRewardTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMailRewardTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetMailRewardTo message.
         * @function verify
         * @memberof Msg.GetMailRewardTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMailRewardTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (var i = 0; i < message.reward.length; ++i) {
                    var error = $root.Msg.ItemMo.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            return null;
        };

        return GetMailRewardTo;
    })();

    Msg.MailNo = (function() {

        /**
         * Properties of a MailNo.
         * @memberof Msg
         * @interface IMailNo
         * @property {Msg.IMailMo|null} [mail] MailNo mail
         */

        /**
         * Constructs a new MailNo.
         * @memberof Msg
         * @classdesc Represents a MailNo.
         * @implements IMailNo
         * @constructor
         * @param {Msg.IMailNo=} [properties] Properties to set
         */
        function MailNo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailNo mail.
         * @member {Msg.IMailMo|null|undefined} mail
         * @memberof Msg.MailNo
         * @instance
         */
        MailNo.prototype.mail = null;

        /**
         * Creates a new MailNo instance using the specified properties.
         * @function create
         * @memberof Msg.MailNo
         * @static
         * @param {Msg.IMailNo=} [properties] Properties to set
         * @returns {Msg.MailNo} MailNo instance
         */
        MailNo.create = function create(properties) {
            return new MailNo(properties);
        };

        /**
         * Encodes the specified MailNo message. Does not implicitly {@link Msg.MailNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.MailNo
         * @static
         * @param {Msg.IMailNo} message MailNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mail != null && message.hasOwnProperty("mail"))
                $root.Msg.MailMo.encode(message.mail, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MailNo message, length delimited. Does not implicitly {@link Msg.MailNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.MailNo
         * @static
         * @param {Msg.IMailNo} message MailNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.MailNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.MailNo} MailNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.MailNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mail = $root.Msg.MailMo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MailNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.MailNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.MailNo} MailNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailNo message.
         * @function verify
         * @memberof Msg.MailNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mail != null && message.hasOwnProperty("mail")) {
                var error = $root.Msg.MailMo.verify(message.mail);
                if (error)
                    return "mail." + error;
            }
            return null;
        };

        return MailNo;
    })();

    Msg.MatchSiteMo = (function() {

        /**
         * Properties of a MatchSiteMo.
         * @memberof Msg
         * @interface IMatchSiteMo
         * @property {number|null} [siteId] MatchSiteMo siteId
         * @property {number|null} [playerNum] MatchSiteMo playerNum
         */

        /**
         * Constructs a new MatchSiteMo.
         * @memberof Msg
         * @classdesc Represents a MatchSiteMo.
         * @implements IMatchSiteMo
         * @constructor
         * @param {Msg.IMatchSiteMo=} [properties] Properties to set
         */
        function MatchSiteMo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchSiteMo siteId.
         * @member {number} siteId
         * @memberof Msg.MatchSiteMo
         * @instance
         */
        MatchSiteMo.prototype.siteId = 0;

        /**
         * MatchSiteMo playerNum.
         * @member {number} playerNum
         * @memberof Msg.MatchSiteMo
         * @instance
         */
        MatchSiteMo.prototype.playerNum = 0;

        /**
         * Creates a new MatchSiteMo instance using the specified properties.
         * @function create
         * @memberof Msg.MatchSiteMo
         * @static
         * @param {Msg.IMatchSiteMo=} [properties] Properties to set
         * @returns {Msg.MatchSiteMo} MatchSiteMo instance
         */
        MatchSiteMo.create = function create(properties) {
            return new MatchSiteMo(properties);
        };

        /**
         * Encodes the specified MatchSiteMo message. Does not implicitly {@link Msg.MatchSiteMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.MatchSiteMo
         * @static
         * @param {Msg.IMatchSiteMo} message MatchSiteMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchSiteMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.siteId);
            if (message.playerNum != null && message.hasOwnProperty("playerNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerNum);
            return writer;
        };

        /**
         * Encodes the specified MatchSiteMo message, length delimited. Does not implicitly {@link Msg.MatchSiteMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.MatchSiteMo
         * @static
         * @param {Msg.IMatchSiteMo} message MatchSiteMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchSiteMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchSiteMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.MatchSiteMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.MatchSiteMo} MatchSiteMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchSiteMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.MatchSiteMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.siteId = reader.int32();
                    break;
                case 2:
                    message.playerNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchSiteMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.MatchSiteMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.MatchSiteMo} MatchSiteMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchSiteMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchSiteMo message.
         * @function verify
         * @memberof Msg.MatchSiteMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchSiteMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                if (!$util.isInteger(message.siteId))
                    return "siteId: integer expected";
            if (message.playerNum != null && message.hasOwnProperty("playerNum"))
                if (!$util.isInteger(message.playerNum))
                    return "playerNum: integer expected";
            return null;
        };

        return MatchSiteMo;
    })();

    Msg.Match = (function() {

        /**
         * Properties of a Match.
         * @memberof Msg
         * @interface IMatch
         * @property {number|null} [siteId] Match siteId
         */

        /**
         * Constructs a new Match.
         * @memberof Msg
         * @classdesc Represents a Match.
         * @implements IMatch
         * @constructor
         * @param {Msg.IMatch=} [properties] Properties to set
         */
        function Match(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Match siteId.
         * @member {number} siteId
         * @memberof Msg.Match
         * @instance
         */
        Match.prototype.siteId = 0;

        /**
         * Creates a new Match instance using the specified properties.
         * @function create
         * @memberof Msg.Match
         * @static
         * @param {Msg.IMatch=} [properties] Properties to set
         * @returns {Msg.Match} Match instance
         */
        Match.create = function create(properties) {
            return new Match(properties);
        };

        /**
         * Encodes the specified Match message. Does not implicitly {@link Msg.Match.verify|verify} messages.
         * @function encode
         * @memberof Msg.Match
         * @static
         * @param {Msg.IMatch} message Match message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Match.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.siteId);
            return writer;
        };

        /**
         * Encodes the specified Match message, length delimited. Does not implicitly {@link Msg.Match.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.Match
         * @static
         * @param {Msg.IMatch} message Match message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Match.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Match message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.Match
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.Match} Match
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Match.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.Match();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.siteId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Match message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.Match
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.Match} Match
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Match.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Match message.
         * @function verify
         * @memberof Msg.Match
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Match.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                if (!$util.isInteger(message.siteId))
                    return "siteId: integer expected";
            return null;
        };

        return Match;
    })();

    Msg.MatchTo = (function() {

        /**
         * Properties of a MatchTo.
         * @memberof Msg
         * @interface IMatchTo
         * @property {number|null} [siteId] MatchTo siteId
         */

        /**
         * Constructs a new MatchTo.
         * @memberof Msg
         * @classdesc Represents a MatchTo.
         * @implements IMatchTo
         * @constructor
         * @param {Msg.IMatchTo=} [properties] Properties to set
         */
        function MatchTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchTo siteId.
         * @member {number} siteId
         * @memberof Msg.MatchTo
         * @instance
         */
        MatchTo.prototype.siteId = 0;

        /**
         * Creates a new MatchTo instance using the specified properties.
         * @function create
         * @memberof Msg.MatchTo
         * @static
         * @param {Msg.IMatchTo=} [properties] Properties to set
         * @returns {Msg.MatchTo} MatchTo instance
         */
        MatchTo.create = function create(properties) {
            return new MatchTo(properties);
        };

        /**
         * Encodes the specified MatchTo message. Does not implicitly {@link Msg.MatchTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.MatchTo
         * @static
         * @param {Msg.IMatchTo} message MatchTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.siteId);
            return writer;
        };

        /**
         * Encodes the specified MatchTo message, length delimited. Does not implicitly {@link Msg.MatchTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.MatchTo
         * @static
         * @param {Msg.IMatchTo} message MatchTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MatchTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.MatchTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.MatchTo} MatchTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.MatchTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.siteId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MatchTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.MatchTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.MatchTo} MatchTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MatchTo message.
         * @function verify
         * @memberof Msg.MatchTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MatchTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                if (!$util.isInteger(message.siteId))
                    return "siteId: integer expected";
            return null;
        };

        return MatchTo;
    })();

    Msg.CancelMatch = (function() {

        /**
         * Properties of a CancelMatch.
         * @memberof Msg
         * @interface ICancelMatch
         */

        /**
         * Constructs a new CancelMatch.
         * @memberof Msg
         * @classdesc Represents a CancelMatch.
         * @implements ICancelMatch
         * @constructor
         * @param {Msg.ICancelMatch=} [properties] Properties to set
         */
        function CancelMatch(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CancelMatch instance using the specified properties.
         * @function create
         * @memberof Msg.CancelMatch
         * @static
         * @param {Msg.ICancelMatch=} [properties] Properties to set
         * @returns {Msg.CancelMatch} CancelMatch instance
         */
        CancelMatch.create = function create(properties) {
            return new CancelMatch(properties);
        };

        /**
         * Encodes the specified CancelMatch message. Does not implicitly {@link Msg.CancelMatch.verify|verify} messages.
         * @function encode
         * @memberof Msg.CancelMatch
         * @static
         * @param {Msg.ICancelMatch} message CancelMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelMatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CancelMatch message, length delimited. Does not implicitly {@link Msg.CancelMatch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.CancelMatch
         * @static
         * @param {Msg.ICancelMatch} message CancelMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelMatch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelMatch message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.CancelMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.CancelMatch} CancelMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelMatch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.CancelMatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelMatch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.CancelMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.CancelMatch} CancelMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelMatch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelMatch message.
         * @function verify
         * @memberof Msg.CancelMatch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelMatch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return CancelMatch;
    })();

    Msg.CancelMatchTo = (function() {

        /**
         * Properties of a CancelMatchTo.
         * @memberof Msg
         * @interface ICancelMatchTo
         */

        /**
         * Constructs a new CancelMatchTo.
         * @memberof Msg
         * @classdesc Represents a CancelMatchTo.
         * @implements ICancelMatchTo
         * @constructor
         * @param {Msg.ICancelMatchTo=} [properties] Properties to set
         */
        function CancelMatchTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CancelMatchTo instance using the specified properties.
         * @function create
         * @memberof Msg.CancelMatchTo
         * @static
         * @param {Msg.ICancelMatchTo=} [properties] Properties to set
         * @returns {Msg.CancelMatchTo} CancelMatchTo instance
         */
        CancelMatchTo.create = function create(properties) {
            return new CancelMatchTo(properties);
        };

        /**
         * Encodes the specified CancelMatchTo message. Does not implicitly {@link Msg.CancelMatchTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.CancelMatchTo
         * @static
         * @param {Msg.ICancelMatchTo} message CancelMatchTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelMatchTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CancelMatchTo message, length delimited. Does not implicitly {@link Msg.CancelMatchTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.CancelMatchTo
         * @static
         * @param {Msg.ICancelMatchTo} message CancelMatchTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelMatchTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelMatchTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.CancelMatchTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.CancelMatchTo} CancelMatchTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelMatchTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.CancelMatchTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelMatchTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.CancelMatchTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.CancelMatchTo} CancelMatchTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelMatchTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelMatchTo message.
         * @function verify
         * @memberof Msg.CancelMatchTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelMatchTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return CancelMatchTo;
    })();

    Msg.GetMatchSite = (function() {

        /**
         * Properties of a GetMatchSite.
         * @memberof Msg
         * @interface IGetMatchSite
         * @property {number|null} [siteType] GetMatchSite siteType
         */

        /**
         * Constructs a new GetMatchSite.
         * @memberof Msg
         * @classdesc Represents a GetMatchSite.
         * @implements IGetMatchSite
         * @constructor
         * @param {Msg.IGetMatchSite=} [properties] Properties to set
         */
        function GetMatchSite(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetMatchSite siteType.
         * @member {number} siteType
         * @memberof Msg.GetMatchSite
         * @instance
         */
        GetMatchSite.prototype.siteType = 0;

        /**
         * Creates a new GetMatchSite instance using the specified properties.
         * @function create
         * @memberof Msg.GetMatchSite
         * @static
         * @param {Msg.IGetMatchSite=} [properties] Properties to set
         * @returns {Msg.GetMatchSite} GetMatchSite instance
         */
        GetMatchSite.create = function create(properties) {
            return new GetMatchSite(properties);
        };

        /**
         * Encodes the specified GetMatchSite message. Does not implicitly {@link Msg.GetMatchSite.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetMatchSite
         * @static
         * @param {Msg.IGetMatchSite} message GetMatchSite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMatchSite.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.siteType != null && message.hasOwnProperty("siteType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.siteType);
            return writer;
        };

        /**
         * Encodes the specified GetMatchSite message, length delimited. Does not implicitly {@link Msg.GetMatchSite.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetMatchSite
         * @static
         * @param {Msg.IGetMatchSite} message GetMatchSite message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMatchSite.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetMatchSite message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetMatchSite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetMatchSite} GetMatchSite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMatchSite.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetMatchSite();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.siteType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetMatchSite message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetMatchSite
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetMatchSite} GetMatchSite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMatchSite.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetMatchSite message.
         * @function verify
         * @memberof Msg.GetMatchSite
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMatchSite.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.siteType != null && message.hasOwnProperty("siteType"))
                if (!$util.isInteger(message.siteType))
                    return "siteType: integer expected";
            return null;
        };

        return GetMatchSite;
    })();

    Msg.GetMatchSiteTo = (function() {

        /**
         * Properties of a GetMatchSiteTo.
         * @memberof Msg
         * @interface IGetMatchSiteTo
         * @property {Array.<Msg.IMatchSiteMo>|null} [matchSite] GetMatchSiteTo matchSite
         */

        /**
         * Constructs a new GetMatchSiteTo.
         * @memberof Msg
         * @classdesc Represents a GetMatchSiteTo.
         * @implements IGetMatchSiteTo
         * @constructor
         * @param {Msg.IGetMatchSiteTo=} [properties] Properties to set
         */
        function GetMatchSiteTo(properties) {
            this.matchSite = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetMatchSiteTo matchSite.
         * @member {Array.<Msg.IMatchSiteMo>} matchSite
         * @memberof Msg.GetMatchSiteTo
         * @instance
         */
        GetMatchSiteTo.prototype.matchSite = $util.emptyArray;

        /**
         * Creates a new GetMatchSiteTo instance using the specified properties.
         * @function create
         * @memberof Msg.GetMatchSiteTo
         * @static
         * @param {Msg.IGetMatchSiteTo=} [properties] Properties to set
         * @returns {Msg.GetMatchSiteTo} GetMatchSiteTo instance
         */
        GetMatchSiteTo.create = function create(properties) {
            return new GetMatchSiteTo(properties);
        };

        /**
         * Encodes the specified GetMatchSiteTo message. Does not implicitly {@link Msg.GetMatchSiteTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetMatchSiteTo
         * @static
         * @param {Msg.IGetMatchSiteTo} message GetMatchSiteTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMatchSiteTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.matchSite != null && message.matchSite.length)
                for (var i = 0; i < message.matchSite.length; ++i)
                    $root.Msg.MatchSiteMo.encode(message.matchSite[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetMatchSiteTo message, length delimited. Does not implicitly {@link Msg.GetMatchSiteTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetMatchSiteTo
         * @static
         * @param {Msg.IGetMatchSiteTo} message GetMatchSiteTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetMatchSiteTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetMatchSiteTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetMatchSiteTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetMatchSiteTo} GetMatchSiteTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMatchSiteTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetMatchSiteTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.matchSite && message.matchSite.length))
                        message.matchSite = [];
                    message.matchSite.push($root.Msg.MatchSiteMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetMatchSiteTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetMatchSiteTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetMatchSiteTo} GetMatchSiteTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetMatchSiteTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetMatchSiteTo message.
         * @function verify
         * @memberof Msg.GetMatchSiteTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetMatchSiteTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.matchSite != null && message.hasOwnProperty("matchSite")) {
                if (!Array.isArray(message.matchSite))
                    return "matchSite: array expected";
                for (var i = 0; i < message.matchSite.length; ++i) {
                    var error = $root.Msg.MatchSiteMo.verify(message.matchSite[i]);
                    if (error)
                        return "matchSite." + error;
                }
            }
            return null;
        };

        return GetMatchSiteTo;
    })();

    Msg.RankingMo = (function() {

        /**
         * Properties of a RankingMo.
         * @memberof Msg
         * @interface IRankingMo
         * @property {number|Long|null} [id] RankingMo id
         * @property {string|null} [name] RankingMo name
         * @property {number|null} [sex] RankingMo sex
         * @property {number|null} [title] RankingMo title
         * @property {number|null} [score] RankingMo score
         */

        /**
         * Constructs a new RankingMo.
         * @memberof Msg
         * @classdesc Represents a RankingMo.
         * @implements IRankingMo
         * @constructor
         * @param {Msg.IRankingMo=} [properties] Properties to set
         */
        function RankingMo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankingMo id.
         * @member {number|Long} id
         * @memberof Msg.RankingMo
         * @instance
         */
        RankingMo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RankingMo name.
         * @member {string} name
         * @memberof Msg.RankingMo
         * @instance
         */
        RankingMo.prototype.name = "";

        /**
         * RankingMo sex.
         * @member {number} sex
         * @memberof Msg.RankingMo
         * @instance
         */
        RankingMo.prototype.sex = 0;

        /**
         * RankingMo title.
         * @member {number} title
         * @memberof Msg.RankingMo
         * @instance
         */
        RankingMo.prototype.title = 0;

        /**
         * RankingMo score.
         * @member {number} score
         * @memberof Msg.RankingMo
         * @instance
         */
        RankingMo.prototype.score = 0;

        /**
         * Creates a new RankingMo instance using the specified properties.
         * @function create
         * @memberof Msg.RankingMo
         * @static
         * @param {Msg.IRankingMo=} [properties] Properties to set
         * @returns {Msg.RankingMo} RankingMo instance
         */
        RankingMo.create = function create(properties) {
            return new RankingMo(properties);
        };

        /**
         * Encodes the specified RankingMo message. Does not implicitly {@link Msg.RankingMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.RankingMo
         * @static
         * @param {Msg.IRankingMo} message RankingMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankingMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sex);
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.title);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.score);
            return writer;
        };

        /**
         * Encodes the specified RankingMo message, length delimited. Does not implicitly {@link Msg.RankingMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.RankingMo
         * @static
         * @param {Msg.IRankingMo} message RankingMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankingMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankingMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.RankingMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.RankingMo} RankingMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankingMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.RankingMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.sex = reader.int32();
                    break;
                case 4:
                    message.title = reader.int32();
                    break;
                case 5:
                    message.score = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RankingMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.RankingMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.RankingMo} RankingMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankingMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankingMo message.
         * @function verify
         * @memberof Msg.RankingMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankingMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isInteger(message.title))
                    return "title: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            return null;
        };

        return RankingMo;
    })();

    Msg.GetRanking = (function() {

        /**
         * Properties of a GetRanking.
         * @memberof Msg
         * @interface IGetRanking
         * @property {number|null} [type] GetRanking type
         */

        /**
         * Constructs a new GetRanking.
         * @memberof Msg
         * @classdesc Represents a GetRanking.
         * @implements IGetRanking
         * @constructor
         * @param {Msg.IGetRanking=} [properties] Properties to set
         */
        function GetRanking(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRanking type.
         * @member {number} type
         * @memberof Msg.GetRanking
         * @instance
         */
        GetRanking.prototype.type = 0;

        /**
         * Creates a new GetRanking instance using the specified properties.
         * @function create
         * @memberof Msg.GetRanking
         * @static
         * @param {Msg.IGetRanking=} [properties] Properties to set
         * @returns {Msg.GetRanking} GetRanking instance
         */
        GetRanking.create = function create(properties) {
            return new GetRanking(properties);
        };

        /**
         * Encodes the specified GetRanking message. Does not implicitly {@link Msg.GetRanking.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetRanking
         * @static
         * @param {Msg.IGetRanking} message GetRanking message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRanking.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified GetRanking message, length delimited. Does not implicitly {@link Msg.GetRanking.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetRanking
         * @static
         * @param {Msg.IGetRanking} message GetRanking message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRanking.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRanking message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetRanking
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetRanking} GetRanking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRanking.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetRanking();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRanking message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetRanking
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetRanking} GetRanking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRanking.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRanking message.
         * @function verify
         * @memberof Msg.GetRanking
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRanking.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        return GetRanking;
    })();

    Msg.GetRankingTo = (function() {

        /**
         * Properties of a GetRankingTo.
         * @memberof Msg
         * @interface IGetRankingTo
         * @property {Array.<Msg.IRankingMo>|null} [ranking] GetRankingTo ranking
         * @property {number|null} [myRank] GetRankingTo myRank
         */

        /**
         * Constructs a new GetRankingTo.
         * @memberof Msg
         * @classdesc Represents a GetRankingTo.
         * @implements IGetRankingTo
         * @constructor
         * @param {Msg.IGetRankingTo=} [properties] Properties to set
         */
        function GetRankingTo(properties) {
            this.ranking = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRankingTo ranking.
         * @member {Array.<Msg.IRankingMo>} ranking
         * @memberof Msg.GetRankingTo
         * @instance
         */
        GetRankingTo.prototype.ranking = $util.emptyArray;

        /**
         * GetRankingTo myRank.
         * @member {number} myRank
         * @memberof Msg.GetRankingTo
         * @instance
         */
        GetRankingTo.prototype.myRank = 0;

        /**
         * Creates a new GetRankingTo instance using the specified properties.
         * @function create
         * @memberof Msg.GetRankingTo
         * @static
         * @param {Msg.IGetRankingTo=} [properties] Properties to set
         * @returns {Msg.GetRankingTo} GetRankingTo instance
         */
        GetRankingTo.create = function create(properties) {
            return new GetRankingTo(properties);
        };

        /**
         * Encodes the specified GetRankingTo message. Does not implicitly {@link Msg.GetRankingTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetRankingTo
         * @static
         * @param {Msg.IGetRankingTo} message GetRankingTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRankingTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ranking != null && message.ranking.length)
                for (var i = 0; i < message.ranking.length; ++i)
                    $root.Msg.RankingMo.encode(message.ranking[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.myRank != null && message.hasOwnProperty("myRank"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.myRank);
            return writer;
        };

        /**
         * Encodes the specified GetRankingTo message, length delimited. Does not implicitly {@link Msg.GetRankingTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetRankingTo
         * @static
         * @param {Msg.IGetRankingTo} message GetRankingTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRankingTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRankingTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetRankingTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetRankingTo} GetRankingTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRankingTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetRankingTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ranking && message.ranking.length))
                        message.ranking = [];
                    message.ranking.push($root.Msg.RankingMo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.myRank = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRankingTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetRankingTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetRankingTo} GetRankingTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRankingTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRankingTo message.
         * @function verify
         * @memberof Msg.GetRankingTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRankingTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ranking != null && message.hasOwnProperty("ranking")) {
                if (!Array.isArray(message.ranking))
                    return "ranking: array expected";
                for (var i = 0; i < message.ranking.length; ++i) {
                    var error = $root.Msg.RankingMo.verify(message.ranking[i]);
                    if (error)
                        return "ranking." + error;
                }
            }
            if (message.myRank != null && message.hasOwnProperty("myRank"))
                if (!$util.isInteger(message.myRank))
                    return "myRank: integer expected";
            return null;
        };

        return GetRankingTo;
    })();

    Msg.RoleMo = (function() {

        /**
         * Properties of a RoleMo.
         * @memberof Msg
         * @interface IRoleMo
         * @property {number|null} [rid] RoleMo rid
         * @property {number|null} [exp] RoleMo exp
         * @property {number|null} [effType] RoleMo effType
         * @property {number|Long|null} [effValue] RoleMo effValue
         */

        /**
         * Constructs a new RoleMo.
         * @memberof Msg
         * @classdesc Represents a RoleMo.
         * @implements IRoleMo
         * @constructor
         * @param {Msg.IRoleMo=} [properties] Properties to set
         */
        function RoleMo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleMo rid.
         * @member {number} rid
         * @memberof Msg.RoleMo
         * @instance
         */
        RoleMo.prototype.rid = 0;

        /**
         * RoleMo exp.
         * @member {number} exp
         * @memberof Msg.RoleMo
         * @instance
         */
        RoleMo.prototype.exp = 0;

        /**
         * RoleMo effType.
         * @member {number} effType
         * @memberof Msg.RoleMo
         * @instance
         */
        RoleMo.prototype.effType = 0;

        /**
         * RoleMo effValue.
         * @member {number|Long} effValue
         * @memberof Msg.RoleMo
         * @instance
         */
        RoleMo.prototype.effValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RoleMo instance using the specified properties.
         * @function create
         * @memberof Msg.RoleMo
         * @static
         * @param {Msg.IRoleMo=} [properties] Properties to set
         * @returns {Msg.RoleMo} RoleMo instance
         */
        RoleMo.create = function create(properties) {
            return new RoleMo(properties);
        };

        /**
         * Encodes the specified RoleMo message. Does not implicitly {@link Msg.RoleMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.RoleMo
         * @static
         * @param {Msg.IRoleMo} message RoleMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rid != null && message.hasOwnProperty("rid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rid);
            if (message.exp != null && message.hasOwnProperty("exp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.exp);
            if (message.effType != null && message.hasOwnProperty("effType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.effType);
            if (message.effValue != null && message.hasOwnProperty("effValue"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.effValue);
            return writer;
        };

        /**
         * Encodes the specified RoleMo message, length delimited. Does not implicitly {@link Msg.RoleMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.RoleMo
         * @static
         * @param {Msg.IRoleMo} message RoleMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoleMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.RoleMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.RoleMo} RoleMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.RoleMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rid = reader.int32();
                    break;
                case 2:
                    message.exp = reader.int32();
                    break;
                case 3:
                    message.effType = reader.int32();
                    break;
                case 4:
                    message.effValue = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoleMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.RoleMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.RoleMo} RoleMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoleMo message.
         * @function verify
         * @memberof Msg.RoleMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoleMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rid != null && message.hasOwnProperty("rid"))
                if (!$util.isInteger(message.rid))
                    return "rid: integer expected";
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (!$util.isInteger(message.exp))
                    return "exp: integer expected";
            if (message.effType != null && message.hasOwnProperty("effType"))
                if (!$util.isInteger(message.effType))
                    return "effType: integer expected";
            if (message.effValue != null && message.hasOwnProperty("effValue"))
                if (!$util.isInteger(message.effValue) && !(message.effValue && $util.isInteger(message.effValue.low) && $util.isInteger(message.effValue.high)))
                    return "effValue: integer|Long expected";
            return null;
        };

        return RoleMo;
    })();

    Msg.GetRole = (function() {

        /**
         * Properties of a GetRole.
         * @memberof Msg
         * @interface IGetRole
         */

        /**
         * Constructs a new GetRole.
         * @memberof Msg
         * @classdesc Represents a GetRole.
         * @implements IGetRole
         * @constructor
         * @param {Msg.IGetRole=} [properties] Properties to set
         */
        function GetRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetRole instance using the specified properties.
         * @function create
         * @memberof Msg.GetRole
         * @static
         * @param {Msg.IGetRole=} [properties] Properties to set
         * @returns {Msg.GetRole} GetRole instance
         */
        GetRole.create = function create(properties) {
            return new GetRole(properties);
        };

        /**
         * Encodes the specified GetRole message. Does not implicitly {@link Msg.GetRole.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetRole
         * @static
         * @param {Msg.IGetRole} message GetRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetRole message, length delimited. Does not implicitly {@link Msg.GetRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetRole
         * @static
         * @param {Msg.IGetRole} message GetRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRole message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetRole} GetRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetRole} GetRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRole message.
         * @function verify
         * @memberof Msg.GetRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetRole;
    })();

    Msg.GetRoleTo = (function() {

        /**
         * Properties of a GetRoleTo.
         * @memberof Msg
         * @interface IGetRoleTo
         * @property {Array.<Msg.IRoleMo>|null} [role] GetRoleTo role
         */

        /**
         * Constructs a new GetRoleTo.
         * @memberof Msg
         * @classdesc Represents a GetRoleTo.
         * @implements IGetRoleTo
         * @constructor
         * @param {Msg.IGetRoleTo=} [properties] Properties to set
         */
        function GetRoleTo(properties) {
            this.role = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetRoleTo role.
         * @member {Array.<Msg.IRoleMo>} role
         * @memberof Msg.GetRoleTo
         * @instance
         */
        GetRoleTo.prototype.role = $util.emptyArray;

        /**
         * Creates a new GetRoleTo instance using the specified properties.
         * @function create
         * @memberof Msg.GetRoleTo
         * @static
         * @param {Msg.IGetRoleTo=} [properties] Properties to set
         * @returns {Msg.GetRoleTo} GetRoleTo instance
         */
        GetRoleTo.create = function create(properties) {
            return new GetRoleTo(properties);
        };

        /**
         * Encodes the specified GetRoleTo message. Does not implicitly {@link Msg.GetRoleTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetRoleTo
         * @static
         * @param {Msg.IGetRoleTo} message GetRoleTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoleTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.role != null && message.role.length)
                for (var i = 0; i < message.role.length; ++i)
                    $root.Msg.RoleMo.encode(message.role[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetRoleTo message, length delimited. Does not implicitly {@link Msg.GetRoleTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetRoleTo
         * @static
         * @param {Msg.IGetRoleTo} message GetRoleTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetRoleTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetRoleTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetRoleTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetRoleTo} GetRoleTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoleTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetRoleTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.role && message.role.length))
                        message.role = [];
                    message.role.push($root.Msg.RoleMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetRoleTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetRoleTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetRoleTo} GetRoleTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetRoleTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetRoleTo message.
         * @function verify
         * @memberof Msg.GetRoleTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetRoleTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.role != null && message.hasOwnProperty("role")) {
                if (!Array.isArray(message.role))
                    return "role: array expected";
                for (var i = 0; i < message.role.length; ++i) {
                    var error = $root.Msg.RoleMo.verify(message.role[i]);
                    if (error)
                        return "role." + error;
                }
            }
            return null;
        };

        return GetRoleTo;
    })();

    Msg.UpRole = (function() {

        /**
         * Properties of an UpRole.
         * @memberof Msg
         * @interface IUpRole
         * @property {number|null} [rid] UpRole rid
         * @property {Object.<string,number>|null} [cost] UpRole cost
         */

        /**
         * Constructs a new UpRole.
         * @memberof Msg
         * @classdesc Represents an UpRole.
         * @implements IUpRole
         * @constructor
         * @param {Msg.IUpRole=} [properties] Properties to set
         */
        function UpRole(properties) {
            this.cost = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpRole rid.
         * @member {number} rid
         * @memberof Msg.UpRole
         * @instance
         */
        UpRole.prototype.rid = 0;

        /**
         * UpRole cost.
         * @member {Object.<string,number>} cost
         * @memberof Msg.UpRole
         * @instance
         */
        UpRole.prototype.cost = $util.emptyObject;

        /**
         * Creates a new UpRole instance using the specified properties.
         * @function create
         * @memberof Msg.UpRole
         * @static
         * @param {Msg.IUpRole=} [properties] Properties to set
         * @returns {Msg.UpRole} UpRole instance
         */
        UpRole.create = function create(properties) {
            return new UpRole(properties);
        };

        /**
         * Encodes the specified UpRole message. Does not implicitly {@link Msg.UpRole.verify|verify} messages.
         * @function encode
         * @memberof Msg.UpRole
         * @static
         * @param {Msg.IUpRole} message UpRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rid != null && message.hasOwnProperty("rid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rid);
            if (message.cost != null && message.hasOwnProperty("cost"))
                for (var keys = Object.keys(message.cost), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.cost[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpRole message, length delimited. Does not implicitly {@link Msg.UpRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.UpRole
         * @static
         * @param {Msg.IUpRole} message UpRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpRole message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.UpRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.UpRole} UpRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.UpRole(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.rid = reader.int32();
                    break;
                case 2:
                    reader.skip().pos++;
                    if (message.cost === $util.emptyObject)
                        message.cost = {};
                    key = reader.int32();
                    reader.pos++;
                    message.cost[key] = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.UpRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.UpRole} UpRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpRole message.
         * @function verify
         * @memberof Msg.UpRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rid != null && message.hasOwnProperty("rid"))
                if (!$util.isInteger(message.rid))
                    return "rid: integer expected";
            if (message.cost != null && message.hasOwnProperty("cost")) {
                if (!$util.isObject(message.cost))
                    return "cost: object expected";
                var key = Object.keys(message.cost);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "cost: integer key{k:int32} expected";
                    if (!$util.isInteger(message.cost[key[i]]))
                        return "cost: integer{k:int32} expected";
                }
            }
            return null;
        };

        return UpRole;
    })();

    Msg.UpRoleTo = (function() {

        /**
         * Properties of an UpRoleTo.
         * @memberof Msg
         * @interface IUpRoleTo
         */

        /**
         * Constructs a new UpRoleTo.
         * @memberof Msg
         * @classdesc Represents an UpRoleTo.
         * @implements IUpRoleTo
         * @constructor
         * @param {Msg.IUpRoleTo=} [properties] Properties to set
         */
        function UpRoleTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UpRoleTo instance using the specified properties.
         * @function create
         * @memberof Msg.UpRoleTo
         * @static
         * @param {Msg.IUpRoleTo=} [properties] Properties to set
         * @returns {Msg.UpRoleTo} UpRoleTo instance
         */
        UpRoleTo.create = function create(properties) {
            return new UpRoleTo(properties);
        };

        /**
         * Encodes the specified UpRoleTo message. Does not implicitly {@link Msg.UpRoleTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.UpRoleTo
         * @static
         * @param {Msg.IUpRoleTo} message UpRoleTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpRoleTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UpRoleTo message, length delimited. Does not implicitly {@link Msg.UpRoleTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.UpRoleTo
         * @static
         * @param {Msg.IUpRoleTo} message UpRoleTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpRoleTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpRoleTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.UpRoleTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.UpRoleTo} UpRoleTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpRoleTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.UpRoleTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpRoleTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.UpRoleTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.UpRoleTo} UpRoleTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpRoleTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpRoleTo message.
         * @function verify
         * @memberof Msg.UpRoleTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpRoleTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return UpRoleTo;
    })();

    Msg.RoleNo = (function() {

        /**
         * Properties of a RoleNo.
         * @memberof Msg
         * @interface IRoleNo
         * @property {Msg.IRoleMo|null} [role] RoleNo role
         */

        /**
         * Constructs a new RoleNo.
         * @memberof Msg
         * @classdesc Represents a RoleNo.
         * @implements IRoleNo
         * @constructor
         * @param {Msg.IRoleNo=} [properties] Properties to set
         */
        function RoleNo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleNo role.
         * @member {Msg.IRoleMo|null|undefined} role
         * @memberof Msg.RoleNo
         * @instance
         */
        RoleNo.prototype.role = null;

        /**
         * Creates a new RoleNo instance using the specified properties.
         * @function create
         * @memberof Msg.RoleNo
         * @static
         * @param {Msg.IRoleNo=} [properties] Properties to set
         * @returns {Msg.RoleNo} RoleNo instance
         */
        RoleNo.create = function create(properties) {
            return new RoleNo(properties);
        };

        /**
         * Encodes the specified RoleNo message. Does not implicitly {@link Msg.RoleNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.RoleNo
         * @static
         * @param {Msg.IRoleNo} message RoleNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.role != null && message.hasOwnProperty("role"))
                $root.Msg.RoleMo.encode(message.role, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoleNo message, length delimited. Does not implicitly {@link Msg.RoleNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.RoleNo
         * @static
         * @param {Msg.IRoleNo} message RoleNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoleNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoleNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.RoleNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.RoleNo} RoleNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.RoleNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.role = $root.Msg.RoleMo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoleNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.RoleNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.RoleNo} RoleNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoleNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoleNo message.
         * @function verify
         * @memberof Msg.RoleNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoleNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.role != null && message.hasOwnProperty("role")) {
                var error = $root.Msg.RoleMo.verify(message.role);
                if (error)
                    return "role." + error;
            }
            return null;
        };

        return RoleNo;
    })();

    Msg.CardMo = (function() {

        /**
         * Properties of a CardMo.
         * @memberof Msg
         * @interface ICardMo
         * @property {number|null} [value] CardMo value
         * @property {number|null} [suit] CardMo suit
         */

        /**
         * Constructs a new CardMo.
         * @memberof Msg
         * @classdesc Represents a CardMo.
         * @implements ICardMo
         * @constructor
         * @param {Msg.ICardMo=} [properties] Properties to set
         */
        function CardMo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CardMo value.
         * @member {number} value
         * @memberof Msg.CardMo
         * @instance
         */
        CardMo.prototype.value = 0;

        /**
         * CardMo suit.
         * @member {number} suit
         * @memberof Msg.CardMo
         * @instance
         */
        CardMo.prototype.suit = 0;

        /**
         * Creates a new CardMo instance using the specified properties.
         * @function create
         * @memberof Msg.CardMo
         * @static
         * @param {Msg.ICardMo=} [properties] Properties to set
         * @returns {Msg.CardMo} CardMo instance
         */
        CardMo.create = function create(properties) {
            return new CardMo(properties);
        };

        /**
         * Encodes the specified CardMo message. Does not implicitly {@link Msg.CardMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.CardMo
         * @static
         * @param {Msg.ICardMo} message CardMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
            if (message.suit != null && message.hasOwnProperty("suit"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.suit);
            return writer;
        };

        /**
         * Encodes the specified CardMo message, length delimited. Does not implicitly {@link Msg.CardMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.CardMo
         * @static
         * @param {Msg.ICardMo} message CardMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.CardMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.CardMo} CardMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.CardMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.value = reader.int32();
                    break;
                case 2:
                    message.suit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CardMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.CardMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.CardMo} CardMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CardMo message.
         * @function verify
         * @memberof Msg.CardMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CardMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            if (message.suit != null && message.hasOwnProperty("suit"))
                if (!$util.isInteger(message.suit))
                    return "suit: integer expected";
            return null;
        };

        return CardMo;
    })();

    Msg.GamePlayerMo = (function() {

        /**
         * Properties of a GamePlayerMo.
         * @memberof Msg
         * @interface IGamePlayerMo
         * @property {number|Long|null} [id] GamePlayerMo id
         * @property {Array.<Msg.ICardMo>|null} [handCard] GamePlayerMo handCard
         * @property {number|null} [cardNum] GamePlayerMo cardNum
         * @property {number|null} [team] GamePlayerMo team
         * @property {number|null} [multiple] GamePlayerMo multiple
         * @property {number|null} [score] GamePlayerMo score
         * @property {number|null} [isAuto] GamePlayerMo isAuto
         * @property {number|null} [state] GamePlayerMo state
         * @property {number|Long|null} [opTime] GamePlayerMo opTime
         * @property {number|null} [contestScore] GamePlayerMo contestScore
         * @property {number|null} [isQuit] GamePlayerMo isQuit
         */

        /**
         * Constructs a new GamePlayerMo.
         * @memberof Msg
         * @classdesc Represents a GamePlayerMo.
         * @implements IGamePlayerMo
         * @constructor
         * @param {Msg.IGamePlayerMo=} [properties] Properties to set
         */
        function GamePlayerMo(properties) {
            this.handCard = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GamePlayerMo id.
         * @member {number|Long} id
         * @memberof Msg.GamePlayerMo
         * @instance
         */
        GamePlayerMo.prototype.id = $util.Long ? $util.Long.fromBits(-1,-1,false) : -1;

        /**
         * GamePlayerMo handCard.
         * @member {Array.<Msg.ICardMo>} handCard
         * @memberof Msg.GamePlayerMo
         * @instance
         */
        GamePlayerMo.prototype.handCard = $util.emptyArray;

        /**
         * GamePlayerMo cardNum.
         * @member {number} cardNum
         * @memberof Msg.GamePlayerMo
         * @instance
         */
        GamePlayerMo.prototype.cardNum = -1;

        /**
         * GamePlayerMo team.
         * @member {number} team
         * @memberof Msg.GamePlayerMo
         * @instance
         */
        GamePlayerMo.prototype.team = -1;

        /**
         * GamePlayerMo multiple.
         * @member {number} multiple
         * @memberof Msg.GamePlayerMo
         * @instance
         */
        GamePlayerMo.prototype.multiple = -1;

        /**
         * GamePlayerMo score.
         * @member {number} score
         * @memberof Msg.GamePlayerMo
         * @instance
         */
        GamePlayerMo.prototype.score = -1;

        /**
         * GamePlayerMo isAuto.
         * @member {number} isAuto
         * @memberof Msg.GamePlayerMo
         * @instance
         */
        GamePlayerMo.prototype.isAuto = -1;

        /**
         * GamePlayerMo state.
         * @member {number} state
         * @memberof Msg.GamePlayerMo
         * @instance
         */
        GamePlayerMo.prototype.state = -1;

        /**
         * GamePlayerMo opTime.
         * @member {number|Long} opTime
         * @memberof Msg.GamePlayerMo
         * @instance
         */
        GamePlayerMo.prototype.opTime = $util.Long ? $util.Long.fromBits(-1,-1,false) : -1;

        /**
         * GamePlayerMo contestScore.
         * @member {number} contestScore
         * @memberof Msg.GamePlayerMo
         * @instance
         */
        GamePlayerMo.prototype.contestScore = -1;

        /**
         * GamePlayerMo isQuit.
         * @member {number} isQuit
         * @memberof Msg.GamePlayerMo
         * @instance
         */
        GamePlayerMo.prototype.isQuit = -1;

        /**
         * Creates a new GamePlayerMo instance using the specified properties.
         * @function create
         * @memberof Msg.GamePlayerMo
         * @static
         * @param {Msg.IGamePlayerMo=} [properties] Properties to set
         * @returns {Msg.GamePlayerMo} GamePlayerMo instance
         */
        GamePlayerMo.create = function create(properties) {
            return new GamePlayerMo(properties);
        };

        /**
         * Encodes the specified GamePlayerMo message. Does not implicitly {@link Msg.GamePlayerMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.GamePlayerMo
         * @static
         * @param {Msg.IGamePlayerMo} message GamePlayerMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePlayerMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.handCard != null && message.handCard.length)
                for (var i = 0; i < message.handCard.length; ++i)
                    $root.Msg.CardMo.encode(message.handCard[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cardNum);
            if (message.team != null && message.hasOwnProperty("team"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.team);
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.multiple);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.score);
            if (message.isAuto != null && message.hasOwnProperty("isAuto"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.isAuto);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.state);
            if (message.opTime != null && message.hasOwnProperty("opTime"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.opTime);
            if (message.contestScore != null && message.hasOwnProperty("contestScore"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.contestScore);
            if (message.isQuit != null && message.hasOwnProperty("isQuit"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.isQuit);
            return writer;
        };

        /**
         * Encodes the specified GamePlayerMo message, length delimited. Does not implicitly {@link Msg.GamePlayerMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GamePlayerMo
         * @static
         * @param {Msg.IGamePlayerMo} message GamePlayerMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePlayerMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GamePlayerMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GamePlayerMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GamePlayerMo} GamePlayerMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePlayerMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GamePlayerMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    if (!(message.handCard && message.handCard.length))
                        message.handCard = [];
                    message.handCard.push($root.Msg.CardMo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.cardNum = reader.int32();
                    break;
                case 4:
                    message.team = reader.int32();
                    break;
                case 5:
                    message.multiple = reader.int32();
                    break;
                case 6:
                    message.score = reader.int32();
                    break;
                case 7:
                    message.isAuto = reader.int32();
                    break;
                case 8:
                    message.state = reader.int32();
                    break;
                case 9:
                    message.opTime = reader.int64();
                    break;
                case 10:
                    message.contestScore = reader.int32();
                    break;
                case 11:
                    message.isQuit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GamePlayerMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GamePlayerMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GamePlayerMo} GamePlayerMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePlayerMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GamePlayerMo message.
         * @function verify
         * @memberof Msg.GamePlayerMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GamePlayerMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.handCard != null && message.hasOwnProperty("handCard")) {
                if (!Array.isArray(message.handCard))
                    return "handCard: array expected";
                for (var i = 0; i < message.handCard.length; ++i) {
                    var error = $root.Msg.CardMo.verify(message.handCard[i]);
                    if (error)
                        return "handCard." + error;
                }
            }
            if (message.cardNum != null && message.hasOwnProperty("cardNum"))
                if (!$util.isInteger(message.cardNum))
                    return "cardNum: integer expected";
            if (message.team != null && message.hasOwnProperty("team"))
                if (!$util.isInteger(message.team))
                    return "team: integer expected";
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                if (!$util.isInteger(message.multiple))
                    return "multiple: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.isAuto != null && message.hasOwnProperty("isAuto"))
                if (!$util.isInteger(message.isAuto))
                    return "isAuto: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.opTime != null && message.hasOwnProperty("opTime"))
                if (!$util.isInteger(message.opTime) && !(message.opTime && $util.isInteger(message.opTime.low) && $util.isInteger(message.opTime.high)))
                    return "opTime: integer|Long expected";
            if (message.contestScore != null && message.hasOwnProperty("contestScore"))
                if (!$util.isInteger(message.contestScore))
                    return "contestScore: integer expected";
            if (message.isQuit != null && message.hasOwnProperty("isQuit"))
                if (!$util.isInteger(message.isQuit))
                    return "isQuit: integer expected";
            return null;
        };

        return GamePlayerMo;
    })();

    Msg.TableMo = (function() {

        /**
         * Properties of a TableMo.
         * @memberof Msg
         * @interface ITableMo
         * @property {Array.<Msg.IGamePlayerMo>|null} [player] TableMo player
         * @property {Array.<number>|null} [multiple] TableMo multiple
         * @property {number|null} [state] TableMo state
         * @property {Array.<Msg.ICardMo>|null} [lastCard] TableMo lastCard
         * @property {number|null} [lastCardType] TableMo lastCardType
         * @property {number|null} [lastOp] TableMo lastOp
         * @property {number|null} [roundScore] TableMo roundScore
         * @property {Msg.ICardMo|null} [callCard] TableMo callCard
         * @property {number|null} [callType] TableMo callType
         * @property {number|null} [callOp] TableMo callOp
         * @property {number|null} [dealer] TableMo dealer
         * @property {number|Long|null} [waitTime] TableMo waitTime
         * @property {number|null} [type] TableMo type
         */

        /**
         * Constructs a new TableMo.
         * @memberof Msg
         * @classdesc Represents a TableMo.
         * @implements ITableMo
         * @constructor
         * @param {Msg.ITableMo=} [properties] Properties to set
         */
        function TableMo(properties) {
            this.player = [];
            this.multiple = [];
            this.lastCard = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableMo player.
         * @member {Array.<Msg.IGamePlayerMo>} player
         * @memberof Msg.TableMo
         * @instance
         */
        TableMo.prototype.player = $util.emptyArray;

        /**
         * TableMo multiple.
         * @member {Array.<number>} multiple
         * @memberof Msg.TableMo
         * @instance
         */
        TableMo.prototype.multiple = $util.emptyArray;

        /**
         * TableMo state.
         * @member {number} state
         * @memberof Msg.TableMo
         * @instance
         */
        TableMo.prototype.state = -1;

        /**
         * TableMo lastCard.
         * @member {Array.<Msg.ICardMo>} lastCard
         * @memberof Msg.TableMo
         * @instance
         */
        TableMo.prototype.lastCard = $util.emptyArray;

        /**
         * TableMo lastCardType.
         * @member {number} lastCardType
         * @memberof Msg.TableMo
         * @instance
         */
        TableMo.prototype.lastCardType = -1;

        /**
         * TableMo lastOp.
         * @member {number} lastOp
         * @memberof Msg.TableMo
         * @instance
         */
        TableMo.prototype.lastOp = -1;

        /**
         * TableMo roundScore.
         * @member {number} roundScore
         * @memberof Msg.TableMo
         * @instance
         */
        TableMo.prototype.roundScore = -1;

        /**
         * TableMo callCard.
         * @member {Msg.ICardMo|null|undefined} callCard
         * @memberof Msg.TableMo
         * @instance
         */
        TableMo.prototype.callCard = null;

        /**
         * TableMo callType.
         * @member {number} callType
         * @memberof Msg.TableMo
         * @instance
         */
        TableMo.prototype.callType = -1;

        /**
         * TableMo callOp.
         * @member {number} callOp
         * @memberof Msg.TableMo
         * @instance
         */
        TableMo.prototype.callOp = -1;

        /**
         * TableMo dealer.
         * @member {number} dealer
         * @memberof Msg.TableMo
         * @instance
         */
        TableMo.prototype.dealer = -1;

        /**
         * TableMo waitTime.
         * @member {number|Long} waitTime
         * @memberof Msg.TableMo
         * @instance
         */
        TableMo.prototype.waitTime = $util.Long ? $util.Long.fromBits(-1,-1,false) : -1;

        /**
         * TableMo type.
         * @member {number} type
         * @memberof Msg.TableMo
         * @instance
         */
        TableMo.prototype.type = -1;

        /**
         * Creates a new TableMo instance using the specified properties.
         * @function create
         * @memberof Msg.TableMo
         * @static
         * @param {Msg.ITableMo=} [properties] Properties to set
         * @returns {Msg.TableMo} TableMo instance
         */
        TableMo.create = function create(properties) {
            return new TableMo(properties);
        };

        /**
         * Encodes the specified TableMo message. Does not implicitly {@link Msg.TableMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.TableMo
         * @static
         * @param {Msg.ITableMo} message TableMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.player.length)
                for (var i = 0; i < message.player.length; ++i)
                    $root.Msg.GamePlayerMo.encode(message.player[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.multiple != null && message.multiple.length)
                for (var i = 0; i < message.multiple.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.multiple[i]);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
            if (message.lastCard != null && message.lastCard.length)
                for (var i = 0; i < message.lastCard.length; ++i)
                    $root.Msg.CardMo.encode(message.lastCard[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.lastCardType != null && message.hasOwnProperty("lastCardType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.lastCardType);
            if (message.lastOp != null && message.hasOwnProperty("lastOp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.lastOp);
            if (message.roundScore != null && message.hasOwnProperty("roundScore"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.roundScore);
            if (message.callCard != null && message.hasOwnProperty("callCard"))
                $root.Msg.CardMo.encode(message.callCard, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.callType != null && message.hasOwnProperty("callType"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.callType);
            if (message.callOp != null && message.hasOwnProperty("callOp"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.callOp);
            if (message.dealer != null && message.hasOwnProperty("dealer"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.dealer);
            if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.waitTime);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified TableMo message, length delimited. Does not implicitly {@link Msg.TableMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.TableMo
         * @static
         * @param {Msg.ITableMo} message TableMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.TableMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.TableMo} TableMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.TableMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.player && message.player.length))
                        message.player = [];
                    message.player.push($root.Msg.GamePlayerMo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.multiple && message.multiple.length))
                        message.multiple = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.multiple.push(reader.int32());
                    } else
                        message.multiple.push(reader.int32());
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    if (!(message.lastCard && message.lastCard.length))
                        message.lastCard = [];
                    message.lastCard.push($root.Msg.CardMo.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastCardType = reader.int32();
                    break;
                case 6:
                    message.lastOp = reader.int32();
                    break;
                case 7:
                    message.roundScore = reader.int32();
                    break;
                case 8:
                    message.callCard = $root.Msg.CardMo.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.callType = reader.int32();
                    break;
                case 10:
                    message.callOp = reader.int32();
                    break;
                case 11:
                    message.dealer = reader.int32();
                    break;
                case 12:
                    message.waitTime = reader.int64();
                    break;
                case 13:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.TableMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.TableMo} TableMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableMo message.
         * @function verify
         * @memberof Msg.TableMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                if (!Array.isArray(message.player))
                    return "player: array expected";
                for (var i = 0; i < message.player.length; ++i) {
                    var error = $root.Msg.GamePlayerMo.verify(message.player[i]);
                    if (error)
                        return "player." + error;
                }
            }
            if (message.multiple != null && message.hasOwnProperty("multiple")) {
                if (!Array.isArray(message.multiple))
                    return "multiple: array expected";
                for (var i = 0; i < message.multiple.length; ++i)
                    if (!$util.isInteger(message.multiple[i]))
                        return "multiple: integer[] expected";
            }
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.lastCard != null && message.hasOwnProperty("lastCard")) {
                if (!Array.isArray(message.lastCard))
                    return "lastCard: array expected";
                for (var i = 0; i < message.lastCard.length; ++i) {
                    var error = $root.Msg.CardMo.verify(message.lastCard[i]);
                    if (error)
                        return "lastCard." + error;
                }
            }
            if (message.lastCardType != null && message.hasOwnProperty("lastCardType"))
                if (!$util.isInteger(message.lastCardType))
                    return "lastCardType: integer expected";
            if (message.lastOp != null && message.hasOwnProperty("lastOp"))
                if (!$util.isInteger(message.lastOp))
                    return "lastOp: integer expected";
            if (message.roundScore != null && message.hasOwnProperty("roundScore"))
                if (!$util.isInteger(message.roundScore))
                    return "roundScore: integer expected";
            if (message.callCard != null && message.hasOwnProperty("callCard")) {
                var error = $root.Msg.CardMo.verify(message.callCard);
                if (error)
                    return "callCard." + error;
            }
            if (message.callType != null && message.hasOwnProperty("callType"))
                if (!$util.isInteger(message.callType))
                    return "callType: integer expected";
            if (message.callOp != null && message.hasOwnProperty("callOp"))
                if (!$util.isInteger(message.callOp))
                    return "callOp: integer expected";
            if (message.dealer != null && message.hasOwnProperty("dealer"))
                if (!$util.isInteger(message.dealer))
                    return "dealer: integer expected";
            if (message.waitTime != null && message.hasOwnProperty("waitTime"))
                if (!$util.isInteger(message.waitTime) && !(message.waitTime && $util.isInteger(message.waitTime.low) && $util.isInteger(message.waitTime.high)))
                    return "waitTime: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        return TableMo;
    })();

    Msg.Call = (function() {

        /**
         * Properties of a Call.
         * @memberof Msg
         * @interface ICall
         * @property {number|null} [callType] Call callType
         * @property {number|null} [cardIndex] Call cardIndex
         */

        /**
         * Constructs a new Call.
         * @memberof Msg
         * @classdesc Represents a Call.
         * @implements ICall
         * @constructor
         * @param {Msg.ICall=} [properties] Properties to set
         */
        function Call(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Call callType.
         * @member {number} callType
         * @memberof Msg.Call
         * @instance
         */
        Call.prototype.callType = 0;

        /**
         * Call cardIndex.
         * @member {number} cardIndex
         * @memberof Msg.Call
         * @instance
         */
        Call.prototype.cardIndex = 0;

        /**
         * Creates a new Call instance using the specified properties.
         * @function create
         * @memberof Msg.Call
         * @static
         * @param {Msg.ICall=} [properties] Properties to set
         * @returns {Msg.Call} Call instance
         */
        Call.create = function create(properties) {
            return new Call(properties);
        };

        /**
         * Encodes the specified Call message. Does not implicitly {@link Msg.Call.verify|verify} messages.
         * @function encode
         * @memberof Msg.Call
         * @static
         * @param {Msg.ICall} message Call message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Call.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.callType != null && message.hasOwnProperty("callType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.callType);
            if (message.cardIndex != null && message.hasOwnProperty("cardIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cardIndex);
            return writer;
        };

        /**
         * Encodes the specified Call message, length delimited. Does not implicitly {@link Msg.Call.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.Call
         * @static
         * @param {Msg.ICall} message Call message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Call.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Call message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.Call
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.Call} Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Call.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.Call();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.callType = reader.int32();
                    break;
                case 2:
                    message.cardIndex = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Call message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.Call
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.Call} Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Call.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Call message.
         * @function verify
         * @memberof Msg.Call
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Call.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.callType != null && message.hasOwnProperty("callType"))
                if (!$util.isInteger(message.callType))
                    return "callType: integer expected";
            if (message.cardIndex != null && message.hasOwnProperty("cardIndex"))
                if (!$util.isInteger(message.cardIndex))
                    return "cardIndex: integer expected";
            return null;
        };

        return Call;
    })();

    Msg.CallTo = (function() {

        /**
         * Properties of a CallTo.
         * @memberof Msg
         * @interface ICallTo
         */

        /**
         * Constructs a new CallTo.
         * @memberof Msg
         * @classdesc Represents a CallTo.
         * @implements ICallTo
         * @constructor
         * @param {Msg.ICallTo=} [properties] Properties to set
         */
        function CallTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CallTo instance using the specified properties.
         * @function create
         * @memberof Msg.CallTo
         * @static
         * @param {Msg.ICallTo=} [properties] Properties to set
         * @returns {Msg.CallTo} CallTo instance
         */
        CallTo.create = function create(properties) {
            return new CallTo(properties);
        };

        /**
         * Encodes the specified CallTo message. Does not implicitly {@link Msg.CallTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.CallTo
         * @static
         * @param {Msg.ICallTo} message CallTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CallTo message, length delimited. Does not implicitly {@link Msg.CallTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.CallTo
         * @static
         * @param {Msg.ICallTo} message CallTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CallTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CallTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.CallTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.CallTo} CallTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.CallTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CallTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.CallTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.CallTo} CallTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CallTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CallTo message.
         * @function verify
         * @memberof Msg.CallTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CallTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return CallTo;
    })();

    Msg.Draw = (function() {

        /**
         * Properties of a Draw.
         * @memberof Msg
         * @interface IDraw
         * @property {number|null} [cardType] Draw cardType
         * @property {Array.<number>|null} [cardIndexs] Draw cardIndexs
         */

        /**
         * Constructs a new Draw.
         * @memberof Msg
         * @classdesc Represents a Draw.
         * @implements IDraw
         * @constructor
         * @param {Msg.IDraw=} [properties] Properties to set
         */
        function Draw(properties) {
            this.cardIndexs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Draw cardType.
         * @member {number} cardType
         * @memberof Msg.Draw
         * @instance
         */
        Draw.prototype.cardType = 0;

        /**
         * Draw cardIndexs.
         * @member {Array.<number>} cardIndexs
         * @memberof Msg.Draw
         * @instance
         */
        Draw.prototype.cardIndexs = $util.emptyArray;

        /**
         * Creates a new Draw instance using the specified properties.
         * @function create
         * @memberof Msg.Draw
         * @static
         * @param {Msg.IDraw=} [properties] Properties to set
         * @returns {Msg.Draw} Draw instance
         */
        Draw.create = function create(properties) {
            return new Draw(properties);
        };

        /**
         * Encodes the specified Draw message. Does not implicitly {@link Msg.Draw.verify|verify} messages.
         * @function encode
         * @memberof Msg.Draw
         * @static
         * @param {Msg.IDraw} message Draw message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Draw.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cardType != null && message.hasOwnProperty("cardType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardType);
            if (message.cardIndexs != null && message.cardIndexs.length)
                for (var i = 0; i < message.cardIndexs.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cardIndexs[i]);
            return writer;
        };

        /**
         * Encodes the specified Draw message, length delimited. Does not implicitly {@link Msg.Draw.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.Draw
         * @static
         * @param {Msg.IDraw} message Draw message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Draw.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Draw message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.Draw
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.Draw} Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Draw.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.Draw();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cardType = reader.int32();
                    break;
                case 2:
                    if (!(message.cardIndexs && message.cardIndexs.length))
                        message.cardIndexs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cardIndexs.push(reader.int32());
                    } else
                        message.cardIndexs.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Draw message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.Draw
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.Draw} Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Draw.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Draw message.
         * @function verify
         * @memberof Msg.Draw
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Draw.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cardType != null && message.hasOwnProperty("cardType"))
                if (!$util.isInteger(message.cardType))
                    return "cardType: integer expected";
            if (message.cardIndexs != null && message.hasOwnProperty("cardIndexs")) {
                if (!Array.isArray(message.cardIndexs))
                    return "cardIndexs: array expected";
                for (var i = 0; i < message.cardIndexs.length; ++i)
                    if (!$util.isInteger(message.cardIndexs[i]))
                        return "cardIndexs: integer[] expected";
            }
            return null;
        };

        return Draw;
    })();

    Msg.DrawTo = (function() {

        /**
         * Properties of a DrawTo.
         * @memberof Msg
         * @interface IDrawTo
         */

        /**
         * Constructs a new DrawTo.
         * @memberof Msg
         * @classdesc Represents a DrawTo.
         * @implements IDrawTo
         * @constructor
         * @param {Msg.IDrawTo=} [properties] Properties to set
         */
        function DrawTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DrawTo instance using the specified properties.
         * @function create
         * @memberof Msg.DrawTo
         * @static
         * @param {Msg.IDrawTo=} [properties] Properties to set
         * @returns {Msg.DrawTo} DrawTo instance
         */
        DrawTo.create = function create(properties) {
            return new DrawTo(properties);
        };

        /**
         * Encodes the specified DrawTo message. Does not implicitly {@link Msg.DrawTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.DrawTo
         * @static
         * @param {Msg.IDrawTo} message DrawTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DrawTo message, length delimited. Does not implicitly {@link Msg.DrawTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.DrawTo
         * @static
         * @param {Msg.IDrawTo} message DrawTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DrawTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.DrawTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.DrawTo} DrawTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.DrawTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DrawTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.DrawTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.DrawTo} DrawTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DrawTo message.
         * @function verify
         * @memberof Msg.DrawTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DrawTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return DrawTo;
    })();

    Msg.Check = (function() {

        /**
         * Properties of a Check.
         * @memberof Msg
         * @interface ICheck
         */

        /**
         * Constructs a new Check.
         * @memberof Msg
         * @classdesc Represents a Check.
         * @implements ICheck
         * @constructor
         * @param {Msg.ICheck=} [properties] Properties to set
         */
        function Check(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Check instance using the specified properties.
         * @function create
         * @memberof Msg.Check
         * @static
         * @param {Msg.ICheck=} [properties] Properties to set
         * @returns {Msg.Check} Check instance
         */
        Check.create = function create(properties) {
            return new Check(properties);
        };

        /**
         * Encodes the specified Check message. Does not implicitly {@link Msg.Check.verify|verify} messages.
         * @function encode
         * @memberof Msg.Check
         * @static
         * @param {Msg.ICheck} message Check message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Check.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Check message, length delimited. Does not implicitly {@link Msg.Check.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.Check
         * @static
         * @param {Msg.ICheck} message Check message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Check.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Check message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.Check
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.Check} Check
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Check.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.Check();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Check message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.Check
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.Check} Check
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Check.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Check message.
         * @function verify
         * @memberof Msg.Check
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Check.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return Check;
    })();

    Msg.CheckTo = (function() {

        /**
         * Properties of a CheckTo.
         * @memberof Msg
         * @interface ICheckTo
         */

        /**
         * Constructs a new CheckTo.
         * @memberof Msg
         * @classdesc Represents a CheckTo.
         * @implements ICheckTo
         * @constructor
         * @param {Msg.ICheckTo=} [properties] Properties to set
         */
        function CheckTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CheckTo instance using the specified properties.
         * @function create
         * @memberof Msg.CheckTo
         * @static
         * @param {Msg.ICheckTo=} [properties] Properties to set
         * @returns {Msg.CheckTo} CheckTo instance
         */
        CheckTo.create = function create(properties) {
            return new CheckTo(properties);
        };

        /**
         * Encodes the specified CheckTo message. Does not implicitly {@link Msg.CheckTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.CheckTo
         * @static
         * @param {Msg.ICheckTo} message CheckTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CheckTo message, length delimited. Does not implicitly {@link Msg.CheckTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.CheckTo
         * @static
         * @param {Msg.ICheckTo} message CheckTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.CheckTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.CheckTo} CheckTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.CheckTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.CheckTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.CheckTo} CheckTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckTo message.
         * @function verify
         * @memberof Msg.CheckTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return CheckTo;
    })();

    Msg.Ready = (function() {

        /**
         * Properties of a Ready.
         * @memberof Msg
         * @interface IReady
         */

        /**
         * Constructs a new Ready.
         * @memberof Msg
         * @classdesc Represents a Ready.
         * @implements IReady
         * @constructor
         * @param {Msg.IReady=} [properties] Properties to set
         */
        function Ready(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Ready instance using the specified properties.
         * @function create
         * @memberof Msg.Ready
         * @static
         * @param {Msg.IReady=} [properties] Properties to set
         * @returns {Msg.Ready} Ready instance
         */
        Ready.create = function create(properties) {
            return new Ready(properties);
        };

        /**
         * Encodes the specified Ready message. Does not implicitly {@link Msg.Ready.verify|verify} messages.
         * @function encode
         * @memberof Msg.Ready
         * @static
         * @param {Msg.IReady} message Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ready.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Ready message, length delimited. Does not implicitly {@link Msg.Ready.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.Ready
         * @static
         * @param {Msg.IReady} message Ready message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ready.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Ready message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.Ready} Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ready.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.Ready();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Ready message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.Ready
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.Ready} Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ready.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Ready message.
         * @function verify
         * @memberof Msg.Ready
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ready.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return Ready;
    })();

    Msg.ReadyTo = (function() {

        /**
         * Properties of a ReadyTo.
         * @memberof Msg
         * @interface IReadyTo
         */

        /**
         * Constructs a new ReadyTo.
         * @memberof Msg
         * @classdesc Represents a ReadyTo.
         * @implements IReadyTo
         * @constructor
         * @param {Msg.IReadyTo=} [properties] Properties to set
         */
        function ReadyTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReadyTo instance using the specified properties.
         * @function create
         * @memberof Msg.ReadyTo
         * @static
         * @param {Msg.IReadyTo=} [properties] Properties to set
         * @returns {Msg.ReadyTo} ReadyTo instance
         */
        ReadyTo.create = function create(properties) {
            return new ReadyTo(properties);
        };

        /**
         * Encodes the specified ReadyTo message. Does not implicitly {@link Msg.ReadyTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.ReadyTo
         * @static
         * @param {Msg.IReadyTo} message ReadyTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReadyTo message, length delimited. Does not implicitly {@link Msg.ReadyTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.ReadyTo
         * @static
         * @param {Msg.IReadyTo} message ReadyTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadyTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadyTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.ReadyTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.ReadyTo} ReadyTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.ReadyTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadyTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.ReadyTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.ReadyTo} ReadyTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadyTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadyTo message.
         * @function verify
         * @memberof Msg.ReadyTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadyTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return ReadyTo;
    })();

    Msg.Quit = (function() {

        /**
         * Properties of a Quit.
         * @memberof Msg
         * @interface IQuit
         */

        /**
         * Constructs a new Quit.
         * @memberof Msg
         * @classdesc Represents a Quit.
         * @implements IQuit
         * @constructor
         * @param {Msg.IQuit=} [properties] Properties to set
         */
        function Quit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Quit instance using the specified properties.
         * @function create
         * @memberof Msg.Quit
         * @static
         * @param {Msg.IQuit=} [properties] Properties to set
         * @returns {Msg.Quit} Quit instance
         */
        Quit.create = function create(properties) {
            return new Quit(properties);
        };

        /**
         * Encodes the specified Quit message. Does not implicitly {@link Msg.Quit.verify|verify} messages.
         * @function encode
         * @memberof Msg.Quit
         * @static
         * @param {Msg.IQuit} message Quit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Quit message, length delimited. Does not implicitly {@link Msg.Quit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.Quit
         * @static
         * @param {Msg.IQuit} message Quit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Quit message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.Quit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.Quit} Quit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.Quit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Quit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.Quit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.Quit} Quit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Quit message.
         * @function verify
         * @memberof Msg.Quit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Quit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return Quit;
    })();

    Msg.QuitTo = (function() {

        /**
         * Properties of a QuitTo.
         * @memberof Msg
         * @interface IQuitTo
         */

        /**
         * Constructs a new QuitTo.
         * @memberof Msg
         * @classdesc Represents a QuitTo.
         * @implements IQuitTo
         * @constructor
         * @param {Msg.IQuitTo=} [properties] Properties to set
         */
        function QuitTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new QuitTo instance using the specified properties.
         * @function create
         * @memberof Msg.QuitTo
         * @static
         * @param {Msg.IQuitTo=} [properties] Properties to set
         * @returns {Msg.QuitTo} QuitTo instance
         */
        QuitTo.create = function create(properties) {
            return new QuitTo(properties);
        };

        /**
         * Encodes the specified QuitTo message. Does not implicitly {@link Msg.QuitTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.QuitTo
         * @static
         * @param {Msg.IQuitTo} message QuitTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified QuitTo message, length delimited. Does not implicitly {@link Msg.QuitTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.QuitTo
         * @static
         * @param {Msg.IQuitTo} message QuitTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuitTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuitTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.QuitTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.QuitTo} QuitTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.QuitTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuitTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.QuitTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.QuitTo} QuitTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuitTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuitTo message.
         * @function verify
         * @memberof Msg.QuitTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuitTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return QuitTo;
    })();

    Msg.Double = (function() {

        /**
         * Properties of a Double.
         * @memberof Msg
         * @interface IDouble
         */

        /**
         * Constructs a new Double.
         * @memberof Msg
         * @classdesc Represents a Double.
         * @implements IDouble
         * @constructor
         * @param {Msg.IDouble=} [properties] Properties to set
         */
        function Double(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Double instance using the specified properties.
         * @function create
         * @memberof Msg.Double
         * @static
         * @param {Msg.IDouble=} [properties] Properties to set
         * @returns {Msg.Double} Double instance
         */
        Double.create = function create(properties) {
            return new Double(properties);
        };

        /**
         * Encodes the specified Double message. Does not implicitly {@link Msg.Double.verify|verify} messages.
         * @function encode
         * @memberof Msg.Double
         * @static
         * @param {Msg.IDouble} message Double message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Double.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Double message, length delimited. Does not implicitly {@link Msg.Double.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.Double
         * @static
         * @param {Msg.IDouble} message Double message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Double.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Double message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.Double
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.Double} Double
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Double.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.Double();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Double message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.Double
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.Double} Double
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Double.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Double message.
         * @function verify
         * @memberof Msg.Double
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Double.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return Double;
    })();

    Msg.DoubleTo = (function() {

        /**
         * Properties of a DoubleTo.
         * @memberof Msg
         * @interface IDoubleTo
         */

        /**
         * Constructs a new DoubleTo.
         * @memberof Msg
         * @classdesc Represents a DoubleTo.
         * @implements IDoubleTo
         * @constructor
         * @param {Msg.IDoubleTo=} [properties] Properties to set
         */
        function DoubleTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DoubleTo instance using the specified properties.
         * @function create
         * @memberof Msg.DoubleTo
         * @static
         * @param {Msg.IDoubleTo=} [properties] Properties to set
         * @returns {Msg.DoubleTo} DoubleTo instance
         */
        DoubleTo.create = function create(properties) {
            return new DoubleTo(properties);
        };

        /**
         * Encodes the specified DoubleTo message. Does not implicitly {@link Msg.DoubleTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.DoubleTo
         * @static
         * @param {Msg.IDoubleTo} message DoubleTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DoubleTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DoubleTo message, length delimited. Does not implicitly {@link Msg.DoubleTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.DoubleTo
         * @static
         * @param {Msg.IDoubleTo} message DoubleTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DoubleTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DoubleTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.DoubleTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.DoubleTo} DoubleTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DoubleTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.DoubleTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DoubleTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.DoubleTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.DoubleTo} DoubleTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DoubleTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DoubleTo message.
         * @function verify
         * @memberof Msg.DoubleTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DoubleTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return DoubleTo;
    })();

    Msg.Auto = (function() {

        /**
         * Properties of an Auto.
         * @memberof Msg
         * @interface IAuto
         * @property {number|null} [isAuto] Auto isAuto
         */

        /**
         * Constructs a new Auto.
         * @memberof Msg
         * @classdesc Represents an Auto.
         * @implements IAuto
         * @constructor
         * @param {Msg.IAuto=} [properties] Properties to set
         */
        function Auto(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Auto isAuto.
         * @member {number} isAuto
         * @memberof Msg.Auto
         * @instance
         */
        Auto.prototype.isAuto = 0;

        /**
         * Creates a new Auto instance using the specified properties.
         * @function create
         * @memberof Msg.Auto
         * @static
         * @param {Msg.IAuto=} [properties] Properties to set
         * @returns {Msg.Auto} Auto instance
         */
        Auto.create = function create(properties) {
            return new Auto(properties);
        };

        /**
         * Encodes the specified Auto message. Does not implicitly {@link Msg.Auto.verify|verify} messages.
         * @function encode
         * @memberof Msg.Auto
         * @static
         * @param {Msg.IAuto} message Auto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Auto.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isAuto != null && message.hasOwnProperty("isAuto"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.isAuto);
            return writer;
        };

        /**
         * Encodes the specified Auto message, length delimited. Does not implicitly {@link Msg.Auto.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.Auto
         * @static
         * @param {Msg.IAuto} message Auto message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Auto.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Auto message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.Auto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.Auto} Auto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Auto.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.Auto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isAuto = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Auto message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.Auto
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.Auto} Auto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Auto.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Auto message.
         * @function verify
         * @memberof Msg.Auto
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Auto.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isAuto != null && message.hasOwnProperty("isAuto"))
                if (!$util.isInteger(message.isAuto))
                    return "isAuto: integer expected";
            return null;
        };

        return Auto;
    })();

    Msg.AutoTo = (function() {

        /**
         * Properties of an AutoTo.
         * @memberof Msg
         * @interface IAutoTo
         */

        /**
         * Constructs a new AutoTo.
         * @memberof Msg
         * @classdesc Represents an AutoTo.
         * @implements IAutoTo
         * @constructor
         * @param {Msg.IAutoTo=} [properties] Properties to set
         */
        function AutoTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new AutoTo instance using the specified properties.
         * @function create
         * @memberof Msg.AutoTo
         * @static
         * @param {Msg.IAutoTo=} [properties] Properties to set
         * @returns {Msg.AutoTo} AutoTo instance
         */
        AutoTo.create = function create(properties) {
            return new AutoTo(properties);
        };

        /**
         * Encodes the specified AutoTo message. Does not implicitly {@link Msg.AutoTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.AutoTo
         * @static
         * @param {Msg.IAutoTo} message AutoTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified AutoTo message, length delimited. Does not implicitly {@link Msg.AutoTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.AutoTo
         * @static
         * @param {Msg.IAutoTo} message AutoTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AutoTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AutoTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.AutoTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.AutoTo} AutoTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.AutoTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AutoTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.AutoTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.AutoTo} AutoTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AutoTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AutoTo message.
         * @function verify
         * @memberof Msg.AutoTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AutoTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return AutoTo;
    })();

    Msg.Reconn = (function() {

        /**
         * Properties of a Reconn.
         * @memberof Msg
         * @interface IReconn
         */

        /**
         * Constructs a new Reconn.
         * @memberof Msg
         * @classdesc Represents a Reconn.
         * @implements IReconn
         * @constructor
         * @param {Msg.IReconn=} [properties] Properties to set
         */
        function Reconn(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Reconn instance using the specified properties.
         * @function create
         * @memberof Msg.Reconn
         * @static
         * @param {Msg.IReconn=} [properties] Properties to set
         * @returns {Msg.Reconn} Reconn instance
         */
        Reconn.create = function create(properties) {
            return new Reconn(properties);
        };

        /**
         * Encodes the specified Reconn message. Does not implicitly {@link Msg.Reconn.verify|verify} messages.
         * @function encode
         * @memberof Msg.Reconn
         * @static
         * @param {Msg.IReconn} message Reconn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reconn.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Reconn message, length delimited. Does not implicitly {@link Msg.Reconn.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.Reconn
         * @static
         * @param {Msg.IReconn} message Reconn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reconn.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reconn message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.Reconn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.Reconn} Reconn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reconn.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.Reconn();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Reconn message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.Reconn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.Reconn} Reconn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reconn.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Reconn message.
         * @function verify
         * @memberof Msg.Reconn
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reconn.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return Reconn;
    })();

    Msg.ReconnTo = (function() {

        /**
         * Properties of a ReconnTo.
         * @memberof Msg
         * @interface IReconnTo
         */

        /**
         * Constructs a new ReconnTo.
         * @memberof Msg
         * @classdesc Represents a ReconnTo.
         * @implements IReconnTo
         * @constructor
         * @param {Msg.IReconnTo=} [properties] Properties to set
         */
        function ReconnTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReconnTo instance using the specified properties.
         * @function create
         * @memberof Msg.ReconnTo
         * @static
         * @param {Msg.IReconnTo=} [properties] Properties to set
         * @returns {Msg.ReconnTo} ReconnTo instance
         */
        ReconnTo.create = function create(properties) {
            return new ReconnTo(properties);
        };

        /**
         * Encodes the specified ReconnTo message. Does not implicitly {@link Msg.ReconnTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.ReconnTo
         * @static
         * @param {Msg.IReconnTo} message ReconnTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ReconnTo message, length delimited. Does not implicitly {@link Msg.ReconnTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.ReconnTo
         * @static
         * @param {Msg.IReconnTo} message ReconnTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReconnTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReconnTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.ReconnTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.ReconnTo} ReconnTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.ReconnTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReconnTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.ReconnTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.ReconnTo} ReconnTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReconnTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReconnTo message.
         * @function verify
         * @memberof Msg.ReconnTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReconnTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return ReconnTo;
    })();

    Msg.UpGamePlayerNo = (function() {

        /**
         * Properties of an UpGamePlayerNo.
         * @memberof Msg
         * @interface IUpGamePlayerNo
         * @property {Array.<Msg.IGamePlayerMo>|null} [gamePlayer] UpGamePlayerNo gamePlayer
         */

        /**
         * Constructs a new UpGamePlayerNo.
         * @memberof Msg
         * @classdesc Represents an UpGamePlayerNo.
         * @implements IUpGamePlayerNo
         * @constructor
         * @param {Msg.IUpGamePlayerNo=} [properties] Properties to set
         */
        function UpGamePlayerNo(properties) {
            this.gamePlayer = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpGamePlayerNo gamePlayer.
         * @member {Array.<Msg.IGamePlayerMo>} gamePlayer
         * @memberof Msg.UpGamePlayerNo
         * @instance
         */
        UpGamePlayerNo.prototype.gamePlayer = $util.emptyArray;

        /**
         * Creates a new UpGamePlayerNo instance using the specified properties.
         * @function create
         * @memberof Msg.UpGamePlayerNo
         * @static
         * @param {Msg.IUpGamePlayerNo=} [properties] Properties to set
         * @returns {Msg.UpGamePlayerNo} UpGamePlayerNo instance
         */
        UpGamePlayerNo.create = function create(properties) {
            return new UpGamePlayerNo(properties);
        };

        /**
         * Encodes the specified UpGamePlayerNo message. Does not implicitly {@link Msg.UpGamePlayerNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.UpGamePlayerNo
         * @static
         * @param {Msg.IUpGamePlayerNo} message UpGamePlayerNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpGamePlayerNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gamePlayer != null && message.gamePlayer.length)
                for (var i = 0; i < message.gamePlayer.length; ++i)
                    $root.Msg.GamePlayerMo.encode(message.gamePlayer[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpGamePlayerNo message, length delimited. Does not implicitly {@link Msg.UpGamePlayerNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.UpGamePlayerNo
         * @static
         * @param {Msg.IUpGamePlayerNo} message UpGamePlayerNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpGamePlayerNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpGamePlayerNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.UpGamePlayerNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.UpGamePlayerNo} UpGamePlayerNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpGamePlayerNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.UpGamePlayerNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.gamePlayer && message.gamePlayer.length))
                        message.gamePlayer = [];
                    message.gamePlayer.push($root.Msg.GamePlayerMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpGamePlayerNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.UpGamePlayerNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.UpGamePlayerNo} UpGamePlayerNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpGamePlayerNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpGamePlayerNo message.
         * @function verify
         * @memberof Msg.UpGamePlayerNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpGamePlayerNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gamePlayer != null && message.hasOwnProperty("gamePlayer")) {
                if (!Array.isArray(message.gamePlayer))
                    return "gamePlayer: array expected";
                for (var i = 0; i < message.gamePlayer.length; ++i) {
                    var error = $root.Msg.GamePlayerMo.verify(message.gamePlayer[i]);
                    if (error)
                        return "gamePlayer." + error;
                }
            }
            return null;
        };

        return UpGamePlayerNo;
    })();

    Msg.UpTableNo = (function() {

        /**
         * Properties of an UpTableNo.
         * @memberof Msg
         * @interface IUpTableNo
         * @property {Msg.ITableMo|null} [table] UpTableNo table
         */

        /**
         * Constructs a new UpTableNo.
         * @memberof Msg
         * @classdesc Represents an UpTableNo.
         * @implements IUpTableNo
         * @constructor
         * @param {Msg.IUpTableNo=} [properties] Properties to set
         */
        function UpTableNo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpTableNo table.
         * @member {Msg.ITableMo|null|undefined} table
         * @memberof Msg.UpTableNo
         * @instance
         */
        UpTableNo.prototype.table = null;

        /**
         * Creates a new UpTableNo instance using the specified properties.
         * @function create
         * @memberof Msg.UpTableNo
         * @static
         * @param {Msg.IUpTableNo=} [properties] Properties to set
         * @returns {Msg.UpTableNo} UpTableNo instance
         */
        UpTableNo.create = function create(properties) {
            return new UpTableNo(properties);
        };

        /**
         * Encodes the specified UpTableNo message. Does not implicitly {@link Msg.UpTableNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.UpTableNo
         * @static
         * @param {Msg.IUpTableNo} message UpTableNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpTableNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.table != null && message.hasOwnProperty("table"))
                $root.Msg.TableMo.encode(message.table, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpTableNo message, length delimited. Does not implicitly {@link Msg.UpTableNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.UpTableNo
         * @static
         * @param {Msg.IUpTableNo} message UpTableNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpTableNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpTableNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.UpTableNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.UpTableNo} UpTableNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpTableNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.UpTableNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.table = $root.Msg.TableMo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpTableNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.UpTableNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.UpTableNo} UpTableNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpTableNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpTableNo message.
         * @function verify
         * @memberof Msg.UpTableNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpTableNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.table != null && message.hasOwnProperty("table")) {
                var error = $root.Msg.TableMo.verify(message.table);
                if (error)
                    return "table." + error;
            }
            return null;
        };

        return UpTableNo;
    })();

    Msg.PlayerResultMo = (function() {

        /**
         * Properties of a PlayerResultMo.
         * @memberof Msg
         * @interface IPlayerResultMo
         * @property {number|null} [multiple] PlayerResultMo multiple
         * @property {number|null} [peanut] PlayerResultMo peanut
         * @property {number|null} [rankingScore] PlayerResultMo rankingScore
         * @property {number|null} [contestScore] PlayerResultMo contestScore
         * @property {number|Long|null} [playerId] PlayerResultMo playerId
         */

        /**
         * Constructs a new PlayerResultMo.
         * @memberof Msg
         * @classdesc Represents a PlayerResultMo.
         * @implements IPlayerResultMo
         * @constructor
         * @param {Msg.IPlayerResultMo=} [properties] Properties to set
         */
        function PlayerResultMo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerResultMo multiple.
         * @member {number} multiple
         * @memberof Msg.PlayerResultMo
         * @instance
         */
        PlayerResultMo.prototype.multiple = 0;

        /**
         * PlayerResultMo peanut.
         * @member {number} peanut
         * @memberof Msg.PlayerResultMo
         * @instance
         */
        PlayerResultMo.prototype.peanut = -1;

        /**
         * PlayerResultMo rankingScore.
         * @member {number} rankingScore
         * @memberof Msg.PlayerResultMo
         * @instance
         */
        PlayerResultMo.prototype.rankingScore = -1;

        /**
         * PlayerResultMo contestScore.
         * @member {number} contestScore
         * @memberof Msg.PlayerResultMo
         * @instance
         */
        PlayerResultMo.prototype.contestScore = -1;

        /**
         * PlayerResultMo playerId.
         * @member {number|Long} playerId
         * @memberof Msg.PlayerResultMo
         * @instance
         */
        PlayerResultMo.prototype.playerId = $util.Long ? $util.Long.fromBits(-1,-1,false) : -1;

        /**
         * Creates a new PlayerResultMo instance using the specified properties.
         * @function create
         * @memberof Msg.PlayerResultMo
         * @static
         * @param {Msg.IPlayerResultMo=} [properties] Properties to set
         * @returns {Msg.PlayerResultMo} PlayerResultMo instance
         */
        PlayerResultMo.create = function create(properties) {
            return new PlayerResultMo(properties);
        };

        /**
         * Encodes the specified PlayerResultMo message. Does not implicitly {@link Msg.PlayerResultMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.PlayerResultMo
         * @static
         * @param {Msg.IPlayerResultMo} message PlayerResultMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerResultMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.multiple);
            if (message.peanut != null && message.hasOwnProperty("peanut"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.peanut);
            if (message.rankingScore != null && message.hasOwnProperty("rankingScore"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rankingScore);
            if (message.contestScore != null && message.hasOwnProperty("contestScore"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.contestScore);
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.playerId);
            return writer;
        };

        /**
         * Encodes the specified PlayerResultMo message, length delimited. Does not implicitly {@link Msg.PlayerResultMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.PlayerResultMo
         * @static
         * @param {Msg.IPlayerResultMo} message PlayerResultMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerResultMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerResultMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.PlayerResultMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.PlayerResultMo} PlayerResultMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerResultMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.PlayerResultMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.multiple = reader.int32();
                    break;
                case 2:
                    message.peanut = reader.int32();
                    break;
                case 3:
                    message.rankingScore = reader.int32();
                    break;
                case 4:
                    message.contestScore = reader.int32();
                    break;
                case 5:
                    message.playerId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerResultMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.PlayerResultMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.PlayerResultMo} PlayerResultMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerResultMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerResultMo message.
         * @function verify
         * @memberof Msg.PlayerResultMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerResultMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.multiple != null && message.hasOwnProperty("multiple"))
                if (!$util.isInteger(message.multiple))
                    return "multiple: integer expected";
            if (message.peanut != null && message.hasOwnProperty("peanut"))
                if (!$util.isInteger(message.peanut))
                    return "peanut: integer expected";
            if (message.rankingScore != null && message.hasOwnProperty("rankingScore"))
                if (!$util.isInteger(message.rankingScore))
                    return "rankingScore: integer expected";
            if (message.contestScore != null && message.hasOwnProperty("contestScore"))
                if (!$util.isInteger(message.contestScore))
                    return "contestScore: integer expected";
            if (message.playerId != null && message.hasOwnProperty("playerId"))
                if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                    return "playerId: integer|Long expected";
            return null;
        };

        return PlayerResultMo;
    })();

    Msg.TableResultNo = (function() {

        /**
         * Properties of a TableResultNo.
         * @memberof Msg
         * @interface ITableResultNo
         * @property {number|null} [baseScore] TableResultNo baseScore
         * @property {number|null} [winTeam] TableResultNo winTeam
         * @property {Array.<Msg.IPlayerResultMo>|null} [playerResult] TableResultNo playerResult
         */

        /**
         * Constructs a new TableResultNo.
         * @memberof Msg
         * @classdesc Represents a TableResultNo.
         * @implements ITableResultNo
         * @constructor
         * @param {Msg.ITableResultNo=} [properties] Properties to set
         */
        function TableResultNo(properties) {
            this.playerResult = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableResultNo baseScore.
         * @member {number} baseScore
         * @memberof Msg.TableResultNo
         * @instance
         */
        TableResultNo.prototype.baseScore = 0;

        /**
         * TableResultNo winTeam.
         * @member {number} winTeam
         * @memberof Msg.TableResultNo
         * @instance
         */
        TableResultNo.prototype.winTeam = 0;

        /**
         * TableResultNo playerResult.
         * @member {Array.<Msg.IPlayerResultMo>} playerResult
         * @memberof Msg.TableResultNo
         * @instance
         */
        TableResultNo.prototype.playerResult = $util.emptyArray;

        /**
         * Creates a new TableResultNo instance using the specified properties.
         * @function create
         * @memberof Msg.TableResultNo
         * @static
         * @param {Msg.ITableResultNo=} [properties] Properties to set
         * @returns {Msg.TableResultNo} TableResultNo instance
         */
        TableResultNo.create = function create(properties) {
            return new TableResultNo(properties);
        };

        /**
         * Encodes the specified TableResultNo message. Does not implicitly {@link Msg.TableResultNo.verify|verify} messages.
         * @function encode
         * @memberof Msg.TableResultNo
         * @static
         * @param {Msg.ITableResultNo} message TableResultNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableResultNo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.baseScore != null && message.hasOwnProperty("baseScore"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.baseScore);
            if (message.winTeam != null && message.hasOwnProperty("winTeam"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.winTeam);
            if (message.playerResult != null && message.playerResult.length)
                for (var i = 0; i < message.playerResult.length; ++i)
                    $root.Msg.PlayerResultMo.encode(message.playerResult[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TableResultNo message, length delimited. Does not implicitly {@link Msg.TableResultNo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.TableResultNo
         * @static
         * @param {Msg.ITableResultNo} message TableResultNo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableResultNo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableResultNo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.TableResultNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.TableResultNo} TableResultNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableResultNo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.TableResultNo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.baseScore = reader.int32();
                    break;
                case 2:
                    message.winTeam = reader.int32();
                    break;
                case 3:
                    if (!(message.playerResult && message.playerResult.length))
                        message.playerResult = [];
                    message.playerResult.push($root.Msg.PlayerResultMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableResultNo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.TableResultNo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.TableResultNo} TableResultNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableResultNo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableResultNo message.
         * @function verify
         * @memberof Msg.TableResultNo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableResultNo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.baseScore != null && message.hasOwnProperty("baseScore"))
                if (!$util.isInteger(message.baseScore))
                    return "baseScore: integer expected";
            if (message.winTeam != null && message.hasOwnProperty("winTeam"))
                if (!$util.isInteger(message.winTeam))
                    return "winTeam: integer expected";
            if (message.playerResult != null && message.hasOwnProperty("playerResult")) {
                if (!Array.isArray(message.playerResult))
                    return "playerResult: array expected";
                for (var i = 0; i < message.playerResult.length; ++i) {
                    var error = $root.Msg.PlayerResultMo.verify(message.playerResult[i]);
                    if (error)
                        return "playerResult." + error;
                }
            }
            return null;
        };

        return TableResultNo;
    })();

    Msg.TestTo = (function() {

        /**
         * Properties of a TestTo.
         * @memberof Msg
         * @interface ITestTo
         * @property {string|null} [name] TestTo name
         * @property {number|null} [age] TestTo age
         */

        /**
         * Constructs a new TestTo.
         * @memberof Msg
         * @classdesc Represents a TestTo.
         * @implements ITestTo
         * @constructor
         * @param {Msg.ITestTo=} [properties] Properties to set
         */
        function TestTo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestTo name.
         * @member {string} name
         * @memberof Msg.TestTo
         * @instance
         */
        TestTo.prototype.name = "";

        /**
         * TestTo age.
         * @member {number} age
         * @memberof Msg.TestTo
         * @instance
         */
        TestTo.prototype.age = 0;

        /**
         * Creates a new TestTo instance using the specified properties.
         * @function create
         * @memberof Msg.TestTo
         * @static
         * @param {Msg.ITestTo=} [properties] Properties to set
         * @returns {Msg.TestTo} TestTo instance
         */
        TestTo.create = function create(properties) {
            return new TestTo(properties);
        };

        /**
         * Encodes the specified TestTo message. Does not implicitly {@link Msg.TestTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.TestTo
         * @static
         * @param {Msg.ITestTo} message TestTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.age != null && message.hasOwnProperty("age"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.age);
            return writer;
        };

        /**
         * Encodes the specified TestTo message, length delimited. Does not implicitly {@link Msg.TestTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.TestTo
         * @static
         * @param {Msg.ITestTo} message TestTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.TestTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.TestTo} TestTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.TestTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.age = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TestTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.TestTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.TestTo} TestTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestTo message.
         * @function verify
         * @memberof Msg.TestTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            return null;
        };

        return TestTo;
    })();

    Msg.XunBaoMo = (function() {

        /**
         * Properties of a XunBaoMo.
         * @memberof Msg
         * @interface IXunBaoMo
         * @property {number|null} [type] XunBaoMo type
         * @property {number|Long|null} [nextTime] XunBaoMo nextTime
         */

        /**
         * Constructs a new XunBaoMo.
         * @memberof Msg
         * @classdesc Represents a XunBaoMo.
         * @implements IXunBaoMo
         * @constructor
         * @param {Msg.IXunBaoMo=} [properties] Properties to set
         */
        function XunBaoMo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * XunBaoMo type.
         * @member {number} type
         * @memberof Msg.XunBaoMo
         * @instance
         */
        XunBaoMo.prototype.type = 0;

        /**
         * XunBaoMo nextTime.
         * @member {number|Long} nextTime
         * @memberof Msg.XunBaoMo
         * @instance
         */
        XunBaoMo.prototype.nextTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new XunBaoMo instance using the specified properties.
         * @function create
         * @memberof Msg.XunBaoMo
         * @static
         * @param {Msg.IXunBaoMo=} [properties] Properties to set
         * @returns {Msg.XunBaoMo} XunBaoMo instance
         */
        XunBaoMo.create = function create(properties) {
            return new XunBaoMo(properties);
        };

        /**
         * Encodes the specified XunBaoMo message. Does not implicitly {@link Msg.XunBaoMo.verify|verify} messages.
         * @function encode
         * @memberof Msg.XunBaoMo
         * @static
         * @param {Msg.IXunBaoMo} message XunBaoMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XunBaoMo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.nextTime != null && message.hasOwnProperty("nextTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.nextTime);
            return writer;
        };

        /**
         * Encodes the specified XunBaoMo message, length delimited. Does not implicitly {@link Msg.XunBaoMo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.XunBaoMo
         * @static
         * @param {Msg.IXunBaoMo} message XunBaoMo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XunBaoMo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a XunBaoMo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.XunBaoMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.XunBaoMo} XunBaoMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XunBaoMo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.XunBaoMo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.nextTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a XunBaoMo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.XunBaoMo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.XunBaoMo} XunBaoMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XunBaoMo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a XunBaoMo message.
         * @function verify
         * @memberof Msg.XunBaoMo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        XunBaoMo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.nextTime != null && message.hasOwnProperty("nextTime"))
                if (!$util.isInteger(message.nextTime) && !(message.nextTime && $util.isInteger(message.nextTime.low) && $util.isInteger(message.nextTime.high)))
                    return "nextTime: integer|Long expected";
            return null;
        };

        return XunBaoMo;
    })();

    Msg.GetXunBao = (function() {

        /**
         * Properties of a GetXunBao.
         * @memberof Msg
         * @interface IGetXunBao
         */

        /**
         * Constructs a new GetXunBao.
         * @memberof Msg
         * @classdesc Represents a GetXunBao.
         * @implements IGetXunBao
         * @constructor
         * @param {Msg.IGetXunBao=} [properties] Properties to set
         */
        function GetXunBao(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetXunBao instance using the specified properties.
         * @function create
         * @memberof Msg.GetXunBao
         * @static
         * @param {Msg.IGetXunBao=} [properties] Properties to set
         * @returns {Msg.GetXunBao} GetXunBao instance
         */
        GetXunBao.create = function create(properties) {
            return new GetXunBao(properties);
        };

        /**
         * Encodes the specified GetXunBao message. Does not implicitly {@link Msg.GetXunBao.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetXunBao
         * @static
         * @param {Msg.IGetXunBao} message GetXunBao message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetXunBao.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetXunBao message, length delimited. Does not implicitly {@link Msg.GetXunBao.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetXunBao
         * @static
         * @param {Msg.IGetXunBao} message GetXunBao message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetXunBao.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetXunBao message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetXunBao
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetXunBao} GetXunBao
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetXunBao.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetXunBao();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetXunBao message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetXunBao
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetXunBao} GetXunBao
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetXunBao.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetXunBao message.
         * @function verify
         * @memberof Msg.GetXunBao
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetXunBao.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        return GetXunBao;
    })();

    Msg.GetXunBaoTo = (function() {

        /**
         * Properties of a GetXunBaoTo.
         * @memberof Msg
         * @interface IGetXunBaoTo
         * @property {Array.<Msg.IXunBaoMo>|null} [xunBao] GetXunBaoTo xunBao
         */

        /**
         * Constructs a new GetXunBaoTo.
         * @memberof Msg
         * @classdesc Represents a GetXunBaoTo.
         * @implements IGetXunBaoTo
         * @constructor
         * @param {Msg.IGetXunBaoTo=} [properties] Properties to set
         */
        function GetXunBaoTo(properties) {
            this.xunBao = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetXunBaoTo xunBao.
         * @member {Array.<Msg.IXunBaoMo>} xunBao
         * @memberof Msg.GetXunBaoTo
         * @instance
         */
        GetXunBaoTo.prototype.xunBao = $util.emptyArray;

        /**
         * Creates a new GetXunBaoTo instance using the specified properties.
         * @function create
         * @memberof Msg.GetXunBaoTo
         * @static
         * @param {Msg.IGetXunBaoTo=} [properties] Properties to set
         * @returns {Msg.GetXunBaoTo} GetXunBaoTo instance
         */
        GetXunBaoTo.create = function create(properties) {
            return new GetXunBaoTo(properties);
        };

        /**
         * Encodes the specified GetXunBaoTo message. Does not implicitly {@link Msg.GetXunBaoTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.GetXunBaoTo
         * @static
         * @param {Msg.IGetXunBaoTo} message GetXunBaoTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetXunBaoTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.xunBao != null && message.xunBao.length)
                for (var i = 0; i < message.xunBao.length; ++i)
                    $root.Msg.XunBaoMo.encode(message.xunBao[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetXunBaoTo message, length delimited. Does not implicitly {@link Msg.GetXunBaoTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.GetXunBaoTo
         * @static
         * @param {Msg.IGetXunBaoTo} message GetXunBaoTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetXunBaoTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetXunBaoTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.GetXunBaoTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.GetXunBaoTo} GetXunBaoTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetXunBaoTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.GetXunBaoTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.xunBao && message.xunBao.length))
                        message.xunBao = [];
                    message.xunBao.push($root.Msg.XunBaoMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetXunBaoTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.GetXunBaoTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.GetXunBaoTo} GetXunBaoTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetXunBaoTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetXunBaoTo message.
         * @function verify
         * @memberof Msg.GetXunBaoTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetXunBaoTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.xunBao != null && message.hasOwnProperty("xunBao")) {
                if (!Array.isArray(message.xunBao))
                    return "xunBao: array expected";
                for (var i = 0; i < message.xunBao.length; ++i) {
                    var error = $root.Msg.XunBaoMo.verify(message.xunBao[i]);
                    if (error)
                        return "xunBao." + error;
                }
            }
            return null;
        };

        return GetXunBaoTo;
    })();

    Msg.XunBao = (function() {

        /**
         * Properties of a XunBao.
         * @memberof Msg
         * @interface IXunBao
         * @property {number|null} [type] XunBao type
         */

        /**
         * Constructs a new XunBao.
         * @memberof Msg
         * @classdesc Represents a XunBao.
         * @implements IXunBao
         * @constructor
         * @param {Msg.IXunBao=} [properties] Properties to set
         */
        function XunBao(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * XunBao type.
         * @member {number} type
         * @memberof Msg.XunBao
         * @instance
         */
        XunBao.prototype.type = 0;

        /**
         * Creates a new XunBao instance using the specified properties.
         * @function create
         * @memberof Msg.XunBao
         * @static
         * @param {Msg.IXunBao=} [properties] Properties to set
         * @returns {Msg.XunBao} XunBao instance
         */
        XunBao.create = function create(properties) {
            return new XunBao(properties);
        };

        /**
         * Encodes the specified XunBao message. Does not implicitly {@link Msg.XunBao.verify|verify} messages.
         * @function encode
         * @memberof Msg.XunBao
         * @static
         * @param {Msg.IXunBao} message XunBao message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XunBao.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified XunBao message, length delimited. Does not implicitly {@link Msg.XunBao.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.XunBao
         * @static
         * @param {Msg.IXunBao} message XunBao message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XunBao.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a XunBao message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.XunBao
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.XunBao} XunBao
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XunBao.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.XunBao();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a XunBao message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.XunBao
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.XunBao} XunBao
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XunBao.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a XunBao message.
         * @function verify
         * @memberof Msg.XunBao
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        XunBao.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        return XunBao;
    })();

    Msg.XunBaoTo = (function() {

        /**
         * Properties of a XunBaoTo.
         * @memberof Msg
         * @interface IXunBaoTo
         * @property {Array.<Msg.IItemMo>|null} [reward] XunBaoTo reward
         */

        /**
         * Constructs a new XunBaoTo.
         * @memberof Msg
         * @classdesc Represents a XunBaoTo.
         * @implements IXunBaoTo
         * @constructor
         * @param {Msg.IXunBaoTo=} [properties] Properties to set
         */
        function XunBaoTo(properties) {
            this.reward = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * XunBaoTo reward.
         * @member {Array.<Msg.IItemMo>} reward
         * @memberof Msg.XunBaoTo
         * @instance
         */
        XunBaoTo.prototype.reward = $util.emptyArray;

        /**
         * Creates a new XunBaoTo instance using the specified properties.
         * @function create
         * @memberof Msg.XunBaoTo
         * @static
         * @param {Msg.IXunBaoTo=} [properties] Properties to set
         * @returns {Msg.XunBaoTo} XunBaoTo instance
         */
        XunBaoTo.create = function create(properties) {
            return new XunBaoTo(properties);
        };

        /**
         * Encodes the specified XunBaoTo message. Does not implicitly {@link Msg.XunBaoTo.verify|verify} messages.
         * @function encode
         * @memberof Msg.XunBaoTo
         * @static
         * @param {Msg.IXunBaoTo} message XunBaoTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XunBaoTo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reward != null && message.reward.length)
                for (var i = 0; i < message.reward.length; ++i)
                    $root.Msg.ItemMo.encode(message.reward[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified XunBaoTo message, length delimited. Does not implicitly {@link Msg.XunBaoTo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.XunBaoTo
         * @static
         * @param {Msg.IXunBaoTo} message XunBaoTo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        XunBaoTo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a XunBaoTo message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.XunBaoTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.XunBaoTo} XunBaoTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XunBaoTo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.XunBaoTo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.reward && message.reward.length))
                        message.reward = [];
                    message.reward.push($root.Msg.ItemMo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a XunBaoTo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Msg.XunBaoTo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.XunBaoTo} XunBaoTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        XunBaoTo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a XunBaoTo message.
         * @function verify
         * @memberof Msg.XunBaoTo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        XunBaoTo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reward != null && message.hasOwnProperty("reward")) {
                if (!Array.isArray(message.reward))
                    return "reward: array expected";
                for (var i = 0; i < message.reward.length; ++i) {
                    var error = $root.Msg.ItemMo.verify(message.reward[i]);
                    if (error)
                        return "reward." + error;
                }
            }
            return null;
        };

        return XunBaoTo;
    })();

    return Msg;
})();