export function dragDrop(subject,target){
    Cypress.log({
        name: "DRAGNDROP",
        message: `Dragging element ${subject} to ${target}`,
        consoleProps: () => ({
          subject,
          target,
        }),
      });
      const BUTTON_INDEX = 0;
      const SLOPPY_CLICK_THRESHOLD = 10;
      cy.get(target)
        .first()
        .then($target => {
          const coordsDrop = $target[0].getBoundingClientRect();
          cy.get(subject)
            .first()
            // This is copied code from a cypress bug report solution. Eventually, we need to fix this lint issue
            // eslint-disable-next-line no-shadow
            .then(subject => {
              const coordsDrag = subject[0].getBoundingClientRect();
              cy.wrap(subject)
                .trigger("mousedown", {
                  button: BUTTON_INDEX,
                  clientX: coordsDrag.x,
                  clientY: coordsDrag.y,
                  force: true,
                })
                .trigger("mousemove", {
                  button: BUTTON_INDEX,
                  clientX: coordsDrag.x + SLOPPY_CLICK_THRESHOLD,
                  clientY: coordsDrag.y,
                  force: true,
                });
              cy.get("body")
                .trigger("mousemove", {
                  button: BUTTON_INDEX,
                  clientX: coordsDrop.x,
                  clientY: coordsDrop.y,
                  force: true,
                })
                .trigger("mouseup");
            });
        });
}


/**
 * @function signIn signIn to the website
 * @param {string} userEmail - mail of user
 * @param {string} passWord  - password of user
 * @return - nothing
 */

export function signIn(userEmail,passWord){
    cy.contains("a","Log in").click();
    cy.get("#user").type(userEmail);
    cy.get("#login.button").click();
    cy.get("#password").type(passWord);
    cy.get("#login-submit").click();
    };
    
 /**
 * @function visitHomePage visites the homepage of website.
 * @param {string} userEmail - mail of user
 * @param {string} passWord  - password of user
 * @return - nothing
 */
    
 export function visitHomePage(userEmail,passWord){
        cy.visit("https://trello.com/home");
        //will wait for 5 seconds to load homepage
        signIn(userEmail,passWord);
        cy.wait(5000);
        cy.get(".home-container").should("exist");
    }
    
export function getXcordinate(element){
    cy.get(element)
    .then($element => {
      const coordsDrop = $element[0].getBoundingClientRect();
      const xCordinate =  coordsDrop.x;
      return xCordinate;
    });
}

export function getYcordinate(element){
    cy.get(element)
    .then($element => {
      const coordsDrop = $element[0].getBoundingClientRect();
      const yCordinate =  coordsDrop.y;
      return yCordinate;
    });
}


export function logout(){
    cy.get("button[data-testid='header-member-menu-button']").click();
    const accountMenu=cy.get("section[data-testid='header-member-menu-popover']");
    accountMenu.within(()=>{
        cy.get("button[data-testid='header-member-menu-logout']").click();
    });
    // asserts logout process is successfully completed
    cy.contains("Log out of your Atlassian accounts");
}