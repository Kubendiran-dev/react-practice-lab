import React, { useState, useCallback } from "react";
import Item from "./Item";

const List = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Mango" },
    { id: 3, name: "Orange" }
  ]);

  console.log("parent render");

  
  const deleteItem = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  return (
    <div>
      <h1>Item List</h1>

      {items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          onDelete={deleteItem}
        />
      ))}
    </div>
  );
};

export default List;
