import React, { useRef, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import SearchBar from "../components/SearchBar";
import { FaHatWizard, FaThumbsDown, FaThumbsUp } from "react-icons/fa";

export default function DoctorPages() {
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
            <div className="min-h-screen bg-purple-300 bg-hero bg-cover bg-bottom">
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
                        According to your results, we recommend you to go to a Neurologist Doctor:
                    </p>

                    <div className="w-full bg-gradient-to-br from-purple-50/20 to-purple-100 min-h-screen my-8 md:py-12 md:px-16 py-4 px-8 rounded-xl">
                        {/* {diseaseData.map((data) => ( */}
                            <div className="border-b-[1px] border-b-purple-50/20 py-12">
                                <h3 className="text-h3 font-semibold mb-4"> about  
                                    <span className="text-h2 font-bold ml-2 text-yellow-100">
                                        Neurologist      
                                    </span> 
                                </h3>
                                <h4 className="text-h4 font-light mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat sed odio tempor pellentesque nec at mi. In risus sapien, finibus quis eros a, 
                                    fringilla gravida urna. Interdum et malesuada fames ac ante ipsum primis ind faucibus.
                                    <span className="text-h4 font-bold ml-4 text-yellow-100">
                                        More     
                                    </span> 
                                </h4> 
                                {/* <h4 classname="text-h4 font-light mb-4 text-yellow-100">
                                    More
                                </h4>  */}
                            </div>
                        {/* ))}                  */}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
