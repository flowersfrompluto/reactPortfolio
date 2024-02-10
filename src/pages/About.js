import AboutOne from "../img/about_1.png"
import AboutTwo from "../img/about_2.png"
import AboutImgTwo from "../img/about_img_2.jpg"
import Certificate from "../img/stamp2.png"

function About() {
    return (
        <div className="wide about">
            <div className="abtTxt">
                <h2>ABOUT ME</h2>
                <h1>Crafting stories through design and innovation</h1>
            </div>
            <div className="flex abtbody">
                <div className="aboutLeft">
                    <div>
                        <img src={AboutOne} alt="" />
                        <h3>My Ambition</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                    </div>
                    <div>
                        <img src={AboutTwo} alt="" />
                        <h3>My Purpose</h3>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                    </div>
                </div>
                <div className="aboutRight">
                    <div>
                        <img src={AboutImgTwo} alt="" />
                    </div>
                    <div className="stamp flex">
                        <div className="img">
                            <img src={Certificate} alt="" />
                        </div>
                        <div className="StampTxt">
                            <h1>15+</h1>
                            <h3>Years of Experience</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;