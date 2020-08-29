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
                            <p style={{"text-indent": "1em"}}>I am a sophomore studying Computer Science at Princeton University, and I love creating apps and projects (check them out on my&nbsp;
                                <a href="https://github.com/howard-yen/" title="github" target="_blank" rel="noopener noreferrer">
                                    github
                                </a>!)
                            </p>
                            <p style={{"text-indent": "1em"}}>
                                Natural language processing and computer vision are fields that I would like to conduct research in in the future.
                            </p>
                            <p style={{"text-indent": "1em"}}>Outside of class, I serve as the Careers Chair on Princeton ACM, and I'm also an avid reader (currently reading 86 by Asato Asato) and badminton player.</p>
                        </animated.div>)
                    }
                </Transition>

                <Transition
                    native
                    items={this.state.show}
                    from={{opacity: 0}}
                    enter={{opacity: 1}}
                    leave={{opacity:0}}
                    config={{delay: 0, duration: 1000}}
                >
                    {show => show && (props =>
                        <animated.div
                            style={props}
                        >
                            <img
                            className="AboutPic"
                            src="/about.png"
                            alt="about"/>
                        </animated.div>)
                    }
                </Transition>
            </div>
        )
    }
}
