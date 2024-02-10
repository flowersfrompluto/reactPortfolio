import Image1 from "../img/5.png"
import Image2 from "../img/6.png"
import Image3 from "../img/7.png"
import Image4 from "../img/8.png"
import Image5 from "../img/9.png"

function Portfolio() {
    return (
        <div className="wide portfolio">
            <div className="portTxt">
                <h2>MY RECENT PORTFOLIO</h2>
                <h1>Elevate your brand to new heights with
                    our portfolio expertise</h1>
            </div>
            <div className="grid row1Portfolio">
                <div className="col1">
                    <img src={Image1} alt="" />
                </div>
                <div className="col2">
                    <img src={Image2} alt="" />
                </div>
            </div>
            <div className="flex row2Portfolio">
                <div className="col1">
                    <img src={Image3} alt="" />
                </div>
                <div className="col2">
                    <img src={Image4} alt="" />
                </div>
                <div className="col3">
                    <img src={Image5} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Portfolio;