import React from "react";

export const TextBox = ({nameData}) =>{
    return(
        <>
            <div>
                <textarea 
                    readOnly
                    value={`${nameData.firstName}\n${nameData.lastName}`}
                    rows={90}
                    cols={50}
                ></textarea>
            </div>
        </>
    );
}