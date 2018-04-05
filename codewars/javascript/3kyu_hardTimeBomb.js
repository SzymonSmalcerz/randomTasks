/*


	A bomb has been set to go off! You have to find the wire and cut it in 
	order to stop the timer. There is a global var that holds the numeric ID 
	to which wire to cut. Find that and then you can Bomb.CutTheWire(wireKey);

	//NOTE : TASK MAY SEEMS NOT SO HARD, the problem is that at the start we dont have only description above
	//and empty notepad so figuring out wtf is going on is the task itself :), that's why I left some comments to show 
	//how i attempted this task

*/

// var wireCode; // Find the wire.
// console.log(process.env.HOSTNAME);
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
// console.log(process.emitWarning)
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
// console.log(process.nextTick)
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
// console.log(process._tickCallback);
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
// console.log(process._tickDomainCallback);
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
// console.log(typeof process.nextTick)
// console.log("XDDD")
// console.log(Bomb.toString())

// console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP")
// console.log(global.bomb.toString())
for(let i=0;i<10;i++){
  if(global['boom'+i]){
//   console.log("AAAAAAAAAA");
//   console.log(global['boom'+i]);
  Bomb.CutTheWire(global['boom'+i]);
  }
}
