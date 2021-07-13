const Project = (props) => {
    return (
        <div className="project TM">
            <div className="project-image-container">
                <img /*className="project TM"*/ src={props.thumbnail} />
            </div>
            <div className="project-details">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <h2>Tech stack:</h2>
                <div className="project-tech-stack">
                    {props.techStack}
                </div>
            </div>
        </div>
    );
}

export default Project;