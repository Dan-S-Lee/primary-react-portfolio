import React from "react";
import ProjectBanner from '../components/ProjectBanner';
import './CapitalOne.css';
import Container from "react-bootstrap/Container";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectHeadline from "../components/ProjectHeadline";
import ProjectBannerDetail from "../components/ProjectBannerDetail";
import ProjectContent from "../components/ProjectContent";

function SPGlobal() {
    const projectList = [
        { projectName: 'S&P Global',
            projectDesc: 'I supported the design and development of a new and modernized dashboard for the marketing ' +
                'team to make data-driven decisions.',
            caseStudyHref: "PlanitCaseStudy",
            BannerImgRef: "images/biggerusbank_banner.png",
            role: "Analyst, Associate",
            tools: "Excel \n Python",
            timeline: "Sep, 2017 - Feb, 2022",
            overview: "As a ratings analyst, I have worked on various projects related to life, health, property/casualty, " +
                "and structured finance " +
                "transactions. My responsibilities included developing and updating modules for projecting these " +
                "transactions, analyzing millions of loans to identify risky segments, and performing statistical " +
                "analysis to identify the impact of defaults, prepayments, and market assumptions. I have also " +
                "contributed to the enterprise's criteria for credit ratings of structured finance asset backed securities.",
            achievements: [
                "Developed and updated modules for modeling and projecting structured finance transactions, " +
                "contributing to improved accuracy in forecasting and decision-making.",
                "Analyzed millions of loans and identified risky account segments, leading to more accurate portfolio " +
                "projections.",
                "Developed, deployed, and maintained automation applications that save hundreds of hours a month in " +
                "manual input, leading to improved productivity and operational efficiency.",
                "Performed statistical analysis to identify impacts of defaults, prepayments, and market assumptions, " +
                "providing valuable insights for risk management and decision-making.",
                "Contributed to rewriting enterprise criteria for credit ratings of structured finance ABS, ensuring " +
                "accurate and consistent credit ratings across the enterprise."
            ],
            impact: "As a result of my efforts, the automation applications I developed and maintained have saved " +
                "hundreds of hours of manual input, allowing analysts to focus on higher-level tasks and increasing " +
                "productivity. By contributing to the enterprise's criteria for credit ratings of Structured Finance " +
                "ABS, I have helped ensure accurate and consistent credit ratings, providing valuable information to " +
                "investors and other stakeholders."
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

export default SPGlobal;
