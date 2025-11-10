import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./pages/Home";
import Expenses from "./pages/TeamExpenses";
import Funds from "./pages/TeamFunds";
import Mgmt from "./pages/TeamMgmt";
import NotFound from "./pages/NotFound";
import Footer from "./components/Layout/Footer";
import '../src/App.css';
import { BudgetProvider } from "./context/BudgetContext";

const App: React.FC = () => {
  return (
    <>
    <BudgetProvider>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TeamExpenses" element={<Expenses />} />
        <Route path="/TeamFunds" element= {<Funds />} />
        <Route path="/TeamMgmt" element={<Mgmt />} />
        {/* 🧭 404 Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
    </BudgetProvider>
    </>
  );
};

export default App;