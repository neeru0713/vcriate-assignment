import React from 'react'

export default function Edge({ edge, nodes, onClick }) {
  const from = nodes.find((n) => n.id === edge.from);
  const to = nodes.find((n) => n.id === edge.to);
  if (!from || !to) return null;



  const circleRadius = 5;

  const x1 = from.x + 120 + circleRadius;
  const y1 = from.y + 25;

  const x2 = to.x;
  const y2 = to.y + 25;


  return (
    <g>
      <defs>
        <marker
          id="arrow"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 z" />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="black"
        markerEnd="url(#arrow)"
        onClick={onClick}
        className="cursor-pointer"
      />
    </g>
  );
}
