import * as work from 'work_function';

context("Trello Automation Scenarios",() => {
    // beforeEach executes before each test
    beforeEach(() => {
      work.visitHomePage("shubzzz91@gmail.com","Shubham12345");
    });
  
    it("Automation test scenarios ", () => {
      //creating board
      cy.get(`button[data-testid="header-create-menu-button"]`).click();
      cy.get(`button[data-testid="header-create-board-button"]`).click();
      cy.get(`input[data-testid="create-board-title-input"]`).type("Board1");
      cy.get(`button[data-testid="create-board-submit-button"]`).click();

      // Adding 2 lists 
      cy.get(".open-add-list").click();
      cy.get(".list-name-input").type("A");
      cy.get("input[value=`Add list`]").click();
      cy.get(".list-header-target:contains('A')").should("exist");
      cy.get(".list-name-input").type("B");
      cy.get("input[value=`Add list`]").click();
      cy.get(".list-header-target:contains('B')").should("exist");

      // creation of card
      const listA=cy.get(".list:contains('A')");
      listA.within(()=>{
       cy.get(".js-add-a-card").click();
       cy.get(".js-card-title").type("Demo Card");
       cy.get("input.js-add-card").click();
       //assertion for card is added within LIST A
       cy.contains(".js-card-name","Demo Card");
      });
      

      // Drag and drop of card
      const source=cy.get(".js-member-droppable:contains('Demo Card')");
      const destination=cy.get(".js-card-composer-container");

      work.dragDrop(source,destination);
      // Assertion for Card is drag and dropped to list B
      const listB=cy.get(".list:contains('B')");
      listB.within(()=>{
        cy.contains(".js-card-name","Demo Card");
      });
      
      // get x and y coordinates

      const card= cy.get(`.list:contains('B') .js-card-name:contains("Demo Card")` );

      const xPoint=work.getXcordinate(card);
      const yPoint=work.getYcordinate(card);

      cy.log("X coordinate is "+xPoint);
      cy.log("Y coordinate is "+yPoint);

      //logout

      work.logout();
    });
});  
