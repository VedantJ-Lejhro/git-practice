import { Facebook,Instagram,YouTube } from '@material-ui/icons';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Contact = () => (
        <div className="card" style={{width: "100%",marginTop:"12em",alignItems:"center",textAlign:"center",border:"none"}}>
            <div className="card-body">
                <h5 className="card-title">Contact Us</h5>
                <h6 className="card-subtitle mb-2 text-muted">sjcanc@gmail.com</h6>
                <p className="card-text">Follow us on </p>
                <a href="#" className="card-link"><LinkedInIcon /></a>
                <a href="#" className="card-link"><Facebook /></a>
                <a href="#" className="card-link"><Instagram /></a>
                <a href="#" className="card-link"><YouTube /></a>
            </div>
        </div>

)
export default Contact;