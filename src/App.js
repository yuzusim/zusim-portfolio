import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "components/layout/Layout";

import ScrollToHash from "./components/ScrollToHash";

// pages
import Home from "pages/home/Home";
import About from "pages/about/About";
import Work from "pages/work/Work";
import ServiceClosed from "pages/statusPages/ServiceClosed";
import ProjectDetail from "pages/project/ProjectDetail";
import ProjectDemo from "pages/project/ProjectDemo";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route element={<Layout />}>
    //       <Route path="/" element={<Home />} />
    //     </Route>
    //   </Routes>
    // </Router>

    <Router>
      <ScrollToHash />
      <Routes>
        {/* 공통 레이아웃 */}
        <Route element={<Layout />}>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About / Work */}
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/service-closed" element={<ServiceClosed />} />

          {/* Project */}
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/project/:id/demo" element={<ProjectDemo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
