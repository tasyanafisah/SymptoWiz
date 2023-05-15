import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Article from "./pages/Article";
import { ConfigProvider, theme, Button, Card } from "antd";

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
                    <Route path="/docpage" caseSensitive={false} element={<DoctorPages />} />
                    <Route path="/article" caseSensitive={false} element={<Article/>}/>
                </Routes>
            </Router>
        </ConfigProvider>
    );
}

export default App;
