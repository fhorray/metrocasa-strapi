module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            // MUDAR O PROVIDER E A REGIÃO
            // "yourBucketName.s3.yourRegion.amazonaws.com"
            "cdn-metrocasa.s3.us-east-1.amazonaws.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            // MUDAR O PROVIDER E A REGIÃO
            // "yourBucketName.s3.yourRegion.amazonaws.com"
            "cdn-metrocasa.s3.us-east-1.amazonaws.com",
          ],
          "pdf-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "cdn-metrocasa.s3.us-east-1.amazonaws.com",
          ],

          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      parserOptions: {
        jsonLimit: "256mb",
        formLimit: "256mb",
        textLimit: "256mb",
      },
      formLimit: "256mb",
      jsonLimit: "256mb",
      textLimit: "256mb",
      formidable: {
        maxFileSize: 250 * 1024 * 1024,
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
