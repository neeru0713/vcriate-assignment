import React from "react";

export default function ProductList({ products, addNode }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white border rounded-lg shadow hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden"
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-gray-600">${p.price}</p>
              </div>
              <button
                className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-1 rounded text-sm"
                onClick={() => addNode(p)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
