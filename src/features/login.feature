Feature: Login Functionality

    Background:
        Given I am on the login page of the application
        When I enter valid "UserName" and "Password"
        And I click on the login button
        Then I should be redirected to the homepage

    @sanity
    Scenario Outline: Verify user is able to add item to the cart
        Given user is on the homepage
        When I click on the add to cart button for a "<product>"
        Then the "<product>" should be added to the cart

        Examples:
            | product               |
            | Sauce Labs Backpack   |
            | Sauce Labs Bike Light |

    Scenario: Verify User is able to logout succesfully
        Given I click on hamburger and click on logout button
        Then I should be logged out succesfully        

