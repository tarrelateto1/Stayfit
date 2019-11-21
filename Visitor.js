class Visitor {
    constructor(name,age,gender,weight,Height,frequency,option) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.weight = weight;
      this.Height = Height;
      this.frequency = frequency;
      this.option = option;
    }
  
    getName() {
      return this.name;
    }
    
    getAge() {
        return this.age;
    }
    getGender() {
        return this.gender;
    }
      
    getWeight() {
        return this.weight;
    }
    getHeight() {
        return this.Height;
    }
      
    getFrequency() {
        return this.frequency;
    }
    getOption() {
        return this.option;
    }
  }
  
  module.exports = Visitor;