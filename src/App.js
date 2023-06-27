import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./pages/layout/AppLayout";
import LoginPage from "./shared/login/LoginPage";
import ClientesPage from './pages/paginas/ClientesPage';
import VentasPage from './pages/paginas/VentasPage';
import LibrosPage from './pages/paginas/LibrosPage';
import EditorialesPage from './pages/paginas/EditorialesPage';
import GenerosPage from './pages/paginas/GenerosPage';
import "./App.css";



const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/clientes" element={<ClientesPage />}/> 
        <Route path="/libros" element={<LibrosPage />}/> 
        <Route path="/ventas" element={<VentasPage />}/> 
        <Route path="/editoriales" element={<EditorialesPage />}/> 
        <Route path="/generos" element={<GenerosPage />}/> 
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </Router>
  </div>
);

export default App;
