/*



	Spider-Man ("Spidey") needs to get across town for a date with 
	Mary Jane and his web-shooter is low on web fluid. He travels by 
	slinging his web rope to latch onto a building rooftop, allowing 
	him to swing to the opposite end of the latch point.

	Write a function that, when given a list of buildings, returns 
	a list of optimal rooftop latch points for minimal web expediture.

	Input
	Your function will receive an array whose elements are subarrays 
	in the form [h,w] where h and w represent the height and width, 
	respectively, of each building in sequence

	Output
	An array of latch points (integers) to get from 0 to the end of 
	the last building in the input list

	Technical Details
	An optimal latch point is one that yields the greatest horizontal 
	distance gain relative to length of web rope used. Specifically, 
	the highest horizontal distance yield per length unit of web rope used. Give 
	this value rounded down to the nearest integer as a distance from Spidey's origin point (0)
	At the start of each swing, Spidey selects a latch point based on 
	his current position.
	At the end of each swing, Spidey ends up on the opposite side of the 
	latch point equal to his distance from the latch point before swing.
	Spidey's initial altitude is 50, and will always be the same at the 
	start and end of each swing. His initial horizontal position is 0.
	To avoid collision with people/traffic below, Spidey must maintain 
	a minimum altitude of 20 at all times.
	Building height (h) range limits: 125 <= h < 250
	Building width (w) range limits: 50 <= w <= 100
	Inputs will always be valid.
	Test Example
	test example image
	Spidey's initial position is at 0, marked by the Spidey icon on the left. 
	His first latch point is marked by the green circle at 76 (horizontal position) on buildings[0].
	At the end of the swing, Spidey's position is at the point marked B with 
	a horizontal position of 152. The green arc represents Spidey's path during swing.
	The orange circle on the 3rd building and the orange arc going from point B 
	to point C represent the latch point (258) and arc path for the next swing.
	let buildings = [[162,76], [205,96], [244,86], [212,68], [174,57], [180,89], 
	[208,70], [214,82], [181,69], [203,67]];

	spideySwings(buildings); //[76,258,457,643,748]



*/

function spideySwings(arr){
  let spidey = new Spidey(arr);
  return spidey.swing();
}

class Spidey{
  
  constructor(buildingsData){
  
    let xPos = 0;
    this.buildings = buildingsData.map(v => {
      xPos += v[1];
      return {
        height : v[0], 
        width : v[1],
        xPos,
        xBegin : xPos - v[1]
      }
    });
    
    this.distanceToTravel = buildingsData.reduce((t,v) => t+v[1],0);
    this.position = 0;
    this.height = 50;
    this.minHeight = 20;
    
  }
  
  swing(){
    let res = [];
    while(!this.isDone()){
      let val = this.handleSwing(this.buildings);
      res.push(Math.floor(val) + this.position);
      this.position += Math.floor(val) * 2;
      this.removePassedBuildings();
    }
    return res;
  }
  
  handleSwing(nearBuildings){
    let best = {
      bestAttachmentPoint : this.position,
      ratio : 0,
      best : false
    };
    nearBuildings.forEach(building => {
      if(this.canSwing(building)){
        let bestSwing = this.getBestSwing(building);
        if(bestSwing.best){
          if(!best.best){
            best = bestSwing;
          } else if(bestSwing.ropeLength < best.ropeLength){
            best = bestSwing;
          }
        }else if(!best.best && bestSwing.ratio > best.ratio){
          best = bestSwing;
        }
      }
    });
    
    return best.bestAttachmentPoint;
  }
  
  canSwing(building){
    let verticalDistance = building.xPos - building.width - this.position;
    if(verticalDistance <= 0){return true}
    let horizontalDistance = building.height - this.height;
    let ropeLength = Math.sqrt(Math.pow(verticalDistance,2) + Math.pow(horizontalDistance,2) );
    return building.height - ropeLength >= this.minHeight;
  }
  
  getBestSwing(building){
    let maxVerticalDistance = building.xPos - this.position;
    let minVerticalDistance = building.xBegin - this.position;
    let horizontalDistance = building.height - this.height;
    let maxRopeLength = building.height - this.minHeight;
    let bestAttachmentPoint = Math.floor(Math.sqrt(Math.pow(maxRopeLength,2) - Math.pow(horizontalDistance,2)));
    let best = false;
    if(bestAttachmentPoint > maxVerticalDistance){
      bestAttachmentPoint = maxVerticalDistance;
    }
    
    if(bestAttachmentPoint*2 + this.position >= this.distanceToTravel){ // LAST SWING SPECIAL CASE
      let halfWay = Math.ceil((this.distanceToTravel - this.position)/2);
      bestAttachmentPoint = halfWay >= minVerticalDistance ? halfWay : minVerticalDistance;
      best = true;
    }
    
    maxRopeLength = Math.sqrt(Math.pow(bestAttachmentPoint,2) + Math.pow(horizontalDistance,2));
    
    
    return {
      ratio : bestAttachmentPoint/maxRopeLength,
      bestAttachmentPoint : bestAttachmentPoint,
      ropeLength : maxRopeLength,
      best : best
    }
  }
  
  removePassedBuildings(){
    while(this.buildings.length > 0 && this.buildings[0].xPos <= this.position){
      this.buildings.shift();
    }
  }
  
  
  isDone(){
    return this.position >= this.distanceToTravel;
  }

}
