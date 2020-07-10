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
  

