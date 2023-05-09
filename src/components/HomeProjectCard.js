import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeProjectCard.css'

function HomeProjectCard({params}) {
    return (
        <div className="projectCard">
            <a href={params.caseStudyHref} className="projectLink">
                <img src={params.caseStudyImgRef} className="projectImage"
                     alt="Responsive Card"/>
                <h2 className="proj-title-main">{params.projectName}</h2>
                <p className="projDesc">{params.projectDesc}</p>
            </a>
        </div>
    );
}

export default HomeProjectCard;