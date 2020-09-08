import React from 'react';
import Left from './components/Left';
import Right from './components/Right';
import './App.css';

import {ReactComponent as MenuToggle} from './images/MenuToggle.svg';

export default class Page extends React.Component{
    constructor(props){
        super(props);
        let desktop = window.innerHeight < window.innerWidth*1.5;

        this.state={
            currentPage: 0,
            pages:[
                "About",
                "Projects",
                "Timeline",
                "Contact"
            ],
            menuOpen: desktop,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        console.log(this.state.menuOpen);
    }

    componentDidMount(){
        if(!this.state.menuOpen){
            document.querySelector('.Left').style.width = "0";
            document.querySelector('.Right').style.width = "100vw";
            document.querySelector('.MenuToggle').style.left = "1vw";
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

    render(){
        return(
            <div className="Page">
                <Left
                    handlePageChange={this.handleScroll}
                    pages={this.state.pages}
                    currentPage={this.state.currentPage}
                />
                <MenuToggle className="MenuToggle" onClick={() => this.toggleMenu()}/>
                <Right/>
            </div>
        );
    }
}
