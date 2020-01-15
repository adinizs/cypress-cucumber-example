#language: en

@login
Feature: Login

@login_test
Scenario: Login with success
    Given I visit the site
    When I type the e-mail "mailexample@mailinator.com" and I type the password "090807"
    And I click to Login button
    Then the home page is displayed

