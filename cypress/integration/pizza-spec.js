describe("Pizza ordering app test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  const foobarInput = () => cy.get("input[name=foobar]");
  const nameInput = () => cy.get("input[name=name]");
  const specialInput = () => cy.get("input[name=special]");
  const sizeInput = () => cy.get("select[name=size]");
//   const hiddenId = () => cy.get('input[name=id]');
  const submitBtn = () => cy.get("button");
  // Toppings
  const toppings = () => cy.get("[type=checkbox]");

  it("sanity check", () => {
    //"it" is a test. "expect" is an assertion
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({}); //strict ===
    expect({}).to.eql({}); //not strict ==
  });

  it("the proper elements are showing", () => {
    nameInput().should("exist");
    foobarInput().should("not.exist");
    specialInput().should("exist");
    submitBtn().should("exist");
    sizeInput().should("exist");
    toppings().should("exist");
    // hiddenId().should('exist');
    cy.contains("Add to Order").should("exist");
  });

  it("can type in & submit each input type", () => {
    nameInput()
      .should("have.value", "")
      .type("itsamemario")
      .should("have.value", "itsamemario");

    sizeInput().select("small").should("have.value", "small");
    toppings().check();
    specialInput()
      .should("have.value", "")
      .type("hot sauce")
      .should("have.value", "hot sauce");
    submitBtn().click();
    cy.contains("itsamemario");
  });

  it("you cannot submit if form is empty", () => {
    nameInput().type("tina");
    submitBtn().should("be.disabled");
  });
});
