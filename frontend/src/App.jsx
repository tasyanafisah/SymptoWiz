import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ConfigProvider, theme, Button, Card } from "antd";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import DoctorPages from "./pages/DoctorPages";
import AOS from "aos";
import Article from "./pages/Article";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
    const { defaultAlgorithm, darkAlgorithm } = theme;

    useEffect(() => {
        AOS.init({
            duration: 750,
            offset: 20,
            easing: "ease",
        });
    }, []);
    return (
        <ConfigProvider
            theme={{
                algorithm: darkAlgorithm,
            }}
        >
            <Router>
                <Routes>
                    <Route path="/" caseSensitive={false} element={<Home />} />
                    <Route
                        path="/about"
                        caseSensitive={false}
                        element={<AboutPage />}
                    />
                    <Route
                        path="/article"
                        caseSensitive={false}
                        element={<Article />}
                    />
                    <Route
                        path="/article/:slug"
                        caseSensitive={false}
                        element={<AboutPage />}
                    />
                    {/* <Route
                        path="/doctor"
                        caseSensitive={false}
                        element={<DoctorPages />}
                    /> */}
                </Routes>
            </Router>
        </ConfigProvider>
    );
}

export default App;
