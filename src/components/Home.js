import React from "react";
import MainContent from "./MainContent"

import Dashboard from "./Dashboard"
function Home() {
  return (
    <div className="full-page">
        <Dashboard />
        <MainContent />
      
    </div>
  );
}

export default Home;
