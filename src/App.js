import React from 'react';
import Left from './components/Left';
import Right from './components/Right';

import './App.css';

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


    render(){
        return(
            <div className="Page">
                <Left
                    handlePageChange={this.handleScroll}
                    pages={this.state.pages}
                    currentPage={this.state.currentPage}
                />

                <Right/>
            </div>
        );
    }
}
