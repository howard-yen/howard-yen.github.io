import React from 'react';
import Left from './components/Left';
import ProjectsComponent from './components/ProjectsComponent';
import AboutComponent from './components/AboutComponent';
import TimelineComponent from './components/TimelineComponent';

import RightComponent from './components/Right';

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

import './App.css';

class Block extends React.Component{
    render(){
        return(
            <div className="Block">
                <h2>
                    {this.props.name}
                </h2>
                <p>
                    {this.props.content}
                </p>
            </div>
        );
    }
}

class Right extends React.Component{
    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll, true);
    // }
    //
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

    handleScroll = (e) => {
        var lastScrollY = window.scrollY;
        console.log("scrolling" + lastScrollY);
    };

    render(){
        return(
            <div className="Split Right" onScroll={() => this.handleScroll}>
                <Parallax
                    ref={this.props.scrollRef}
                    pages={6}
                >
                    <ParallaxLayer
                        offset={0}
                        speed={0}
                        onClick={() => this.props.handleScroll(1)}
                        className="Block"
                    >
                        <AboutComponent/>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={1}
                        speed={0}
                        onClick={() => this.props.handleScroll(2)}
                        className="Block"
                        factor={2}
                    >
                        <ProjectsComponent/>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={3}
                        speed={0}
                        onClick={() => this.props.handleScroll(3)}
                        className="Block"
                    >
                        <TimelineComponent/>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={5}
                        speed={0}
                        onClick={() => this.props.handleScroll(0)}
                        className="Block"
                    >
                        <Block name="contacts" content="you can contact me here: "/>
                    </ParallaxLayer>
                </Parallax>
            </div>
            );
        }
    }

export default class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentPage: 0,
            pages:[
                "About",
                "Projects",
                "Timeline",
                "Contacts"
            ],
        };

        this.scrollRef = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(page){
        this.scrollRef.current.scrollTo(page);
        this.setState({ currentPage: typeof page === 'string' ? parseInt(page) : page });
        console.log(this.scrollRef.current.offset);
    }

    render(){
        return(
            <div className="Page">
                <Left
                    handlePageChange={this.handleScroll}
                    pages={this.state.pages}
                    currentPage={this.state.currentPage}
                />

                {/* <Right
                    scrollRef={this.scrollRef}
                    handleScroll={this.handleScroll}
                /> */}

                <RightComponent/>
            </div>
        );
    }
}
