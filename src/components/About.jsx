import React, { useState } from "react";

export const About = () =>{
    const [nameData, setNameData] = useState({firstName:" ", lastName:" ", address:" ", contact:" ", mail:" ", summary:" "});

    const handleChange = (e)=> {
        const {name, value} = e.target;
        setNameData({...nameData, [name]:value});
    }

    // const handleSubmit = (e) =>{
    //     e.preventDefault();
    // }

    return (
        <>
        <h1>About yourself</h1>
        <h4>Fill out your primary infromation.</h4>
        <form style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{display:"flex", gap:"1rem"}}>
                {[
                    {label:"First Name", name:"firstName"},
                    {label:"Last Name", name:"lastName"}
                ].map(({label, name}) => (
                    <div key={name} style={{display:"flex", flexDirection:"column"}}>
                        <label htmlFor={name}>{label}</label>
                        <input
                            type="text"
                            name={name}
                            id={name}
                            value={nameData[name]}
                            onChange={handleChange}
                            style={{
                                padding: "0.5rem",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                              }}
                        ></input>
                    </div>
                ))}
            </div>
            <div style={{ display: "flex", flexDirection:"column", gap: "1rem" }}>
                {[
                    {label:"Address", name:"address"},
                    {label:"Contact", name:"contact"},
                    {label:"Email", name:"mail"},
                    {label:"Summary", name:"summary"}
                ].map(({label, name}) =>(
                    <div key={name} style={{ display: "flex", flexDirection: "column"}}>
                        <label htmlFor={name}>{label}</label>
                        <input
                            type="text"
                            name={name}
                            id={name}
                            value={nameData[name]}
                            onChange={handleChange}
                            style={{
                                marginRight:"70rem",
                                padding: name==="summary" ? "4rem" : "0.5rem",
                                borderRadius: "4px",
                                border: "1px solid #ccc",
                              }}
                        ></input>
                    </div>
                ))}
            </div>
        </form>
        </>
    );
}