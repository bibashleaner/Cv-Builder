import React from "react";
import { toPng } from "html-to-image";

export const DownloadButton = ({downloadRef}) => {

    const handleDownloadButton = () => {
          if(!downloadRef.current) return;

          toPng(downloadRef.current)
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = "CV.png";
                link.click();
            })
            .catch((error) => {
                console.error("Could not generate the image", error);
            });
    };

    return(
     <button
          onClick={handleDownloadButton}
          style={{
               marginTop: "1rem",
               padding: "10px 20px",
               fontSize: "14px",
               cursor: "pointer",
               backgroundColor: "#007BFF",
               color: "#fff",
               border: "none",
               borderRadius: "5px",
           }}
     >
          Download
     </button>
    );
}