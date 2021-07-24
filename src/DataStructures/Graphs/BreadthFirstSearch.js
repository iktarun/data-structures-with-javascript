function BFS(vtx, A, n) {
  let Q = [];
  let visited = new Map();

  // Initial
  console.log(vtx); // Visit vertex
  visited.set(vtx, true);
  Q.push(vtx);

  // Explore
  while (Q.length > 0) {
    let u = Q.shift(); // Vertex u for exploring
    for (let v = 1; v <= n; v++) {
      // Adjacent vertices of vertex u
      if (A[u][v] == 1 && visited.has(v) === false) {
        // Adjacent vertex and not visited
        console.log(v); // Visit vertex
        visited.set(v, true);
        Q.push(v);
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

console.log("Vertex: 1 -> ");
BFS(1, A, 8);
