import React from "react";

const Item = ({ id, name, onDelete }) => {
  console.log("render:", name);

  return (
    <div style={{ margin: "10px", border: "1px solid gray", padding: "10px" }}>
      <h3>{name}</h3>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default React.memo(Item);
