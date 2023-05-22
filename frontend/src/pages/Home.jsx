import React, { useRef, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import SearchBar from "../components/SearchBar";
import { FaHatWizard, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import axios from "axios";

export default function Home() {
    const diseaseData = [
        {
            disease_name: "Severe Headache",
            symptoms: [
                "Stomachache",
                "Dizzy",
                "Vomiting",
                "Nausea",
                "Stomachache",
                "Dizzy",
                "Vomiting",
                "Nausea",
                "Stomachache",
                "Dizzy",
                "Vomiting",
                "Nausea",
            ],
        },
        {
            disease_name: "Severe Headache",
            symptoms: [
                "Dizzy",
                "Vomiting",
                "Nausea",
                "Stomachache",
                "Dizzy",
                "Vomiting",
                "Nausea",
                "Stomachache",
                "Dizzy",
            ],
        },
        {
            disease_name: "Nausea",
            symptoms: [
                "Nausea",
                "Stomachache",
                "Dizzy",
                "Vomiting",
                "Nausea",
                "Stomachache",
                "Dizzy",
                "Vomiting",
                "Nausea",
            ],
        },
    ];

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isShowResult, setIsShowResult] = useState(false);
    const [result, setResult] = useState({});
    const resultRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedOptions.length > 0) {
            console.log(selectedOptions);

            axios
                .post("http://127.0.0.1:5000/api", {
                    symptoms: selectedOptions.map((l) => l.value),
                })
                .then((res) => {
                    console.log(res.data);
                    setResult(res.data);
                });

            setIsShowResult(true);

            setTimeout(() => {
                resultRef.current?.scrollIntoView();
            }, 300);
        }
    };

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
                        <form
                            method="post"
                            onSubmit={handleSubmit}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="w-96 text-white">
                                <SearchBar
                                    name="symptoms"
                                    onChange={setSelectedOptions}
                                    value={selectedOptions}
                                />
                            </div>
                            <button
                                type="submit"
                                className="p-4 bg-purple-700 hover:bg-purple-900 rounded-lg w-fit"
                            >
                                Diagnose
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div
                className={`bg-purple-500 border-t-2 border-purple-500 ${
                    isShowResult ? "" : "hidden"
                }`}
                id="result"
                ref={resultRef}
            >
                <div className="w-11/12 max-w-5xl mx-auto">
                    <p className="text-h4 font-semibold text-center mt-16 drop-shadow-lg">
                        Here are our diagnosis based on what you feel
                    </p>

                    <div className="w-full bg-gradient-to-br from-purple-300/20 to-purple-900 my-8 md:py-12 md:px-16 py-4 px-8 rounded-xl">
                        <div className=" py-12">
                            <h3 className="text-h3 font-bold mb-4">
                                {result.name}
                                {/* <span className="text-b-lg text-yellow-100 ml-2">
                                    8.07%
                                </span> */}
                            </h3>
                            <p className="mb-4 font-thin">
                                {result.description}
                            </p>
                            <p>Precautions:</p>
                            <ul className="ml-4">
                                {result.precautions?.map((precaution) => {
                                    return (
                                        <li
                                            key={precaution}
                                            className="list-disc"
                                        >
                                            {precaution}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
