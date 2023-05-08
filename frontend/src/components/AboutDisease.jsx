import { Breadcrumb, Layout, Menu, theme } from "antd";
import logoSymptoWiz from "../assets/logo.png";
import SearchBar from "./SearchBar";
import DefaultLayout from "./DefaultLayout";
import DoctorPages from "../pages/DoctorPages";
import { useNavigate } from "react-router-dom";

// const { TitleContent, Content } = About;
const AboutDisease = ({ children }) => {
    const navigate = useNavigate();
    return(
    <div className="layout flex flex-col justify-center items-center">
        <h1 className="font-extrabold Poppins bg-transparent text-white text-2xl mb-8">
            Severe Headache
        </h1>
        <div className="layout flex">
            <div className="border-radius display-flex">
                <div className="box-border rounded-2xl flex-wrap p-12 
                        m4 fontPoppins font-light bg-purple-300 bg-opacity-25 text-white text-justify">
                    <h1 className="flex-wrap mb-4
                        font-medium Poppins text-white text-left">
                    Headaches are one of the most common medical complaints that affect people of all ages, races, and genders. 
                    Almost everyone has experienced a headache at some point in their lives, and while they are often a temporary nuisance, 
                    they can sometimes be a sign of a more serious underlying condition. 
                    </h1> 
                    <h1 className="flex-wrap mb-4
                        m4 font-bold Poppins text-white text-left">
                            What is a Headache?
                    </h1>
                    <h2 className="flex-wrap mt-4
                        m4 font-extralight Poppins text-white text-justify">
                    A headache is a pain or discomfort in the head or neck area, and it can vary in intensity, duration, 
                    and location. While headaches can be caused by many different factors, they can generally be classified into 
                    two main types: primary and secondary.
                    Primary headaches are not caused by an underlying medical condition and are instead a condition in and of 
                    themselves. These types of headaches include tension headaches, migraines, and cluster headaches. 
                    Secondary headaches, on the other hand, are caused by an underlying medical condition, such as a head injury, brain tumor, or infection.
                    </h2>
                    <h1 className="flex-wrap mt-8
                        m4 font-bold Poppins text-white text-left">
                            What are the symptoms of a Headache?
                    </h1>
                    <h2 className="flex-wrap mt-4 
                        m4 font-extralight Poppins text-white text-justify">
                    The symptoms of a headache can vary depending on the type of headache and its severity. < br/>
                    Common symptoms of a headache include: < br/>
                    < br/>
                        Pain or discomfort in the head or neck area < br/>
                        Sensitivity to light or sound < br/>
                        Nausea or vomiting < br/>
                        Dizziness or lightheadedness < br/>
                        Difficulty concentrating or thinking clearly < br/>
                    </h2>
                    <p className="justify-center">
                    <button onClick={() => navigate("/docpage")} className="bg-purple-600 rounded-full shadow-2xl
                    hover:bg-purple-700 font-Poppins text-white mt-16 p-8 ">
                        Doctors for this disease
                    </button>
                    </p>  
                </div>
                
            </div>
        </div>
    </div>
    );
};
export default AboutDisease;
