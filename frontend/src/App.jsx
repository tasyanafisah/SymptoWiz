import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ConfigProvider, theme, Button, Card } from "antd";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import DoctorPages from "./pages/DoctorPages";

function App() {
    const { defaultAlgorithm, darkAlgorithm } = theme;

    return (
        <ConfigProvider
            theme={{
                algorithm: darkAlgorithm,
            }}
        >
            <Router>
                <Routes>
                    <Route path="/" caseSensitive={false} element={<Home />} />
                    <Route path="/about" caseSensitive={false} element={<AboutPage />} />
                    <Route path="/docpage" caseSensitive={false} element={<DoctorPages />} /> //ini buat pindah ke page doctornya
                </Routes>
            </Router>
        </ConfigProvider>
    );
}

export default App;
