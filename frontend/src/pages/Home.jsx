import React, { useRef, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import SearchBar from "../components/SearchBar";
import { FaHatWizard, FaThumbsDown, FaThumbsUp } from "react-icons/fa";

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
    const resultRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedOptions.length > 0) {
            console.log(selectedOptions);

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
                className={`bg-purple-500 border-t-2 min-h-screen border-purple-500 ${
                    isShowResult ? "" : "hidden"
                }`}
                id="result"
                ref={resultRef}
            >
                <div className="w-11/12 max-w-5xl mx-auto">
                    <p className="text-h4 font-semibold text-center mt-16 drop-shadow-lg">
                        Here are our diagnosis based on what you feel
                    </p>

                    <div className="w-full bg-gradient-to-br from-purple-300/20 to-purple-900 min-h-screen my-8 md:py-12 md:px-16 py-4 px-8 rounded-xl">
                        {diseaseData.map((data) => (
                            <div className="border-b-[1px] border-b-purple-100/20 py-12">
                                <h3 className="text-h3 font-bold mb-4">
                                    {data.disease_name}
                                    <span className="text-b-lg text-yellow-100 ml-2">
                                        8.07%
                                    </span>
                                </h3>
                                <div className="flex flex-col md:flex-row gap-4 items-center">
                                    <div className="flex flex-wrap w-full md:w-5/12 gap-2 h-fit">
                                        {data.symptoms.map((symptom, idx) => (
                                            <div
                                                className={`py-2 px-4 ${
                                                    idx % 2 === 0
                                                        ? "bg-purple-50"
                                                        : "bg-purple-300"
                                                } text-purple-900 rounded`}
                                            >
                                                {symptom}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex md:w-7/12 gap-4 justify-center items-center w-full">
                                        <button className="flex flex-col justify-center items-center gap-4 px-4 py-10 w-1/2 bg-purple-50 h-full group text-purple-900 rounded drop-shadow-xl">
                                            <span className="text-h2 group-hover:-translate-y-1 transition">
                                                <FaThumbsUp />
                                            </span>
                                            <p>Yes, this might be it</p>
                                        </button>
                                        <button className="flex flex-col group justify-center items-center gap-4 px-4 py-10 w-1/2 bg-purple-50 h-full text-purple-900 rounded drop-shadow-xl">
                                            <span className="text-h2 group-hover:translate-y-1 transition">
                                                <FaThumbsDown />
                                            </span>
                                            <p>No, I'm not looking for this</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
