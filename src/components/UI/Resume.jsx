export default function Resume() {
    const resumeUrl = "https://drive.google.com/file/d/15VKMRnROcJ_5hDjfSPwZF8mwXm2HunJf/view?usp=sharing";

    return (
        <>
            <div className="resume-box">
                <h2>Download My Resume:</h2>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" download>
                    Sarah Wesley - Resume (11.15.23)
                </a>
                <div className="proficiency-box">
                    <h3>Frontend Proficiencies</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>Responsive-First Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>PWA</li>
                    </ul>
                </div>
                <div className="proficiency-box">
                    <h3>Backend Proficiencies</h3>
                    <ul>
                        <li>APIs</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MySQL & Sequelize</li>
                        <li>MongoDB & Mongoose</li>
                        <li>REST APIs</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </>
    )
}