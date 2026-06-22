Feature: About page Functionality

    Background:
        Given I am on the login page of the application
        When I enter valid "UserName" and "Password"
        And I click on the login button
        Then I should be redirected to the homepage

    Scenario: Validate about page
        Given I click on the about link in the homepage
        Then I should be redirected to the about page