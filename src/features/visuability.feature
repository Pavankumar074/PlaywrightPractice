Feature: Accessibility Testing

  Background:
        Given I am on the login page of the application
        When I enter valid "UserName" and "Password"
        And I click on the login button
        Then I should be redirected to the homepage
    
    
    Scenario: Login page accessibility
        Then Login page should pass visual accessibility validation    

