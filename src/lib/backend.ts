import { ConvexSvelteClient } from "./convexSvelteClient";
import convexConfig from "../../convex.json";
import { OptimisticLocalStore } from "convex/browser";

const clientConfig = {
  address: "https://glad-hedgehog-888.convex.cloud",
};

const convex = new ConvexSvelteClient(clientConfig);

export const messages = convex.createQueryStore("getMessages", []);

export const addMessage = async (author: string, body: string) => {
  await convex.mutate(
    "addMessage",
    [author, body],
    (localStorage: OptimisticLocalStore, author: string, body: string) => {
      console.log("optimistic");
      const messages = localStorage.getQuery("getMessages", []) ?? [];
      messages.push({ author, body, optimistic: true });
      localStorage.setQuery("getMessages", [], messages);
    }
  );
};
