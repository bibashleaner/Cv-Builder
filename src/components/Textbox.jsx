import React from "react";

export const TextBox = ({ data }) => {
    // Format the data into a CV layout string
    const formatCVData = () => {
        let cvText = `Curriculum Vitae\n\n`;

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
        if (data.education && data.education.length > 0) {
            cvText += `Education:\n`;
            data.education.forEach((edu, index) => {
                cvText += `  ${index + 1}. Institution: ${edu.institution}\n`;
                cvText += `     Degree: ${edu.degree}\n`;
                cvText += `     Year: ${edu.year}\n\n`;
            });
        } else {
            cvText += `Education: No education data submitted.\n\n`;
        }

        // Experience Section
        if (data.experience && data.experience.length > 0) {
            cvText += `Experience:\n`;
            data.experience.forEach((exp, index) => {
                cvText += `  ${index + 1}. Company: ${exp.company}\n`;
                cvText += `     Position: ${exp.position}\n`;
                cvText += `     Duration: ${exp.duration}\n`;
                cvText += `     Description: ${exp.description}\n\n`;
            });
        } else {
            cvText += `Experience: No experience data submitted.\n\n`;
        }

        // Projects Section
        if (data.projects && data.projects.length > 0) {
            cvText += `Projects:\n`;
            data.projects.forEach((project, index) => {
                cvText += `  ${index + 1}. Title: ${project.title}\n`;
                cvText += `     Description: ${project.description}\n`;
                cvText += `     Technologies Used: ${project.technologies}\n\n`;
            });
        } else {
            cvText += `Projects: No project data submitted.\n\n`;
        }

        return cvText;
    };

    // Get the formatted CV data as a string
    const cvData = formatCVData();

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <textarea
                value={cvData}
                readOnly
                rows="20"
                cols="80"
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
            />
        </div>
    );
};
