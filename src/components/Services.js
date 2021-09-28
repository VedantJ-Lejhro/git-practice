import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const CARDS = [
    {
        title: "C++",
        url: "https://sdtimes.com/wp-content/uploads/2018/03/cpppp.png"
    },
    {
        title: "Java",
        url: "https://cdn.vox-cdn.com/thumbor/_AobZZDt_RVStktVR7mUZpBkovc=/0x0:640x427/1200x800/filters:focal(0x0:640x427)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg"
    },
    {
        title: "Python",
        url: "https://pluralsight.imgix.net/paths/python-7be70baaac.png"
    },
    {
        title: "Javascipt",
        url: "https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png"
    },
    {
        title: "PHP",
        url: "https://hackr.io/tutorials/learn-php/logo/logo-php?ver=1579862212"
    },
]
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Services = (props) => {
    const courses = CARDS.map(c =>
        <div style={{margin:"3em 0em 0em 0em"}}>
            <div className="card" style={{width: "18rem",background:"rgb(124 255 212 / 56%)"}}>
                <img className="card-img-top"  src={c.url} alt="Card image cap" width="100px" height="200px"  style={{background:"white"}}/>
                <div className="card-body">
                    <h5 className="card-title">{c.title}</h5>
                    <a href="#" className="btn btn-primary">Enroll</a>
                </div>
            </div>
        </div>
    )
    return (
        <div style={{margin:"3em 0em 3em 3em"}} id={props.ID}>
        <h1 id={props.ID}>Our Courses</h1>
            <Carousel responsive={responsive} >
                {courses}
            </Carousel>
        </div>
    )
}
export default Services
    // <div classNameName="courses">
    // </div>