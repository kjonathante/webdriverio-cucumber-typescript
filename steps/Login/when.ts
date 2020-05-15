import { When } from "cucumber";
import signIn from "../../support/actions/signIn";

When(
  /^the user tries to use "(valid|invalid)" credentials, "(.*)" to login$/,
  (isValid, email) => {
    signIn(isValid === "valid", email);
  }
);
