import React, {useRef} from "react";
import { DownloadButton } from "./download";

export const TextBox = ({ data }) => {
    const downloadRef = useRef(null);

    // Format the data into a CV layout string
    const formatCVData = () => {
        if (!data) return 'No data available.';
        let cvText = `\n`;

        // Personal Information Section
        if (data.firstName || data.lastName || data.address || data.contact || data.mail || data.summary) {
            cvText += `Personal Information:\n`;
            cvText += `- Name: ${data.firstName} ${data.lastName}\n`;
            cvText += `- Address: ${data.address}\n`;
            cvText += `- Contact: ${data.contact}\n`;
            cvText += `- Email: ${data.mail}\n`;
            cvText += `- Summary: ${data.summary}\n\n`;
        }

        // Education Section
        if (data.school || data.degree || data.city || data.joinDate || data.graduationDate) {
            cvText += `Education:\n`;
            cvText += `- Institution: ${data.institution}\n`;
            cvText += `- Degree: ${data.degree}\n`;
            cvText += `- City: ${data.city}\n`;
            cvText += `- Start Date: ${data.joinDate}\n`;
            cvText += `- End Date: ${data.graduationDate}\n\n`;
            
        } else {
            cvText += `Education: No education data submitted.\n\n`;
        }

        // Experience Section
        if (data.jobTitle || data.companyName || data.location || data.startDate || data.endDate) {
            cvText += `Experience:\n`;
            cvText += `- Position: ${data.jobTitle}\n`;
            cvText += `- Company: ${data.companyName}\n`;
            cvText += `- Location: ${data.location}\n`;
            cvText += `- Start Date: ${data.startDate}\n`;
            cvText += `- End Date: ${data.endDate}\n\n`;
        } else {
            cvText += `Experience: No experience data submitted.\n\n`;
        }

        // Projects Section
        if(data.projectTitle || data.description || data.projectLink){
            cvText += `Projects:\n`;
            cvText += `- Title: ${data.projectTitle}\n`;
            cvText += `- Project Link: ${data.projectLink}\n`;
            cvText += `- Description: ${data.description}\n\n`;
            
        } else {
            cvText += `Projects: No project data submitted.\n\n`;
        }

        return cvText;
    };

    // Get the formatted CV data as a string
    const cvData = formatCVData();

    return (
        <>
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <div
                ref={downloadRef}
                // value={cvData}
                // readOnly
                // rows="20"
                // cols="20"
                style={{
                    width: "100%",
                    fontFamily: "monospace",
                    fontSize: "14px",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    backgroundColor: "#f4f4f4",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                }}
            >
                {cvData}
            </div>
            <DownloadButton downloadRef={downloadRef} />
        </div>
        </>
    );
    
}

