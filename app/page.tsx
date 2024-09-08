import React from "react";
import MyComponent from "./MyComponent";
import { a } from "./utils";

export default () => {
  let req: SailsRequest = {
    query: {
      id: "1",
    },
    param(id: string) {
      return "";
    },
  };

  return (
    <div>
      <h1>Hello Next.js</h1>
      <p>{a}</p>
      <p>{req.query.id}</p>
      <MyComponent />
    </div>
  );
};
