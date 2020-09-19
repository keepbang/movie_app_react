import React from 'react'
import './About.css'
import githubPng from '../img/github_PNG85.png'

function About(props){
    console.log(props);
    return (
        <div className="about_main">
            <h2>React Movie App</h2>
            <br/>
            <a href="https://github.com/keepbang/react-project-map">
            <img width="100px" src={githubPng} alt="github address"/>
            </a>
            <br/>
        </div>
    )

}

export default About;
