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
                            <p style={{"text-indent": "1em"}}>I am a junior studying Computer Science at Princeton University, and I love creating apps and projects (check them out on my&nbsp;
                                <a className="external" href="https://github.com/howard-yen/" title="github" target="_blank" rel="noopener noreferrer">
                                    github
                                </a>!)
                            </p>
                            <p style={{"text-indent": "1em"}}>
                                I'm also currently part of the Princeton Natural Language Process(NLP) group, where I do research in Open Domain Question Answering, advised by Professor Danqi Chen and Jinhyuk Lee.
                            </p>
                            <p style={{"text-indent": "1em"}}>Outside of class, I serve as the Vice Chair at Princeton ACM, and I'm also an avid (but beginner) badminton player and swimmer. I also enjoy watching and reading about cinemas/films and media (due to the classes Chinese Cinema and Japanese Film and Media). I also love cooking a lot, especially making noodles and curry!</p>
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
                            src="/about.jpeg"
                            alt="about"/>
                        </animated.div>)
                    }
                </Transition>
            </div>
        )
    }
}
