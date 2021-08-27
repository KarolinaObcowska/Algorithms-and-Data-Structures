class Graph {
    constructor(value) {
        this.adjList = {};

    }

    addNode(node) {
        this.adjList [node.value] = {
            node: node,
            edges: []
        }
    }

    addEdge(nodeA, nodeB) {
        this.adjList[nodeA.value].edges.push(nodeB);
        this.adjList[nodeB.value].edges.push(nodeA);
    }

    removeNode(node) {
        delete this.adjList[node.value];
        const nodes = Object.keys(this.adjList);
        nodes.forEach(currentNode => {
            const edges = this.adjList[currentNode].edges;
            const index = edges.indexOf(node);
            if (index > -1) {
                edges.splice(index, 1)
            }
        })
    }
}

const adjList = new Graph();

const node1 = {value: 1}
const node2 = {value: 2}
adjList.addNode(node1);
adjList.addNode(node2);

adjList.addEdge(node1, node2);
adjList.removeNode(node1);
/*
    {
        1: {
            node,
            edges: [2]
        }
        2: {
            node,
            edges: [1]
        }
    }
*/

console.log(adjList)