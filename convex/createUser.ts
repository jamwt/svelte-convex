import { mutation } from "./_generated/server";

import { syncScrypt } from "scrypt-js";
import { passHash, validatePassword, validateUsername } from "./common";

export default mutation(
  async ({ db }, username: string, password: string, salt: Uint8Array) => {
    username = username.normalize("NFKC").trim();
    validateUsername(username);
    password = password.normalize("NFKC").trim();
    validatePassword(password);

    const existing =
      (await db
        .query("users")
        .filter((q) => q.eq(q.field("username"), username))
        .first()) !== null;
    if (existing) {
      throw "Username is taken";
    }

    const passhash = passHash(password, salt);

    await db.insert("users", { username, passhash, salt });
  }
);
