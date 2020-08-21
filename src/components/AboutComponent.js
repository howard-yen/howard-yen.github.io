import React from 'react';
import photo from '../images/about.jpg';
import {Transition} from 'react-spring/renderprops';

export default class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true
        }
    }

    toggle = e => this.setState(state => ({show: !this.state.show}))

    render(){
        return(
            <div>
                <Transition
                    items={this.state.show}
                    from={{opacity: 0}}
                    enter={{opacity: 1}}
                    leave={{opacity:0}}
                >
                    {show => show && (props => <div style={props}>Hi I'm Howard</div>)}
                </Transition>
            </div>
        )
    }
}
