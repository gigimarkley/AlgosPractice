

function node(value) {
  return {
    value,
    children: [],
  };
}
var a = node('a');
var b = node('b');
var c = node('c');
var d = node('d');
var e = node('e');
var f = node('f');
var g = node('g');
var h = node('h');
var i = node('i');
var j = node('j');
var k = node('k');
var l = node('l');
var m = node('m');

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

//BFS = Each "level" of the tree is printed in order
//DFS - pre-order = Children nodes are visited before sibling nodes
//DFS - post-order = A node is not traversed until all its children are reached
//function takes a node and a callback
function print(nodeVal) {
  console.log(nodeVal)
}

//Time: O(n) //Space: O(n)
function breadthFirst (node, callback){
  let queue = [node]
  while (queue.length) {
    const node = queue.shift() //O(n)
    callback(node.value) 
    queue.push(...node.children) //O(1)
  }
  
}

//Time: O(n) //Space: O(n)
function depthFirstPreorder (node, callback){
  callback(node.value)
  node.children.forEach((child) => {
    return depthFirstPreorder(child, callback)
  })
}

//Time: O(n) //Space: O(n)
function depthFirstPostorder (node, callback){
    node.children.forEach((child) => {
      depthFirstPostorder(child,callback)
    })
  callback(node.value)
}



console.log("BREADTH FIRST")
breadthFirst(a, print) //A B C D E F G H I J K L M
console.log("DEPTH FIRST PRE ORDER")
depthFirstPreorder(a, print) //A B E K L C F G H M D I J
console.log("DEPTH FIRST POST ORDER")
depthFirstPostorder(a, print) //	K L E B F G M H C I J D A
