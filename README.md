# React Flow Editor with Product Nodes

This project is a simple **Flow Editor** built using **React**.
It fetches products from a dummy API, displays them in a list, and allows users to add products as nodes in a flow area. Users can create **connections (edges)** between nodes.

## Features

- **Fetch Products**: On app load, products are fetched from `https://dummyjson.com/products`.
- **Product List**: Displays a list of products with name and price.
- **Add Nodes**: Users can pick a product to add it as a draggable **node**.
- **Connect Nodes**: Drag from one node’s anchor to another to create an **edge (arrow)**.
- **Remove Nodes and Edges**: Users can delete nodes and connections easily.
- **Modular Components**: Cleanly separated into `ProductList`, `FlowEditor`, `Node`, and `Edge`.

## Components

- **ProductList**: Fetches and displays the list of products. Lets users add products as nodes.
- **FlowEditor**: Displays the canvas (blank area) where nodes are added and connections are made.
- **Node**: Represents an individual product node (showing name and price).
- **Edge**: Represents a connection (arrow) between two nodes.

## API Used

- [DummyJSON Products API](https://dummyjson.com/products)

Example API Response:
```json
{
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "price": 549
    }
  ]
}
```

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/neeru0713/vcriate-assignment
cd vcriate-assignment
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the App
```bash
npm start
```

App will run locally at [http://localhost:5173](http://localhost:5173).

## Project Structure

```
/src
  /components
    ProductList.jsx
    FlowEditor.jsx
    Node.jsx
    Edge.jsx
  App.jsx
  main.jsx
```

## How It Works

- On app load, products are fetched and displayed.
- Clicking a product adds it as a draggable node inside the FlowEditor.
- Users can connect nodes by dragging from one node to another.
- Users can remove nodes and edges dynamically.

## Future Improvements

- Better styling for nodes and edges.
- Zoom and pan functionality in the flow area.
- Saving/loading flow state from localStorage or a backend server.

