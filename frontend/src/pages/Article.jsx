import React, { useRef, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import SearchArticle from "../components/SearchArticle";
import SearchBar from "../components/SearchBar";
import { FaHatWizard } from "react-icons/fa";
import { diseaseOptions } from "../data/diseases";
import axios from "axios";
import { message } from "antd";
import { Tilt } from "react-tilt";

export default function Article() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isShowResult, setIsShowResult] = useState(false);
    const [result, setResult] = useState({});
    const resultRef = useRef(null);
    const [messageApi, contextHolder] = message.useMessage();

    const defaultOptions = {
        reverse: true, // reverse the tilt direction
        max: 35, // max tilt rotation (degrees)
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000, // Speed of the enter/exit transition
        transition: true, // Set a transition on enter/exit.
        axis: null, // What axis should be disabled. Can be X or Y.
        reset: false, // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedOptions.value);
        fetchData(selectedOptions.value);
    };

    const handleClick = (value) => {
        console.log(value);
        fetchData(value);
    };

    const fetchData = (diseaseName) => {
        messageApi.open({
            key: "article",
            type: "loading",
            content: "Loading..",
        });
        axios
            .post("https://hafizhaua.pythonanywhere.com/api/disease", {
                disease: diseaseName,
            })
            .then((res) => {
                messageApi.open({
                    key: "article",
                    type: "success",
                    content: "Data found!",
                });
                setResult(res.data.data);
                setIsShowResult(true);

                setTimeout(() => {
                    resultRef.current?.scrollIntoView();
                }, 300);
            })
            .catch((err) => {
                messageApi.open({
                    key: "article",
                    type: "error",
                    content: "Something is wrong, we're sorry!",
                });
                console.log(err);
            });
    };

    return (
        // <DefaultLayout>
        //     <div className="min-h-screen bg-purple-700 bg-hero bg-cover bg-bottom">
        //         <div className="w-11/12 max-w-5xl mx-auto">
        //             <div className="hero min-h-[80vh] grid place-content-center">
        //                 <div className="relative">
        //                     <h1 className="text-[72px] font-semibold tracking-tighter drop-shadow-2xl">
        //                         SymptoWiz
        //                     </h1>
        //                     <span className="absolute top-1 right-0 text-3xl">
        //                         <FaHatWizard />
        //                     </span>
        //                 </div>
        //                 <form
        //                     method="post"
        //                     onSubmit={handleSubmit}
        //                     className="flex flex-col items-center gap-4"
        //                 >
        //                     <div className="w-96 text-white">
        //                         <SearchArticle
        //                             name="disease"
        //                             onChange={setSelectedOptions}
        //                             value={selectedOptions}
        //                         />
        //                     </div>
        //                     <button
        //                         type="submit"
        //                         className="p-4 bg-purple-700 hover:bg-purple-900 rounded-lg w-fit"
        //                     >
        //                         Search
        //                     </button>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        //     <div
        //         className={`bg-purple-500 border-t-2 min-h-screen border-purple-500 ${
        //             isShowResult ? "" : "hidden"
        //         }`}
        //         id="result"
        //         ref={resultRef}
        //     >
        //         <div className="w-11/12 max-w-5xl mx-auto">
        //             <p className="text-h4 font-semibold text-center mt-16 drop-shadow-lg">
        //                 Here are some articles about the disease:
        //             </p>
        //             <div className="w-full bg-gradient-to-br from-purple-300/20 to-purple-900 min-h-screen my-8 md:py-12 md:px-16 py-4 px-8 rounded-xl">
        //                 {diseaseData.map((data) => (
        //                     <div className="border-b-[1px] border-b-purple-100/20 py-12">
        //                         <h3 className="text-h3 font-bold mb-4">
        //                             {data.disease_name}
        //                         </h3>
        //                         <h4 className="text-h4 font-light mb-4">
        //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a erat sed odio tempor pellentesque nec at mi. In risus sapien, finibus quis eros a, fringilla gravida urna. Interdum et malesuada fames ac ante ipsum primis ind faucibus.
        //                         </h4>
        //                         <button className="p-4 bg-purple-700 hover:bg-purple-900 rounded-lg w-fit">
        //                             More
        //                         </button>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </DefaultLayout>
        <DefaultLayout>
            {contextHolder}
            <div className="min-h-screen bg-purple-700 bg-hero bg-cover bg-bottom">
                <div className="w-11/12 max-w-5xl mx-auto">
                    <div className="hero min-h-[80vh] flex flex-col items-center justify-center">
                        <div
                            data-aos="fade-up"
                            className="px-4 py-2 rounded-2xl bg-purple-900 drop-shadow-lg mb-4"
                        >
                            <div className="relative">
                                <h1 className="text-sm font-semibold tracking-tighter drop-shadow-2xl">
                                    SymptoWiz
                                </h1>
                            </div>
                        </div>
                        <p
                            data-aos="fade"
                            data-aos-duration="750"
                            data-aos-delay="300"
                            className="text-xl text-center md:text-3xl mb-4 font-semibold drop-shadow-lg"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-t from-white/60 to-white">
                                Let's get to know some diseases!
                            </span>{" "}
                            <span>🤓</span>
                        </p>
                        <form
                            method="post"
                            onSubmit={handleSubmit}
                            className="flex flex-col items-center gap-4"
                        >
                            <div
                                className="w-96 text-white z-10"
                                data-aos="flip-left"
                                data-aos-delay="300"
                            >
                                <SearchBar
                                    placeholder="What disease do you want to learn?"
                                    options={diseaseOptions}
                                    name="diseases"
                                    onChange={setSelectedOptions}
                                    value={selectedOptions}
                                    isMulti={false}
                                />
                            </div>
                            <button
                                type="submit"
                                data-aos="flip-up"
                                data-aos-delay="500"
                                className=" p-4 bg-purple-700 hover:bg-purple-900 rounded-lg w-fit transition-colors"
                            >
                                Open
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p className="text-b-lg text-center md:text-xl font-semibold drop-shadow-lg">
                        <span className="text-transparent bg-clip-text bg-gradient-to-t from-white/60 to-white">
                            Or select from below list!
                        </span>{" "}
                    </p>
                    <div className="mx-auto w-11/12 flex flex-wrap gap-3 justify-center mt-8 mb-32">
                        {diseaseOptions?.map((d, idx) => {
                            return (
                                <button
                                    key={d.label}
                                    className="py-2 px-6 text-b-sm bg-purple-900/75 rounded-3xl drop-shadow-md hover:drop-shadow-xl text-neutral-100 font-thin transition hover:bg-purple-900"
                                    onClick={() => handleClick(d.value)}
                                >
                                    <span className="capitalize">
                                        {d.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div
                className={`from-purple-700 to-purple-900 bg-gradient-to-tr  border-t-2 border-purple-500 drop-shadow-2xl rounded-t-3xl -mt-16 ${
                    isShowResult ? "" : "hidden"
                }`}
                id="result"
                ref={resultRef}
            >
                {/* <img src={wave} alt="" className="w-full -mt-48" /> */}
                <div className="w-11/12 max-w-5xl mx-auto py-32">
                    <div className="">
                        <h1
                            data-aos="fade-down"
                            className="md:text-h1 text-h2 font-bold mb-16 text-center drop-shadow-2xl"
                        >
                            🔎{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-t from-white/60 to-white capitalize">
                                {result.name}
                            </span>{" "}
                            🔍
                        </h1>
                        <div className="grid grid-cols-5 my-16 gap-16">
                            {result.description && (
                                <div className="md:col-span-3 col-span-5">
                                    <h2
                                        className="text-b-xl font-bold mb-2"
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                    >
                                        🤔 What is it?
                                    </h2>
                                    <p
                                        className="text-b-lg font-thin text-neutral-100"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        {result.description}
                                    </p>
                                </div>
                            )}
                            {result.image && (
                                <div
                                    className="col-span-5 md:col-span-2 md:row-span-2"
                                    data-aos="flip-left"
                                >
                                    <Tilt
                                        options={defaultOptions}
                                        // style={{ height: 250, width: 250 }}
                                    >
                                        <img
                                            src={result.image}
                                            className="w-full h-full rounded-xl drop-shadow-xl"
                                            alt=""
                                        />
                                    </Tilt>
                                </div>
                            )}

                            {result.symptoms && (
                                <div className="col-span-5 md:col-span-3">
                                    <h2
                                        className="text-b-xl font-bold mb-2"
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                    >
                                        😷 What are the symptoms?
                                    </h2>
                                    <div className="flex flex-wrap gap-3">
                                        {result.symptoms?.map(
                                            (symptom, idx) => {
                                                return (
                                                    <span
                                                        data-aos="flip-right"
                                                        data-aos-delay={
                                                            300 + idx * 100
                                                        }
                                                        key={symptom}
                                                        className="py-2 px-6 text-b-sm bg-purple-900 rounded-3xl drop-shadow-xl text-neutral-100 font-thin"
                                                    >
                                                        {symptom}
                                                    </span>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            )}
                            {result.precautions && (
                                <div className="col-span-5">
                                    <h2
                                        className="text-b-xl font-bold mb-2"
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                    >
                                        😷 How to prevent it from getting worse?
                                    </h2>
                                    <div className="flex flex-wrap gap-3">
                                        {result.precautions?.map(
                                            (precaution, idx) => {
                                                return (
                                                    <span
                                                        data-aos="flip-left"
                                                        data-aos-delay={
                                                            300 + idx * 100
                                                        }
                                                        key={precaution}
                                                        className="py-2 px-6 text-b-sm bg-purple-900 rounded-3xl drop-shadow-xl text-neutral-100 font-thin"
                                                    >
                                                        {precaution}
                                                    </span>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            )}

                            {result.doctors && (
                                <div className="col-span-5">
                                    <div className="w-full">
                                        <h2
                                            className="text-b-xl font-bold mb-2"
                                            data-aos="fade"
                                            data-aos-duration="500"
                                        >
                                            👨‍⚕️ Where should I check it?
                                        </h2>
                                        <div className="flex md:flex-row flex-col gap-4">
                                            {result.doctors?.map(
                                                (doctor, idx) => {
                                                    return (
                                                        <div
                                                            data-aos="fade-up"
                                                            data-aos-delay={
                                                                300 + idx * 200
                                                            }
                                                            key={doctor.name}
                                                            className="px-8 py-12 bg-purple-900 rounded-3xl drop-shadow-2xl"
                                                        >
                                                            <h3 className="text-h4 text-neutral-50 italic mb-4 text-center font-bold">
                                                                {doctor.name}
                                                            </h3>
                                                            <p className="font-light text-b-md">
                                                                {
                                                                    doctor.description
                                                                }
                                                            </p>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
