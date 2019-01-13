type Long = protobuf.Long;

/** Namespace Msg. */
declare namespace Msg {

    /** Properties of an AucItemMo. */
    interface IAucItemMo {

        /** AucItemMo id */
        id?: (number|Long|null);

        /** AucItemMo item */
        item?: (Msg.IItemMo|null);

        /** AucItemMo endTime */
        endTime?: (number|Long|null);

        /** AucItemMo playerName */
        playerName?: (string|null);

        /** AucItemMo monType */
        monType?: (number|null);

        /** AucItemMo price */
        price?: (number|null);
    }

    /** Represents an AucItemMo. */
    class AucItemMo implements IAucItemMo {

        /**
         * Constructs a new AucItemMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IAucItemMo);

        /** AucItemMo id. */
        public id: (number|Long);

        /** AucItemMo item. */
        public item?: (Msg.IItemMo|null);

        /** AucItemMo endTime. */
        public endTime: (number|Long);

        /** AucItemMo playerName. */
        public playerName: string;

        /** AucItemMo monType. */
        public monType: number;

        /** AucItemMo price. */
        public price: number;

        /**
         * Creates a new AucItemMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AucItemMo instance
         */
        public static create(properties?: Msg.IAucItemMo): Msg.AucItemMo;

        /**
         * Encodes the specified AucItemMo message. Does not implicitly {@link Msg.AucItemMo.verify|verify} messages.
         * @param message AucItemMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IAucItemMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AucItemMo message, length delimited. Does not implicitly {@link Msg.AucItemMo.verify|verify} messages.
         * @param message AucItemMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IAucItemMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AucItemMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AucItemMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.AucItemMo;

        /**
         * Decodes an AucItemMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AucItemMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.AucItemMo;

        /**
         * Verifies an AucItemMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetAucItem. */
    interface IGetAucItem {

        /** GetAucItem type */
        type?: (number|null);

        /** GetAucItem monType */
        monType?: (number|null);

        /** GetAucItem page */
        page?: (number|null);

        /** GetAucItem priceSort */
        priceSort?: (number|null);
    }

    /** Represents a GetAucItem. */
    class GetAucItem implements IGetAucItem {

        /**
         * Constructs a new GetAucItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetAucItem);

        /** GetAucItem type. */
        public type: number;

        /** GetAucItem monType. */
        public monType: number;

        /** GetAucItem page. */
        public page: number;

        /** GetAucItem priceSort. */
        public priceSort: number;

        /**
         * Creates a new GetAucItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAucItem instance
         */
        public static create(properties?: Msg.IGetAucItem): Msg.GetAucItem;

        /**
         * Encodes the specified GetAucItem message. Does not implicitly {@link Msg.GetAucItem.verify|verify} messages.
         * @param message GetAucItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetAucItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetAucItem message, length delimited. Does not implicitly {@link Msg.GetAucItem.verify|verify} messages.
         * @param message GetAucItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetAucItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetAucItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetAucItem;

        /**
         * Decodes a GetAucItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetAucItem;

        /**
         * Verifies a GetAucItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetAucItemTo. */
    interface IGetAucItemTo {

        /** GetAucItemTo totalPag */
        totalPag?: (number|null);

        /** GetAucItemTo aucItem */
        aucItem?: (Msg.IAucItemMo[]|null);
    }

    /** Represents a GetAucItemTo. */
    class GetAucItemTo implements IGetAucItemTo {

        /**
         * Constructs a new GetAucItemTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetAucItemTo);

        /** GetAucItemTo totalPag. */
        public totalPag: number;

        /** GetAucItemTo aucItem. */
        public aucItem: Msg.IAucItemMo[];

        /**
         * Creates a new GetAucItemTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAucItemTo instance
         */
        public static create(properties?: Msg.IGetAucItemTo): Msg.GetAucItemTo;

        /**
         * Encodes the specified GetAucItemTo message. Does not implicitly {@link Msg.GetAucItemTo.verify|verify} messages.
         * @param message GetAucItemTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetAucItemTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetAucItemTo message, length delimited. Does not implicitly {@link Msg.GetAucItemTo.verify|verify} messages.
         * @param message GetAucItemTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetAucItemTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetAucItemTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetAucItemTo;

        /**
         * Decodes a GetAucItemTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetAucItemTo;

        /**
         * Verifies a GetAucItemTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetMyAucItem. */
    interface IGetMyAucItem {
    }

    /** Represents a GetMyAucItem. */
    class GetMyAucItem implements IGetMyAucItem {

        /**
         * Constructs a new GetMyAucItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetMyAucItem);

        /**
         * Creates a new GetMyAucItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMyAucItem instance
         */
        public static create(properties?: Msg.IGetMyAucItem): Msg.GetMyAucItem;

        /**
         * Encodes the specified GetMyAucItem message. Does not implicitly {@link Msg.GetMyAucItem.verify|verify} messages.
         * @param message GetMyAucItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetMyAucItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetMyAucItem message, length delimited. Does not implicitly {@link Msg.GetMyAucItem.verify|verify} messages.
         * @param message GetMyAucItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetMyAucItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetMyAucItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMyAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetMyAucItem;

        /**
         * Decodes a GetMyAucItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMyAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetMyAucItem;

        /**
         * Verifies a GetMyAucItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetMyAucItemTo. */
    interface IGetMyAucItemTo {

        /** GetMyAucItemTo myItem */
        myItem?: (Msg.IAucItemMo[]|null);
    }

    /** Represents a GetMyAucItemTo. */
    class GetMyAucItemTo implements IGetMyAucItemTo {

        /**
         * Constructs a new GetMyAucItemTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetMyAucItemTo);

        /** GetMyAucItemTo myItem. */
        public myItem: Msg.IAucItemMo[];

        /**
         * Creates a new GetMyAucItemTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMyAucItemTo instance
         */
        public static create(properties?: Msg.IGetMyAucItemTo): Msg.GetMyAucItemTo;

        /**
         * Encodes the specified GetMyAucItemTo message. Does not implicitly {@link Msg.GetMyAucItemTo.verify|verify} messages.
         * @param message GetMyAucItemTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetMyAucItemTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetMyAucItemTo message, length delimited. Does not implicitly {@link Msg.GetMyAucItemTo.verify|verify} messages.
         * @param message GetMyAucItemTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetMyAucItemTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetMyAucItemTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMyAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetMyAucItemTo;

        /**
         * Decodes a GetMyAucItemTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMyAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetMyAucItemTo;

        /**
         * Verifies a GetMyAucItemTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an UpAucItem. */
    interface IUpAucItem {

        /** UpAucItem index */
        index?: (number|null);

        /** UpAucItem count */
        count?: (number|null);

        /** UpAucItem monType */
        monType?: (number|null);

        /** UpAucItem price */
        price?: (number|null);
    }

    /** Represents an UpAucItem. */
    class UpAucItem implements IUpAucItem {

        /**
         * Constructs a new UpAucItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IUpAucItem);

        /** UpAucItem index. */
        public index: number;

        /** UpAucItem count. */
        public count: number;

        /** UpAucItem monType. */
        public monType: number;

        /** UpAucItem price. */
        public price: number;

        /**
         * Creates a new UpAucItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpAucItem instance
         */
        public static create(properties?: Msg.IUpAucItem): Msg.UpAucItem;

        /**
         * Encodes the specified UpAucItem message. Does not implicitly {@link Msg.UpAucItem.verify|verify} messages.
         * @param message UpAucItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IUpAucItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UpAucItem message, length delimited. Does not implicitly {@link Msg.UpAucItem.verify|verify} messages.
         * @param message UpAucItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IUpAucItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an UpAucItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.UpAucItem;

        /**
         * Decodes an UpAucItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.UpAucItem;

        /**
         * Verifies an UpAucItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an UpAucItemTo. */
    interface IUpAucItemTo {
    }

    /** Represents an UpAucItemTo. */
    class UpAucItemTo implements IUpAucItemTo {

        /**
         * Constructs a new UpAucItemTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IUpAucItemTo);

        /**
         * Creates a new UpAucItemTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpAucItemTo instance
         */
        public static create(properties?: Msg.IUpAucItemTo): Msg.UpAucItemTo;

        /**
         * Encodes the specified UpAucItemTo message. Does not implicitly {@link Msg.UpAucItemTo.verify|verify} messages.
         * @param message UpAucItemTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IUpAucItemTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UpAucItemTo message, length delimited. Does not implicitly {@link Msg.UpAucItemTo.verify|verify} messages.
         * @param message UpAucItemTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IUpAucItemTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an UpAucItemTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.UpAucItemTo;

        /**
         * Decodes an UpAucItemTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.UpAucItemTo;

        /**
         * Verifies an UpAucItemTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DownAucItem. */
    interface IDownAucItem {

        /** DownAucItem id */
        id?: (number|Long|null);
    }

    /** Represents a DownAucItem. */
    class DownAucItem implements IDownAucItem {

        /**
         * Constructs a new DownAucItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IDownAucItem);

        /** DownAucItem id. */
        public id: (number|Long);

        /**
         * Creates a new DownAucItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DownAucItem instance
         */
        public static create(properties?: Msg.IDownAucItem): Msg.DownAucItem;

        /**
         * Encodes the specified DownAucItem message. Does not implicitly {@link Msg.DownAucItem.verify|verify} messages.
         * @param message DownAucItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IDownAucItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DownAucItem message, length delimited. Does not implicitly {@link Msg.DownAucItem.verify|verify} messages.
         * @param message DownAucItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IDownAucItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DownAucItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DownAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.DownAucItem;

        /**
         * Decodes a DownAucItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DownAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.DownAucItem;

        /**
         * Verifies a DownAucItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DownAucItemTo. */
    interface IDownAucItemTo {

        /** DownAucItemTo id */
        id?: (number|Long|null);
    }

    /** Represents a DownAucItemTo. */
    class DownAucItemTo implements IDownAucItemTo {

        /**
         * Constructs a new DownAucItemTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IDownAucItemTo);

        /** DownAucItemTo id. */
        public id: (number|Long);

        /**
         * Creates a new DownAucItemTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DownAucItemTo instance
         */
        public static create(properties?: Msg.IDownAucItemTo): Msg.DownAucItemTo;

        /**
         * Encodes the specified DownAucItemTo message. Does not implicitly {@link Msg.DownAucItemTo.verify|verify} messages.
         * @param message DownAucItemTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IDownAucItemTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DownAucItemTo message, length delimited. Does not implicitly {@link Msg.DownAucItemTo.verify|verify} messages.
         * @param message DownAucItemTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IDownAucItemTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DownAucItemTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DownAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.DownAucItemTo;

        /**
         * Decodes a DownAucItemTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DownAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.DownAucItemTo;

        /**
         * Verifies a DownAucItemTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BuyAucItem. */
    interface IBuyAucItem {

        /** BuyAucItem id */
        id?: (number|Long|null);

        /** BuyAucItem sysId */
        sysId?: (number|null);
    }

    /** Represents a BuyAucItem. */
    class BuyAucItem implements IBuyAucItem {

        /**
         * Constructs a new BuyAucItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IBuyAucItem);

        /** BuyAucItem id. */
        public id: (number|Long);

        /** BuyAucItem sysId. */
        public sysId: number;

        /**
         * Creates a new BuyAucItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyAucItem instance
         */
        public static create(properties?: Msg.IBuyAucItem): Msg.BuyAucItem;

        /**
         * Encodes the specified BuyAucItem message. Does not implicitly {@link Msg.BuyAucItem.verify|verify} messages.
         * @param message BuyAucItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IBuyAucItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyAucItem message, length delimited. Does not implicitly {@link Msg.BuyAucItem.verify|verify} messages.
         * @param message BuyAucItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IBuyAucItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyAucItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.BuyAucItem;

        /**
         * Decodes a BuyAucItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyAucItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.BuyAucItem;

        /**
         * Verifies a BuyAucItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a BuyAucItemTo. */
    interface IBuyAucItemTo {
    }

    /** Represents a BuyAucItemTo. */
    class BuyAucItemTo implements IBuyAucItemTo {

        /**
         * Constructs a new BuyAucItemTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IBuyAucItemTo);

        /**
         * Creates a new BuyAucItemTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuyAucItemTo instance
         */
        public static create(properties?: Msg.IBuyAucItemTo): Msg.BuyAucItemTo;

        /**
         * Encodes the specified BuyAucItemTo message. Does not implicitly {@link Msg.BuyAucItemTo.verify|verify} messages.
         * @param message BuyAucItemTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IBuyAucItemTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified BuyAucItemTo message, length delimited. Does not implicitly {@link Msg.BuyAucItemTo.verify|verify} messages.
         * @param message BuyAucItemTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IBuyAucItemTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BuyAucItemTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuyAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.BuyAucItemTo;

        /**
         * Decodes a BuyAucItemTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuyAucItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.BuyAucItemTo;

        /**
         * Verifies a BuyAucItemTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AucItemNo. */
    interface IAucItemNo {

        /** AucItemNo aucItem */
        aucItem?: (Msg.IAucItemMo|null);
    }

    /** Represents an AucItemNo. */
    class AucItemNo implements IAucItemNo {

        /**
         * Constructs a new AucItemNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IAucItemNo);

        /** AucItemNo aucItem. */
        public aucItem?: (Msg.IAucItemMo|null);

        /**
         * Creates a new AucItemNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AucItemNo instance
         */
        public static create(properties?: Msg.IAucItemNo): Msg.AucItemNo;

        /**
         * Encodes the specified AucItemNo message. Does not implicitly {@link Msg.AucItemNo.verify|verify} messages.
         * @param message AucItemNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IAucItemNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AucItemNo message, length delimited. Does not implicitly {@link Msg.AucItemNo.verify|verify} messages.
         * @param message AucItemNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IAucItemNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AucItemNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AucItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.AucItemNo;

        /**
         * Decodes an AucItemNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AucItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.AucItemNo;

        /**
         * Verifies an AucItemNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DelItemNo. */
    interface IDelItemNo {

        /** DelItemNo id */
        id?: (number|Long|null);
    }

    /** Represents a DelItemNo. */
    class DelItemNo implements IDelItemNo {

        /**
         * Constructs a new DelItemNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IDelItemNo);

        /** DelItemNo id. */
        public id: (number|Long);

        /**
         * Creates a new DelItemNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelItemNo instance
         */
        public static create(properties?: Msg.IDelItemNo): Msg.DelItemNo;

        /**
         * Encodes the specified DelItemNo message. Does not implicitly {@link Msg.DelItemNo.verify|verify} messages.
         * @param message DelItemNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IDelItemNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DelItemNo message, length delimited. Does not implicitly {@link Msg.DelItemNo.verify|verify} messages.
         * @param message DelItemNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IDelItemNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DelItemNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.DelItemNo;

        /**
         * Decodes a DelItemNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.DelItemNo;

        /**
         * Verifies a DelItemNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ErrorNo. */
    interface IErrorNo {

        /** ErrorNo errorMsg */
        errorMsg?: (string|null);
    }

    /** Represents an ErrorNo. */
    class ErrorNo implements IErrorNo {

        /**
         * Constructs a new ErrorNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IErrorNo);

        /** ErrorNo errorMsg. */
        public errorMsg: string;

        /**
         * Creates a new ErrorNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ErrorNo instance
         */
        public static create(properties?: Msg.IErrorNo): Msg.ErrorNo;

        /**
         * Encodes the specified ErrorNo message. Does not implicitly {@link Msg.ErrorNo.verify|verify} messages.
         * @param message ErrorNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IErrorNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ErrorNo message, length delimited. Does not implicitly {@link Msg.ErrorNo.verify|verify} messages.
         * @param message ErrorNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IErrorNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ErrorNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ErrorNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.ErrorNo;

        /**
         * Decodes an ErrorNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ErrorNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.ErrorNo;

        /**
         * Verifies an ErrorNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CMD. */
    interface ICMD {

        /** CMD parameters */
        parameters?: (string[]|null);
    }

    /** Represents a CMD. */
    class CMD implements ICMD {

        /**
         * Constructs a new CMD.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ICMD);

        /** CMD parameters. */
        public parameters: string[];

        /**
         * Creates a new CMD instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CMD instance
         */
        public static create(properties?: Msg.ICMD): Msg.CMD;

        /**
         * Encodes the specified CMD message. Does not implicitly {@link Msg.CMD.verify|verify} messages.
         * @param message CMD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ICMD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CMD message, length delimited. Does not implicitly {@link Msg.CMD.verify|verify} messages.
         * @param message CMD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ICMD, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CMD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.CMD;

        /**
         * Decodes a CMD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CMD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.CMD;

        /**
         * Verifies a CMD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ItemMo. */
    interface IItemMo {

        /** ItemMo type */
        type?: (number|null);

        /** ItemMo sysId */
        sysId?: (number|null);

        /** ItemMo count */
        count?: (number|null);
    }

    /** Represents an ItemMo. */
    class ItemMo implements IItemMo {

        /**
         * Constructs a new ItemMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IItemMo);

        /** ItemMo type. */
        public type: number;

        /** ItemMo sysId. */
        public sysId: number;

        /** ItemMo count. */
        public count: number;

        /**
         * Creates a new ItemMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemMo instance
         */
        public static create(properties?: Msg.IItemMo): Msg.ItemMo;

        /**
         * Encodes the specified ItemMo message. Does not implicitly {@link Msg.ItemMo.verify|verify} messages.
         * @param message ItemMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IItemMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ItemMo message, length delimited. Does not implicitly {@link Msg.ItemMo.verify|verify} messages.
         * @param message ItemMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IItemMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ItemMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.ItemMo;

        /**
         * Decodes an ItemMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.ItemMo;

        /**
         * Verifies an ItemMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GridMo. */
    interface IGridMo {

        /** GridMo index */
        index?: (number|null);

        /** GridMo type */
        type?: (number|null);

        /** GridMo cid */
        cid?: (number|null);

        /** GridMo count */
        count?: (number|null);

        /** GridMo effType */
        effType?: (number|null);

        /** GridMo effValue */
        effValue?: (number|Long|null);
    }

    /** Represents a GridMo. */
    class GridMo implements IGridMo {

        /**
         * Constructs a new GridMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGridMo);

        /** GridMo index. */
        public index: number;

        /** GridMo type. */
        public type: number;

        /** GridMo cid. */
        public cid: number;

        /** GridMo count. */
        public count: number;

        /** GridMo effType. */
        public effType: number;

        /** GridMo effValue. */
        public effValue: (number|Long);

        /**
         * Creates a new GridMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GridMo instance
         */
        public static create(properties?: Msg.IGridMo): Msg.GridMo;

        /**
         * Encodes the specified GridMo message. Does not implicitly {@link Msg.GridMo.verify|verify} messages.
         * @param message GridMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGridMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GridMo message, length delimited. Does not implicitly {@link Msg.GridMo.verify|verify} messages.
         * @param message GridMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGridMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GridMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GridMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GridMo;

        /**
         * Decodes a GridMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GridMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GridMo;

        /**
         * Verifies a GridMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetBag. */
    interface IGetBag {
    }

    /** Represents a GetBag. */
    class GetBag implements IGetBag {

        /**
         * Constructs a new GetBag.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetBag);

        /**
         * Creates a new GetBag instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetBag instance
         */
        public static create(properties?: Msg.IGetBag): Msg.GetBag;

        /**
         * Encodes the specified GetBag message. Does not implicitly {@link Msg.GetBag.verify|verify} messages.
         * @param message GetBag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetBag, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetBag message, length delimited. Does not implicitly {@link Msg.GetBag.verify|verify} messages.
         * @param message GetBag message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetBag, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetBag message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetBag;

        /**
         * Decodes a GetBag message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetBag;

        /**
         * Verifies a GetBag message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetBagTo. */
    interface IGetBagTo {

        /** GetBagTo grid */
        grid?: (Msg.IGridMo[]|null);
    }

    /** Represents a GetBagTo. */
    class GetBagTo implements IGetBagTo {

        /**
         * Constructs a new GetBagTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetBagTo);

        /** GetBagTo grid. */
        public grid: Msg.IGridMo[];

        /**
         * Creates a new GetBagTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetBagTo instance
         */
        public static create(properties?: Msg.IGetBagTo): Msg.GetBagTo;

        /**
         * Encodes the specified GetBagTo message. Does not implicitly {@link Msg.GetBagTo.verify|verify} messages.
         * @param message GetBagTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetBagTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetBagTo message, length delimited. Does not implicitly {@link Msg.GetBagTo.verify|verify} messages.
         * @param message GetBagTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetBagTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetBagTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetBagTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetBagTo;

        /**
         * Decodes a GetBagTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetBagTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetBagTo;

        /**
         * Verifies a GetBagTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a UseItem. */
    interface IUseItem {

        /** UseItem index */
        index?: (number|null);

        /** UseItem useCount */
        useCount?: (number|null);
    }

    /** Represents a UseItem. */
    class UseItem implements IUseItem {

        /**
         * Constructs a new UseItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IUseItem);

        /** UseItem index. */
        public index: number;

        /** UseItem useCount. */
        public useCount: number;

        /**
         * Creates a new UseItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UseItem instance
         */
        public static create(properties?: Msg.IUseItem): Msg.UseItem;

        /**
         * Encodes the specified UseItem message. Does not implicitly {@link Msg.UseItem.verify|verify} messages.
         * @param message UseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IUseItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UseItem message, length delimited. Does not implicitly {@link Msg.UseItem.verify|verify} messages.
         * @param message UseItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IUseItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UseItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.UseItem;

        /**
         * Decodes a UseItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UseItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.UseItem;

        /**
         * Verifies a UseItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a UseItemTo. */
    interface IUseItemTo {
    }

    /** Represents a UseItemTo. */
    class UseItemTo implements IUseItemTo {

        /**
         * Constructs a new UseItemTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IUseItemTo);

        /**
         * Creates a new UseItemTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UseItemTo instance
         */
        public static create(properties?: Msg.IUseItemTo): Msg.UseItemTo;

        /**
         * Encodes the specified UseItemTo message. Does not implicitly {@link Msg.UseItemTo.verify|verify} messages.
         * @param message UseItemTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IUseItemTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UseItemTo message, length delimited. Does not implicitly {@link Msg.UseItemTo.verify|verify} messages.
         * @param message UseItemTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IUseItemTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a UseItemTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UseItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.UseItemTo;

        /**
         * Decodes a UseItemTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UseItemTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.UseItemTo;

        /**
         * Verifies a UseItemTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DeleteItemNo. */
    interface IDeleteItemNo {

        /** DeleteItemNo index */
        index?: (number[]|null);
    }

    /** Represents a DeleteItemNo. */
    class DeleteItemNo implements IDeleteItemNo {

        /**
         * Constructs a new DeleteItemNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IDeleteItemNo);

        /** DeleteItemNo index. */
        public index: number[];

        /**
         * Creates a new DeleteItemNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteItemNo instance
         */
        public static create(properties?: Msg.IDeleteItemNo): Msg.DeleteItemNo;

        /**
         * Encodes the specified DeleteItemNo message. Does not implicitly {@link Msg.DeleteItemNo.verify|verify} messages.
         * @param message DeleteItemNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IDeleteItemNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DeleteItemNo message, length delimited. Does not implicitly {@link Msg.DeleteItemNo.verify|verify} messages.
         * @param message DeleteItemNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IDeleteItemNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DeleteItemNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.DeleteItemNo;

        /**
         * Decodes a DeleteItemNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.DeleteItemNo;

        /**
         * Verifies a DeleteItemNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AddItemNo. */
    interface IAddItemNo {

        /** AddItemNo grid */
        grid?: (Msg.IGridMo[]|null);
    }

    /** Represents an AddItemNo. */
    class AddItemNo implements IAddItemNo {

        /**
         * Constructs a new AddItemNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IAddItemNo);

        /** AddItemNo grid. */
        public grid: Msg.IGridMo[];

        /**
         * Creates a new AddItemNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddItemNo instance
         */
        public static create(properties?: Msg.IAddItemNo): Msg.AddItemNo;

        /**
         * Encodes the specified AddItemNo message. Does not implicitly {@link Msg.AddItemNo.verify|verify} messages.
         * @param message AddItemNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IAddItemNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AddItemNo message, length delimited. Does not implicitly {@link Msg.AddItemNo.verify|verify} messages.
         * @param message AddItemNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IAddItemNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AddItemNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.AddItemNo;

        /**
         * Decodes an AddItemNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.AddItemNo;

        /**
         * Verifies an AddItemNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an UpdateItemNo. */
    interface IUpdateItemNo {

        /** UpdateItemNo grid */
        grid?: (Msg.IGridMo[]|null);
    }

    /** Represents an UpdateItemNo. */
    class UpdateItemNo implements IUpdateItemNo {

        /**
         * Constructs a new UpdateItemNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IUpdateItemNo);

        /** UpdateItemNo grid. */
        public grid: Msg.IGridMo[];

        /**
         * Creates a new UpdateItemNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateItemNo instance
         */
        public static create(properties?: Msg.IUpdateItemNo): Msg.UpdateItemNo;

        /**
         * Encodes the specified UpdateItemNo message. Does not implicitly {@link Msg.UpdateItemNo.verify|verify} messages.
         * @param message UpdateItemNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IUpdateItemNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UpdateItemNo message, length delimited. Does not implicitly {@link Msg.UpdateItemNo.verify|verify} messages.
         * @param message UpdateItemNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IUpdateItemNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an UpdateItemNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.UpdateItemNo;

        /**
         * Decodes an UpdateItemNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateItemNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.UpdateItemNo;

        /**
         * Verifies an UpdateItemNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ChatMo. */
    interface IChatMo {

        /** ChatMo id */
        id?: (number|Long|null);

        /** ChatMo name */
        name?: (string|null);

        /** ChatMo sex */
        sex?: (number|null);

        /** ChatMo title */
        title?: (number|null);

        /** ChatMo content */
        content?: (string|null);
    }

    /** Represents a ChatMo. */
    class ChatMo implements IChatMo {

        /**
         * Constructs a new ChatMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IChatMo);

        /** ChatMo id. */
        public id: (number|Long);

        /** ChatMo name. */
        public name: string;

        /** ChatMo sex. */
        public sex: number;

        /** ChatMo title. */
        public title: number;

        /** ChatMo content. */
        public content: string;

        /**
         * Creates a new ChatMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatMo instance
         */
        public static create(properties?: Msg.IChatMo): Msg.ChatMo;

        /**
         * Encodes the specified ChatMo message. Does not implicitly {@link Msg.ChatMo.verify|verify} messages.
         * @param message ChatMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IChatMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ChatMo message, length delimited. Does not implicitly {@link Msg.ChatMo.verify|verify} messages.
         * @param message ChatMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IChatMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChatMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.ChatMo;

        /**
         * Decodes a ChatMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.ChatMo;

        /**
         * Verifies a ChatMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetChat. */
    interface IGetChat {
    }

    /** Represents a GetChat. */
    class GetChat implements IGetChat {

        /**
         * Constructs a new GetChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetChat);

        /**
         * Creates a new GetChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetChat instance
         */
        public static create(properties?: Msg.IGetChat): Msg.GetChat;

        /**
         * Encodes the specified GetChat message. Does not implicitly {@link Msg.GetChat.verify|verify} messages.
         * @param message GetChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetChat message, length delimited. Does not implicitly {@link Msg.GetChat.verify|verify} messages.
         * @param message GetChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetChat;

        /**
         * Decodes a GetChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetChat;

        /**
         * Verifies a GetChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetChatTo. */
    interface IGetChatTo {

        /** GetChatTo chat */
        chat?: (Msg.IChatMo[]|null);
    }

    /** Represents a GetChatTo. */
    class GetChatTo implements IGetChatTo {

        /**
         * Constructs a new GetChatTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetChatTo);

        /** GetChatTo chat. */
        public chat: Msg.IChatMo[];

        /**
         * Creates a new GetChatTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetChatTo instance
         */
        public static create(properties?: Msg.IGetChatTo): Msg.GetChatTo;

        /**
         * Encodes the specified GetChatTo message. Does not implicitly {@link Msg.GetChatTo.verify|verify} messages.
         * @param message GetChatTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetChatTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetChatTo message, length delimited. Does not implicitly {@link Msg.GetChatTo.verify|verify} messages.
         * @param message GetChatTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetChatTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetChatTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetChatTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetChatTo;

        /**
         * Decodes a GetChatTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetChatTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetChatTo;

        /**
         * Verifies a GetChatTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SendChat. */
    interface ISendChat {

        /** SendChat content */
        content?: (string|null);
    }

    /** Represents a SendChat. */
    class SendChat implements ISendChat {

        /**
         * Constructs a new SendChat.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ISendChat);

        /** SendChat content. */
        public content: string;

        /**
         * Creates a new SendChat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendChat instance
         */
        public static create(properties?: Msg.ISendChat): Msg.SendChat;

        /**
         * Encodes the specified SendChat message. Does not implicitly {@link Msg.SendChat.verify|verify} messages.
         * @param message SendChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ISendChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SendChat message, length delimited. Does not implicitly {@link Msg.SendChat.verify|verify} messages.
         * @param message SendChat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ISendChat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SendChat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.SendChat;

        /**
         * Decodes a SendChat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.SendChat;

        /**
         * Verifies a SendChat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a SendChatTo. */
    interface ISendChatTo {
    }

    /** Represents a SendChatTo. */
    class SendChatTo implements ISendChatTo {

        /**
         * Constructs a new SendChatTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ISendChatTo);

        /**
         * Creates a new SendChatTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendChatTo instance
         */
        public static create(properties?: Msg.ISendChatTo): Msg.SendChatTo;

        /**
         * Encodes the specified SendChatTo message. Does not implicitly {@link Msg.SendChatTo.verify|verify} messages.
         * @param message SendChatTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ISendChatTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified SendChatTo message, length delimited. Does not implicitly {@link Msg.SendChatTo.verify|verify} messages.
         * @param message SendChatTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ISendChatTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SendChatTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendChatTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.SendChatTo;

        /**
         * Decodes a SendChatTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendChatTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.SendChatTo;

        /**
         * Verifies a SendChatTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ChatNo. */
    interface IChatNo {

        /** ChatNo chat */
        chat?: (Msg.IChatMo|null);
    }

    /** Represents a ChatNo. */
    class ChatNo implements IChatNo {

        /**
         * Constructs a new ChatNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IChatNo);

        /** ChatNo chat. */
        public chat?: (Msg.IChatMo|null);

        /**
         * Creates a new ChatNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChatNo instance
         */
        public static create(properties?: Msg.IChatNo): Msg.ChatNo;

        /**
         * Encodes the specified ChatNo message. Does not implicitly {@link Msg.ChatNo.verify|verify} messages.
         * @param message ChatNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IChatNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ChatNo message, length delimited. Does not implicitly {@link Msg.ChatNo.verify|verify} messages.
         * @param message ChatNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IChatNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ChatNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChatNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.ChatNo;

        /**
         * Decodes a ChatNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChatNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.ChatNo;

        /**
         * Verifies a ChatNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ContestRankMo. */
    interface IContestRankMo {

        /** ContestRankMo playerId */
        playerId?: (number|null);

        /** ContestRankMo playerName */
        playerName?: (string|null);

        /** ContestRankMo contestScore */
        contestScore?: (number|null);

        /** ContestRankMo state */
        state?: (number|null);
    }

    /** Represents a ContestRankMo. */
    class ContestRankMo implements IContestRankMo {

        /**
         * Constructs a new ContestRankMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IContestRankMo);

        /** ContestRankMo playerId. */
        public playerId: number;

        /** ContestRankMo playerName. */
        public playerName: string;

        /** ContestRankMo contestScore. */
        public contestScore: number;

        /** ContestRankMo state. */
        public state: number;

        /**
         * Creates a new ContestRankMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContestRankMo instance
         */
        public static create(properties?: Msg.IContestRankMo): Msg.ContestRankMo;

        /**
         * Encodes the specified ContestRankMo message. Does not implicitly {@link Msg.ContestRankMo.verify|verify} messages.
         * @param message ContestRankMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IContestRankMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ContestRankMo message, length delimited. Does not implicitly {@link Msg.ContestRankMo.verify|verify} messages.
         * @param message ContestRankMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IContestRankMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ContestRankMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContestRankMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.ContestRankMo;

        /**
         * Decodes a ContestRankMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContestRankMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.ContestRankMo;

        /**
         * Verifies a ContestRankMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an EnterContestSite. */
    interface IEnterContestSite {

        /** EnterContestSite siteId */
        siteId?: (number|null);
    }

    /** Represents an EnterContestSite. */
    class EnterContestSite implements IEnterContestSite {

        /**
         * Constructs a new EnterContestSite.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IEnterContestSite);

        /** EnterContestSite siteId. */
        public siteId: number;

        /**
         * Creates a new EnterContestSite instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterContestSite instance
         */
        public static create(properties?: Msg.IEnterContestSite): Msg.EnterContestSite;

        /**
         * Encodes the specified EnterContestSite message. Does not implicitly {@link Msg.EnterContestSite.verify|verify} messages.
         * @param message EnterContestSite message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IEnterContestSite, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EnterContestSite message, length delimited. Does not implicitly {@link Msg.EnterContestSite.verify|verify} messages.
         * @param message EnterContestSite message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IEnterContestSite, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EnterContestSite message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterContestSite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.EnterContestSite;

        /**
         * Decodes an EnterContestSite message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterContestSite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.EnterContestSite;

        /**
         * Verifies an EnterContestSite message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an EnterContestSiteTo. */
    interface IEnterContestSiteTo {

        /** EnterContestSiteTo siteId */
        siteId?: (number|null);
    }

    /** Represents an EnterContestSiteTo. */
    class EnterContestSiteTo implements IEnterContestSiteTo {

        /**
         * Constructs a new EnterContestSiteTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IEnterContestSiteTo);

        /** EnterContestSiteTo siteId. */
        public siteId: number;

        /**
         * Creates a new EnterContestSiteTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterContestSiteTo instance
         */
        public static create(properties?: Msg.IEnterContestSiteTo): Msg.EnterContestSiteTo;

        /**
         * Encodes the specified EnterContestSiteTo message. Does not implicitly {@link Msg.EnterContestSiteTo.verify|verify} messages.
         * @param message EnterContestSiteTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IEnterContestSiteTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EnterContestSiteTo message, length delimited. Does not implicitly {@link Msg.EnterContestSiteTo.verify|verify} messages.
         * @param message EnterContestSiteTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IEnterContestSiteTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EnterContestSiteTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterContestSiteTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.EnterContestSiteTo;

        /**
         * Decodes an EnterContestSiteTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterContestSiteTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.EnterContestSiteTo;

        /**
         * Verifies an EnterContestSiteTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ExitContestSite. */
    interface IExitContestSite {
    }

    /** Represents an ExitContestSite. */
    class ExitContestSite implements IExitContestSite {

        /**
         * Constructs a new ExitContestSite.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IExitContestSite);

        /**
         * Creates a new ExitContestSite instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitContestSite instance
         */
        public static create(properties?: Msg.IExitContestSite): Msg.ExitContestSite;

        /**
         * Encodes the specified ExitContestSite message. Does not implicitly {@link Msg.ExitContestSite.verify|verify} messages.
         * @param message ExitContestSite message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IExitContestSite, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ExitContestSite message, length delimited. Does not implicitly {@link Msg.ExitContestSite.verify|verify} messages.
         * @param message ExitContestSite message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IExitContestSite, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ExitContestSite message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitContestSite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.ExitContestSite;

        /**
         * Decodes an ExitContestSite message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitContestSite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.ExitContestSite;

        /**
         * Verifies an ExitContestSite message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ExitContestSiteTo. */
    interface IExitContestSiteTo {
    }

    /** Represents an ExitContestSiteTo. */
    class ExitContestSiteTo implements IExitContestSiteTo {

        /**
         * Constructs a new ExitContestSiteTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IExitContestSiteTo);

        /**
         * Creates a new ExitContestSiteTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitContestSiteTo instance
         */
        public static create(properties?: Msg.IExitContestSiteTo): Msg.ExitContestSiteTo;

        /**
         * Encodes the specified ExitContestSiteTo message. Does not implicitly {@link Msg.ExitContestSiteTo.verify|verify} messages.
         * @param message ExitContestSiteTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IExitContestSiteTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ExitContestSiteTo message, length delimited. Does not implicitly {@link Msg.ExitContestSiteTo.verify|verify} messages.
         * @param message ExitContestSiteTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IExitContestSiteTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ExitContestSiteTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitContestSiteTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.ExitContestSiteTo;

        /**
         * Decodes an ExitContestSiteTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitContestSiteTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.ExitContestSiteTo;

        /**
         * Verifies an ExitContestSiteTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an Apply. */
    interface IApply {

        /** Apply siteId */
        siteId?: (number|null);
    }

    /** Represents an Apply. */
    class Apply implements IApply {

        /**
         * Constructs a new Apply.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IApply);

        /** Apply siteId. */
        public siteId: number;

        /**
         * Creates a new Apply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Apply instance
         */
        public static create(properties?: Msg.IApply): Msg.Apply;

        /**
         * Encodes the specified Apply message. Does not implicitly {@link Msg.Apply.verify|verify} messages.
         * @param message Apply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IApply, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Apply message, length delimited. Does not implicitly {@link Msg.Apply.verify|verify} messages.
         * @param message Apply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IApply, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Apply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Apply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.Apply;

        /**
         * Decodes an Apply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Apply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.Apply;

        /**
         * Verifies an Apply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an ApplyTo. */
    interface IApplyTo {

        /** ApplyTo siteId */
        siteId?: (number|null);
    }

    /** Represents an ApplyTo. */
    class ApplyTo implements IApplyTo {

        /**
         * Constructs a new ApplyTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IApplyTo);

        /** ApplyTo siteId. */
        public siteId: number;

        /**
         * Creates a new ApplyTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApplyTo instance
         */
        public static create(properties?: Msg.IApplyTo): Msg.ApplyTo;

        /**
         * Encodes the specified ApplyTo message. Does not implicitly {@link Msg.ApplyTo.verify|verify} messages.
         * @param message ApplyTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IApplyTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ApplyTo message, length delimited. Does not implicitly {@link Msg.ApplyTo.verify|verify} messages.
         * @param message ApplyTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IApplyTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ApplyTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApplyTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.ApplyTo;

        /**
         * Decodes an ApplyTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApplyTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.ApplyTo;

        /**
         * Verifies an ApplyTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CancelApply. */
    interface ICancelApply {
    }

    /** Represents a CancelApply. */
    class CancelApply implements ICancelApply {

        /**
         * Constructs a new CancelApply.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ICancelApply);

        /**
         * Creates a new CancelApply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelApply instance
         */
        public static create(properties?: Msg.ICancelApply): Msg.CancelApply;

        /**
         * Encodes the specified CancelApply message. Does not implicitly {@link Msg.CancelApply.verify|verify} messages.
         * @param message CancelApply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ICancelApply, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CancelApply message, length delimited. Does not implicitly {@link Msg.CancelApply.verify|verify} messages.
         * @param message CancelApply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ICancelApply, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CancelApply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.CancelApply;

        /**
         * Decodes a CancelApply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.CancelApply;

        /**
         * Verifies a CancelApply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CancelApplyTo. */
    interface ICancelApplyTo {
    }

    /** Represents a CancelApplyTo. */
    class CancelApplyTo implements ICancelApplyTo {

        /**
         * Constructs a new CancelApplyTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ICancelApplyTo);

        /**
         * Creates a new CancelApplyTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelApplyTo instance
         */
        public static create(properties?: Msg.ICancelApplyTo): Msg.CancelApplyTo;

        /**
         * Encodes the specified CancelApplyTo message. Does not implicitly {@link Msg.CancelApplyTo.verify|verify} messages.
         * @param message CancelApplyTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ICancelApplyTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CancelApplyTo message, length delimited. Does not implicitly {@link Msg.CancelApplyTo.verify|verify} messages.
         * @param message CancelApplyTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ICancelApplyTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CancelApplyTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelApplyTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.CancelApplyTo;

        /**
         * Decodes a CancelApplyTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelApplyTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.CancelApplyTo;

        /**
         * Verifies a CancelApplyTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ContestSiteNo. */
    interface IContestSiteNo {

        /** ContestSiteNo siteId */
        siteId?: (number|null);

        /** ContestSiteNo playerNum */
        playerNum?: (number|null);
    }

    /** Represents a ContestSiteNo. */
    class ContestSiteNo implements IContestSiteNo {

        /**
         * Constructs a new ContestSiteNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IContestSiteNo);

        /** ContestSiteNo siteId. */
        public siteId: number;

        /** ContestSiteNo playerNum. */
        public playerNum: number;

        /**
         * Creates a new ContestSiteNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContestSiteNo instance
         */
        public static create(properties?: Msg.IContestSiteNo): Msg.ContestSiteNo;

        /**
         * Encodes the specified ContestSiteNo message. Does not implicitly {@link Msg.ContestSiteNo.verify|verify} messages.
         * @param message ContestSiteNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IContestSiteNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ContestSiteNo message, length delimited. Does not implicitly {@link Msg.ContestSiteNo.verify|verify} messages.
         * @param message ContestSiteNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IContestSiteNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ContestSiteNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContestSiteNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.ContestSiteNo;

        /**
         * Decodes a ContestSiteNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContestSiteNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.ContestSiteNo;

        /**
         * Verifies a ContestSiteNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ContestNo. */
    interface IContestNo {

        /** ContestNo contestId */
        contestId?: (number|null);

        /** ContestNo baseScore */
        baseScore?: (number|null);

        /** ContestNo contestRank */
        contestRank?: (Msg.IContestRankMo[]|null);
    }

    /** Represents a ContestNo. */
    class ContestNo implements IContestNo {

        /**
         * Constructs a new ContestNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IContestNo);

        /** ContestNo contestId. */
        public contestId: number;

        /** ContestNo baseScore. */
        public baseScore: number;

        /** ContestNo contestRank. */
        public contestRank: Msg.IContestRankMo[];

        /**
         * Creates a new ContestNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContestNo instance
         */
        public static create(properties?: Msg.IContestNo): Msg.ContestNo;

        /**
         * Encodes the specified ContestNo message. Does not implicitly {@link Msg.ContestNo.verify|verify} messages.
         * @param message ContestNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IContestNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ContestNo message, length delimited. Does not implicitly {@link Msg.ContestNo.verify|verify} messages.
         * @param message ContestNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IContestNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ContestNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContestNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.ContestNo;

        /**
         * Decodes a ContestNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContestNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.ContestNo;

        /**
         * Verifies a ContestNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Login. */
    interface ILogin {

        /** Login account */
        account?: (string|null);
    }

    /** Represents a Login. */
    class Login implements ILogin {

        /**
         * Constructs a new Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ILogin);

        /** Login account. */
        public account: string;

        /**
         * Creates a new Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Login instance
         */
        public static create(properties?: Msg.ILogin): Msg.Login;

        /**
         * Encodes the specified Login message. Does not implicitly {@link Msg.Login.verify|verify} messages.
         * @param message Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ILogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Login message, length delimited. Does not implicitly {@link Msg.Login.verify|verify} messages.
         * @param message Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ILogin, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.Login;

        /**
         * Decodes a Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.Login;

        /**
         * Verifies a Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a LoginTo. */
    interface ILoginTo {

        /** LoginTo player */
        player?: (Msg.IPlayerMo|null);

        /** LoginTo grid */
        grid?: (Msg.IGridMo[]|null);
    }

    /** Represents a LoginTo. */
    class LoginTo implements ILoginTo {

        /**
         * Constructs a new LoginTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ILoginTo);

        /** LoginTo player. */
        public player?: (Msg.IPlayerMo|null);

        /** LoginTo grid. */
        public grid: Msg.IGridMo[];

        /**
         * Creates a new LoginTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginTo instance
         */
        public static create(properties?: Msg.ILoginTo): Msg.LoginTo;

        /**
         * Encodes the specified LoginTo message. Does not implicitly {@link Msg.LoginTo.verify|verify} messages.
         * @param message LoginTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ILoginTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginTo message, length delimited. Does not implicitly {@link Msg.LoginTo.verify|verify} messages.
         * @param message LoginTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ILoginTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.LoginTo;

        /**
         * Decodes a LoginTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.LoginTo;

        /**
         * Verifies a LoginTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerMo. */
    interface IPlayerMo {

        /** PlayerMo id */
        id?: (number|Long|null);

        /** PlayerMo account */
        account?: (string|null);

        /** PlayerMo avatar */
        avatar?: (string|null);

        /** PlayerMo name */
        name?: (string|null);

        /** PlayerMo gender */
        gender?: (number|null);

        /** PlayerMo bean */
        bean?: (number|null);

        /** PlayerMo diamond */
        diamond?: (number|null);
    }

    /** Represents a PlayerMo. */
    class PlayerMo implements IPlayerMo {

        /**
         * Constructs a new PlayerMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IPlayerMo);

        /** PlayerMo id. */
        public id: (number|Long);

        /** PlayerMo account. */
        public account: string;

        /** PlayerMo avatar. */
        public avatar: string;

        /** PlayerMo name. */
        public name: string;

        /** PlayerMo gender. */
        public gender: number;

        /** PlayerMo bean. */
        public bean: number;

        /** PlayerMo diamond. */
        public diamond: number;

        /**
         * Creates a new PlayerMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerMo instance
         */
        public static create(properties?: Msg.IPlayerMo): Msg.PlayerMo;

        /**
         * Encodes the specified PlayerMo message. Does not implicitly {@link Msg.PlayerMo.verify|verify} messages.
         * @param message PlayerMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IPlayerMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerMo message, length delimited. Does not implicitly {@link Msg.PlayerMo.verify|verify} messages.
         * @param message PlayerMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IPlayerMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.PlayerMo;

        /**
         * Decodes a PlayerMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.PlayerMo;

        /**
         * Verifies a PlayerMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetPlayer. */
    interface IGetPlayer {
    }

    /** Represents a GetPlayer. */
    class GetPlayer implements IGetPlayer {

        /**
         * Constructs a new GetPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetPlayer);

        /**
         * Creates a new GetPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPlayer instance
         */
        public static create(properties?: Msg.IGetPlayer): Msg.GetPlayer;

        /**
         * Encodes the specified GetPlayer message. Does not implicitly {@link Msg.GetPlayer.verify|verify} messages.
         * @param message GetPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetPlayer message, length delimited. Does not implicitly {@link Msg.GetPlayer.verify|verify} messages.
         * @param message GetPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetPlayer, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetPlayer;

        /**
         * Decodes a GetPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetPlayer;

        /**
         * Verifies a GetPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetPlayerTo. */
    interface IGetPlayerTo {

        /** GetPlayerTo player */
        player?: (Msg.IPlayerMo|null);
    }

    /** Represents a GetPlayerTo. */
    class GetPlayerTo implements IGetPlayerTo {

        /**
         * Constructs a new GetPlayerTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetPlayerTo);

        /** GetPlayerTo player. */
        public player?: (Msg.IPlayerMo|null);

        /**
         * Creates a new GetPlayerTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPlayerTo instance
         */
        public static create(properties?: Msg.IGetPlayerTo): Msg.GetPlayerTo;

        /**
         * Encodes the specified GetPlayerTo message. Does not implicitly {@link Msg.GetPlayerTo.verify|verify} messages.
         * @param message GetPlayerTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetPlayerTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetPlayerTo message, length delimited. Does not implicitly {@link Msg.GetPlayerTo.verify|verify} messages.
         * @param message GetPlayerTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetPlayerTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetPlayerTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPlayerTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetPlayerTo;

        /**
         * Decodes a GetPlayerTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPlayerTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetPlayerTo;

        /**
         * Verifies a GetPlayerTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an UpdatePlayerNo. */
    interface IUpdatePlayerNo {

        /** UpdatePlayerNo player */
        player?: (Msg.IPlayerMo|null);
    }

    /** Represents an UpdatePlayerNo. */
    class UpdatePlayerNo implements IUpdatePlayerNo {

        /**
         * Constructs a new UpdatePlayerNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IUpdatePlayerNo);

        /** UpdatePlayerNo player. */
        public player?: (Msg.IPlayerMo|null);

        /**
         * Creates a new UpdatePlayerNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdatePlayerNo instance
         */
        public static create(properties?: Msg.IUpdatePlayerNo): Msg.UpdatePlayerNo;

        /**
         * Encodes the specified UpdatePlayerNo message. Does not implicitly {@link Msg.UpdatePlayerNo.verify|verify} messages.
         * @param message UpdatePlayerNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IUpdatePlayerNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UpdatePlayerNo message, length delimited. Does not implicitly {@link Msg.UpdatePlayerNo.verify|verify} messages.
         * @param message UpdatePlayerNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IUpdatePlayerNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an UpdatePlayerNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdatePlayerNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.UpdatePlayerNo;

        /**
         * Decodes an UpdatePlayerNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdatePlayerNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.UpdatePlayerNo;

        /**
         * Verifies an UpdatePlayerNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MailMo. */
    interface IMailMo {

        /** MailMo id */
        id?: (number|Long|null);

        /** MailMo mailId */
        mailId?: (number|null);

        /** MailMo sendName */
        sendName?: (string|null);

        /** MailMo sendTime */
        sendTime?: (number|Long|null);

        /** MailMo reward */
        reward?: (Msg.IItemMo[]|null);

        /** MailMo isReceive */
        isReceive?: (number|null);

        /** MailMo params */
        params?: (string[]|null);
    }

    /** Represents a MailMo. */
    class MailMo implements IMailMo {

        /**
         * Constructs a new MailMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IMailMo);

        /** MailMo id. */
        public id: (number|Long);

        /** MailMo mailId. */
        public mailId: number;

        /** MailMo sendName. */
        public sendName: string;

        /** MailMo sendTime. */
        public sendTime: (number|Long);

        /** MailMo reward. */
        public reward: Msg.IItemMo[];

        /** MailMo isReceive. */
        public isReceive: number;

        /** MailMo params. */
        public params: string[];

        /**
         * Creates a new MailMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailMo instance
         */
        public static create(properties?: Msg.IMailMo): Msg.MailMo;

        /**
         * Encodes the specified MailMo message. Does not implicitly {@link Msg.MailMo.verify|verify} messages.
         * @param message MailMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IMailMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailMo message, length delimited. Does not implicitly {@link Msg.MailMo.verify|verify} messages.
         * @param message MailMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IMailMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.MailMo;

        /**
         * Decodes a MailMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.MailMo;

        /**
         * Verifies a MailMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetMail. */
    interface IGetMail {
    }

    /** Represents a GetMail. */
    class GetMail implements IGetMail {

        /**
         * Constructs a new GetMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetMail);

        /**
         * Creates a new GetMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMail instance
         */
        public static create(properties?: Msg.IGetMail): Msg.GetMail;

        /**
         * Encodes the specified GetMail message. Does not implicitly {@link Msg.GetMail.verify|verify} messages.
         * @param message GetMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetMail message, length delimited. Does not implicitly {@link Msg.GetMail.verify|verify} messages.
         * @param message GetMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetMail;

        /**
         * Decodes a GetMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetMail;

        /**
         * Verifies a GetMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetMailTo. */
    interface IGetMailTo {

        /** GetMailTo mail */
        mail?: (Msg.IMailMo[]|null);
    }

    /** Represents a GetMailTo. */
    class GetMailTo implements IGetMailTo {

        /**
         * Constructs a new GetMailTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetMailTo);

        /** GetMailTo mail. */
        public mail: Msg.IMailMo[];

        /**
         * Creates a new GetMailTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMailTo instance
         */
        public static create(properties?: Msg.IGetMailTo): Msg.GetMailTo;

        /**
         * Encodes the specified GetMailTo message. Does not implicitly {@link Msg.GetMailTo.verify|verify} messages.
         * @param message GetMailTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetMailTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetMailTo message, length delimited. Does not implicitly {@link Msg.GetMailTo.verify|verify} messages.
         * @param message GetMailTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetMailTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetMailTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMailTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetMailTo;

        /**
         * Decodes a GetMailTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMailTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetMailTo;

        /**
         * Verifies a GetMailTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DelMail. */
    interface IDelMail {

        /** DelMail id */
        id?: ((number|Long)[]|null);
    }

    /** Represents a DelMail. */
    class DelMail implements IDelMail {

        /**
         * Constructs a new DelMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IDelMail);

        /** DelMail id. */
        public id: (number|Long)[];

        /**
         * Creates a new DelMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelMail instance
         */
        public static create(properties?: Msg.IDelMail): Msg.DelMail;

        /**
         * Encodes the specified DelMail message. Does not implicitly {@link Msg.DelMail.verify|verify} messages.
         * @param message DelMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IDelMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DelMail message, length delimited. Does not implicitly {@link Msg.DelMail.verify|verify} messages.
         * @param message DelMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IDelMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DelMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.DelMail;

        /**
         * Decodes a DelMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.DelMail;

        /**
         * Verifies a DelMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DelMailTo. */
    interface IDelMailTo {

        /** DelMailTo id */
        id?: ((number|Long)[]|null);
    }

    /** Represents a DelMailTo. */
    class DelMailTo implements IDelMailTo {

        /**
         * Constructs a new DelMailTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IDelMailTo);

        /** DelMailTo id. */
        public id: (number|Long)[];

        /**
         * Creates a new DelMailTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelMailTo instance
         */
        public static create(properties?: Msg.IDelMailTo): Msg.DelMailTo;

        /**
         * Encodes the specified DelMailTo message. Does not implicitly {@link Msg.DelMailTo.verify|verify} messages.
         * @param message DelMailTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IDelMailTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DelMailTo message, length delimited. Does not implicitly {@link Msg.DelMailTo.verify|verify} messages.
         * @param message DelMailTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IDelMailTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DelMailTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelMailTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.DelMailTo;

        /**
         * Decodes a DelMailTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelMailTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.DelMailTo;

        /**
         * Verifies a DelMailTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetMailReward. */
    interface IGetMailReward {

        /** GetMailReward id */
        id?: (number|Long|null);
    }

    /** Represents a GetMailReward. */
    class GetMailReward implements IGetMailReward {

        /**
         * Constructs a new GetMailReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetMailReward);

        /** GetMailReward id. */
        public id: (number|Long);

        /**
         * Creates a new GetMailReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMailReward instance
         */
        public static create(properties?: Msg.IGetMailReward): Msg.GetMailReward;

        /**
         * Encodes the specified GetMailReward message. Does not implicitly {@link Msg.GetMailReward.verify|verify} messages.
         * @param message GetMailReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetMailReward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetMailReward message, length delimited. Does not implicitly {@link Msg.GetMailReward.verify|verify} messages.
         * @param message GetMailReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetMailReward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetMailReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMailReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetMailReward;

        /**
         * Decodes a GetMailReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMailReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetMailReward;

        /**
         * Verifies a GetMailReward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetMailRewardTo. */
    interface IGetMailRewardTo {

        /** GetMailRewardTo reward */
        reward?: (Msg.IItemMo[]|null);
    }

    /** Represents a GetMailRewardTo. */
    class GetMailRewardTo implements IGetMailRewardTo {

        /**
         * Constructs a new GetMailRewardTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetMailRewardTo);

        /** GetMailRewardTo reward. */
        public reward: Msg.IItemMo[];

        /**
         * Creates a new GetMailRewardTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMailRewardTo instance
         */
        public static create(properties?: Msg.IGetMailRewardTo): Msg.GetMailRewardTo;

        /**
         * Encodes the specified GetMailRewardTo message. Does not implicitly {@link Msg.GetMailRewardTo.verify|verify} messages.
         * @param message GetMailRewardTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetMailRewardTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetMailRewardTo message, length delimited. Does not implicitly {@link Msg.GetMailRewardTo.verify|verify} messages.
         * @param message GetMailRewardTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetMailRewardTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetMailRewardTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMailRewardTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetMailRewardTo;

        /**
         * Decodes a GetMailRewardTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMailRewardTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetMailRewardTo;

        /**
         * Verifies a GetMailRewardTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MailNo. */
    interface IMailNo {

        /** MailNo mail */
        mail?: (Msg.IMailMo|null);
    }

    /** Represents a MailNo. */
    class MailNo implements IMailNo {

        /**
         * Constructs a new MailNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IMailNo);

        /** MailNo mail. */
        public mail?: (Msg.IMailMo|null);

        /**
         * Creates a new MailNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailNo instance
         */
        public static create(properties?: Msg.IMailNo): Msg.MailNo;

        /**
         * Encodes the specified MailNo message. Does not implicitly {@link Msg.MailNo.verify|verify} messages.
         * @param message MailNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IMailNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MailNo message, length delimited. Does not implicitly {@link Msg.MailNo.verify|verify} messages.
         * @param message MailNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IMailNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.MailNo;

        /**
         * Decodes a MailNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.MailNo;

        /**
         * Verifies a MailNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MatchSiteMo. */
    interface IMatchSiteMo {

        /** MatchSiteMo siteId */
        siteId?: (number|null);

        /** MatchSiteMo playerNum */
        playerNum?: (number|null);
    }

    /** Represents a MatchSiteMo. */
    class MatchSiteMo implements IMatchSiteMo {

        /**
         * Constructs a new MatchSiteMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IMatchSiteMo);

        /** MatchSiteMo siteId. */
        public siteId: number;

        /** MatchSiteMo playerNum. */
        public playerNum: number;

        /**
         * Creates a new MatchSiteMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchSiteMo instance
         */
        public static create(properties?: Msg.IMatchSiteMo): Msg.MatchSiteMo;

        /**
         * Encodes the specified MatchSiteMo message. Does not implicitly {@link Msg.MatchSiteMo.verify|verify} messages.
         * @param message MatchSiteMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IMatchSiteMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MatchSiteMo message, length delimited. Does not implicitly {@link Msg.MatchSiteMo.verify|verify} messages.
         * @param message MatchSiteMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IMatchSiteMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MatchSiteMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchSiteMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.MatchSiteMo;

        /**
         * Decodes a MatchSiteMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchSiteMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.MatchSiteMo;

        /**
         * Verifies a MatchSiteMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Match. */
    interface IMatch {

        /** Match siteId */
        siteId?: (number|null);
    }

    /** Represents a Match. */
    class Match implements IMatch {

        /**
         * Constructs a new Match.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IMatch);

        /** Match siteId. */
        public siteId: number;

        /**
         * Creates a new Match instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Match instance
         */
        public static create(properties?: Msg.IMatch): Msg.Match;

        /**
         * Encodes the specified Match message. Does not implicitly {@link Msg.Match.verify|verify} messages.
         * @param message Match message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IMatch, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Match message, length delimited. Does not implicitly {@link Msg.Match.verify|verify} messages.
         * @param message Match message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IMatch, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Match message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Match
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.Match;

        /**
         * Decodes a Match message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Match
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.Match;

        /**
         * Verifies a Match message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MatchTo. */
    interface IMatchTo {

        /** MatchTo siteId */
        siteId?: (number|null);
    }

    /** Represents a MatchTo. */
    class MatchTo implements IMatchTo {

        /**
         * Constructs a new MatchTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IMatchTo);

        /** MatchTo siteId. */
        public siteId: number;

        /**
         * Creates a new MatchTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MatchTo instance
         */
        public static create(properties?: Msg.IMatchTo): Msg.MatchTo;

        /**
         * Encodes the specified MatchTo message. Does not implicitly {@link Msg.MatchTo.verify|verify} messages.
         * @param message MatchTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IMatchTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MatchTo message, length delimited. Does not implicitly {@link Msg.MatchTo.verify|verify} messages.
         * @param message MatchTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IMatchTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MatchTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MatchTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.MatchTo;

        /**
         * Decodes a MatchTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MatchTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.MatchTo;

        /**
         * Verifies a MatchTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CancelMatch. */
    interface ICancelMatch {
    }

    /** Represents a CancelMatch. */
    class CancelMatch implements ICancelMatch {

        /**
         * Constructs a new CancelMatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ICancelMatch);

        /**
         * Creates a new CancelMatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelMatch instance
         */
        public static create(properties?: Msg.ICancelMatch): Msg.CancelMatch;

        /**
         * Encodes the specified CancelMatch message. Does not implicitly {@link Msg.CancelMatch.verify|verify} messages.
         * @param message CancelMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ICancelMatch, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CancelMatch message, length delimited. Does not implicitly {@link Msg.CancelMatch.verify|verify} messages.
         * @param message CancelMatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ICancelMatch, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CancelMatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.CancelMatch;

        /**
         * Decodes a CancelMatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.CancelMatch;

        /**
         * Verifies a CancelMatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CancelMatchTo. */
    interface ICancelMatchTo {
    }

    /** Represents a CancelMatchTo. */
    class CancelMatchTo implements ICancelMatchTo {

        /**
         * Constructs a new CancelMatchTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ICancelMatchTo);

        /**
         * Creates a new CancelMatchTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelMatchTo instance
         */
        public static create(properties?: Msg.ICancelMatchTo): Msg.CancelMatchTo;

        /**
         * Encodes the specified CancelMatchTo message. Does not implicitly {@link Msg.CancelMatchTo.verify|verify} messages.
         * @param message CancelMatchTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ICancelMatchTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CancelMatchTo message, length delimited. Does not implicitly {@link Msg.CancelMatchTo.verify|verify} messages.
         * @param message CancelMatchTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ICancelMatchTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CancelMatchTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelMatchTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.CancelMatchTo;

        /**
         * Decodes a CancelMatchTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelMatchTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.CancelMatchTo;

        /**
         * Verifies a CancelMatchTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetMatchSite. */
    interface IGetMatchSite {

        /** GetMatchSite siteType */
        siteType?: (number|null);
    }

    /** Represents a GetMatchSite. */
    class GetMatchSite implements IGetMatchSite {

        /**
         * Constructs a new GetMatchSite.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetMatchSite);

        /** GetMatchSite siteType. */
        public siteType: number;

        /**
         * Creates a new GetMatchSite instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMatchSite instance
         */
        public static create(properties?: Msg.IGetMatchSite): Msg.GetMatchSite;

        /**
         * Encodes the specified GetMatchSite message. Does not implicitly {@link Msg.GetMatchSite.verify|verify} messages.
         * @param message GetMatchSite message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetMatchSite, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetMatchSite message, length delimited. Does not implicitly {@link Msg.GetMatchSite.verify|verify} messages.
         * @param message GetMatchSite message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetMatchSite, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetMatchSite message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMatchSite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetMatchSite;

        /**
         * Decodes a GetMatchSite message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMatchSite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetMatchSite;

        /**
         * Verifies a GetMatchSite message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetMatchSiteTo. */
    interface IGetMatchSiteTo {

        /** GetMatchSiteTo matchSite */
        matchSite?: (Msg.IMatchSiteMo[]|null);
    }

    /** Represents a GetMatchSiteTo. */
    class GetMatchSiteTo implements IGetMatchSiteTo {

        /**
         * Constructs a new GetMatchSiteTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetMatchSiteTo);

        /** GetMatchSiteTo matchSite. */
        public matchSite: Msg.IMatchSiteMo[];

        /**
         * Creates a new GetMatchSiteTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMatchSiteTo instance
         */
        public static create(properties?: Msg.IGetMatchSiteTo): Msg.GetMatchSiteTo;

        /**
         * Encodes the specified GetMatchSiteTo message. Does not implicitly {@link Msg.GetMatchSiteTo.verify|verify} messages.
         * @param message GetMatchSiteTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetMatchSiteTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetMatchSiteTo message, length delimited. Does not implicitly {@link Msg.GetMatchSiteTo.verify|verify} messages.
         * @param message GetMatchSiteTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetMatchSiteTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetMatchSiteTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMatchSiteTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetMatchSiteTo;

        /**
         * Decodes a GetMatchSiteTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMatchSiteTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetMatchSiteTo;

        /**
         * Verifies a GetMatchSiteTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RankingMo. */
    interface IRankingMo {

        /** RankingMo id */
        id?: (number|Long|null);

        /** RankingMo name */
        name?: (string|null);

        /** RankingMo sex */
        sex?: (number|null);

        /** RankingMo title */
        title?: (number|null);

        /** RankingMo score */
        score?: (number|null);
    }

    /** Represents a RankingMo. */
    class RankingMo implements IRankingMo {

        /**
         * Constructs a new RankingMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IRankingMo);

        /** RankingMo id. */
        public id: (number|Long);

        /** RankingMo name. */
        public name: string;

        /** RankingMo sex. */
        public sex: number;

        /** RankingMo title. */
        public title: number;

        /** RankingMo score. */
        public score: number;

        /**
         * Creates a new RankingMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankingMo instance
         */
        public static create(properties?: Msg.IRankingMo): Msg.RankingMo;

        /**
         * Encodes the specified RankingMo message. Does not implicitly {@link Msg.RankingMo.verify|verify} messages.
         * @param message RankingMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IRankingMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RankingMo message, length delimited. Does not implicitly {@link Msg.RankingMo.verify|verify} messages.
         * @param message RankingMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IRankingMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankingMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankingMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.RankingMo;

        /**
         * Decodes a RankingMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankingMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.RankingMo;

        /**
         * Verifies a RankingMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetRanking. */
    interface IGetRanking {

        /** GetRanking type */
        type?: (number|null);
    }

    /** Represents a GetRanking. */
    class GetRanking implements IGetRanking {

        /**
         * Constructs a new GetRanking.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetRanking);

        /** GetRanking type. */
        public type: number;

        /**
         * Creates a new GetRanking instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRanking instance
         */
        public static create(properties?: Msg.IGetRanking): Msg.GetRanking;

        /**
         * Encodes the specified GetRanking message. Does not implicitly {@link Msg.GetRanking.verify|verify} messages.
         * @param message GetRanking message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetRanking, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetRanking message, length delimited. Does not implicitly {@link Msg.GetRanking.verify|verify} messages.
         * @param message GetRanking message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetRanking, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetRanking message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRanking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetRanking;

        /**
         * Decodes a GetRanking message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRanking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetRanking;

        /**
         * Verifies a GetRanking message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetRankingTo. */
    interface IGetRankingTo {

        /** GetRankingTo ranking */
        ranking?: (Msg.IRankingMo[]|null);

        /** GetRankingTo myRank */
        myRank?: (number|null);
    }

    /** Represents a GetRankingTo. */
    class GetRankingTo implements IGetRankingTo {

        /**
         * Constructs a new GetRankingTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetRankingTo);

        /** GetRankingTo ranking. */
        public ranking: Msg.IRankingMo[];

        /** GetRankingTo myRank. */
        public myRank: number;

        /**
         * Creates a new GetRankingTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRankingTo instance
         */
        public static create(properties?: Msg.IGetRankingTo): Msg.GetRankingTo;

        /**
         * Encodes the specified GetRankingTo message. Does not implicitly {@link Msg.GetRankingTo.verify|verify} messages.
         * @param message GetRankingTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetRankingTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetRankingTo message, length delimited. Does not implicitly {@link Msg.GetRankingTo.verify|verify} messages.
         * @param message GetRankingTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetRankingTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetRankingTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRankingTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetRankingTo;

        /**
         * Decodes a GetRankingTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRankingTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetRankingTo;

        /**
         * Verifies a GetRankingTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RoleMo. */
    interface IRoleMo {

        /** RoleMo rid */
        rid?: (number|null);

        /** RoleMo exp */
        exp?: (number|null);

        /** RoleMo effType */
        effType?: (number|null);

        /** RoleMo effValue */
        effValue?: (number|Long|null);
    }

    /** Represents a RoleMo. */
    class RoleMo implements IRoleMo {

        /**
         * Constructs a new RoleMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IRoleMo);

        /** RoleMo rid. */
        public rid: number;

        /** RoleMo exp. */
        public exp: number;

        /** RoleMo effType. */
        public effType: number;

        /** RoleMo effValue. */
        public effValue: (number|Long);

        /**
         * Creates a new RoleMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleMo instance
         */
        public static create(properties?: Msg.IRoleMo): Msg.RoleMo;

        /**
         * Encodes the specified RoleMo message. Does not implicitly {@link Msg.RoleMo.verify|verify} messages.
         * @param message RoleMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IRoleMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoleMo message, length delimited. Does not implicitly {@link Msg.RoleMo.verify|verify} messages.
         * @param message RoleMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IRoleMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoleMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.RoleMo;

        /**
         * Decodes a RoleMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.RoleMo;

        /**
         * Verifies a RoleMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetRole. */
    interface IGetRole {
    }

    /** Represents a GetRole. */
    class GetRole implements IGetRole {

        /**
         * Constructs a new GetRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetRole);

        /**
         * Creates a new GetRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRole instance
         */
        public static create(properties?: Msg.IGetRole): Msg.GetRole;

        /**
         * Encodes the specified GetRole message. Does not implicitly {@link Msg.GetRole.verify|verify} messages.
         * @param message GetRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetRole message, length delimited. Does not implicitly {@link Msg.GetRole.verify|verify} messages.
         * @param message GetRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetRole;

        /**
         * Decodes a GetRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetRole;

        /**
         * Verifies a GetRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetRoleTo. */
    interface IGetRoleTo {

        /** GetRoleTo role */
        role?: (Msg.IRoleMo[]|null);
    }

    /** Represents a GetRoleTo. */
    class GetRoleTo implements IGetRoleTo {

        /**
         * Constructs a new GetRoleTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetRoleTo);

        /** GetRoleTo role. */
        public role: Msg.IRoleMo[];

        /**
         * Creates a new GetRoleTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRoleTo instance
         */
        public static create(properties?: Msg.IGetRoleTo): Msg.GetRoleTo;

        /**
         * Encodes the specified GetRoleTo message. Does not implicitly {@link Msg.GetRoleTo.verify|verify} messages.
         * @param message GetRoleTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetRoleTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetRoleTo message, length delimited. Does not implicitly {@link Msg.GetRoleTo.verify|verify} messages.
         * @param message GetRoleTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetRoleTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetRoleTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRoleTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetRoleTo;

        /**
         * Decodes a GetRoleTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRoleTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetRoleTo;

        /**
         * Verifies a GetRoleTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an UpRole. */
    interface IUpRole {

        /** UpRole rid */
        rid?: (number|null);

        /** UpRole cost */
        cost?: ({ [k: string]: number }|null);
    }

    /** Represents an UpRole. */
    class UpRole implements IUpRole {

        /**
         * Constructs a new UpRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IUpRole);

        /** UpRole rid. */
        public rid: number;

        /** UpRole cost. */
        public cost: { [k: string]: number };

        /**
         * Creates a new UpRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpRole instance
         */
        public static create(properties?: Msg.IUpRole): Msg.UpRole;

        /**
         * Encodes the specified UpRole message. Does not implicitly {@link Msg.UpRole.verify|verify} messages.
         * @param message UpRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IUpRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UpRole message, length delimited. Does not implicitly {@link Msg.UpRole.verify|verify} messages.
         * @param message UpRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IUpRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an UpRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.UpRole;

        /**
         * Decodes an UpRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.UpRole;

        /**
         * Verifies an UpRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an UpRoleTo. */
    interface IUpRoleTo {
    }

    /** Represents an UpRoleTo. */
    class UpRoleTo implements IUpRoleTo {

        /**
         * Constructs a new UpRoleTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IUpRoleTo);

        /**
         * Creates a new UpRoleTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpRoleTo instance
         */
        public static create(properties?: Msg.IUpRoleTo): Msg.UpRoleTo;

        /**
         * Encodes the specified UpRoleTo message. Does not implicitly {@link Msg.UpRoleTo.verify|verify} messages.
         * @param message UpRoleTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IUpRoleTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UpRoleTo message, length delimited. Does not implicitly {@link Msg.UpRoleTo.verify|verify} messages.
         * @param message UpRoleTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IUpRoleTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an UpRoleTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpRoleTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.UpRoleTo;

        /**
         * Decodes an UpRoleTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpRoleTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.UpRoleTo;

        /**
         * Verifies an UpRoleTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RoleNo. */
    interface IRoleNo {

        /** RoleNo role */
        role?: (Msg.IRoleMo|null);
    }

    /** Represents a RoleNo. */
    class RoleNo implements IRoleNo {

        /**
         * Constructs a new RoleNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IRoleNo);

        /** RoleNo role. */
        public role?: (Msg.IRoleMo|null);

        /**
         * Creates a new RoleNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoleNo instance
         */
        public static create(properties?: Msg.IRoleNo): Msg.RoleNo;

        /**
         * Encodes the specified RoleNo message. Does not implicitly {@link Msg.RoleNo.verify|verify} messages.
         * @param message RoleNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IRoleNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoleNo message, length delimited. Does not implicitly {@link Msg.RoleNo.verify|verify} messages.
         * @param message RoleNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IRoleNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoleNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoleNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.RoleNo;

        /**
         * Decodes a RoleNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoleNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.RoleNo;

        /**
         * Verifies a RoleNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CardMo. */
    interface ICardMo {

        /** CardMo value */
        value?: (number|null);

        /** CardMo suit */
        suit?: (number|null);
    }

    /** Represents a CardMo. */
    class CardMo implements ICardMo {

        /**
         * Constructs a new CardMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ICardMo);

        /** CardMo value. */
        public value: number;

        /** CardMo suit. */
        public suit: number;

        /**
         * Creates a new CardMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardMo instance
         */
        public static create(properties?: Msg.ICardMo): Msg.CardMo;

        /**
         * Encodes the specified CardMo message. Does not implicitly {@link Msg.CardMo.verify|verify} messages.
         * @param message CardMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ICardMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardMo message, length delimited. Does not implicitly {@link Msg.CardMo.verify|verify} messages.
         * @param message CardMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ICardMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.CardMo;

        /**
         * Decodes a CardMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.CardMo;

        /**
         * Verifies a CardMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GamePlayerMo. */
    interface IGamePlayerMo {

        /** GamePlayerMo id */
        id?: (number|Long|null);

        /** GamePlayerMo handCard */
        handCard?: (Msg.ICardMo[]|null);

        /** GamePlayerMo cardNum */
        cardNum?: (number|null);

        /** GamePlayerMo team */
        team?: (number|null);

        /** GamePlayerMo multiple */
        multiple?: (number|null);

        /** GamePlayerMo score */
        score?: (number|null);

        /** GamePlayerMo isAuto */
        isAuto?: (number|null);

        /** GamePlayerMo state */
        state?: (number|null);

        /** GamePlayerMo opTime */
        opTime?: (number|Long|null);

        /** GamePlayerMo contestScore */
        contestScore?: (number|null);

        /** GamePlayerMo isQuit */
        isQuit?: (number|null);
    }

    /** Represents a GamePlayerMo. */
    class GamePlayerMo implements IGamePlayerMo {

        /**
         * Constructs a new GamePlayerMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGamePlayerMo);

        /** GamePlayerMo id. */
        public id: (number|Long);

        /** GamePlayerMo handCard. */
        public handCard: Msg.ICardMo[];

        /** GamePlayerMo cardNum. */
        public cardNum: number;

        /** GamePlayerMo team. */
        public team: number;

        /** GamePlayerMo multiple. */
        public multiple: number;

        /** GamePlayerMo score. */
        public score: number;

        /** GamePlayerMo isAuto. */
        public isAuto: number;

        /** GamePlayerMo state. */
        public state: number;

        /** GamePlayerMo opTime. */
        public opTime: (number|Long);

        /** GamePlayerMo contestScore. */
        public contestScore: number;

        /** GamePlayerMo isQuit. */
        public isQuit: number;

        /**
         * Creates a new GamePlayerMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GamePlayerMo instance
         */
        public static create(properties?: Msg.IGamePlayerMo): Msg.GamePlayerMo;

        /**
         * Encodes the specified GamePlayerMo message. Does not implicitly {@link Msg.GamePlayerMo.verify|verify} messages.
         * @param message GamePlayerMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGamePlayerMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GamePlayerMo message, length delimited. Does not implicitly {@link Msg.GamePlayerMo.verify|verify} messages.
         * @param message GamePlayerMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGamePlayerMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GamePlayerMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GamePlayerMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GamePlayerMo;

        /**
         * Decodes a GamePlayerMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GamePlayerMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GamePlayerMo;

        /**
         * Verifies a GamePlayerMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TableMo. */
    interface ITableMo {

        /** TableMo player */
        player?: (Msg.IGamePlayerMo[]|null);

        /** TableMo multiple */
        multiple?: (number[]|null);

        /** TableMo state */
        state?: (number|null);

        /** TableMo lastCard */
        lastCard?: (Msg.ICardMo[]|null);

        /** TableMo lastCardType */
        lastCardType?: (number|null);

        /** TableMo lastOp */
        lastOp?: (number|null);

        /** TableMo roundScore */
        roundScore?: (number|null);

        /** TableMo callCard */
        callCard?: (Msg.ICardMo|null);

        /** TableMo callType */
        callType?: (number|null);

        /** TableMo callOp */
        callOp?: (number|null);

        /** TableMo dealer */
        dealer?: (number|null);

        /** TableMo waitTime */
        waitTime?: (number|Long|null);

        /** TableMo type */
        type?: (number|null);
    }

    /** Represents a TableMo. */
    class TableMo implements ITableMo {

        /**
         * Constructs a new TableMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ITableMo);

        /** TableMo player. */
        public player: Msg.IGamePlayerMo[];

        /** TableMo multiple. */
        public multiple: number[];

        /** TableMo state. */
        public state: number;

        /** TableMo lastCard. */
        public lastCard: Msg.ICardMo[];

        /** TableMo lastCardType. */
        public lastCardType: number;

        /** TableMo lastOp. */
        public lastOp: number;

        /** TableMo roundScore. */
        public roundScore: number;

        /** TableMo callCard. */
        public callCard?: (Msg.ICardMo|null);

        /** TableMo callType. */
        public callType: number;

        /** TableMo callOp. */
        public callOp: number;

        /** TableMo dealer. */
        public dealer: number;

        /** TableMo waitTime. */
        public waitTime: (number|Long);

        /** TableMo type. */
        public type: number;

        /**
         * Creates a new TableMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableMo instance
         */
        public static create(properties?: Msg.ITableMo): Msg.TableMo;

        /**
         * Encodes the specified TableMo message. Does not implicitly {@link Msg.TableMo.verify|verify} messages.
         * @param message TableMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ITableMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TableMo message, length delimited. Does not implicitly {@link Msg.TableMo.verify|verify} messages.
         * @param message TableMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ITableMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TableMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.TableMo;

        /**
         * Decodes a TableMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.TableMo;

        /**
         * Verifies a TableMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Call. */
    interface ICall {

        /** Call callType */
        callType?: (number|null);

        /** Call cardIndex */
        cardIndex?: (number|null);
    }

    /** Represents a Call. */
    class Call implements ICall {

        /**
         * Constructs a new Call.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ICall);

        /** Call callType. */
        public callType: number;

        /** Call cardIndex. */
        public cardIndex: number;

        /**
         * Creates a new Call instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Call instance
         */
        public static create(properties?: Msg.ICall): Msg.Call;

        /**
         * Encodes the specified Call message. Does not implicitly {@link Msg.Call.verify|verify} messages.
         * @param message Call message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ICall, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Call message, length delimited. Does not implicitly {@link Msg.Call.verify|verify} messages.
         * @param message Call message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ICall, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Call message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.Call;

        /**
         * Decodes a Call message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.Call;

        /**
         * Verifies a Call message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CallTo. */
    interface ICallTo {
    }

    /** Represents a CallTo. */
    class CallTo implements ICallTo {

        /**
         * Constructs a new CallTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ICallTo);

        /**
         * Creates a new CallTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CallTo instance
         */
        public static create(properties?: Msg.ICallTo): Msg.CallTo;

        /**
         * Encodes the specified CallTo message. Does not implicitly {@link Msg.CallTo.verify|verify} messages.
         * @param message CallTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ICallTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CallTo message, length delimited. Does not implicitly {@link Msg.CallTo.verify|verify} messages.
         * @param message CallTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ICallTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CallTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CallTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.CallTo;

        /**
         * Decodes a CallTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CallTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.CallTo;

        /**
         * Verifies a CallTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Draw. */
    interface IDraw {

        /** Draw cardType */
        cardType?: (number|null);

        /** Draw cardIndexs */
        cardIndexs?: (number[]|null);
    }

    /** Represents a Draw. */
    class Draw implements IDraw {

        /**
         * Constructs a new Draw.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IDraw);

        /** Draw cardType. */
        public cardType: number;

        /** Draw cardIndexs. */
        public cardIndexs: number[];

        /**
         * Creates a new Draw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Draw instance
         */
        public static create(properties?: Msg.IDraw): Msg.Draw;

        /**
         * Encodes the specified Draw message. Does not implicitly {@link Msg.Draw.verify|verify} messages.
         * @param message Draw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IDraw, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Draw message, length delimited. Does not implicitly {@link Msg.Draw.verify|verify} messages.
         * @param message Draw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IDraw, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Draw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.Draw;

        /**
         * Decodes a Draw message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.Draw;

        /**
         * Verifies a Draw message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DrawTo. */
    interface IDrawTo {
    }

    /** Represents a DrawTo. */
    class DrawTo implements IDrawTo {

        /**
         * Constructs a new DrawTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IDrawTo);

        /**
         * Creates a new DrawTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrawTo instance
         */
        public static create(properties?: Msg.IDrawTo): Msg.DrawTo;

        /**
         * Encodes the specified DrawTo message. Does not implicitly {@link Msg.DrawTo.verify|verify} messages.
         * @param message DrawTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IDrawTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DrawTo message, length delimited. Does not implicitly {@link Msg.DrawTo.verify|verify} messages.
         * @param message DrawTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IDrawTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DrawTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DrawTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.DrawTo;

        /**
         * Decodes a DrawTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DrawTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.DrawTo;

        /**
         * Verifies a DrawTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Check. */
    interface ICheck {
    }

    /** Represents a Check. */
    class Check implements ICheck {

        /**
         * Constructs a new Check.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ICheck);

        /**
         * Creates a new Check instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Check instance
         */
        public static create(properties?: Msg.ICheck): Msg.Check;

        /**
         * Encodes the specified Check message. Does not implicitly {@link Msg.Check.verify|verify} messages.
         * @param message Check message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ICheck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Check message, length delimited. Does not implicitly {@link Msg.Check.verify|verify} messages.
         * @param message Check message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ICheck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Check message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Check
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.Check;

        /**
         * Decodes a Check message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Check
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.Check;

        /**
         * Verifies a Check message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CheckTo. */
    interface ICheckTo {
    }

    /** Represents a CheckTo. */
    class CheckTo implements ICheckTo {

        /**
         * Constructs a new CheckTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ICheckTo);

        /**
         * Creates a new CheckTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckTo instance
         */
        public static create(properties?: Msg.ICheckTo): Msg.CheckTo;

        /**
         * Encodes the specified CheckTo message. Does not implicitly {@link Msg.CheckTo.verify|verify} messages.
         * @param message CheckTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ICheckTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CheckTo message, length delimited. Does not implicitly {@link Msg.CheckTo.verify|verify} messages.
         * @param message CheckTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ICheckTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CheckTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.CheckTo;

        /**
         * Decodes a CheckTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.CheckTo;

        /**
         * Verifies a CheckTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Ready. */
    interface IReady {
    }

    /** Represents a Ready. */
    class Ready implements IReady {

        /**
         * Constructs a new Ready.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IReady);

        /**
         * Creates a new Ready instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ready instance
         */
        public static create(properties?: Msg.IReady): Msg.Ready;

        /**
         * Encodes the specified Ready message. Does not implicitly {@link Msg.Ready.verify|verify} messages.
         * @param message Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IReady, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Ready message, length delimited. Does not implicitly {@link Msg.Ready.verify|verify} messages.
         * @param message Ready message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IReady, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Ready message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.Ready;

        /**
         * Decodes a Ready message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ready
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.Ready;

        /**
         * Verifies a Ready message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReadyTo. */
    interface IReadyTo {
    }

    /** Represents a ReadyTo. */
    class ReadyTo implements IReadyTo {

        /**
         * Constructs a new ReadyTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IReadyTo);

        /**
         * Creates a new ReadyTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadyTo instance
         */
        public static create(properties?: Msg.IReadyTo): Msg.ReadyTo;

        /**
         * Encodes the specified ReadyTo message. Does not implicitly {@link Msg.ReadyTo.verify|verify} messages.
         * @param message ReadyTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IReadyTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReadyTo message, length delimited. Does not implicitly {@link Msg.ReadyTo.verify|verify} messages.
         * @param message ReadyTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IReadyTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReadyTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadyTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.ReadyTo;

        /**
         * Decodes a ReadyTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadyTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.ReadyTo;

        /**
         * Verifies a ReadyTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Quit. */
    interface IQuit {
    }

    /** Represents a Quit. */
    class Quit implements IQuit {

        /**
         * Constructs a new Quit.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IQuit);

        /**
         * Creates a new Quit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Quit instance
         */
        public static create(properties?: Msg.IQuit): Msg.Quit;

        /**
         * Encodes the specified Quit message. Does not implicitly {@link Msg.Quit.verify|verify} messages.
         * @param message Quit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IQuit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Quit message, length delimited. Does not implicitly {@link Msg.Quit.verify|verify} messages.
         * @param message Quit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IQuit, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Quit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Quit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.Quit;

        /**
         * Decodes a Quit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Quit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.Quit;

        /**
         * Verifies a Quit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a QuitTo. */
    interface IQuitTo {
    }

    /** Represents a QuitTo. */
    class QuitTo implements IQuitTo {

        /**
         * Constructs a new QuitTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IQuitTo);

        /**
         * Creates a new QuitTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuitTo instance
         */
        public static create(properties?: Msg.IQuitTo): Msg.QuitTo;

        /**
         * Encodes the specified QuitTo message. Does not implicitly {@link Msg.QuitTo.verify|verify} messages.
         * @param message QuitTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IQuitTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified QuitTo message, length delimited. Does not implicitly {@link Msg.QuitTo.verify|verify} messages.
         * @param message QuitTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IQuitTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a QuitTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuitTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.QuitTo;

        /**
         * Decodes a QuitTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuitTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.QuitTo;

        /**
         * Verifies a QuitTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Double. */
    interface IDouble {
    }

    /** Represents a Double. */
    class Double implements IDouble {

        /**
         * Constructs a new Double.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IDouble);

        /**
         * Creates a new Double instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Double instance
         */
        public static create(properties?: Msg.IDouble): Msg.Double;

        /**
         * Encodes the specified Double message. Does not implicitly {@link Msg.Double.verify|verify} messages.
         * @param message Double message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IDouble, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Double message, length delimited. Does not implicitly {@link Msg.Double.verify|verify} messages.
         * @param message Double message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IDouble, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Double message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Double
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.Double;

        /**
         * Decodes a Double message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Double
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.Double;

        /**
         * Verifies a Double message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DoubleTo. */
    interface IDoubleTo {
    }

    /** Represents a DoubleTo. */
    class DoubleTo implements IDoubleTo {

        /**
         * Constructs a new DoubleTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IDoubleTo);

        /**
         * Creates a new DoubleTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DoubleTo instance
         */
        public static create(properties?: Msg.IDoubleTo): Msg.DoubleTo;

        /**
         * Encodes the specified DoubleTo message. Does not implicitly {@link Msg.DoubleTo.verify|verify} messages.
         * @param message DoubleTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IDoubleTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DoubleTo message, length delimited. Does not implicitly {@link Msg.DoubleTo.verify|verify} messages.
         * @param message DoubleTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IDoubleTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DoubleTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DoubleTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.DoubleTo;

        /**
         * Decodes a DoubleTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DoubleTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.DoubleTo;

        /**
         * Verifies a DoubleTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an Auto. */
    interface IAuto {

        /** Auto isAuto */
        isAuto?: (number|null);
    }

    /** Represents an Auto. */
    class Auto implements IAuto {

        /**
         * Constructs a new Auto.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IAuto);

        /** Auto isAuto. */
        public isAuto: number;

        /**
         * Creates a new Auto instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Auto instance
         */
        public static create(properties?: Msg.IAuto): Msg.Auto;

        /**
         * Encodes the specified Auto message. Does not implicitly {@link Msg.Auto.verify|verify} messages.
         * @param message Auto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IAuto, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Auto message, length delimited. Does not implicitly {@link Msg.Auto.verify|verify} messages.
         * @param message Auto message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IAuto, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Auto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Auto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.Auto;

        /**
         * Decodes an Auto message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Auto
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.Auto;

        /**
         * Verifies an Auto message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AutoTo. */
    interface IAutoTo {
    }

    /** Represents an AutoTo. */
    class AutoTo implements IAutoTo {

        /**
         * Constructs a new AutoTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IAutoTo);

        /**
         * Creates a new AutoTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AutoTo instance
         */
        public static create(properties?: Msg.IAutoTo): Msg.AutoTo;

        /**
         * Encodes the specified AutoTo message. Does not implicitly {@link Msg.AutoTo.verify|verify} messages.
         * @param message AutoTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IAutoTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AutoTo message, length delimited. Does not implicitly {@link Msg.AutoTo.verify|verify} messages.
         * @param message AutoTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IAutoTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AutoTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AutoTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.AutoTo;

        /**
         * Decodes an AutoTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AutoTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.AutoTo;

        /**
         * Verifies an AutoTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a Reconn. */
    interface IReconn {
    }

    /** Represents a Reconn. */
    class Reconn implements IReconn {

        /**
         * Constructs a new Reconn.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IReconn);

        /**
         * Creates a new Reconn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Reconn instance
         */
        public static create(properties?: Msg.IReconn): Msg.Reconn;

        /**
         * Encodes the specified Reconn message. Does not implicitly {@link Msg.Reconn.verify|verify} messages.
         * @param message Reconn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IReconn, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Reconn message, length delimited. Does not implicitly {@link Msg.Reconn.verify|verify} messages.
         * @param message Reconn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IReconn, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Reconn message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Reconn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.Reconn;

        /**
         * Decodes a Reconn message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Reconn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.Reconn;

        /**
         * Verifies a Reconn message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ReconnTo. */
    interface IReconnTo {
    }

    /** Represents a ReconnTo. */
    class ReconnTo implements IReconnTo {

        /**
         * Constructs a new ReconnTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IReconnTo);

        /**
         * Creates a new ReconnTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReconnTo instance
         */
        public static create(properties?: Msg.IReconnTo): Msg.ReconnTo;

        /**
         * Encodes the specified ReconnTo message. Does not implicitly {@link Msg.ReconnTo.verify|verify} messages.
         * @param message ReconnTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IReconnTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReconnTo message, length delimited. Does not implicitly {@link Msg.ReconnTo.verify|verify} messages.
         * @param message ReconnTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IReconnTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReconnTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReconnTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.ReconnTo;

        /**
         * Decodes a ReconnTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReconnTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.ReconnTo;

        /**
         * Verifies a ReconnTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an UpGamePlayerNo. */
    interface IUpGamePlayerNo {

        /** UpGamePlayerNo gamePlayer */
        gamePlayer?: (Msg.IGamePlayerMo[]|null);
    }

    /** Represents an UpGamePlayerNo. */
    class UpGamePlayerNo implements IUpGamePlayerNo {

        /**
         * Constructs a new UpGamePlayerNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IUpGamePlayerNo);

        /** UpGamePlayerNo gamePlayer. */
        public gamePlayer: Msg.IGamePlayerMo[];

        /**
         * Creates a new UpGamePlayerNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpGamePlayerNo instance
         */
        public static create(properties?: Msg.IUpGamePlayerNo): Msg.UpGamePlayerNo;

        /**
         * Encodes the specified UpGamePlayerNo message. Does not implicitly {@link Msg.UpGamePlayerNo.verify|verify} messages.
         * @param message UpGamePlayerNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IUpGamePlayerNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UpGamePlayerNo message, length delimited. Does not implicitly {@link Msg.UpGamePlayerNo.verify|verify} messages.
         * @param message UpGamePlayerNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IUpGamePlayerNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an UpGamePlayerNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpGamePlayerNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.UpGamePlayerNo;

        /**
         * Decodes an UpGamePlayerNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpGamePlayerNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.UpGamePlayerNo;

        /**
         * Verifies an UpGamePlayerNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an UpTableNo. */
    interface IUpTableNo {

        /** UpTableNo table */
        table?: (Msg.ITableMo|null);
    }

    /** Represents an UpTableNo. */
    class UpTableNo implements IUpTableNo {

        /**
         * Constructs a new UpTableNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IUpTableNo);

        /** UpTableNo table. */
        public table?: (Msg.ITableMo|null);

        /**
         * Creates a new UpTableNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpTableNo instance
         */
        public static create(properties?: Msg.IUpTableNo): Msg.UpTableNo;

        /**
         * Encodes the specified UpTableNo message. Does not implicitly {@link Msg.UpTableNo.verify|verify} messages.
         * @param message UpTableNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IUpTableNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified UpTableNo message, length delimited. Does not implicitly {@link Msg.UpTableNo.verify|verify} messages.
         * @param message UpTableNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IUpTableNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an UpTableNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpTableNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.UpTableNo;

        /**
         * Decodes an UpTableNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpTableNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.UpTableNo;

        /**
         * Verifies an UpTableNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a PlayerResultMo. */
    interface IPlayerResultMo {

        /** PlayerResultMo multiple */
        multiple?: (number|null);

        /** PlayerResultMo peanut */
        peanut?: (number|null);

        /** PlayerResultMo rankingScore */
        rankingScore?: (number|null);

        /** PlayerResultMo contestScore */
        contestScore?: (number|null);

        /** PlayerResultMo playerId */
        playerId?: (number|Long|null);
    }

    /** Represents a PlayerResultMo. */
    class PlayerResultMo implements IPlayerResultMo {

        /**
         * Constructs a new PlayerResultMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IPlayerResultMo);

        /** PlayerResultMo multiple. */
        public multiple: number;

        /** PlayerResultMo peanut. */
        public peanut: number;

        /** PlayerResultMo rankingScore. */
        public rankingScore: number;

        /** PlayerResultMo contestScore. */
        public contestScore: number;

        /** PlayerResultMo playerId. */
        public playerId: (number|Long);

        /**
         * Creates a new PlayerResultMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerResultMo instance
         */
        public static create(properties?: Msg.IPlayerResultMo): Msg.PlayerResultMo;

        /**
         * Encodes the specified PlayerResultMo message. Does not implicitly {@link Msg.PlayerResultMo.verify|verify} messages.
         * @param message PlayerResultMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IPlayerResultMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerResultMo message, length delimited. Does not implicitly {@link Msg.PlayerResultMo.verify|verify} messages.
         * @param message PlayerResultMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IPlayerResultMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerResultMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerResultMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.PlayerResultMo;

        /**
         * Decodes a PlayerResultMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerResultMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.PlayerResultMo;

        /**
         * Verifies a PlayerResultMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TableResultNo. */
    interface ITableResultNo {

        /** TableResultNo baseScore */
        baseScore?: (number|null);

        /** TableResultNo winTeam */
        winTeam?: (number|null);

        /** TableResultNo playerResult */
        playerResult?: (Msg.IPlayerResultMo[]|null);
    }

    /** Represents a TableResultNo. */
    class TableResultNo implements ITableResultNo {

        /**
         * Constructs a new TableResultNo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ITableResultNo);

        /** TableResultNo baseScore. */
        public baseScore: number;

        /** TableResultNo winTeam. */
        public winTeam: number;

        /** TableResultNo playerResult. */
        public playerResult: Msg.IPlayerResultMo[];

        /**
         * Creates a new TableResultNo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableResultNo instance
         */
        public static create(properties?: Msg.ITableResultNo): Msg.TableResultNo;

        /**
         * Encodes the specified TableResultNo message. Does not implicitly {@link Msg.TableResultNo.verify|verify} messages.
         * @param message TableResultNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ITableResultNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TableResultNo message, length delimited. Does not implicitly {@link Msg.TableResultNo.verify|verify} messages.
         * @param message TableResultNo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ITableResultNo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TableResultNo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableResultNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.TableResultNo;

        /**
         * Decodes a TableResultNo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableResultNo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.TableResultNo;

        /**
         * Verifies a TableResultNo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a TestTo. */
    interface ITestTo {

        /** TestTo name */
        name?: (string|null);

        /** TestTo age */
        age?: (number|null);
    }

    /** Represents a TestTo. */
    class TestTo implements ITestTo {

        /**
         * Constructs a new TestTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.ITestTo);

        /** TestTo name. */
        public name: string;

        /** TestTo age. */
        public age: number;

        /**
         * Creates a new TestTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestTo instance
         */
        public static create(properties?: Msg.ITestTo): Msg.TestTo;

        /**
         * Encodes the specified TestTo message. Does not implicitly {@link Msg.TestTo.verify|verify} messages.
         * @param message TestTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.ITestTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified TestTo message, length delimited. Does not implicitly {@link Msg.TestTo.verify|verify} messages.
         * @param message TestTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.ITestTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TestTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.TestTo;

        /**
         * Decodes a TestTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TestTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.TestTo;

        /**
         * Verifies a TestTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a XunBaoMo. */
    interface IXunBaoMo {

        /** XunBaoMo type */
        type?: (number|null);

        /** XunBaoMo nextTime */
        nextTime?: (number|Long|null);
    }

    /** Represents a XunBaoMo. */
    class XunBaoMo implements IXunBaoMo {

        /**
         * Constructs a new XunBaoMo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IXunBaoMo);

        /** XunBaoMo type. */
        public type: number;

        /** XunBaoMo nextTime. */
        public nextTime: (number|Long);

        /**
         * Creates a new XunBaoMo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XunBaoMo instance
         */
        public static create(properties?: Msg.IXunBaoMo): Msg.XunBaoMo;

        /**
         * Encodes the specified XunBaoMo message. Does not implicitly {@link Msg.XunBaoMo.verify|verify} messages.
         * @param message XunBaoMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IXunBaoMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified XunBaoMo message, length delimited. Does not implicitly {@link Msg.XunBaoMo.verify|verify} messages.
         * @param message XunBaoMo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IXunBaoMo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a XunBaoMo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XunBaoMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.XunBaoMo;

        /**
         * Decodes a XunBaoMo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XunBaoMo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.XunBaoMo;

        /**
         * Verifies a XunBaoMo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetXunBao. */
    interface IGetXunBao {
    }

    /** Represents a GetXunBao. */
    class GetXunBao implements IGetXunBao {

        /**
         * Constructs a new GetXunBao.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetXunBao);

        /**
         * Creates a new GetXunBao instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetXunBao instance
         */
        public static create(properties?: Msg.IGetXunBao): Msg.GetXunBao;

        /**
         * Encodes the specified GetXunBao message. Does not implicitly {@link Msg.GetXunBao.verify|verify} messages.
         * @param message GetXunBao message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetXunBao, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetXunBao message, length delimited. Does not implicitly {@link Msg.GetXunBao.verify|verify} messages.
         * @param message GetXunBao message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetXunBao, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetXunBao message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetXunBao
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetXunBao;

        /**
         * Decodes a GetXunBao message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetXunBao
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetXunBao;

        /**
         * Verifies a GetXunBao message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetXunBaoTo. */
    interface IGetXunBaoTo {

        /** GetXunBaoTo xunBao */
        xunBao?: (Msg.IXunBaoMo[]|null);
    }

    /** Represents a GetXunBaoTo. */
    class GetXunBaoTo implements IGetXunBaoTo {

        /**
         * Constructs a new GetXunBaoTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IGetXunBaoTo);

        /** GetXunBaoTo xunBao. */
        public xunBao: Msg.IXunBaoMo[];

        /**
         * Creates a new GetXunBaoTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetXunBaoTo instance
         */
        public static create(properties?: Msg.IGetXunBaoTo): Msg.GetXunBaoTo;

        /**
         * Encodes the specified GetXunBaoTo message. Does not implicitly {@link Msg.GetXunBaoTo.verify|verify} messages.
         * @param message GetXunBaoTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IGetXunBaoTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetXunBaoTo message, length delimited. Does not implicitly {@link Msg.GetXunBaoTo.verify|verify} messages.
         * @param message GetXunBaoTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IGetXunBaoTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetXunBaoTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetXunBaoTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.GetXunBaoTo;

        /**
         * Decodes a GetXunBaoTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetXunBaoTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.GetXunBaoTo;

        /**
         * Verifies a GetXunBaoTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a XunBao. */
    interface IXunBao {

        /** XunBao type */
        type?: (number|null);
    }

    /** Represents a XunBao. */
    class XunBao implements IXunBao {

        /**
         * Constructs a new XunBao.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IXunBao);

        /** XunBao type. */
        public type: number;

        /**
         * Creates a new XunBao instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XunBao instance
         */
        public static create(properties?: Msg.IXunBao): Msg.XunBao;

        /**
         * Encodes the specified XunBao message. Does not implicitly {@link Msg.XunBao.verify|verify} messages.
         * @param message XunBao message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IXunBao, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified XunBao message, length delimited. Does not implicitly {@link Msg.XunBao.verify|verify} messages.
         * @param message XunBao message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IXunBao, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a XunBao message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XunBao
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.XunBao;

        /**
         * Decodes a XunBao message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XunBao
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.XunBao;

        /**
         * Verifies a XunBao message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a XunBaoTo. */
    interface IXunBaoTo {

        /** XunBaoTo reward */
        reward?: (Msg.IItemMo[]|null);
    }

    /** Represents a XunBaoTo. */
    class XunBaoTo implements IXunBaoTo {

        /**
         * Constructs a new XunBaoTo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IXunBaoTo);

        /** XunBaoTo reward. */
        public reward: Msg.IItemMo[];

        /**
         * Creates a new XunBaoTo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XunBaoTo instance
         */
        public static create(properties?: Msg.IXunBaoTo): Msg.XunBaoTo;

        /**
         * Encodes the specified XunBaoTo message. Does not implicitly {@link Msg.XunBaoTo.verify|verify} messages.
         * @param message XunBaoTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IXunBaoTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified XunBaoTo message, length delimited. Does not implicitly {@link Msg.XunBaoTo.verify|verify} messages.
         * @param message XunBaoTo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IXunBaoTo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a XunBaoTo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XunBaoTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.XunBaoTo;

        /**
         * Decodes a XunBaoTo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns XunBaoTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.XunBaoTo;

        /**
         * Verifies a XunBaoTo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
