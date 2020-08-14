import React from 'react';
import BubbleRow from './SocialMediaBubbles'

import ReactPageScroller from "react-page-scroller";
import Nav from 'react-bootstrap/Nav';

import './App.css';

class Menu extends React.Component{
    getButtons = (pages, currentPage) => {
        const buttons = [];

        for(let i = 0; i < pages.length; i++){
            let o = {opacity: i===currentPage ? '100%' : '50%'};

            buttons.push(
                <Nav.Link className="MenuButton" key={i} eventKey={i}
                    style={o}>
                    {pages[i]}
                </Nav.Link>
            );
        }

        return [...buttons];
    }

    render(){
        const buttons = this.getButtons(this.props.pages, this.props.currentPage);

        return(
            <Nav defaultActiveKey={this.props.currentPage}
                onSelect={this.props.handlePageChange}
            className="menu flex-column">
                {buttons}
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
                    pages={this.props.pages}
                    currentPage={this.props.currentPage}
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
                "Projects",
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
