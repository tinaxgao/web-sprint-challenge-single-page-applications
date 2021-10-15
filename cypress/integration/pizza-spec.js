describe("Pizza ordering app test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  const foobarInput = () => cy.get("input[name=foobar]");
  const nameInput = () => cy.get("input[name=name]");
  const specialInput = () => cy.get("input[name=special]");
  const submitBtn = () => cy.get("button");
  // Toppings

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
    cy.contains("Add to Order").should("exist");
  });

  it("can type in & submit each input type", () => {
    nameInput()
      .should("have.value", "")
      .type("itsamemario")
      .should("have.value", "itsamemario");
    specialInput()
      .should("have.value", "")
      .type("mario@plumber.com")
      .should("have.value", "mario@plumber.com");
    submitBtn().click();
    cy.contains("itsamemario");
  });

  it("you cannot submit if form is empty", () => {
    nameInput().type("tina");
    submitBtn().should("be.disabled");
  });
});
