import Shopify from "@shopify/shopify-api";
// Load the access token as per instructions above
const storefrontAccessToken = "a81d7bc03fe8bc3c7066bd1c91a25a8e";
// Shop from which we're fetching data
const shop = "humourbaba1.myshopify.com";
// https://houseofbabas.com/

// StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
const storefrontClient = new Shopify.Clients.Storefront(
  shop,
  storefrontAccessToken
);

// Use client.query and pass your query as `data`
const products = await storefrontClient.query({
  data: `{
    products (first: 3) {
      edges {
        node {
          id
          title
        }
      }
    }
  }`,
});
console.log(products);
console.log("Aditya");
