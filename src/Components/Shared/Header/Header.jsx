import moment from "moment/moment"
import logo from "../../../assets/logo.png"
export default function Header() {
    return (
        <div className="text-center">
            <div className="flex justify-center">
                <img src={logo} alt="Website Logo" />
            </div>
            <p>Journalism Without Fear or Favour</p>
            <h4>{moment().format('dddd, MMMM D, YYYY')}</h4>
        </div>
    )
}
