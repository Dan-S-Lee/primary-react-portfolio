import React from "react";
import ProjectBanner from '../components/ProjectBanner';
import './CapitalOne.css';
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectHeadline from "../components/ProjectHeadline";
import ProjectBannerDetail from "../components/ProjectBannerDetail";
import ProjectContent from "../components/ProjectContent";

function Capstone() {
    const projectList = [
        { projectName: 'Chat Disentanglement and Harassment Detection',
            projectDesc: 'I designed and developed golf tournament leaderboards for new scoring types.',
            caseStudyHref: "PlanitCaseStudy",
            BannerImgRef: "images/discord.png",
            role: "Data Scientist, Software Engineer",
            tools: "Python \n Pyspark",
            timeline: "Sep, 2022 - Mar, 2023",
            overview: "As my capstone project for my master's in data science at the University of Chicago," +
                "I developed a methodology and analytical approach to disentangle text chat and identify instances of" +
                " harassment. By leveraging my expertise in machine learning and data analysis, I was able to create a" +
                " novel labelling strategy that made the modeling more scalable and chat platform agnostic. This " +
                "framework provides a cutting-edge solution to the challenge of identifying who is talking to whom " +
                "in long-form text conversations. ",
            achievements: [
                " Developed a methodology and analytical approach to identify instances of cyber harassment in " +
                "long-form text conversations.",
                "Created a novel labelling strategy that made modeling more scalable and chat platform agnostic.",
                "Developed models using neural networks, logistic regression, decision trees, and ensemble methods " +
                "to accurately disentangle chat data with a combined accuracy of .94.",
                "Collaborated with front-end and back-end developers to validate the feasibility of the new " +
                "leaderboard designs and ensure that they met the business requirements."
            ],
            impact: "My work has important implications for addressing the pervasive issue of cyber harassment. " +
                "By disentangling text conversations and accurately attributing instances of harassment, my " +
                "framework provides a valuable tool for identifying and addressing harmful behavior online. " +
                "This can help to create safer and more inclusive online communities for everyone. Additionally," +
                " my novel labelling strategy and modeling approach has the potential to be applied to other" +
                " text-based datasets, expanding the reach and impact of this work."
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

export default Capstone;
