import jwt, { Secret } from "jsonwebtoken";
import config from "../../config";

const generateTokens = async (payload: { userId: number }, secret: Secret) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: config.jwts.expires_in,
  });
  return token;
};

const generateToken = async (
  payload: { userId: number; userRole: string },
  secret: Secret
) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: config.jwts.expires_in,
  });
  return token;
};

const getDataFromToken = async (token: string) => {
  try {
    const decodeData = jwt.verify(token, config.jwts.secret as string) as {
      userId: number | null;
    };
    return decodeData.userId;
  } catch (error) {
    return null;
  }
};

export const jwthelpers = {
  generateToken,
  getDataFromToken,
};
