# FULL-Creative-assignment
Assignment

Tools stack used:- Cypress(version: 10.3.1) and Javascript.

About Framework:- Cypress is an open-source testing framework based on JavaScript that supports web application testing. Unlike Selenium, Cypress works completely on a real browser without the need for driver binaries. The automated code and application code share the same platform, which gives complete control over the application under test.

Automation Environment/UI:- https://trello.com/

Data used:-

Credentials used for sign in. username: shubzzz91@gmail.com password: Shubham12345

Project Set-up:-

support/work_function.js : This file contains following methods related to the realtime functions performed by user.

a. visitHomePage():- visites the homepage of website using signIn.
b. dragDrop():- Drags element from source and drops at target.
c. getXcordinate()- returns x co-ordinate of element 
d. getYcordinate():- returns y co-ordinate of element
e. signIn() =>  Login to the trello
f. logout() :- logs out from current account

spec_files/assignment.js: This file contains executable scenarios.

Execution:- Download the cypress and keep any IDE Handy. Get the files into the IDE and 
keep methods related files(work_function.js) into support folder and 
assignment.cy.js in spec folder. For opening cypress runner use:- ./node_modules/.bin/cypress open execute the file automation_test.cy.js

Alternate Solutions:-

solution: we can handle dynamic waits as following example for filtering page, 
cy.route("GET","/URL).as("loadFilterPage"); cy.wait("@loadFilterPage); 
also we can use cy.intercept() method here as, cy.intercept("PUT", "/URL").as("updateUserUiState"); cy.wait("@updateUserUiState");
