import React from 'react';
import './ContactsComponent.css';

export default class ContactsComponent extends React.Component{
    render(){
        return(
            <div className="Contacts">
                <h2 style={{'font-size':'300%'}}>
                    Contacts
                </h2>
                <h3>
                    If you have any questions or just want to chat, feel free to reach out to me at hyen@princeton.edu
                </h3>
                <p>
                    Thanks for checking out my website and here are some interesting photos!
                </p>
            </div>
        );
    }
}
