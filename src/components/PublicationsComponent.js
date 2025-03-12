import React from 'react';
import './ProjectsComponent.css';
import all_publications from "./Publications.json";

function Linked({ name, item }) {
    if (item == null || item === "" || item === " "){
        return null;
    }
    return <a className="external" href={item} title={name} target="_blank" rel="noopener noreferrer"> [{name}] </a>
}

function BoldedText({ text, shouldBeBold }) {
    const textArray = text.split(shouldBeBold);
    return (
      <span>
        {textArray.map((item, index) => (
          <>
            {item}
            {index !== textArray.length - 1 && (
              <b>{shouldBeBold}</b>
            )}
          </>
        ))}
      </span>
  );
  }

function Card(props) {
    console.log(props.publication)
    return(
            <div
                className="PublicationCard"
            >
                <div className="ProjectText">
                    <b>{props.publication.title}</b>
                    <br />
                    <BoldedText text={props.publication.authors} shouldBeBold="Howard Yen"/>.
                    <br />
                    <i>
                        {props.publication.venue} 
                    </i>, {props.publication.year}.
                    {/* if there is a highlight field, add it with orange highlights */}
                    {props.publication.highlight && <span style={{color: '#E77500'}}>&nbsp;{props.publication.highlight}.</span>}
                    <br />
                    {props.publication.links.map((link) => (
                        <Linked name={link.name} item={link.url}/>
                    ))}
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
        const publications = this.makePublications();
        return(
            <div className="Publications">
                <h2 style={{'font-size': '300%'}}>
                    Publications
                </h2>
                <h4 style={{'font-size': '100%'}}>
                    * denotes equal contribution.
                </h4>
                <div className="PublicationContainer">
                    {publications}
                </div>
            </div>
        );
    };
}
