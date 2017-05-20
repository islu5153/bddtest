@HomeTest
Feature: validating the NTL taxi Application
#Scenario: validating the application with positive data.
#Given Open Browser as firefox
#Then Enter URL as http://ntltaxi.com/
#Then Enter Username as Vmetry
#Then Enter mobilenumber as 
#And Enter Pickup Address as ADYAR
#And Enter Drop Address as ADYAR
#Then select Vehicle Type as Sedan
#And click Booklater checkbox
#But Dont click book button

Scenario Outline: validating the application with positive data.
Given Open Browser as <BROWSER>
Then Enter URL as <URL>
Then Enter Username as <USERNAME>
Then Enter mobilenumber as <MOBILENUMBER>
And Enter Pickup Address as <PICKUPPLACE>
And Enter Drop Address as <DROPADDRESS>
Then select Vehicle Type as <VEHICLE>
And click Booklater checkbox
But Dont click book button
Examples:
|BROWSER|URL|USERNAME|MOBILENUMBER|PICKUPPLACE|DROPADDRESS|VEHICLE|
|Firefox|http://ntltaxi.com/|VMETRYA|9009099991|ADYAR|ADYAR|Sedan|
|Firefox|http://ntltaxi.com/|VMETRYB|9009099992|ADYAR|ADYAR|Sedan|
|Firefox|http://ntltaxi.com/|VMETRYC|9009099990|ADYAR|ADYAR|Sedan|