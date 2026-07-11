Feature: Cart Functionality

    Background:
        Given I am on the login page of the application
        When I enter valid "UserName" and "Password"
        And I click on the login button
        Then I should be redirected to the homepage

    @regression
    Scenario Outline: Validate about page
        Given user is on the homepage
        When I click on the add to cart button for a "<product>"
        And the "<product>" should be added to the cart
        When I click on remove button
        Then Item "<product>" should be removed from the cart 

    Examples:
            | product               |
            | Sauce Labs Backpack   |    
