import React from "react"
import reactDOM from "react-dom"



export default function Main(){
    return(
        <div className = "card">
            <img src = "./profilepic.jpg" className = "proPic"/>
            <div className = 'info'>
                <h3 className = "name">Sheikh Muazzin Azeem</h3>
                <p className = "occu">Front-end Developer</p>
                <p className = "email">muazzin2009@gmail.com</p>
                <nav>
                <button className = "emailbtn">Email</button>
                <button className = "linked">LinkedIn</button>
                </nav>
                <div className = "text">
                    <h4>About</h4>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    <h4>Interest</h4>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
                <div className = "botlinks">
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-facebook" ></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-github"></i>
                </div>
            </div>        
        </div>
    )
}