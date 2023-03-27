import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
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
                </Routes>
            </Router>
        </ConfigProvider>
    );
}

export default App;
