const { response } = require("express");
const express = require("express");
const router = express.Router();
const axios = require("axios").default;
require("dotenv").config();
const STORENAME = process.env.STORENAME;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const STOREFRONT_ACCESS_TOKEN = process.env.STOREFRONT_ACCESS_TOKEN;

//create new checkout lineitems array [{variantId,quantity}]

router.post("/newcheckout", async (req, res) => {
  axios
    .post(
      `https://${STORENAME}.myshopify.com/api/2022-07/graphql.json`,
      {
        query: `mutation checkoutCreate($lineItems: [CheckoutLineItemInput!]) {
            checkoutCreate(input: {lineItems: $lineItems}) {
              checkout {
                id
                webUrl
                lineItems(first: 5) {
                     edges {
                        node {
                             title
                            quantity
                            }
                        }
                }
              }
              checkoutUserErrors {
                field
                message
              }
              queueToken
            }
          }
          `,
        variables: { lineItems: req.body.lineItems },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
        },
      }
    )
    .then((resp) => {
      console.log(resp.data);
      res.send(resp.data);
    });
});

//asigning shipping address to checkout {checkoutId,shippingAddress:{firstName,lastName,address1,phone,zip,city,province=state,country,}}
router.post("/shipaddresscheckout", async (req, res) => {
  axios
    .post(
      `https://${STORENAME}.myshopify.com/api/2022-07/graphql.json`,
      {
        query: `query node($checkoutId: ID!){
          node(id: $checkoutId) {
            ... on Checkout {
              id
              webUrl
              availableShippingRates {
                ready
                shippingRates {
                  handle
                  priceV2 {
                    amount
                  }
                  title
                }
              }
            }
          }
        }
        
        `,
        variables: {
          checkoutId: req.body.checkoutId,
          shippingAddress: require.body.shippingAddress,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
        },
      }
    )
    .then((resp) => {
      console.log(resp.data);
      res.send(resp.data);
    });
});

//get shipping rates
router.post("/shipaddresscheckout", async (req, res) => {
  axios
    .post(
      `https://${STORENAME}.myshopify.com/api/2022-07/graphql.json`,
      {
        query: `mutation checkoutShippingAddressUpdateV2($checkoutId: ID!, $shippingAddress: MailingAddressInput!) {
          checkoutShippingAddressUpdateV2(checkoutId: $checkoutId, shippingAddress: $shippingAddress) {
            checkout {
              id
                shippingAddress {
                  firstName
                  lastName
                  address1
                  province
                  country
                  zip
                }
            }
            checkoutUserErrors {
              code
              field
              messages
            }
          }
        }
        `,
        variables: {
          checkoutId: req.body.checkoutId,
          shippingAddress: require.body.shippingAddress,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
          "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
        },
      }
    )
    .then((resp) => {
      console.log(resp.data);
      res.send(resp.data);
    });
});

module.exports = router;
