import React, { useState, useEffect } from "react";

export default function Practice() {
  const [resourceType, setResourceType] = useState("posts");

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <br />
          <h1>{resourceType}</h1>
    </div>
  );
}
