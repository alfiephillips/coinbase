export default {
  name: "coins",
  title: "Coins",
  type: "document",
  fields: [
    {
      title: "Coins",
      name: "coins",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Symbol",
          name: "symbol",
          type: "string",
        },
        {
          title: "Contact Address",
          name: "contactAddress",
          type: "string",
        },
        {
          title: "USD Price",
          name: "usdPrice",
          type: "string",
        },
        {
          title: "GBP Price",
          name: "gbpPrice",
          type: "string",
        },
        {
          title: "Logo",
          name: "logo",
          type: "image",
        },
      ],
    },
  ],
};
