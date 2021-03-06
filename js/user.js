export class User {
  constructor(age, sex){
    this.age = age;
    this.sex = sex;
  }
  life() {
    const FemalelifeExpect = 81;
    const lifeExpect = 76;
    if (this.sex === "female" && this.age > 81) {
      let femaleYearsPastDeath = (this.age - 81);
      return femaleYearsPastDeath
    } else if (this.sex === "male" && this.age > 76) {
      let maleYearsPastDeath = (this.age - 76);
      return maleYearsPastDeath
    } else if (this.sex === "female" && this.age < 81) {
      let femaleRemainingLife = (81 - this.age);
      return femaleRemainingLife
    } else if (this.sex === "male" && this.age < 76) {
      let maleRemainingLife = (76 - this.age);
      return maleRemainingLife
    }
  }
  ageInSeconds() {
    let ageInSeconds = (this.age * 31556952);
    return ageInSeconds
  }
  mercuryAge() {
    let mercuryAge = (Math.floor(this.age / 0.24));
    return mercuryAge
  }
  mercuryTimeLeft() {
    const mercuryFemaleLifeExpect = 337
    const mercuryMaleLifeExpect = 316
    let mercuryAge = (Math.floor(this.age / 0.24));
    if (mercuryAge <= 337 && this.sex === "female") {
      let mercuryRemainingLife = (337 - mercuryAge);
      return mercuryRemainingLife
    } else if (mercuryAge <= 316 && this.sex === "male") {
      let mercuryRemainingLife = (316 - mercuryAge);
      return mercuryRemainingLife
    } else {
      return "You have surpassed your otherwordly life expectancy!"
    }
  }
  venusAge() {
    let venusAge = (Math.floor(this.age / 0.62));
    return venusAge
  }
  venusTimeLeft() {
    const venusFemaleLifeExpect = 130
    const venusMaleLifeExpect = 122
    let venusAge = (Math.floor(this.age / 0.62));
    if (venusAge <= 130 && this.sex === "female") {
      let venusRemainingLife = (130 - venusAge);
      return venusRemainingLife
    } else if (venusAge <= 122 && this.sex === "male") {
      let venusRemainingLife = (122 - venusAge);
      return venusRemainingLife
    } else {
      return "You have surpassed your otherwordly life expectancy!"
    }
  }
  marsAge() {
    let marsAge = (Math.floor(this.age / 1.88));
    return marsAge
  }
  marsTimeLeft() {
    const marsFemaleLifeExpect = 43
    const marsMaleLifeExpect = 40
    let marsAge = (Math.floor(this.age / 1.88));
    if (marsAge <= 43 && this.sex === "female") {
      let marsRemainingLife = (43 - marsAge);
      return marsRemainingLife
    } else if (marsAge <= 40 && this.sex === "male") {
      let marsRemainingLife = (40 - marsAge);
      return marsRemainingLife
    } else {
      return "You have surpassed your otherwordly life expectancy!"
    }
  }
  jupiterAge() {
    let jupiterAge = (Math.floor(this.age / 11.86));
    return jupiterAge
  }
  jupiterTimeLeft() {
    // Division brings both life expectancies for males and females to 6 with differing decimal values. They're identical in this case because of rounding.
    const jupiterLifeExpect = 6
    let jupiterAge = (Math.floor(this.age / 11.86));
    if (jupiterAge <= 6) {
      let jupiterRemainingLife = (6 - jupiterAge);
      return jupiterRemainingLife
    } else {
      return "You have surpassed your otherwordly life expectancy!"
    }
  }
}
