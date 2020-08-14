import React from 'react';
import BubbleRow from './SocialMediaBubbles'

import ReactPageScroller from "react-page-scroller";
import Nav from 'react-bootstrap/Nav';

import './App.css';

class Menu extends React.Component{


    render(){
        return(
            <Nav defaultActiveKey="0"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            className="flex-column">
                <Nav.Link eventKey="0">About</Nav.Link>
                <Nav.Link eventKey="1">Project</Nav.Link>
            </Nav>
        );
    };
}

class Left extends React.Component{
    render(){
        return(
            <div className="Split Left">
                <header className="Left-header">
                    <p>
                        on the left.
                    </p>
                </header>
                <Menu/>
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
                <header>
                    <h1>
                        {this.props.name}
                    </h1>
                </header>
                <body>
                    <p>
                        {this.props.content}
                    </p>
                </body>
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
                    pageOnChange={this.props.handlePageChange}
                    customPageNumber={this.props.currentPage}
                >
                    <Block name="about" content="this is about me" />
                    <Block name="projects" content="this is about my projects"/>
                </ReactPageScroller>
            </div>
        );
    }
}

export default class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentPage: null,
        };
    }

    handlePageChange = pagenum =>{
        this.setState({currentPage: pagenum});
    };

    render(){
        return(
            <div className="Page">
                <Left />
                <Right
                    pageOnChange={this.handlePageChange}
                    customPageNumber={this.state.currentPage}
                />
            </div>
        );
    }
}
