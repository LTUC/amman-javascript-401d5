class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }
  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if (
      !this.adjacencyList.has(startVertex) ||
      !this.adjacencyList.has(endVertex)
    ) {
      throw new Error('Invalid Vertex!!!');
    }
    const list = this.adjacencyList.get(startVertex);
    list.push(new Edge(endVertex, weight));
  }

  printAll() {
    for (const [vertex, edge] of this.adjacencyList.entries()) {
      console.log(vertex);
      console.log(edge);
    }
  }
}

const graph = new Graph();

const one = new Vertex(1);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);
const three = new Vertex(3);
const two = new Vertex(2);

graph.addVertex(one);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(eight);
graph.addVertex(three);
graph.addVertex(two);

graph.addDirectedEdge(one, six);

graph.addDirectedEdge(one, seven);

graph.addDirectedEdge(one, eight);

graph.addDirectedEdge(one, three);

graph.addDirectedEdge(one, two);

graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(seven, eight);
graph.addDirectedEdge(eight, three);
graph.addDirectedEdge(three, two);
console.log(graph);
graph.printAll();
