import React, { useState } from "react";
import {About} from "./About.jsx"
import { Eduction } from "./Eduction.jsx";
import { Experience } from "./Experience.jsx";
import { Project } from "./Projects.jsx";
import { TextBox } from "./Textbox.jsx";


export const Button = () =>{
    const [activeComponent, setActiveComponent] = useState("about"); //holds the active components
    const [submitData, setSubmitData] = useState({});  //Holds the submitted data


    const components = {
        about: <About onSubmit={(data) => setSubmitData((prev) => ({...prev, ...data}))} />,
        education: <Eduction onSubmit={(data) => setSubmitData((prev) => ({...prev, ...data}))} />,
        experience: <Experience onSubmit={(data) => setSubmitData((prev) => ({...prev, ...data}))} />,
        project: <Project onSubmit={(data) => setSubmitData((prev) => ({...prev, ...data}))} />
    };

    const tabs = [
        {label:"About", name:"about"},
        {label:"Education", name:"education"},
        {label:"Experience", name:"experience"},
        {label:"Project", name:"project"}
    ];


    return(
        <>
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            {tabs.map(({label, name}) => (
                <button 
                    key={name}
                    onClick={() => setActiveComponent(name)}
                    style={{
                        padding: "0.5rem 1rem",
                        backgroundColor: activeComponent === name ? "#007bff" : "#ccc",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >{label}</button>
            ))}
        </div>
        <div>{components[activeComponent]}</div>
        <TextBox data={submitData} />
        </>
    );
};