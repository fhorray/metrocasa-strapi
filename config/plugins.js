module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "5d",
      },
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
    },
  },
});
