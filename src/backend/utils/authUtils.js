import { Response } from "miragejs";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";

export const requiresAuth = function (request) {
  const encodedToken = request.requestHeaders.authorization;
  console.log("encodedToken: ", encodedToken);
  const decodedToken = jwt_decode(
    encodedToken,
    process.env.REACT_APP_JWT_SECRET
  );
  if (decodedToken) {
    console.log("decodedToken", decodedToken);
    const user = this.db.users.findBy({ username: decodedToken.username });
    console.log("user", user);
    return user;
  }
  return new Response(
    401,
    {},
    { errors: ["The token is invalid. Unauthorized access error."] }
  );
};

export const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");
