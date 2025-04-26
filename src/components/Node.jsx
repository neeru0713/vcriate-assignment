import React, { useRef, useState } from "react";

export default function Node({
  node,
  startConnection,
  endConnection,
  removeNode,
  moveNode,
}) {
  const { id, product, x, y } = node;
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.stopPropagation();
    offset.current = {
      x: e.clientX - x,
      y: e.clientY - y,
    };
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const newX = e.clientX - offset.current.x;
    const newY = e.clientY - offset.current.y;
    moveNode(id, newX, newY);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <g
      transform={`translate(${x},${y})`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      className="cursor-move"
    >
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#999" />
      </filter>

      <rect
        width={140}
        height={70}
        rx={8}
        fill="#fefefe"
        stroke="#ccc"
        filter="url(#shadow)"
      />

  
      <text
        x={130}
        y={12}
        fontSize="14"
        className="cursor-pointer"
        fill="red"
        onClick={(e) => {
          e.stopPropagation();
          removeNode(id);
        }}
      >
        ×
      </text>

      
      <foreignObject x={8} y={10} width={124} height={24}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {product.title}
        </div>
      </foreignObject>

    
      <text x={8} y={50} fontSize="12" fill="#333">
        ${product.price}
      </text>

      
      <circle
        cx={140}
        cy={35}
        r={5}
        fill="black"
        onMouseDown={(e) => {
          e.stopPropagation();
          startConnection(id, x + 140, y + 35);
        }}
        onMouseUp={() => endConnection(id)}
      />
    </g>
  );
}
