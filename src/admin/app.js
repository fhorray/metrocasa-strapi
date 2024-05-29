import favicon from "./extensions/favicon.png";
import logo from "./extensions/logo.png";

const config = {
  locales: ["pt-BR"],
  tutorials: false,
  translations: {
    pt: {
      "app.components.HomePage.welcome.again":
        "Bem-vindo ao dashboard Metrocasa!",
    },
  },
  notifications: {
    releases: false,
  },
  menu: {
    logo: logo,
  },
  auth: {
    logo: logo,
  },
  head: {
    favicon: favicon,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
