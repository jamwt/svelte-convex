import { mutation } from "./_generated/server";

export default mutation(async ({db}, author: string, body: string) => {
    await db.insert("messages", {
        author, body
    });
});