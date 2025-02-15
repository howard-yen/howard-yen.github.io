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
                            <p style={{"text-indent": "1em"}}>
                                I'm a Computer Science PhD student at Princeton University, advised by&nbsp;
                                {/* I'm fortunate to be advised by&nbsp; */}
                                <a className="external" href="https://www.cs.princeton.edu/~danqic/" title="Danqi Chen" target="_blank" rel="noopener noreferrer">
                                    Professor Danqi Chen
                                </a>
                                .
                                Previously, I also obtained my BSE from Princeton in 2023. 
                                I'm part of the&nbsp;
                                <a className="external" href="https://princeton-nlp.github.io/" title="Princeton NLP Group" target="_blank" rel="noopener noreferrer">
                                    Princeton Natural Language Processing Group
                                </a> and&nbsp;
                                 <a className="external" href="https://pli.princeton.edu/" title="Princeton Language and Intelligence" target="_blank" rel="noopener noreferrer">
                                    Princeton Language and Intelligence
                                </a> 
                                .
                                
                                {/* &nbsp;and mentored by&nbsp; 
                                <a className="external" href="https://jhyuklee.github.io/" title="Dr. Jinhyuk Lee" target="_blank" rel="noopener noreferrer">
                                    Dr. Jinhyuk Lee
                                </a>
                                &nbsp;and&nbsp;
                                <a className="external" href="https://gaotianyu.xyz/about/" title="Tianyu Gao" target="_blank" rel="noopener noreferrer">
                                   Tianyu Gao
                                </a>. */}
                            </p>
                            <p style={{"text-indent": "1em"}}>
                                My research focuses on benchmarking and improving language technologies with an emphasis on efficiency, reasoning, and attribution. 
                                Previously, I have developed long-context and reasoning-intensive benchmarks as well as methods to improve the performance of long-context models.
                                Recently, I'm particularly interested in the potential of integrating information retrieval and language models.
                                You can find a copy of my CV&nbsp;
                                <a className="external" href="/CV.pdf" title="CV" target="_blank" rel="noopener noreferrer">
                                    here
                                </a>.
                            </p>
                            <p style={{"text-indent": "1em"}}>
                                In my free time, I like to read, cook, and run.
                                I also play badminton and soccer occasionally.
                                {/* I used to serve as the Vice Chair of Princeton Association of Computing Machinery (ACM).  */}
                            </p>
                        </animated.div>)
                    }
                </Transition>

                {/* <Transition
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
                            src="/about_small.jpg"
                            alt="about"/>
                        </animated.div>)
                    }
                </Transition> */}
            </div>
        )
    }
}
