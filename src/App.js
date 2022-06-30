import React from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Sidebar from "./layouts/Sidebar";

function App() {
  return (
    <div className="container-fluid w-full h-[100vh]">
      <Header />
      <div className="flex h-[90%]">

        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
