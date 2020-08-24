import React from 'react';
import socialmedias from './SocialMedia.json';
import './SocialMediaBubbles.css';

const path = (name) => '/SocialMedia/' + name;
class LinkBubble extends React.Component{
    render(){
        return(
                <a className="Bubble"
                    href={this.props.url}
                    title={this.props.name}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={path(this.props.image)}
                        alt={this.props.name}
                        width="25"
                        height="25"
                    />
                </a>
        );
    }
}

export default class BubbleRow extends React.Component{
    makeBubbles = () =>{
        const bubbles = [];

        for(let b in socialmedias){
            let info = socialmedias[b];
            bubbles.push(<LinkBubble key={b} name={b} image={info["image"]} url={info["url"]}/>);
        }
        return [...bubbles];
    };

    render(){
        const bubbles = this.makeBubbles();

        return(
            <div className="BubbleRow">
                {bubbles}
            </div>
        );
    }
}
