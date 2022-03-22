function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      // First define a string, and make it equal to the part of
      // the bio that we know will always be the same.
      var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
      // define a variable that will contain the pronoun part of
      // the second sentence
      var pronoun;

      // check what the value of gender is, and set pronoun
      // to an appropriate value in each case
      if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        pronoun = 'He likes ';
      } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        pronoun = 'She likes ';
      } else {
        pronoun = 'They like ';
      }

      // add the pronoun string on to the end of the main string
      string += pronoun;

      // use another conditional to structure the last part of the
      // second sentence depending on whether the number of interests
      // is 1, 2, or 3
      if(this.interests.length === 1) {
        string += this.interests[0] + '.';
      } else if(this.interests.length === 2) {
        string += this.interests[0] + ' and ' + this.interests[1] + '.';
      } else {
        // if there are more than 2 interests, we loop through them
        // all, adding each one to the main string followed by a comma,
        // except for the last one, which needs an and & a full stop
        for(var i = 0; i < this.interests.length; i++) {
          if(i === this.interests.length - 1) {
            string += 'and ' + this.interests[i] + '.';
          } else {
            string += this.interests[i] + ', ';
          }
        }
      }

      // finally, with the string built, we alert() it
      alert(string);
    };
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name.first + '.');
    };
  };

  Person.prototype.farewell = function() {
    alert(this.name.first + ' has left the building. Bye for now!');
  };

//   https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Object_prototypes

  let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);
  var person2 = Object.create(person1);
  let person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);

    person2.__proto__

    person1.constructor
    person2.constructor

    person3.name.first
    person3.age
    person3.bio()
    person1.constructor.name
    person1.farewell();




    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
      const auto = new Car('Honda', 'Accord', 1998);
      
      console.log(auto instanceof Car);
      // expected output: true
      
      console.log(auto instanceof Object);
      // expected output: true
      
