/* 4 different input:  
  + Subtotal, delivery fee, service fee, tip

  - subtotal: can be input such as 7+3 by ueweser. 
  
  - delivery fee: flat number divided by the amount of people evenly.
  Also delivery fee can be = to zero.

  - Service fee is a percentage of the subtotal, cann be between 5% and 15%
  
  - Tax: is %6.625 - Tax can be apply to the subtotal or subtotal+service fee.

  - Tip: flat ammount which is not taxed - each individiual can contribute individual ammount  - BONUS: allow user input to a total ammount and have the program split the total by percentage.

  - The program should add up the total for each category to get the total for subtotal, tax total, service fee and tip total and final total
  */

// people
var people = [{
  name: 'Lisa',
  picture: 'url(/img/batel-studio-ttSRjiYG_WM-unsplash.jpg)'
},
{
  name: 'Janet',
  picture: 'url(/img/juno-jo-nwdPxI1h4NQ-unsplash.jpg)'
},
{
  name: 'Clark',
  picture: 'url(/img/petr-sevcovic-HzDF-rxlSeM-unsplash.jpg)'
}
];


// Object
// console.log(people[0].picture);


// selector user
const users = document.querySelectorAll('.user');

// Let's add  the users into the array list
const usersInOrder = [];

// Event
for(const user of users){
  user.addEventListener('click', function(event){
    // console.log('Hello from the click event listener');
    // console.log('This is user: ' + user.getAttribute("value"));

    // If the user does not have the class selected when clicked, then add it. 
    if(user.classList.contains('selected')!= true){ 
      //Add the class to the user
      user.classList.add("selected");

      //Add it into the usersInOrder array
      usersInOrder.push(user.getAttribute("value"));
      
      //Calling function
      //Send info for user to be in order section
      //Calling function
      addToOrder(user);
   } 
      else{
      
      //Remove the class from the user
      user.classList.remove("selected");

      // if the user is in the inOrderList, then add it to that list.
      usersInOrder.splice(usersInOrder.indexOf(user.getAttribute("value")), 1);
      

      // Remove from order - function
      removeFromOrder(user);


    }
    
    // Keep track of the users in the order.
    console.log(usersInOrder);
    
  });
}


// another function
function addToOrder(e){
  // console.log(e);
  // console.log(e.getAttribute("value"));

  // Create element
  var addUser = document.createElement("DIV");

  // Create Text
  addUser.innerHTML = "CLICK ME";


  // Add class
  addUser.classList.add("user-in-order");



  // USERS BACKGROUND Picture in order
  // match the background image for the user
  if(e.getAttribute("value") == "Lisa"){
    // Set background of the user
    addUser.style.backgroundImage=people[0].picture;

    //Set Attribute and value
    addUser.setAttribute("value", "Lisa");

  }

  if(e.getAttribute("value") == "Janet"){
    // console.log('Correct');
    addUser.style.backgroundImage=people[1].picture;

    //Set Attribute and value
    addUser.setAttribute("value", "Janet");
  }

  if(e.getAttribute("value") == "Clark"){
    
    addUser.style.backgroundImage=people[2].picture;
    //Set Attribute and value
    addUser.setAttribute("value", "Clark");
  }


  // Append element to  order-form
  document.getElementById("order-form").appendChild(addUser);
}


// removeFromOrder function
function removeFromOrder(e){
  console.log('Removed user');
  
  // This is the list of users to be deleted from the order section
  var removeUser = document.querySelectorAll('.user-in-order');
  
  // While loop to search through the users to be removed
  // While there is more than 0 users then go through the user to be deleted
  var i = 0;
  while(removeUser.length > 0){

      // console.log(removeUser[i]);
      // Remove current user clicked
      removeUser[i].remove();
      i++; 

      //stop the loop there
      break;

      // Fix user added multiple times to order when removed.
      // Test comment 
    
  }


  // Listener
  // for(var i = 0; i < removeUser.length; i++){
  //   if(removeUser[i].getAttribute("value") == "Lisa"){
  //     console.log('REMOVING LISA ');
  //     removeUser[i].remove();
  //   }

  //   if(removeUser[i].getAttribute("value") == "Janet"){
  //     console.log('REMOVING Janet ');
  //     removeUser[i].remove();
  //   }

  //   if(removeUser[i].getAttribute("value") == "Clark"){
  //     console.log('REMOVING Clark ');
  //     removeUser[i].remove();
  //   }
  // }
  

  // for(var i = 0; i < removeUser.length; i++){
  //   if(removeUser[i].getAttribute("value") == "Lisa"){
  //     console.log('REMOVING LISA ');
  //     removeUser[i].remove();
  //   }

  //   if(removeUser[i].getAttribute("value") == "Janet"){
  //     console.log('REMOVING Janet ');
  //     removeUser[i].remove();
  //   }

  //   if(removeUser[i].getAttribute("value") == "Clark"){
  //     console.log('REMOVING Clark ');
  //     removeUser[i].remove();
  //   }
  // }
  
  
  // console.log(removeUser);

  // e.remove();
  // var getUser = document.getElementsByClassName("user-in-order");
  // console.log(getUser);

  // getUser.parentNode.removeChild(getUser);
}




// for(var i = 0; i < users.length; i++){
//   // console.log("The name of the user is: " + users[i].getAttribute("value"));

//   // console.log(users[i]);



// }