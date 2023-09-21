import { Amplify } from "aws-amplify";
import config from "../src/aws-exports";
export default defineNuxtPlugin(async (nuxtApp) => {
  if (process.client) {
    window.global = window;
    var exports = {};
  }
  Amplify.configure(config);
  nuxtApp.vueApp.use(Amplify);
});
