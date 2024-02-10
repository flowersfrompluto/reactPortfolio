import img1 from "../img/4.jpg"
import img2 from "../img/5.jpg"
import img3 from "../img/6.jpg"

function Blog() {
    return (
        <div className="wide blogContainer">
            <div className="scrollTxt">
                <ul className="flex scroll">
                    <li>* PHP</li>
                    <li>* Python</li>
                    <li>* design</li>
                    <li>* world</li>
                    <li>* Development</li>
                    <li>* PHP</li>
                    <li>* Python</li>
                    <li>* design</li>
                    <li>* world</li>
                    <li>* Development</li>
                    <li>* PHP</li>
                    <li>* Python</li>
                    <li>* design</li>
                    <li>* world</li>
                    <li>* Development</li>
                </ul>
            </div>
            <div className="blog">
                <div className="blogTxt">
                    <h2>ALL BLOG</h2>
                    <h1>Rafting Unique Experiences
                        Inspiring Connections</h1>
                </div>
            </div>
            <div className="grid blogRow2">
                <div className="col1">
                    <div className="img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="flex texts">
                        <div>
                            <h3>
                                <span>
                                    <img src="" alt="" />
                                </span>
                                By admin</h3>
                        </div>
                        <div>
                            <h3>
                                <span>
                                    <img src="" alt="" />
                                </span>
                                Comments (05)</h3>
                        </div>
                    </div>
                    <h2>Where Passion and Purpose Collide</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and types etting in our company here thisn designers give me more design here […]</p>
                </div>

                <div className="col2">
                    <div className="img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="flex texts">
                        <div>
                            <h3>
                                <span>
                                    <img src="" alt="" />
                                </span>
                                By admin</h3>
                        </div>
                        <div>
                            <h3>
                                <span>
                                    <img src="" alt="" />
                                </span>
                                Comments (05)</h3>
                        </div>
                    </div>
                    <h2>Where Passion and Purpose Collide</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and types etting in our company here thisn designers give me more design here […]</p>
                </div>

                <div className="col3">
                    <div className="img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="flex texts">
                        <div>
                            <h3>
                                <span>
                                    <img src="" alt="" />
                                </span>
                                By admin</h3>
                        </div>
                        <div>
                            <h3>
                                <span>
                                    <img src="" alt="" />
                                </span>
                                Comments (05)</h3>
                        </div>
                    </div>
                    <h2>Where Passion and Purpose Collide</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and types etting in our company here thisn designers give me more design here […]</p>
                </div>
            </div>

        </div>
    )
}
export default Blog;