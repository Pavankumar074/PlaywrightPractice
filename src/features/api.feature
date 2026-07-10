Feature: API Functionality

    Scenario: Verify Post API Functionality
        Given I create the base url
        When I trigger the post request with endpoint "/booking" and payload
        Then I verify the response status code is 200    
        Then I verify the response body contains the expected data

    Scenario: Verify Get API Functionality
        Given I create the base url
        When I trigger the get request with endpoint "/booking"
        Then I verify the response status code is 200

    

