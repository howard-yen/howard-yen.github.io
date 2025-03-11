import React from 'react';
import './Right.css';

import AboutComponent from './AboutComponent';
import ProjectsComponent from './ProjectsComponent';
import TimelineComponent from './TimelineComponent';
import ContactsComponent from './ContactsComponent';
import PublicationComponent from './PublicationsComponent';

export default class Right extends React.Component{
    constructor(props){
        super(props);

        // this.handleScroll = this.handleScroll.bind(this);
        this.state ={
            "currentPage": "About"
        };
    }

    renderComponent() {
        console.log(this.props.currentPage);
        switch (this.props.currentPage) {
            case 'About':
                return <AboutComponent />;
            case 'Publications':
                return <PublicationComponent />;
            case 'Timeline':
                return <TimelineComponent />;
            case 'Projects':
                return <ProjectsComponent />;
            case 'Contact':
                return <ContactsComponent />;
            default:
                return <AboutComponent />;
        }
    }

    render() {
        return (
            <div className="Split Right">
                {this.renderComponent()}
            </div>
        );
    }

    // handleScroll(){
    //     const container = document.querySelector('.Right');
    //     console.log("handle scrolling" + container.scrollTop + "|" + document.documentElement.clientHeight + "|" + Date().toLocaleString());

    // }

    // render(){
    //     return(
    //         <div
    //             className="Split Right"
    //             // onScroll={() => this.handleScroll()}
    //         >
    //             <scroll-container className="Scroller">
    //                 <scroll-page id="About" className="Page">
    //                     <AboutComponent/>
    //                 </scroll-page>

    //                 <scroll-page id="Publications" className="Page">
    //                     <PublicationComponent/>
    //                 </scroll-page>


    //                 {/* <scroll-page id="Timeline" className="Page">
    //                     <TimelineComponent/>
    //                 </scroll-page>

    //                 <scroll-page id="Projects" className="Page">
    //                     <ProjectsComponent/>
    //                 </scroll-page>*/}

    //                 <scroll-page id="Contact" className="Page">
    //                     <ContactsComponent/>
    //                 </scroll-page> 
    //             </scroll-container>
    //         </div>
    //     );
    // };
}
