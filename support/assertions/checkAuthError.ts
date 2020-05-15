import assert from "assert";
import login from "../../pages/Login";

export default (errorMessage: string) => {
  const authErrorMessage = login.errorMessage;

  assert(
    authErrorMessage.getText().includes(errorMessage),
    `Error message, ${authErrorMessage.getText()} did not match ${errorMessage}`
  );
};
