import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import SearchBar from "../components/SearchBar";
import AboutDisease from "../components/AboutDisease";
import { FaHatWizard, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

export default function AboutPage() {
    return (
        <DefaultLayout>
            <div className="min-h-screen bg-purple-700 bg-hero bg-cover bg-bottom">
                <div className="w-11/12 max-w-5xl mx-auto">
                    <div className="hero min-h-[80vh] grid place-content-center">
                        <div className="relative">
                            <h1 className="text-[72px] font-semibold tracking-tighter drop-shadow-2xl">
                                SymptoWiz
                            </h1>
                            <span className="absolute top-1 right-0 text-3xl">
                                <FaHatWizard />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-purple-500 min-h-screen">
                <div className="w-11/12 max-w-5xl mx-auto">
                    <AboutDisease />   
                </div>
            </div>

        </DefaultLayout>
        
    )
}
