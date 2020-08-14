import React from 'react';
import BubbleRow from './SocialMediaBubbles'

import ReactPageScroller from "react-page-scroller";
import Nav from 'react-bootstrap/Nav';

import './App.css';

class Menu extends React.Component{
    render(){
        return(
            <Nav defaultActiveKey="0"
                onSelect={this.props.handlePageChange}
            className="menu flex-column">
                <Nav.Link eventKey="0">About</Nav.Link>
                <Nav.Link eventKey="1">Project</Nav.Link>
                <Nav.Link eventKey="2">Contacts</Nav.Link>
            </Nav>
        );
    };
}

class Left extends React.Component{
    render(){
        return(
            <div className="Split Left">
                <header className="Left-header">

                </header>
                <Menu
                    handlePageChange={this.props.handlePageChange}
                />
                <footer>
                    <BubbleRow />
                </footer>
            </div>

        );
    }
}

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
                    <Block name="projects" content="this is about my projects"/>
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
                "Project"
            ],
        };
    }

    handlePageChange = number => {
        this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    };

    render(){
        console.log('this.state.currentPage is ' + this.state.currentPage);
        return(
            <div className="Page">
                <Left
                    handlePageChange={this.handlePageChange}
                />

                <Right
                    pageOnChange={this.handlePageChange}
                    customPageNumber={this.state.currentPage}
                />
            </div>
        );
    }
}
