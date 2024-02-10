import DownloadIcon from "../img/download.png"
import Play from "../img/play.png"

function Home() {
    return (
        <div className="wide home">
            <div className="left">
                <h1>HI, I'M ZYAN! CREATIVE <span>DESIGNER</span></h1>
                <p className="hometxt">I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                <div className="flex btns">
                    <div className="btn">
                        <button className="flex">Download Cv <span><img src={DownloadIcon} alt="" /></span></button>
                    </div>
                    <div className="flex vid">
                        <div className="playImg">
                            <img src={Play} alt="" />
                        </div>
                        <p>Watch The Video</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;