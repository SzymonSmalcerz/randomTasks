/*


TL;DR
Given a number of vertices N and a list of weighted directed edges in a directed acyclic graph (each edge is written as [start, end, weight] where from < to), compute the weight of the shortest path from vertex 0 to vertex N - 1. If there is no such path, return -1.

Background
A weighted DAG is a directed acyclic graph where each edge has a weight associated with it:


	A ---1(weight)---> B
	A ---5(weight)---> C
	A ---5(weight)---> D
	B ---3(weight)---> D
	C ---1(weight)---> D



In this example, the shortest path from A to D is given by A -> B -> D, which has a total weight of 4.

Finding shortest distances in DAGs is made easier by the fact that the nodes can be linearized: they can be given an order A1, A2, ..., An such that edges only point forward (that is, there are no edges from Aj to Ai when j > i). In the example above, the two possible linear orderings are A, B, C, D and A, C, B, D.


Your Task
Given a number N (indicating a graph with vertices 0, 1, ..., N-1) and a list of weighted edges [start, end, weight] for a DAG, where start < end for each edge, find the weight (a.k.a. length) of the shortest path from node 0 to node N-1.

For example, if the input is

N = 4
edgeList = [
  [0, 1, 1], [0, 2, 5], [0, 3, 5], [1, 3, 3], [2, 3, 1]
]
then we have the graph depicted above (with 0 = A, 1 = B, etc.) and the answer is 4.

If there is no path from node 0 to node N-1, return -1.

Notes and Warnings
Precondition: N will always be greater than 1, and edge weights will always be positive integers. There may be multiple edges going between two nodes.

Warning: You will probably need to use a dynamic programming solution if you want your solution to run fast enough not to time out--that's the whole point of this kata!

However, a well-written general shortest-path algorithm such as Dijkstra's Algorithm may also be fast enough to past the soak tests. (The reason is that the dividing line between linear and linearithmic time is hard to define and depends on a variety of external factors, so the kata's tests err on the safe side.)


*/


function shortest(N, edgeList) {
  var nodes = [];
  for(let i=0;i<N;i++){
    nodes.push(new Node(i));
  }
  edgeList.forEach((val) => {nodes[val[0]].distanceToNodes[val[1].toString()] = val[2];});
  
  return getShortest(nodes);
}

class Node{
  constructor(index){
    this.index = index;
    this.distanceToNodes = {};
    this.routingTable = {};
  }
  
  getDistanceToNode(numOfNode){
    if(this.distanceToNodes[numOfNode.toString()]) { return this.distanceToNodes[numOfNode.toString()] };
    
    if(!this.routingTable[numOfNode.toString()]) { return null; }
    return this.routingTable[numOfNode.toString()].getDistanceToNode(numOfNode) + this.getDistanceToNode(this.routingTable[numOfNode.toString()].index);
  }
}


function getShortest(nodes){
  
  if(nodes.length <= 2){return;}
  
  getShortest(nodes.slice(1));
  getShortest(nodes.slice(-1));
  
  var last = nodes[nodes.length - 1];
  var first = nodes[0];
  for(let i=1;i<nodes.length-1;i++){
    let distanceToLast = nodes[i].getDistanceToNode(last.index);
    let distanceFrom1stToI = first.getDistanceToNode(nodes[i].index);
    if(distanceToLast && distanceFrom1stToI){
      let distanceFromFirst = first.getDistanceToNode(last.index);
      if((distanceFromFirst && distanceFromFirst > distanceToLast + distanceFrom1stToI) || !distanceFromFirst){
        first.distanceToNodes[last.index.toString()] = null;
        first.routingTable[last.index.toString()] = nodes[i];
      }
    }
  }
  
  
  return first.getDistanceToNode(last.index) || -1;
}


//much better version : (without stack overflow)

  function shortest(N, edgeList) {
  var nodes = [];
  for(let i=0;i<N;i++){
    nodes.push(new Node(i));
  }
  edgeList.forEach((val) => {
    if(nodes[val[0]].distanceToNodes[val[1].toString()] && nodes[val[0]].distanceToNodes[val[1].toString()] < val[2]){
      return;
    } 
    
    nodes[val[0]].distanceToNodes[val[1].toString()] = val[2];
    
  });
  
  return handler(nodes);
}

  
  class Node{
  constructor(index){
    this.index = index;
    this.distanceToNodes = {};
    this.routingTable = {};
  }
  
  getDistanceToNode(numOfNode){
    if(this.distanceToNodes[numOfNode.toString()]) { return this.distanceToNodes[numOfNode.toString()] };
    
    if(!this.routingTable[numOfNode.toString()]) { return null; }
    return this.routingTable[numOfNode.toString()].getDistanceToNode(numOfNode) + this.getDistanceToNode(this.routingTable[numOfNode.toString()].index);
  }
}

  
  function handler(nodes){
  
    var k = 3;
    
    while(k<=nodes.length){
      for(let i=0;i<=nodes.length-k;i++){
        getShortest(nodes.slice(i,i+k));
      }
      k+=1;
    
    }
    
    return nodes[0].getDistanceToNode(nodes.length-1) || -1;
  
  }
  
  function getShortest(nodes){
  
  if(nodes.length <= 2){return;}
  
  var last = nodes[nodes.length - 1];
  var first = nodes[0];
  for(let i=1;i<nodes.length-1;i++){
    let distanceToLast = nodes[i].getDistanceToNode(last.index);
    let distanceFrom1stToI = first.getDistanceToNode(nodes[i].index);
    if(distanceToLast && distanceFrom1stToI){
      let distanceFromFirst = first.getDistanceToNode(last.index);
      if((distanceFromFirst && distanceFromFirst > distanceToLast + distanceFrom1stToI) || !distanceFromFirst){
        first.distanceToNodes[last.index.toString()] = null;
        first.routingTable[last.index.toString()] = nodes[i];
      }
    }
  }
  
  
  return;
}
