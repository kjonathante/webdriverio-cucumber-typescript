class Login {
  get url() {
    return "?controller=authentication";
  }

  get emailInput() {
    return $("#email");
  }

  get passwordInput() {
    return $("#passwd");
  }

  get signInButton() {
    return $("#SubmitLogin");
  }

  get errorMessage() {
    return $(".alert.alert-danger > ol");
  }

  /**
   * Signs in
   * @param {String} email - Email
   * @param {String} password - Button
   */

  signIn(email: string, password: string) {
    this.emailInput.waitForDisplayed({timeout: 5000});
    this.emailInput.setValue(email);
    this.passwordInput.setValue(password);
    this.signInButton.click();
  }
}

const login = new Login();
export default login;
