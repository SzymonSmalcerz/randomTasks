/*


	I bet you won't ever catch a Lift (a.k.a. elevator) again without thinking of this Kata !

	Synopsis
	A multi-floor building has a Lift in it.

	People are queued on different floors waiting for the Lift.

	Some people want to go up. Some people want to go down.

	The floor they want to go to is represented by a number (i.e. when they enter the Lift this is the button they will press)

	BEFORE (people waiting in queues)               AFTER (people at their destinations)
		           +--+                                          +--+ 
	  /----------------|  |----------------\        /----------------|  |----------------\
	10|                |  | 1,4,3,2        |      10|             10 |  |                |
	  |----------------|  |----------------|        |----------------|  |----------------|
	 9|                |  | 1,10,2         |       9|                |  |                |
	  |----------------|  |----------------|        |----------------|  |----------------|
	 8|                |  |                |       8|                |  |                |
	  |----------------|  |----------------|        |----------------|  |----------------|
	 7|                |  | 3,6,4,5,6      |       7|                |  |                |
	  |----------------|  |----------------|        |----------------|  |----------------|
	 6|                |  |                |       6|          6,6,6 |  |                |
	  |----------------|  |----------------|        |----------------|  |----------------|
	 5|                |  |                |       5|            5,5 |  |                |
	  |----------------|  |----------------|        |----------------|  |----------------|
	 4|                |  | 0,0,0          |       4|          4,4,4 |  |                |
	  |----------------|  |----------------|        |----------------|  |----------------|
	 3|                |  |                |       3|            3,3 |  |                |
	  |----------------|  |----------------|        |----------------|  |----------------|
	 2|                |  | 4              |       2|          2,2,2 |  |                |
	  |----------------|  |----------------|        |----------------|  |----------------|
	 1|                |  | 6,5,2          |       1|            1,1 |  |                |
	  |----------------|  |----------------|        |----------------|  |----------------|
	 G|                |  |                |       G|          0,0,0 |  |                |
	  |====================================|        |====================================|
	Rules
	Lift Rules
	The Lift only goes up or down!
	Each floor has both UP and DOWN Lift-call buttons (except top and ground floors which have only DOWN and UP respectively)
	The Lift never changes direction until there are no more people wanting to get on/off in the direction it is already travelling
	When empty the Lift tries to be smart. For example,
	If it was going up then it may continue up to collect the highest floor person wanting to go down
	If it was going down then it may continue down to collect the lowest floor person wanting to go up
	The Lift has a maximum capacity of people
	When called, the Lift will stop at a floor even if it is full, although unless somebody gets off nobody else can get on!
	If the lift is empty, and no people are waiting, then it will return to the ground floor
	People Rules
	People are in "queues" that represent their order of arrival to wait for the Lift
	All people can press the UP/DOWN Lift-call buttons
	Only people going the same direction as the Lift may enter it, and they do so according to their "queue" order
	If a person is unable to enter a full Lift, they will press the UP/DOWN Lift-call button again after it has departed without them
	Kata Task
	Get all the people to the floors they want to go to while obeying the Lift rules and the People rules
	Return a list of all floors that the Lift stopped at (in the order visited!)
	NOTE: The Lift always starts on the ground floor (and people waiting on the ground floor may enter immediately)

	I/O
	Input
	queues a list of queues of people for all floors of the building.
	The height of the building varies
	0 = the ground floor
	Not all floors have queues
	Queue index [0] is the "head" of the queue
	Numbers indicate which floor the person wants go to
	capacity maximum number of people allowed in the lift
	Parameter validation - All input parameters can be assumed OK. No need to check for things like:

	People wanting to go to floors that do not exist
	People wanting to take the Lift to the floor they are already on
	Buildings with < 2 floors
	Basements
	Output
	A list of all floors that the Lift stopped at (in the order visited!)
	Example
	Refer to the example test cases.

	Language Notes
	Python : The object will be initialized for you in the tests
	Good Luck -
	DM


*/


var theLift = function(queues, capacity) {

  var liftStops = [] // final table, which contains all stops that lift made
  var direction = "up" // or down, lift start from the ground so first direction is up
  var numberOfWaitingPeople = getnumberOfWaitingPeople(queues)// someone is waiting, it means that someone is waiting for lift or somone 
                                                              // is INSIDE LIFT (only after leaving lift we assume that someone is not waiting)
  var currentFloor = 0;// lift starts from the ground
  var liftTable = []// this table is list of people currently in the lift, length of liftTable must not exceed capacity
  
  while(numberOfWaitingPeople > 0){
    if(liftTable.indexOf(currentFloor) != -1){
    
         liftStops.push(currentFloor) //someone is getting out => lift must stop at this floor
         
         liftTable = liftTable.filter(desiredFloor => {
           if(desiredFloor != currentFloor){return true}// not his/her floor to leave lift
           numberOfWaitingPeople-=1;// someone is getting out on this floor
           return false;
         })
         
    }
    
    
    if(queues[currentFloor].length > 0){
    
      queues[currentFloor] = queues[currentFloor].filter((val,index,arr) => {
      
        if((currentFloor == 0 || currentFloor == queues.length) || (direction == "up" && val > currentFloor) || (direction == "up" && val < currentFloor && !isSomeoneWaitingAboveFloor(currentFloor,queues)) || (direction == "down" && val > currentFloor && !isSomeoneWaitingBelowFloor(currentFloor,queues)) || (direction == "down" && val < currentFloor)){
          if(liftStops[liftStops.length -1] != currentFloor){ // if someone got out of lift on this floor then we musnt 
                                                          // add this floor to liftStops, because this floor is already in the table
            liftStops.push(currentFloor) //lift must stop at this floor, even if nobody will get in
          }
          if(liftTable.length >= capacity){
            return true
          }
          liftTable.push(val)
          
          return false
        }
        
        return true
      })
    }
    
    liftTable = liftTable.sort((a,b) => a-b);
    
    if(currentFloor == 0){
      direction = "up"
    }else if(currentFloor == (queues.length - 1) ){
      direction = "down"
    }else if(direction == "up" && liftTable[liftTable.length-1] > currentFloor){// if we have somone in the lift that wants to go up, lift go up
      direction = "up"
    }else if(direction == "down" && liftTable[0] < currentFloor){// if we have somone in the lift that wants to go down, lift go down
      direction = "down"
    }else if(direction == "up" && !isSomeoneWaitingAboveFloor(currentFloor,queues)){// if we go up but there is no one waiting for lift upthere => change direction
      direction = "down"
    }else if(direction == "down" && !isSomeoneWaitingBelowFloor(currentFloor,queues)){// if we go down but there is no one waiting for lift upthere => change direction
      direction = "up"
    }
    
    if(direction == "up"){
      currentFloor += 1;
    }else {
      currentFloor -= 1;
    }
  }
  if(liftStops[0] != 0){liftStops = [0].concat(liftStops)}
  if(liftStops[liftStops.length-1] != 0){liftStops = liftStops.concat([0])}
  return liftStops
}
var getnumberOfWaitingPeople = (queues) => {
  return queues.reduce((total,val) => val.length + total,0);
}

var isSomeoneWaitingAboveFloor = (indexOfFloor,queues) => {
  for(let i=indexOfFloor+1;i<queues.length;i++){
    if(queues[i] != []){return true}
  }
  return false;
}

var isSomeoneWaitingBelowFloor = (indexOfFloor,queues) => {
  for(let i=0;i<indexOfFloor;i++){
    if(queues[i] != []){return true}
  }
  return false;
}
