// 10/08 Solving Graphs
// https://gist.github.com/ellatenar/bf5cc6001c7e3f53540c7bbb481fa8cf

//determine if a path exists between two vertices
//given object
//return boolean

const doesPathExist = (graph, start, target, visited = {}) => {
  if (!graph[start]) {
    //no point in starting if the start isn't there
    return false;
  }
  visited[start] = true; //keeping track of where I've been

  return graph[start].some((vertex) => {
    //checking if one of the vertices is true
    if (vertex === target) {
      //found the target
      return true;
    }
    if (!visited[vertex]) {
      //make sure you don't check the same ones again
      return doesPathExist(graph, vertex, target, visited);
    } else {
      return false;
    }
  });
};

const graph = {
  a: ["b"],
  b: ["c", "d"],
  c: ["d"],
  d: [],
};
console.log(doesPathExist(graph, "a", "b")); // true
console.log(doesPathExist(graph, "b", "a")); // false
console.log(doesPathExist(graph, "a", "d")); // true
console.log(doesPathExist(graph, "a", "a")); // false

const graph2 = {
  a: ["a", "c"],
  c: ["r", "s"],
  r: ["a"],
  s: [],
};
console.log(doesPathExist(graph2, "a", "a")); // true
console.log(doesPathExist(graph2, "c", "c")); // true
console.log(doesPathExist(graph2, "r", "s")); // true
console.log(doesPathExist(graph2, "s", "a")); // false
