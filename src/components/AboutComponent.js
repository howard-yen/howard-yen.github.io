import React from 'react';
import {Transition, animated} from 'react-spring/renderprops';
import './AboutComponent.css';

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
            <div className="About">
                <Transition
                    native
                    items={this.state.show}
                    from={{opacity: 0}}
                    enter={{opacity: 0.8}}
                    leave={{opacity:0}}
                    config={{delay: 500, duration: 1000}}
                >
                    {show => show && (props =>
                        <animated.div
                            style={props}
                            className="AboutText"
                        >
                            <h2>Hi I'm Howard!</h2>
                            <p style={{"text-indent": "1em"}}>I am a sophomore studying Computer Science at Princeton University. I love creating apps and projects as well as learning the fields of computer science.</p>
                            <p style={{"text-indent": "1em"}}>Outside of class, I serve as the careers chair on Princeton ACM and I'm also an avid reader and badminton player.</p>
                        </animated.div>)
                    }
                </Transition>
            </div>
        )
    }
}
