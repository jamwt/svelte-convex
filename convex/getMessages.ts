import { query } from "./_generated/server";

export default query(async ({ db }): Promise<{body: string, author: string}[]> => {
  console.log("got messages");
  return (await db.query("messages").collect()) ?? [];
});
