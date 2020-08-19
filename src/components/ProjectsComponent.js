import React from 'react';
import './ProjectsComponent.css';
import {Spring, config} from 'react-spring/renderprops';
import {useSpring, animated} from 'react-spring'

import {ReactComponent as Agenda} from '../images/agenda.svg';
import {ReactComponent as Idea} from '../images/idea.svg';
import {ReactComponent as Terminal} from '../images/terminal.svg';
import {ReactComponent as Book} from '../images/book.svg';

// const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth /2) /100, 1.1];
// const trans = (x,y,s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const trans = (x,y,s) => `perspective(600px) scale(${s})`;

function Card(props) {
    const [p, set] = useSpring(() => (
        {xys: [0,0,1],
            config: {mass:1, tension:170, friction:26}})
    );

    const iconfile = '../images/' + props.project.icon + '.svg';


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
                onMouseMove={() => set({xys: [0,0,1.1]})}
                onMouseLeave={() => set({xys: [0,0,1]})}
                style={{transform:p.xys.interpolate(trans), "border-bottom-color":props.project.color, }}
            >
                {props.project.icon}
                <h2>{props.project.title}</h2>
                <p style={{"text-indent": "2em"}}>{props.project.description}</p>
            </animated.div>
        </a>
    );
}

export default class Projects extends React.Component{
    constructor(props){
        super(props);
        const size = '5em'
        this.state={
            projects:[
                {
                    url: "https://howard-yen.github.io/mangadex-download/",
                    color: "#9bf6ff",
                    icon: <Idea className="Icon" style={{"stroke": "#9bf6ff"}} width={size} height={size}/>,
                    title: "mangadex-download",
                    description:"Utilized the requests, lxml, PIL, and smtplib Python libraries that uses browser cookies to search for specific titles, download a selection of the chapters as pdf files, and email them to the user."
                },
                {
                    url: "https://github.com/archen2019/pdfsummary",
                    color:"#ffd6a5",
                    icon: <Agenda className="Icon" style={{"fill": "#ffd6a5"}} width={size} height={size}/>,
                    title: "pdfsummary",
                    description:"Developed Python script for HackPrinceton 2019 that uses computer vision and machine learning algorithms to summarize a pdf file and find the key words in the content."
                },
                {
                    url: "https://github.com/archen2019/terminal-ai",
                    color: "#495057",
                    icon: <Terminal className="Icon" style={{"fill": "#495057"}} width={size} height={size}/>,
                    title: "terminal-ai",
                    description:"Algorithm that acts as a player in the game Terminal Live and employ offensive and defensive strategies against other players.\n Results: 2nd Place at Terminal Live 2020 Princeton vs. Penn"
                },
                {
                    url: "https://github.com/howard-yen/mergepdf",
                    color: "#caffbf",
                    icon: <Book className="Icon" style={{"fill": "#caffbf"}} width={size} height={size}/>,
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
