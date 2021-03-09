#language: en

@register
Feature: Register

@register_test
Scenario: Register with success
    Given I visit the site
    When access the register page
    And I set the values
    Then the register is finished

