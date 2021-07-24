let visited = new Map();
function DFS(u, A, n) {
  // Explore
  if (visited.has(u) === false) {
    console.log(u); // Visit vertex
    visited.set(u, true);
    for (let v = 1; v < n; v++) {
      // Adjacent vertices of vertex u
      if (A[u][v] == 1 && visited.has(v) === false) {
        // Adjacent vertex and not visited
        DFS(v, A, n);
      }
    }
  }
  console.log("endl Traversing");
}

let A = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
];
// Please note:: Iam not using column and row 0 to make the program simpler
console.log("Vertex: 1 -> ");
DFS(7, A, 8);
