import React, {useRef} from "react";

export const DownloadButton = () => {
   
    const downloadRef = useRef(null);

    const handleDownload = () =>{
        const downloadCv = downloadRef.current.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = downloadCv;
        a.download = 'CV.png';
        a.click();
    }

    return (
        <button
            onClick={handleDownload}
            style={{
                marginTop: "10px",
                padding: "10px 20px",
                fontSize: "14px",
                cursor: "pointer",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
            }}
        >
            Download CV
        </button>
    );
}