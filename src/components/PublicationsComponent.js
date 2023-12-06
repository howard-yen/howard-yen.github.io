import React from 'react';
import './ProjectsComponent.css';
import publications from "./Publications.json";

function Linked({ name, item }) {
    if (item == null || item == "" || item == " "){
        return null;
    }
    return <a className="external" href={item} title={name} target="_blank" rel="noopener noreferrer"> [{name}] </a>
}

function Card(props) {
    return(
            <div
                className="Card"
                // onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                onClick={() => window.open(props.project.url, "_blank")}
            >
                <h2>{props.project.title}</h2>
                <div className="ProjectText">
                    {props.project.description.split('\n').map((item, i) => <p key={i} style={{"text-indent":"2em", "margine-top": 0}}>{item}</p>)}
                </div>
                <Linked name="Paper" item={props.project.paper}/>
                <Linked name="Code" item={props.project.code}/>
                <Linked name="Blog" item={props.project.blog}/>

            </div>
    );
}

export default class Publications extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }

    makePublications = () =>{
        const publications = [];

        for(let p in publications){
            publications.push(<Card key={publications[p]["title"]} project={publications[p]}/>);
        }

        return [...publications];
    }

    render(){
        const publications = this.makePublications();
        return(
            <div className="Publications">
                <h2 style={{'font-size': '300%'}}>
                    Publications
                </h2>
                <div className="CardContainer">
                    {publications}
                </div>
            </div>
        );
    };
}
