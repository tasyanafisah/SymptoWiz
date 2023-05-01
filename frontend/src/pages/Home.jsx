import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import SearchBar from "../components/SearchBar";
import { FaHatWizard, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

export default function Home() {
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
                        <SearchBar />
                    </div>
                </div>
            </div>
            <div className="bg-purple-500 min-h-screen">
                <div className="w-11/12 max-w-5xl mx-auto">
                    <p className="text-h4 font-semibold text-center mt-16 drop-shadow-lg">
                        Here are our diagnoses based on what you feel
                    </p>
                    <div className="w-full bg-gradient-to-br from-purple-300/20 to-purple-900 min-h-screen my-8 py-12 px-16 rounded-xl">
                        <div className="border-b-[1px] border-b-purple-100/20 py-12">
                            <h3 className="text-h3 font-bold mb-4">
                                Severe Headache{" "}
                                <span className="text-b-lg text-yellow-100 ml-2">
                                    8.07%
                                </span>
                            </h3>
                            <div className="flex w-full">
                                <div className="flex flex-wrap w-5/12 gap-2">
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Stomachache
                                    </div>
                                    <div className="py-2 px-4 bg-purple-300 text-purple-900 rounded">
                                        Dizzy
                                    </div>
                                    <div className="py-2 px-4 bg-purple-300 text-purple-900 rounded">
                                        Vomiting
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Nausea
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Headache
                                    </div>
                                    <div className="py-2 px-4 bg-purple-300 text-purple-900 rounded">
                                        Dizzy
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Nausea
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Stomachache
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Headache
                                    </div>
                                </div>
                                <div className="flex  ml-12 w-7/12 gap-4 justify-center items-center">
                                    <button className="flex flex-col justify-center items-center gap-4 px-4 py-1 w-1/2 bg-purple-50 h-full text-purple-900 rounded drop-shadow-xl">
                                        <span className="text-h2">
                                            <FaThumbsUp />
                                        </span>
                                        <p>Yes, this might be it</p>
                                    </button>
                                    <button className="flex flex-col justify-center items-center gap-4 px-4 py-1 w-1/2 bg-purple-50 h-full text-purple-900 rounded drop-shadow-xl">
                                        <span className="text-h2">
                                            <FaThumbsDown />
                                        </span>
                                        <p>No, I'm not looking for this</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] border-b-purple-100/20 py-12">
                            <h3 className="text-h3 font-bold mb-4">
                                Severe Headache{" "}
                                <span className="text-b-lg text-yellow-100 ml-2">
                                    8.07%
                                </span>
                            </h3>
                            <div className="flex w-full">
                                <div className="flex flex-wrap w-5/12 gap-2">
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Stomachache
                                    </div>
                                    <div className="py-2 px-4 bg-purple-300 text-purple-900 rounded">
                                        Dizzy
                                    </div>
                                    <div className="py-2 px-4 bg-purple-300 text-purple-900 rounded">
                                        Vomiting
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Nausea
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Headache
                                    </div>
                                    <div className="py-2 px-4 bg-purple-300 text-purple-900 rounded">
                                        Dizzy
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Nausea
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Stomachache
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Headache
                                    </div>
                                </div>
                                <div className="flex  ml-12 w-7/12 gap-4 justify-center items-center">
                                    <button className="flex flex-col justify-center items-center gap-4 px-4 py-1 w-1/2 bg-purple-50 h-full text-purple-900 rounded drop-shadow-xl">
                                        <span className="text-h2">
                                            <FaThumbsUp />
                                        </span>
                                        <p>Yes, this might be it</p>
                                    </button>
                                    <button className="flex flex-col justify-center items-center gap-4 px-4 py-1 w-1/2 bg-purple-50 h-full text-purple-900 rounded drop-shadow-xl">
                                        <span className="text-h2">
                                            <FaThumbsDown />
                                        </span>
                                        <p>No, I'm not looking for this</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-[1px] border-b-purple-100/20 py-12">
                            <h3 className="text-h3 font-bold mb-4">
                                Severe Headache{" "}
                                <span className="text-b-lg text-yellow-100 ml-2">
                                    8.07%
                                </span>
                            </h3>
                            <div className="flex w-full">
                                <div className="flex flex-wrap w-5/12 gap-2">
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Stomachache
                                    </div>
                                    <div className="py-2 px-4 bg-purple-300 text-purple-900 rounded">
                                        Dizzy
                                    </div>
                                    <div className="py-2 px-4 bg-purple-300 text-purple-900 rounded">
                                        Vomiting
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Nausea
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Headache
                                    </div>
                                    <div className="py-2 px-4 bg-purple-300 text-purple-900 rounded">
                                        Dizzy
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Nausea
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Stomachache
                                    </div>
                                    <div className="py-2 px-4 bg-purple-50 text-purple-900 rounded">
                                        Headache
                                    </div>
                                </div>
                                <div className="flex  ml-12 w-7/12 gap-4 justify-center items-center">
                                    <button className="flex flex-col justify-center items-center gap-4 px-4 py-1 w-1/2 bg-purple-50 h-full text-purple-900 rounded drop-shadow-xl">
                                        <span className="text-h2">
                                            <FaThumbsUp />
                                        </span>
                                        <p>Yes, this might be it</p>
                                    </button>
                                    <button className="flex flex-col justify-center items-center gap-4 px-4 py-1 w-1/2 bg-purple-50 h-full text-purple-900 rounded drop-shadow-xl">
                                        <span className="text-h2">
                                            <FaThumbsDown />
                                        </span>
                                        <p>No, I'm not looking for this</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
