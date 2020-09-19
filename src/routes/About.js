import React from 'react'
import './About.css'

function About(props){
    console.log(props);
    return (
        <div className="about_main">
            <h2>React Movie App</h2>
            <br/>
            <a href="https://github.com/keepbang/react-project-map">
            <img width="100px" src="https://cdn.icon-icons.com/icons2/535/PNG/512/Github-Icon_icon-icons.com_52888.png"/>
            </a>
            <br/>
        </div>
    )

}

export default About;
