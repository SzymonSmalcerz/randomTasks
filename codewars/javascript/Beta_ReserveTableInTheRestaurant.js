/*


	Description:
	Your friend owns a busy restaurant and he asked you to 
	help him figure out a way to manage table reservations. 
	There are 10 tables in the restaurant (represented as objects):

	4 tables for 2 people
	2 tables for 3 people
	2 tables for 4 people
	1 table for 6 people
	1 table for 8 people
	You need to write a function reserve that takes one argument:

	bookings which is an array of integers representing all 
	bookings for the same time. Each integer is a number of 
	people for each booking. (example: [2, 4, 4] - one booking 
	for 2 people, and two bookings for 4 people)

	The function must return an array containing names of 
	tables that must be reserved. (example: ["table for two", 
	"table for three", "table for three"])

	If one or more bookings cannot be reserved, the function 
	must also return the message: "Following bookings were 
	not accepted: " + indexes of those bookings, so your 
	friend can notify the people about not being able to 
	reserve tables for them. (example of such return: 
	[["table for two", "table for three", "table for three"], 
	"Following bookings were not accepted: 0, 1, 4"])

	The restaurant has a set of rules about bookings:

	They don't reserve more than one table for any bookings.
	Therefore, they don't take bookings for more than 8 people.
	They can offer a bigger table for a booking but only if there 
	will be just one spare seat left unoccupied at this table.
	The bookings are available on a first come first served basis.


*/

function reserve(bookings) {
  var forTwo = { name: "table for two", seats : 2, num: 4};
	var forThree = { name: "table for three", seats : 3, num: 2};
	var forFour = { name: "table for four", seats : 4, num: 2};
	var forSix = { name: "table for six", seats : 6, num: 1};
	var forEight = { name: "table for eight", seats : 8, num: 1};
///start coding here:

  let dictionary = {
    "1" : {
      base : forTwo,
      optional : null
    },
    "2" : {
      base : forTwo,
      optional : forThree
    },
    "3" : {
      base : forThree,
      optional : forFour
    },
    "4" : {
      base : forFour,
      optional : null
    },
    "5" : {
      base : forSix,
      optional : null
    },
    "6" : {
      base : forSix,
      optional : null
    },
    "7" : {
      base : forEight,
      optional : null
    },
    "8" : {
      base : forEight,
      optional : null
    }
  }
  
  let notAcceptedBookings = [];
  let acceptedBookings = [];
  bookings.forEach((booking,index) => {
    
    if(dictionary[booking]){
      if(dictionary[booking].base.num > 0){
        dictionary[booking].base.num -= 1;
        acceptedBookings.push(dictionary[booking].base.name);
        return;
      }
      
      if(dictionary[booking].optional && dictionary[booking].optional.num > 0){
        dictionary[booking].optional.num -= 1;
        acceptedBookings.push(dictionary[booking].optional.name);
        return;
      }
    }
    
    notAcceptedBookings.push(index);
  });
  
  if(notAcceptedBookings.length == 0){
    return acceptedBookings;
  } else{
    notAcceptedBookings = "Following bookings were not accepted: " + notAcceptedBookings.join(", ");
    return [acceptedBookings,notAcceptedBookings];
  }
  
}
