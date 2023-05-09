import React from "react";
import ProjectBanner from '../components/ProjectBanner';
import './CapitalOne.css';
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectHeadline from "../components/ProjectHeadline";
import ProjectBannerDetail from "../components/ProjectBannerDetail";
import ProjectContent from "../components/ProjectContent";

function CapitalOne() {
    const projectList = [
        { projectName: 'Capital One',
            projectDesc: '.',
            caseStudyHref: "PlanitCaseStudy",
            BannerImgRef: "images/bigusbank_banner.png",
            role: "Software Engineer",
            tools: "Python \n Java \n SQL",
            timeline: "Feb, 2022 - Present",
            overview: "I led the implementation of an ETL pipeline that transferred data from low-level SQL servers to" +
                " the enterprise datalake. This enabled the entire organization to access valuable data insights, " +
                "supporting informed decision-making. In addition to my technical responsibilities, I oversaw 5 junior " +
                "engineers and ensured data governance rules and guidelines were followed. " +
                "My efforts were highly praised by both technical and business stakeholders, contributing to " +
                "important business initiatives and developing my leadership and technical skills.",
            achievements: [
                "Collaborated closely with business stakeholders, software engineers, and PM/POs to ensure the success " +
                "of all projects.  ",
                "Developed applications using NLP and machine learning techniques to detect sensitive " +
                "data and mitigate security risks.",
                "Updated front-end applications to add new features for end-users to track cases and prioritize workflows.",
                "Designed and implemented a scalable ETL pipeline in AWS, transferring 50 million data points daily " +
                "to the enterprise data lake.",
                "Built and maintained data processing pipeline for card embossing and anti-money laundering analytics.",
                "Implemented sensitive data masking API calls and reduced execution time by 90% using multi-threading.",
                "Oversaw the work of 5 junior engineers and acted as a subject matter expert for production " +
                "applications, ensuring daily SLAs were met."
            ],
            technology: [
                "Python",
                "PySpark",
                "PostgresSQL",
                "SQL Server",
                "AWS"
            ],
            impact: "As a software engineer, I had a significant impact on the organization's ability to make " +
                "data-driven insights and decisions by leading the implementation of the data lake pipeline. By " +
                "designing and implementing this pipeline, I ensured that data was securely processed and stored in " +
                "the enterprise data lake, making it easily accessible for analysis. In addition, my strict adherence " +
                "to daily SLAs ensured that all data processing applications were delivered in a timely manner. " +
                "I'm proud to say that the architecture I created was robust and could extract and process hundreds of " +
                "datasets with millions of rows in less than 15 minutes. My contributions were instrumental in " +
                "driving the organization's data initiatives forward and allowed for valuable insights to be " +
                "extracted from the vast amounts of data being processed."

        },
    ];
    return (
        <Container fluid className="p-0">
            <NavBar />
            <ProjectHeadline params={projectList[0]} />
            <div className="Home">
                <ProjectBanner params={projectList[0]} />
                <ProjectBannerDetail params={projectList[0]}/>
            </div>
            <ProjectContent params={projectList[0]}/>
            <Footer />
        </Container>

    );
}

export default CapitalOne;
