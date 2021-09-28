// import Navbar from "./Navbar";
import { useEffect, useState } from 'react';
import ScrollspyNav from "react-scrollspy-nav";
import './Python.css'
const Python = () => {
    const [isVisible, setIsVisible] = useState("bar hide");
    const listenToScroll = () => {
        let heightToHideFrom = 200;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;

        if (winScroll > heightToHideFrom) {
            isVisible &&      // to limit setting state only the first time         
                setIsVisible("bar");
        } else {
            setIsVisible("bar hide");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])
    return (
        <div>
            <div>
                <ScrollspyNav
                    scrollTargetIds={["banner","overview", "section_3"]}
                    activeNavClass="is-active"
                >
                    <div className={isVisible}>
                        <ul>
                            <li><a href="#banner" >About</a></li>
                            <li><a href="#overview" >Overview </a></li>
                            <li><a href="#section_3" >Section 3</a></li>
                        </ul>
                        <button className="btn-enroll">Enroll</button>
                    </div>

                </ScrollspyNav>

                <div>
                    <div id="banner">
                        <div className="banner">
                            <div className="banner_content">
                                <h1>Python Certification Course</h1>
                                <p> Python Training Course will teach you the basics of Python, data operations, conditional statements, shell scripting, and Django. This Python certification course will give you hands-on development experience and prepare you for an exciting career as a professional Python programmer.</p>
                            </div>
                        </div>
                    </div>
                    <div id="overview" style={{ "height": "900px" }}>
                        <div className="overview">
                            
                        </div>
                    </div>
                    <div id="section_3" style={{ "height": "900px" }}><span>Section 3</span></div>
                </div>
            </div>
        </div>
    )
}
export default Python;