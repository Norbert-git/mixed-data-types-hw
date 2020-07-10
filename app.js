

// lets start over just to see how github works :)


// ### 1. Data types

// #### Refresher

// So far we have seen:

// * Strings
// * Numbers
// * Booleans
// * Arrays
// * Objects

// When these datatypes are combined, we get a **data structure**, for example,
// an array that contains objects that each contain booleans.

// Suppose you are tasked with creating some software, and it is up to **you**
// to determine which datatypes and what data structure to use.  For each of the following,
// write which **data types** you would use to represent the data, and then give a small example of the 
//**data structure**:

//   * A light switch that can be either on or off.
//   * A user's email address.
//   * A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//   * A list of student names from our class.
//   * A list of student names from our class, each with a location.
//   * A list of student names from our class, each with a location and each with a list of favorite tv shows.



    //lightSwitch: ['on', 'off'],  Booleans
    const lightSwitch = (on) => {
        if (input === "1") return On;
        return Off;
      };
      lightSwitch('1')    
      lightSwitch('0')

      //Students Name: Array
      const nameOfStudents = ['steve', 'bob', 'isabella', 'James']
        console.log(nameOfStudents)

      // Students name, location and favorite tv show : object
      const   studentInfo = {
               info [
                 {
                   name: 
                   location: 
                   favoriteTvShow:
                 }
                 {
                    name:
                    location:
                    favoriteTvShow:
                  }
                ]


 
// ### 2. Take it Easy

// 1. Make an array that holds all of the colors of the rainbow.
// 2. Write code that will access "blue" from the rainbow array.
// 3. Make an object that is called your name and holds the information about your favorite food, 
//a hobby, the name of the town that you live in currently, and your favorite datatype.
// 4. Write code that will access your hobby from the object that you just created.


const rainbow = {
    colors: ['red', 'green', 'yellow','blue']
}
console.log(rainbow.colors[3])


const norbert = {
    favFood: 'cheeseBurger',
    hobby: ['airPlainModels'],
    currentTown: 'Rockford',
    favDataType: 'numbers',

}
console.log(norbert.hobby[0])



//### 3. Crazy Object!


const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }
  
  console.log(crazyObject.taco[1].salsa[crazyObject.taco[1].salsa.length -1]) //"omg my mouth is burning"
  console.log(crazyObject.larry.quotes[0])    //"Pretty pretty prettayyyyy good"
  console.log(crazyObject.larry.characters[2].favourtieHobby) //"Swearing at Larry and Jeff"
  console.log(crazyObject.larry.nicknames[1])  //"Chicken Teriyaki Boyyyyyy"
  
  // Use crazyObject to log the following.
  
  //   * "omg my mouth is burning"
  //   * "Pretty pretty prettayyyyy good"
  //   * "Swearing at Larry and Jeff"
  //   * "Chicken Teriyaki Boyyyyyy"
  //   * The object the contains the name `funkhauser`
  
  