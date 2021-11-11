// 10/06 Tree Traversal
// https://gist.github.com/bhfelicia/b8666c58c5bf6dc6a79e5d501e90e79d

//BFS => level by level
//DFS Pre-Order => root,left (all its children), right(all its children)
//DFS Post-Order => children first
//given node of a tree and a callback
//iterate throguh the child nodes, calling the callback on each

//Setup
function node(value) {
  return {
    value,
    children: [],
  };
}
var a = node("a");
var b = node("b");
var c = node("c");
var d = node("d");
var e = node("e");
var f = node("f");
var g = node("g");
var h = node("h");
var i = node("i");
var j = node("j");
var k = node("k");
var l = node("l");
var m = node("m");

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

//Row by row
//time: O(n) //space: O(1)
function bfs(node, callback) {
  let queue = [];
  callback(node.value);
  if (node.children) {
    node.children.forEach((child) => {
      callback(child.value);
      queue.push(...child.children);
    });
  }
  while (queue.length) {
    let currNode = queue.shift(); //O(n)
    callback(currNode.value);
    queue.push(...currNode.children);
  }
}

//root,left (all its children), right(all its children)
//time: O(n) //space: O(n)
function dfsPre(node, callback) {
  callback(node.value);
  node.children.forEach((child) => {
    dfsPre(child, callback);
  });
}
//children first
//time: O(n) //space: O(n)
function dfsPost(node, callback) {
  node.children.forEach((child) => {
    dfsPost(child, callback);
  });
  callback(node.value);
}

function print(item) {
  console.log(item);
}

//bfs(a,print) //A B C D E F G H I J K L M
//dfsPre(a,print) //A B E K L C F G H M D I J
dfsPost(a, print); //K L E B F G M H C I J D A
