import { Breadcrumb, Layout, Menu, theme } from "antd";
import logoSymptoWiz from "../assets/logo.png";
import SearchBar from "./SearchBar";
import DefaultLayout from "./DefaultLayout";

// const { TitleContent, Content } = About;
const AboutDisease = ({ children }) => {
    return(
    <div className="layout flex">
        <div className="font-bold-Poppins bg-transparent text-white">
            Severe Headache
        </div>
        <div className="layout flex">
            <div className="border-radius display-flex">
                <div className="font-Poppins bg-purple-900 text-white">
                    Headaches are one of the most common medical complaints that affect people of all ages, races, and genders. 
                    Almost everyone has experienced a headache at some point in their lives, and while they are often a temporary nuisance, 
                    they can sometimes be a sign of a more serious underlying condition.    
                </div>
            </div>
        </div>
        <button className="rounded-full font-Poppins text-white">
            Doctors for this disease
        </button>
    </div>
    );
};
export default AboutDisease;
