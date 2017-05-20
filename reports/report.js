$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePageTest/home.feature");
formatter.feature({
  "id": "validating-the-ntl-taxi-application",
  "tags": [
    {
      "name": "@HomeTest",
      "line": 1
    }
  ],
  "description": "",
  "name": "validating the NTL taxi Application",
  "keyword": "Feature",
  "line": 2
});
formatter.scenarioOutline({
  "id": "validating-the-ntl-taxi-application;validating-the-application-with-positive-data.",
  "description": "",
  "name": "validating the application with positive data.",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario_outline",
  "comments": [
    {
      "value": "#Scenario: validating the application with positive data.",
      "line": 3
    },
    {
      "value": "#Given Open Browser as firefox",
      "line": 4
    },
    {
      "value": "#Then Enter URL as http://ntltaxi.com/",
      "line": 5
    },
    {
      "value": "#Then Enter Username as Vmetry",
      "line": 6
    },
    {
      "value": "#Then Enter mobilenumber as",
      "line": 7
    },
    {
      "value": "#And Enter Pickup Address as ADYAR",
      "line": 8
    },
    {
      "value": "#And Enter Drop Address as ADYAR",
      "line": 9
    },
    {
      "value": "#Then select Vehicle Type as Sedan",
      "line": 10
    },
    {
      "value": "#And click Booklater checkbox",
      "line": 11
    },
    {
      "value": "#But Dont click book button",
      "line": 12
    }
  ]
});
formatter.step({
  "name": "Open Browser as \u003cBROWSER\u003e",
  "keyword": "Given ",
  "line": 15
});
formatter.step({
  "name": "Enter URL as \u003cURL\u003e",
  "keyword": "Then ",
  "line": 16
});
formatter.step({
  "name": "Enter Username as \u003cUSERNAME\u003e",
  "keyword": "Then ",
  "line": 17
});
formatter.step({
  "name": "Enter mobilenumber as \u003cMOBILENUMBER\u003e",
  "keyword": "Then ",
  "line": 18
});
formatter.step({
  "name": "Enter Pickup Address as \u003cPICKUPPLACE\u003e",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "Enter Drop Address as \u003cDROPADDRESS\u003e",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "select Vehicle Type as \u003cVEHICLE\u003e",
  "keyword": "Then ",
  "line": 21
});
formatter.step({
  "name": "click Booklater checkbox",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "Dont click book button",
  "keyword": "But ",
  "line": 23
});
formatter.examples({
  "id": "validating-the-ntl-taxi-application;validating-the-application-with-positive-data.;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 24,
  "rows": [
    {
      "id": "validating-the-ntl-taxi-application;validating-the-application-with-positive-data.;;1",
      "cells": [
        "BROWSER",
        "URL",
        "USERNAME",
        "MOBILENUMBER",
        "PICKUPPLACE",
        "DROPADDRESS",
        "VEHICLE"
      ],
      "line": 25
    },
    {
      "id": "validating-the-ntl-taxi-application;validating-the-application-with-positive-data.;;2",
      "cells": [
        "Firefox",
        "http://ntltaxi.com/",
        "VMETRYA",
        "9009099991",
        "ADYAR",
        "ADYAR",
        "Sedan"
      ],
      "line": 26
    },
    {
      "id": "validating-the-ntl-taxi-application;validating-the-application-with-positive-data.;;3",
      "cells": [
        "Firefox",
        "http://ntltaxi.com/",
        "VMETRYB",
        "9009099992",
        "ADYAR",
        "ADYAR",
        "Sedan"
      ],
      "line": 27
    },
    {
      "id": "validating-the-ntl-taxi-application;validating-the-application-with-positive-data.;;4",
      "cells": [
        "Firefox",
        "http://ntltaxi.com/",
        "VMETRYC",
        "9009099990",
        "ADYAR",
        "ADYAR",
        "Sedan"
      ],
      "line": 28
    }
  ]
});
formatter.scenario({
  "id": "validating-the-ntl-taxi-application;validating-the-application-with-positive-data.;;2",
  "tags": [
    {
      "name": "@HomeTest",
      "line": 1
    }
  ],
  "description": "",
  "name": "validating the application with positive data.",
  "keyword": "Scenario Outline",
  "line": 26,
  "type": "scenario"
});
formatter.step({
  "name": "Open Browser as Firefox",
  "keyword": "Given ",
  "line": 15,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Enter URL as http://ntltaxi.com/",
  "keyword": "Then ",
  "line": 16,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "Enter Username as VMETRYA",
  "keyword": "Then ",
  "line": 17,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "Enter mobilenumber as 9009099991",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Pickup Address as ADYAR",
  "keyword": "And ",
  "line": 19,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "Enter Drop Address as ADYAR",
  "keyword": "And ",
  "line": 20,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "select Vehicle Type as Sedan",
  "keyword": "Then ",
  "line": 21,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "click Booklater checkbox",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "Dont click book button",
  "keyword": "But ",
  "line": 23
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 650460599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 509950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VMETRYA",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 386263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9009099991",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterMobilenumber(String)"
});
formatter.result({
  "duration": 214088,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 182859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 246140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "HomePageTest.EnterVehicleType(String)"
});
formatter.result({
  "duration": 176695,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.ClickBookLater()"
});
formatter.result({
  "duration": 108482,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.BookButton()"
});
formatter.result({
  "duration": 105606,
  "status": "passed"
});
formatter.scenario({
  "id": "validating-the-ntl-taxi-application;validating-the-application-with-positive-data.;;3",
  "tags": [
    {
      "name": "@HomeTest",
      "line": 1
    }
  ],
  "description": "",
  "name": "validating the application with positive data.",
  "keyword": "Scenario Outline",
  "line": 27,
  "type": "scenario"
});
formatter.step({
  "name": "Open Browser as Firefox",
  "keyword": "Given ",
  "line": 15,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Enter URL as http://ntltaxi.com/",
  "keyword": "Then ",
  "line": 16,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "Enter Username as VMETRYB",
  "keyword": "Then ",
  "line": 17,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "Enter mobilenumber as 9009099992",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Pickup Address as ADYAR",
  "keyword": "And ",
  "line": 19,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "Enter Drop Address as ADYAR",
  "keyword": "And ",
  "line": 20,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "select Vehicle Type as Sedan",
  "keyword": "Then ",
  "line": 21,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "click Booklater checkbox",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "Dont click book button",
  "keyword": "But ",
  "line": 23
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 231758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 170120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VMETRYB",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 168065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9009099992",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterMobilenumber(String)"
});
formatter.result({
  "duration": 229703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 206281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 212856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "HomePageTest.EnterVehicleType(String)"
});
formatter.result({
  "duration": 170942,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.ClickBookLater()"
});
formatter.result({
  "duration": 87525,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.BookButton()"
});
formatter.result({
  "duration": 90402,
  "status": "passed"
});
formatter.scenario({
  "id": "validating-the-ntl-taxi-application;validating-the-application-with-positive-data.;;4",
  "tags": [
    {
      "name": "@HomeTest",
      "line": 1
    }
  ],
  "description": "",
  "name": "validating the application with positive data.",
  "keyword": "Scenario Outline",
  "line": 28,
  "type": "scenario"
});
formatter.step({
  "name": "Open Browser as Firefox",
  "keyword": "Given ",
  "line": 15,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Enter URL as http://ntltaxi.com/",
  "keyword": "Then ",
  "line": 16,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "Enter Username as VMETRYC",
  "keyword": "Then ",
  "line": 17,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "Enter mobilenumber as 9009099990",
  "keyword": "Then ",
  "line": 18,
  "matchedColumns": [
    3
  ]
});
formatter.step({
  "name": "Enter Pickup Address as ADYAR",
  "keyword": "And ",
  "line": 19,
  "matchedColumns": [
    4
  ]
});
formatter.step({
  "name": "Enter Drop Address as ADYAR",
  "keyword": "And ",
  "line": 20,
  "matchedColumns": [
    5
  ]
});
formatter.step({
  "name": "select Vehicle Type as Sedan",
  "keyword": "Then ",
  "line": 21,
  "matchedColumns": [
    6
  ]
});
formatter.step({
  "name": "click Booklater checkbox",
  "keyword": "And ",
  "line": 22
});
formatter.step({
  "name": "Dont click book button",
  "keyword": "But ",
  "line": 23
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.OpenBrowser(String)"
});
formatter.result({
  "duration": 13905474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://ntltaxi.com/",
      "offset": 13
    }
  ],
  "location": "HomePageTest.EnterURL(String)"
});
formatter.result({
  "duration": 399823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VMETRYC",
      "offset": 18
    }
  ],
  "location": "HomePageTest.EnterUsername(String)"
});
formatter.result({
  "duration": 333254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9009099990",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterMobilenumber(String)"
});
formatter.result({
  "duration": 323803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 24
    }
  ],
  "location": "HomePageTest.EnterPickupAddress(String)"
});
formatter.result({
  "duration": 350924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADYAR",
      "offset": 22
    }
  ],
  "location": "HomePageTest.EnterDropAddress(String)"
});
formatter.result({
  "duration": 394893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sedan",
      "offset": 23
    }
  ],
  "location": "HomePageTest.EnterVehicleType(String)"
});
formatter.result({
  "duration": 332844,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.ClickBookLater()"
});
formatter.result({
  "duration": 329556,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.BookButton()"
});
formatter.result({
  "duration": 281068,
  "status": "passed"
});
});