import { Then } from "cucumber";
import checkAuthError from "../../support/assertions/checkAuthError";

declare global {
  namespace NodeJS {
    interface Global {
      eyes: any,
      Target: any
    }
  }
}

Then(/^an authentication error message should say "(.*)"$/, (errorMessage) => {
  checkAuthError(errorMessage);
});

Then(/^they are successfully logged in$/, () => {
  try {
    browser.call(() => global.eyes.open(browser));
    browser.call(() => global.eyes.check("Login Page", global.Target.window().fully()));
    browser.call(() => global.eyes.close(false));
  } catch (e) {
    console.log(e);
  } finally {
    browser.call(() => global.eyes.abortIfNotClosed());
  }
});
