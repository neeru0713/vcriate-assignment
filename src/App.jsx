import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import FlowEditor from "./components/FlowEditor";

function App() {
  const [products, setProducts] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

 const addNode = (product) => {
   const nodeCount = nodes.length;
   const offsetX = 50 + (nodeCount % 4) * 150; // X spacing
   const offsetY = 50 + Math.floor(nodeCount / 4) * 100; // Y spacing
   setNodes((n) => [...n, { id: Date.now(), product, x: offsetX, y: offsetY }]);
 };

  const moveNode = (id, x, y) => {
    setNodes((nodes) =>
      nodes.map((node) => (node.id === id ? { ...node, x, y } : node))
    );
  };


  const addEdge = (fromId, toId) => {
    setEdges((e) => [...e, { id: Date.now(), from: fromId, to: toId }]);
  };

  const removeEdge = (edgeId) => {
    setEdges((e) => e.filter((edge) => edge.id !== edgeId));
  };

  const removeNode = (nodeId) => {
    setNodes((n) => n.filter((node) => node.id !== nodeId));
    setEdges((e) =>
      e.filter((edge) => edge.from !== nodeId && edge.to !== nodeId)
    );
  };

  return (
    <div className="flex h-screen">
      <aside className="w-1/2 border-r overflow-auto">
        <ProductList products={products} addNode={addNode} />
      </aside>
      <main className="flex-1 relative bg-gray-50">
        <FlowEditor
          nodes={nodes}
          edges={edges}
          addEdge={addEdge}
          removeEdge={removeEdge}
          removeNode={removeNode}
          moveNode={moveNode}
        />
      </main>
    </div>
  );
}

export default App;
