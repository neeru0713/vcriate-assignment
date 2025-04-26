import React, { useState, useRef } from "react";
import Node from "./Node";
import Edge from "./Edge";

export default function FlowEditor({
  nodes,
  edges,
  addEdge,
  removeEdge,
  removeNode,
  moveNode,
}) {
  const svgRef = useRef();
  const [tempLine, setTempLine] = useState(null);

  const startConnection = (fromId, startX, startY) => {
    setTempLine({ fromId, x1: startX, y1: startY, x2: startX, y2: startY });
  };

  const onMouseMove = (e) => {
    if (!tempLine) return;
    const rect = svgRef.current.getBoundingClientRect();
    setTempLine((t) => ({
      ...t,
      x2: e.clientX - rect.left,
      y2: e.clientY - rect.top,
    }));
  };

  const endConnection = (toId) => {
    if (tempLine.fromId !== toId) addEdge(tempLine.fromId, toId);
    setTempLine(null);
  };

  return (
    <svg
      ref={svgRef}
      className="w-full h-full"
      onMouseMove={onMouseMove}
      onMouseUp={() => setTempLine(null)}
    >
   
      {edges.map((edge) => (
        <Edge
          key={edge.id}
          edge={edge}
          nodes={nodes}
          onClick={() => removeEdge(edge.id)}
        />
      ))}

     
      {tempLine && (
        <line
          x1={tempLine.x1}
          y1={tempLine.y1}
          x2={tempLine.x2}
          y2={tempLine.y2}
          stroke="black"
          strokeDasharray="4"
        />
      )}

     
      {nodes.map((node) => (
        <Node
          key={node.id}
          node={node}
          startConnection={startConnection}
          endConnection={endConnection}
          removeNode={removeNode}
          moveNode={moveNode}
        />
      ))}
    </svg>
  );
}
