import React from 'react';
import {Transition, animated} from 'react-spring/renderprops';
import faceshot from '../images/23ThesisPortraits_Square.png';
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
                    config={{delay: 200, duration: 1000}}
                >
                    {show => show && (props =>
                        <animated.img
                            style={props}
                            src={faceshot} alt={'Howard Yen'} width='250px' height='250px' className="AboutPic"/>
                    )}
                </Transition>
                <Transition
                    native
                    items={this.state.show}
                    from={{opacity: 0}}
                    enter={{opacity: 0.8}}
                    leave={{opacity:0}}
                    config={{delay: 200, duration: 1000}}
                    style={{top: "25vh"}}
                >
                    {show => show && (props =>
                        <animated.div
                            style={props}
                            className="AboutTextContainer"
                        >
                            <div className="AboutText">
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
                                    I'm grateful for being supported by the The William A. Dippel ’50 *55 Graduate Fellowship.
                                    You can find a copy of my CV&nbsp;
                                    <a className="external" href="/CV.pdf" title="CV" target="_blank" rel="noopener noreferrer">
                                        here
                                    </a>.

                                </p>
                            </div>
                            
                            <div className="AboutText">
                                <p style={{"text-indent": "1em"}}>
                                    My research focuses on improving language technologies with an emphasis on reasoning, attribution, and efficiency. 
                                    Previously, I have developed long-context and reasoning-intensive benchmarks (
                                        <a className="external" href="https://arxiv.org/abs/2410.02694" title="HELMET" target="_blank" rel="noopener noreferrer">HELMET</a>,&nbsp;
                                        <a className="external" href="https://arxiv.org/abs/2407.12883" title="BRIGHT" target="_blank" rel="noopener noreferrer">BRIGHT</a>
                                        ) 
                                    as well as long-context language modeling methods (
                                        <a className="external" href="https://arxiv.org/abs/2402.16617" title="CEPE" target="_blank" rel="noopener noreferrer">CEPE</a>,&nbsp;
                                        <a className="external" href="https://arxiv.org/abs/2410.02660" title="ProLong" target="_blank" rel="noopener noreferrer">ProLong</a>
                                    ).
                                    Recently, I'm particularly excited about the potential of integrating information retrieval and language models.
                                    Please check out my <a className="external" href="https://scholar.google.com/citations&user=8rJOrBEAAAAJ" title="Google Scholar" target="_blank" rel="noopener noreferrer">Google Scholar</a> for a full list of my publications.
                                </p>   
                            </div>

                            <div className="AboutText">
                                <p style={{"text-indent": "1em"}}>
                                    In my free time, I like to run, read, cook, and (occasionally) play badminton and soccer.
                                    I also enjoy learning languages—am currently studying Taiwanese (台語) and Japanese (日本語).
                                    
                                </p>
                            </div>
                        </animated.div>
                        )
                    }
                </Transition>

            </div>
        )
    }
}
