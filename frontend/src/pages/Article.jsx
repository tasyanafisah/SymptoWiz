import React, { useRef, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import SearchArticle from "../components/SearchArticle";
import { FaHatWizard } from "react-icons/fa";

export default function Article() {
    const diseaseData = [
        {
            disease_name: "Migraine Headache",
        },
        {
            disease_name: "Tension Headache",
        },
        {
            disease_name: "Hypnic Headache",
        },
        {
            disease_name: "Cluster Headache",
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
                                <SearchArticle
                                    name="disease"
                                    onChange={setSelectedOptions}
                                    value={selectedOptions}
                                />
                            </div>
                            <button
                                type="submit"
                                className="p-4 bg-purple-700 hover:bg-purple-900 rounded-lg w-fit"
                            >
                                Search
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
                        Here are some articles about the disease:
                    </p>
                    <div className="w-full bg-gradient-to-br from-purple-300/20 to-purple-900 min-h-screen my-8 md:py-12 md:px-16 py-4 px-8 rounded-xl">
                        {diseaseData.map((data) => (
                            <div className="border-b-[1px] border-b-purple-100/20 py-12">
                                <h3 className="text-h3 font-bold mb-4">
                                    {data.disease_name}
                                </h3>
                                <h4 className="text-h4 font-light mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat sed odio tempor pellentesque nec at mi. In risus sapien, finibus quis eros a, fringilla gravida urna. Interdum et malesuada fames ac ante ipsum primis ind faucibus.
                                </h4>
                                <button className="p-4 bg-purple-700 hover:bg-purple-900 rounded-lg w-fit"
                                >
                                    More
                                </button>                                             
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
