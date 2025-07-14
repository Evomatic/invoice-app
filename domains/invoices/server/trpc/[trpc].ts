import { createTRPCNuxtHandler } from "trpc-nuxt/server";
import { createTRPCContext } from "./init";
import invoiceServiceRouter from "./routers/invoiceService";

export default createTRPCNuxtHandler({
  endpoint: "/api/trpc",
  router: invoiceServiceRouter,
  createContext: createTRPCContext,
});
