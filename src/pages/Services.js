import webIcon from "../img/webDesign.svg"
import logoIcon from "../img/logoDesign.svg"
import appsIcon from "../img/appsDev.svg"

function Services() {
    return (
        <div className="wide services">
            <div className="servicesTxt">
                <h2>MY SERVICE</h2>
                <h1>Bringing your vision to life with precision and passion</h1>
            </div>
            <div className="grid servicesRow">
                <div className="col1">
                <div className="absolute">
                        <div className="serviceBtn">
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="items">
                            <div className="serviceImg">
                                <img src={webIcon} alt="" />
                            </div>
                            <div className="serviceTexts">
                                <h3>WEBSITE DESIGN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col2">
                <div className="absolute">
                        <div className="contain">
                            <div className="serviceBtn">
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="items">
                            <div className="serviceImg">
                                <img src={logoIcon} alt="" />
                            </div>
                            <div className="serviceTexts">
                                <h3>LOGO DESIGN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col3">
                    <div className="absolute">
                        <div className="serviceBtn">
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="items">
                            <div className="serviceImg">
                                <img src={appsIcon} alt="" />
                            </div>
                            <div className="serviceTexts">
                                <h3>APPS DEVELOPMENT</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Services;