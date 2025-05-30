import React from 'react';
import BubbleRow from './SocialMediaBubbles';
import faceshot from '../images/23ThesisPortraits_Square.png';

import Nav from 'react-bootstrap/Nav';
import './Left.css';

class Menu extends React.Component {
    getA = (pages, currentPage) => {
        const buttons = [];
        for (let i = 0; i < pages.length; i++) {
            buttons.push(
                <a 
                    className={`MenuButton ${i === currentPage ? 'active' : ''}`}
                    href={`#${pages[i]}`}
                    key={pages[i]}
                    onClick={(e) => {
                        // Don't prevent default here to allow URL update
                        // e.preventDefault();
                        console.log("Button clicked:", i);
                        this.props.handlePageChange(i);
                    }}
                >
                    {pages[i]}
                </a>
            );
        }
        return [...buttons];
    }

    render() {
        const buttons = this.getA(this.props.pages, this.props.currentPage);

        return (
            <Nav
                defaultActiveKey={this.props.currentPage}
                className="menu flex-column"
            >
                {buttons}
            </Nav>
        );
    };
}

export default class Left extends React.Component {
    render() {
        return (
            <div className="Split Left">
                <div className="left-content">
                    <header className="Left-header">
                        {/* <img src={faceshot} alt={'Howard Yen'} width='250px' height='250px'/> */}
                        <h1> Howard Yen</h1>
                        <h2>顏和光</h2>
                        {/* <div className="email">
                            hyen [at] cs [dot] princeton [dot] edu
                        </div> */}
                    </header>
                    <Menu
                        handlePageChange={this.props.handlePageChange}
                        pages={this.props.pages}
                        currentPage={this.props.currentPage}
                    />
                    <footer>
                        <BubbleRow />
                        <p className="update-text">
                            Last updated: May 2025
                        </p>
                    </footer>
                </div>
            </div>
        );
    }
}
