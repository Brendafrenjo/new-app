import React, { useState, useEffect } from "react";

export default function Practice() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div>
      <button
        onClick={() => setResourceType("posts")}
        className="btn btn-outline-dark me-2"
      >
        Posts
      </button>
      <button
        onClick={() => setResourceType("users")}
        className="btn btn-outline-dark me-2"
      >
        Users
      </button>
      <button
        onClick={() => setResourceType("comments")}
        className="btn btn-outline-dark me-2"
      >
        Comments
      </button>
      <br />
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}
