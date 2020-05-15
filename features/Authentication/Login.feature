Feature: Login

  As a user, I want to be able to login to my account to view account details

  @regression
  Scenario Outline: Attempting to login with invalid credentials; <email>
    Given the browser is at the "Login" page
    When the user tries to use "invalid" credentials, "<email>" to login
    Then the title of the page should be "Login - My Store"
    And an authentication error message should say "<error_message>"

    Examples:
      | email              | error_message             |
      | 123_dev@gmail.com  | Authentication failed     |
      | 123_int@gmail.com  | Authentication failed     |
      | just really random | Invalid email address     |
      |                    | An email address required |

  Scenario Outline: Attempting to login with valid credentials; <email>
    Given the browser is at the "Login" page
    When the user tries to use "valid" credentials, "<email>" to login
    Then the title of the page should be "My account - My Store"

    @development
    Examples:
      | email                             |
      | cucumber_automation_dev@gmail.com |

    @integration
    Examples:
      | email                             |
      | cucumber_automation_int@gmail.com |
  
