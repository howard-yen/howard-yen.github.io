import React from 'react';
import './ProjectsComponent.css';
import {Spring, config} from 'react-spring/renderprops';
import {useSpring, animated} from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth /2) /100, 1.1];
// const trans = (x,y,s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const trans = (x,y,s) => `perspective(600px) scale(${s})`;

function Card(props) {
    const [p, set] = useSpring(() => (
        {xys: [0,0,1],
            config: {mass:1, tension:170, friction:26}})
    );

    return(
        <a
            href={props.project.url}
            title={props.project.title}
            traget="_blank"
            rel="noopener noreferrer"
            className="ProjectButton"
        >
            <animated.div
                className="Card"
                // onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                onMouseMove={() => set({xys: [0,0,1.1], z:1})}
                onMouseLeave={() => set({xys: [0,0,1], z:0})}
                style={{transform:p.xys.interpolate(trans)}}
            >
                <h2>{props.project.title}</h2>
                <p>{props.project.description}</p>
            </animated.div>
        </a>
    );
}

export default class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state={
            projects:[
                {
                    url: "https://howard-yen.github.io/mangadex-download/",
                    title: "mangadex-download",
                    description:"Utilized the requests, lxml, PIL, and smtplib Python libraries that uses browser cookies to search for specific titles, download a selection of the chapters as pdf files, and email them to the user."
                },
                {
                    url: "https://github.com/archen2019/pdfsummary",
                    title: "pdfsummary",
                    description:"Developed Python script for HackPrinceton 2019 that uses computer vision and machine learning algorithms to summarize a pdf file and find the key words in the content."
                },
                {
                    url: "https://github.com/archen2019/terminal-ai",
                    title: "terminal-ai",
                    description:"Algorithm that acts as a player in the game Terminal Live and employ offensive and defensive strategies against other players.\n Results: 2nd Place at Terminal Live 2020 Princeton vs. Penn"
                },
                {
                    url: "https://github.com/howard-yen/mergepdf",
                    title: "mergepdf",
                    description:"A simple Python script that merges all the pdf files in a given directory into one pdf file."
                },
            ],
        };
    }

    makeProjects = () =>{
        const projects = [];

        for(let p of this.state.projects){
            projects.push(<Card key={p.name} project={p}/>);
        }

        return [...projects];
    }

    render(){
        const projects = this.makeProjects();
        return(
            <div className="Projects">
                <h2 style={{'font-size': '300%'}}>
                    Projects
                </h2>
                <div className="CardContainer">
                    {projects}
                </div>
            </div>
        );
    };
}
