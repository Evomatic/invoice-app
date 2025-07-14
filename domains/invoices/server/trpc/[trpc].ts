import { createTRPCNuxtHandler } from "trpc-nuxt/dist/server";
import { createTRPCContext } from "../../../../server/trpc/init";
import { appRouter } from "./routers";

export default createTRPCNuxtHandler({
  endpoint: "/api/trpc",
  router: appRouter,
  createContext: createTRPCContext,
});
