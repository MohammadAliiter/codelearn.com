import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/sidebar";
import FooterPreview from './components/FooterPreview';
import FooterUpload from './components/FooterUpload';

const App = () => {
  const [selectedFooter, setSelectedFooter] = useState(null);

  const handleSelectFooter = (footer) => {
    setSelectedFooter(footer);
  };

  return (
    <Router>
      <div className="app flex">
        <Sidebar onSelectFooter={handleSelectFooter} />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<FooterUpload />} />
            <Route path="/preview" element={<FooterPreview footer={selectedFooter} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
