import React from 'react';
import Left from './components/Left';
import ProjectsComponent from './components/ProjectsComponent';

import ReactPageScroller from "react-page-scroller";

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
    render(){
        return(
            <div className="Split Right">
                <ReactPageScroller
                    className="Split Right"
                    pageOnChange={this.props.pageOnChange}
                    customPageNumber={this.props.customPageNumber}
                >
                    <Block name="about" content="this is about me" />
                    {/* <Block name="projects" content="this is about my projects"/> */}
                    <ProjectsComponent className="Component"/>
                    <Block name="timeline" content="timeline about experiences here"/>
                    <Block name="contacts" content="you can contact me here: "/>
                </ReactPageScroller>
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
    }

    handlePageChange = number => {
        this.setState({ currentPage: typeof number === 'string' ? parseInt(number) : number }); // set currentPage number, to reset it from the previous selected.
    };

    render(){
        return(
            <div className="Page">
                <Left
                    handlePageChange={this.handlePageChange}
                    pages={this.state.pages}
                    currentPage={this.state.currentPage}
                />

                <Right
                    pageOnChange={this.handlePageChange}
                    customPageNumber={this.state.currentPage}
                />
            </div>
        );
    }
}
