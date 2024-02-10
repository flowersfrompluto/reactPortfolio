import DownloadIcon from "../img/download.png"
function Skill() {
    return (
        <div className="wide skillContainer">
            <div className="skill">
                <div className="skillTxt">
                    <h2>MY SKILLS</h2>
                    <h1>Crafting Stories through Design and
                        Imagination</h1>
                </div>
                <div className="skillBtn flex">
                    <div>
                        <button className="flex">Download Cv <span><img src={DownloadIcon} alt="" /></span></button>
                    </div>
                    <div>
                        <button>Education</button>
                    </div>
                    <div>
                        <button>Biography</button>
                    </div>
                    <div>
                        <button>Experience</button>
                    </div>
                </div>
                <div className="grid skillRow">
                    <div className="col1">
                        <h3>Creative Agency</h3>
                        <h2>Framer Designer & Developer</h2>
                        <h4>2019 - Present</h4>
                        <div className="pTag">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                        </div>
                        <p>Performance</p>
                        <div class="middle">
                            <div class="bar-container">
                                <div class="bar-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col2">
                        <h3>Apple Technology</h3>
                        <h2>Web Application Manager</h2>
                        <h4>2009 - 2012</h4>
                        <div className="pTag">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                        </div>
                        <p>Performance</p>
                        <div class="middle">
                            <div class="bar-container">
                                <div class="bar-2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col3">
                        <h3>Softech Agency</h3>
                        <h2>Wordpress and End Developer</h2>
                        <h4>2014 - 2018</h4>
                        <div className="pTag">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                        </div>
                        <p>Performance</p>
                        <div class="middle">
                            <div class="bar-container">
                                <div class="bar-3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col4">
                        <h3>Kent State University</h3>
                        <h2>Master Degree Of information Technology</h2>
                        <h4>2005 - 2009</h4>
                        <div className="pTag">
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                        </div>
                        <p>Performance</p>
                        <div class="middle">
                            <div class="bar-container">
                                <div class="bar-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skill;