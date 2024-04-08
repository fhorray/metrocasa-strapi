module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {
          // TODO: dynamic upload to a specif folder on cloudinary
          // folder: env("CLOUDINARY_FOLDER", "portfolio"),
        },
        delete: {},
      },
    },
  },
});
