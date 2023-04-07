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
                                I'm a senior studying Computer Science at Princeton University. I'm a member of the&nbsp;
                                <a className="external" href="https://princeton-nlp.github.io/" title="Princeton NLP Group" target="_blank" rel="noopener noreferrer">
                                    Princeton Natural Language Processing Group
                                </a>.
                                At Princeton, I am fortunate to be advised by&nbsp;
                                <a className="external" href="https://www.cs.princeton.edu/~danqic/" title="Danqi Chen" target="_blank" rel="noopener noreferrer">
                                    Professor Danqi Chen
                                </a>
                                &nbsp;and mentored by&nbsp; 
                                <a className="external" href="https://jhyuklee.github.io/" title="Dr. Jinhyuk Lee" target="_blank" rel="noopener noreferrer">
                                    Dr. Jinhyuk Lee
                                </a>
                                &nbsp;and&nbsp;
                                <a className="external" href="https://gaotianyu.xyz/about/" title="Tianyu Gao" target="_blank" rel="noopener noreferrer">
                                   Tianyu Gao
                                </a>.
                                My research interests includes practical applications of NLP (e.g. information retrieval and open-domain question answering) and generalization and efficiency of large language models.
                            </p>
                            <p style={{"text-indent": "1em"}}>
                                In my free time, I like to create apps (check them out on my&nbsp;
                                <a className="external" href="https://github.com/howard-yen/" title="github" target="_blank" rel="noopener noreferrer">
                                    github
                                </a>!), play badminton, and play soccer.
                                I used to serve as the Vice Chair of Princeton Association of Computing Machinery(ACM). I also enjoy cooking, reading, and watching cinemas/films.
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
