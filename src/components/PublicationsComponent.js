import React from 'react';
import './ProjectsComponent.css';
import all_publications from "./Publications.json";

function Linked({ name, item }) {
    if (item == null || item === "" || item === " "){
        return null;
    }
    return <a className="external" href={item} title={name} target="_blank" rel="noopener noreferrer"> [{name}] </a>
}

function Card(props) {
    console.log(props.publication)
    return(
            <div
                className="PublicationCard"
                // onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
            >
                <div className="ProjectText">
                    {props.publication.text}
                    <Linked name="Paper" item={props.publication.paper}/>
                    <Linked name="Code" item={props.publication.code}/>
                    <Linked name="Blog" item={props.publication.blog}/>
                </div>
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

        for(let p in all_publications){
            publications.push(<Card key={p} publication={all_publications[p]}/>);
        }

        return [...publications];
    }

    render(){
        console.log("hihihi")
        const publications = this.makePublications();
        return(
            <div className="Publications">
                <h2 style={{'font-size': '300%'}}>
                    Publications
                </h2>
                <div className="PublicationContainer">
                    {publications}
                </div>
            </div>
        );
    };
}
