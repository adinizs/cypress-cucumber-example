#language: en

@login
Feature: Login

@login_test
Scenario: Login with success
    Given I visit the site
    When access the login page
    And I type my credentials
    Then the login is successful

