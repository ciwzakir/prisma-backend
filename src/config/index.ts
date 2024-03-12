/* eslint-disable no-undef */

import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwts: {
    secret: process.env.JWT_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
  },
};
