import React, { useEffect } from "react";

const HelloReact = () => {
  useEffect(() => {
    console.log("React Component Rendered Successfully!");
  }, []);

  return <div>Hello, React!</div>;
};

export default HelloReact;
