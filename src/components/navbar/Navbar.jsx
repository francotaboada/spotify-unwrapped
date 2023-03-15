import "./navbar.scss";
// import { Person, Mail } from "@material-ui/icons";

export default function Navbar({ onClick }) {

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="logo">
                        Spotify Unwrapped
                    </div>
                    <div className="itemContainer">

                    </div>
                    <div className="itemContainer">

                    </div>
                </div>
                <div className="right">
                    <button className="button" onClick = {onClick}>Logout</button>
                </div>
            </div>
        </div>

    );
}