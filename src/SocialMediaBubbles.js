import React from 'react';
import githubmark from './images/githubmark.png';
import linkedinlogo from './images/linkedinlogo.png';
import emailicon from './images/emailicon.png';

import './SocialMediaBubbles.css';

class LinkBubble extends React.Component{
    render(){
        return(
                <a className="Bubble"
                    href={this.props.bubble.url}
                    title={this.props.bubble.name}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={this.props.bubble.image}
                        alt={this.props.bubble.name}
                        width="25"
                        height="25"
                    />
                </a>
        );
    }
}

export default class BubbleRow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bubbles:[
                {url: "https://github.com/howard-yen/", image: githubmark, name: "github", key:"github",},
                {url: "https://www.linkedin.com/in/howard-yen/", image: linkedinlogo, name: "linkedin", key:"linkedin",},
                {url: "mailto:howardy2000@gmail.com", image: emailicon, name: "email", key:"email",}
            ],
        };
    }

    makeBubbles = () =>{
        const bubbles = [];

        for(let b of this.state.bubbles){
            bubbles.push(<LinkBubble bubble={b}/>);
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
