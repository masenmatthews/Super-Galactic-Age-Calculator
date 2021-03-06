import { User } from './../js/user.js';

describe('User', function() {
  let human;

  beforeEach(function() {
    human = new User(23, "male");
  });

  it("Create a new user object", function() {
    expect(human.age).toEqual(23);
    expect(human.sex).toEqual("male");
  });

  it("Returns user's age in seconds", function() {
    expect(human.ageInSeconds()).toEqual(725809896);
  });

  it("Takes the user's age and return it in Mercury years", function() {
    expect(human.mercuryAge()).toEqual(95);
  });

  it("Takes the user's age and sex and returns how many Mercury years they have left to live", function() {
    expect(human.mercuryTimeLeft()).toEqual(221);
  });

  it("Takes the user's age and return it in Venus years", function() {
    expect(human.venusAge()).toEqual(37);
  });

  it("Takes the user's age and sex and returns how many Venus years they have left to live", function() {
    expect(human.venusTimeLeft()).toEqual(85);
  });

  it("Takes the user's age and return it in Mars years", function() {
    expect(human.marsAge()).toEqual(12);
  });

  it("Takes the user's age and sex and returns how many Mars years they have left to live", function() {
    expect(human.marsTimeLeft()).toEqual(28);
  });

  it("Takes the user's age and return it in Jupiter years", function() {
    expect(human.jupiterAge()).toEqual(1);
  });

  it("Takes the user's age and sex and returns how many Jupiter years they have left to live", function() {
    expect(human.jupiterTimeLeft()).toEqual(5);
  });

  it("Estimates remaining life expectancy based on age and sex", function() {
    expect(human.life()).toEqual(53);
  });

  it("Determines the amount of years that the user has surpassed life expectancy by based on age and sex", function() {
    let oldHuman = new User(118, "female");
    expect(oldHuman.life()).toEqual(37);
  });
});
