import React from "react";

const UndefinedRoute = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "2rem",
        }}
      >
        {" "}
        <span
          style={{
            fontWeight: "700",
          }}
        >
          404
        </span>{" "}
        | This page could not be found !
      </p>
    </div>
  );
};

export default UndefinedRoute;
