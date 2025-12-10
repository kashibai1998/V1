import * as React from "react";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>🚀 React Router v7 + Remix-style Routing</h1>
      <Outlet />
    </div>
  );
}
