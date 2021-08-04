import React, {useState,useEffect} from 'react'
import './Navbar.css';

function Navbar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else{
                handleShow(false);
            }
            return () => {
                window.removeEventListener("scroll");
            };
        });
    }, []);

    return (
        <div className={`navbar ${show && "navbar_black"}`}>
            <img
                className="navbar_logo"
                src= "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
                alt = "Netflix Logo"/>
            <img
                className="navbar_avatar"
                src= "https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
                alt = "Netflix Avatar"/>
        </div>
    )
}

export default Navbar