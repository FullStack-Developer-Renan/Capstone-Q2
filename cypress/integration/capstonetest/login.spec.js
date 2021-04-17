context('Login page', ()=>{

it("Login in with valid credentials", ()=>{
   
cy.viewport(screen.width,screen.height)
cy.visit("http://localhost:3000/");
cy.contains("Login");
cy.contains("Register");
cy.contains("Recrutamento");
cy.get(".sc-bdvvaa").contains("Login")
cy.get(":nth-child(1) > .sc-gsDJrp").type("capstone2@gmail.com");
cy.get(":nth-child(2) > .sc-gsDJrp").type("123456");
cy.get(".sc-bdvvaa").click();
cy.get(":nth-child(1) > a").click();
cy.get(":nth-child(3) > a").click();
cy.contains("Dev");
cy.get("#simple-tab-0").click();
cy.contains("Pesquise um Dev");
cy.get("#simple-tab-1 > .MuiTab-wrapper").click();
cy.contains("Pesquisar uma Empresa:");
cy.get("#simple-tab-2 > .MuiTab-wrapper").click();
cy.contains("Pesquisar Vagas");
cy.get(":nth-child(4) > a").click();
cy.contains("Bem - Vindo");

})

})