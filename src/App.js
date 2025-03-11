import React from 'react';
import Left from './components/Left';
import Right from './components/Right';
import './App.css';

import {ReactComponent as MenuToggle} from './images/MenuToggle.svg';

export default class Page extends React.Component{
    constructor(props){
        super(props);
        let desktop = window.innerHeight < window.innerWidth*1.5;

        // Define pages array
        const pages = [
            "About",
            "Publications",
            // "Timeline",
            // "Projects",
            "Contact",
        ];

        // Get initial page from URL hash if it exists
        let initialPage = 0; // Default to About
        const hash = window.location.hash.substring(1); // Remove the # character
        if (hash) {
            const pageIndex = pages.findIndex(page => page === hash);
            if (pageIndex !== -1) {
                initialPage = pageIndex;
            }
        }

        this.state={
            currentPage: initialPage,
            pages: pages,
            menuOpen: desktop,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        console.log(this.state.menuOpen);
    }

    componentDidMount(){
        // Set up event listener for URL hash changes
        window.addEventListener('hashchange', this.handleHashChange);

        if(!this.state.menuOpen){
            document.querySelector('.Left').style.width = "0";
            document.querySelector('.Right').style.width = "100vw";
            document.querySelector('.MenuToggle').style.left = "1vw";
        }

        // Set initial URL hash if not already set
        if (!window.location.hash) {
            window.location.hash = this.state.pages[this.state.currentPage];
        }
    }

    componentWillUnmount() {
        // Clean up event listener
        window.removeEventListener('hashchange', this.handleHashChange);
    }

    handleHashChange = () => {
        const hash = window.location.hash.substring(1);
        const pageIndex = this.state.pages.findIndex(page => page === hash);
        if (pageIndex !== -1 && pageIndex !== this.state.currentPage) {
            // Call handlePageChange to ensure menu closes on narrow screens
            this.handlePageChange(pageIndex);
        }
    }

    toggleMenu(){
        if(this.state.menuOpen){
            document.querySelector('.Left').style.width = "0";
            document.querySelector('.Right').style.width = "100vw";
            document.querySelector('.MenuToggle').style.left = "1vw";
        }else{
            if(window.innerWidth > 1000){
                document.querySelector('.Left').style.width = "30vw";
                document.querySelector('.Right').style.width = "70vw";
                document.querySelector('.MenuToggle').style.left = "31vw";
            }else{
                document.querySelector('.Left').style.width = "100vw";
                document.querySelector('.Right').style.width = "0vw";
                document.querySelector('.MenuToggle').style.left = "90vw";
            }
        }

        this.setState({
            menuOpen: !this.state.menuOpen,
        });
    }

    handlePageChange(page){
        this.setState({
            currentPage: page,
        });
        
        // Update URL hash when page changes
        window.location.hash = this.state.pages[page];
        
        // If on narrow screen and menu is open, close the menu to show the content
        if (window.innerWidth <= 1000 && this.state.menuOpen) {
            // Close the menu
            document.querySelector('.Left').style.width = "0";
            document.querySelector('.Right').style.width = "100vw";
            document.querySelector('.MenuToggle').style.left = "1vw";
            
            // Update state
            this.setState({
                menuOpen: false
            });
        }
        
        console.log(page);
    }

    render(){
        console.log(this.state.currentPage);
        return(
            <div className="Page">
                <Left
                    handlePageChange={this.handlePageChange}
                    pages={this.state.pages}
                    currentPage={this.state.currentPage}
                />
                <MenuToggle className="MenuToggle" onClick={() => this.toggleMenu()}/>
                <Right currentPage={this.state.pages[this.state.currentPage]}/>
            </div>
        );
    }
}
