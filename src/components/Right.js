import React from 'react';
import './Right.css';

import AboutComponent from './AboutComponent';
import ProjectsComponent from './ProjectsComponent';
import TimelineComponent from './TimelineComponent';

export default class Right extends React.Component{
    constructor(props){
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(){
        const container = document.querySelector('.Right');
        console.log("handle scrolling" + container.scrollTop + "|" + document.documentElement.clientHeight + "|" + Date().toLocaleString());

    }

    render(){
        return(
            <div
                className="Split Right" 
                // onScroll={() => this.handleScroll()}
            >
                <scroll-container className="Scroller">
                    <scroll-page id="About" className="Page">
                        <AboutComponent/>

                    </scroll-page>

                    <scroll-page id="Projects" className="Page">
                        <ProjectsComponent/>

                    </scroll-page>

                    <scroll-page id="Timeline" className="Page">
                        <TimelineComponent/>

                    </scroll-page>

                    <scroll-page id="Contacts" className="Page">
                        <div>
                            <h2>
                                Contacts
                            </h2>
                            <p>
                                You find find me here
                            </p>
                        </div>

                    </scroll-page>
                </scroll-container>
            </div>
        );
    };
}
