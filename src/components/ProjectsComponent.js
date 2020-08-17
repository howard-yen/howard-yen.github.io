import React from 'react';
import './ProjectsComponent.css';
import {Spring, config} from 'react-spring/renderprops';
import {useSpring, animated} from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 100, (x - window.innerWidth /2) /100, 1.1];
// const trans = (x,y,s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const trans = (x,y,s) => `perspective(600px) scale(${s})`;

class ProjectCard extends React.Component{
    render(){
        return(
            <Spring
                from={{opacity: 0}}
                to={{opacity: 1}}
                config={config.gentle}
            >
                {props => <div style={props}>hello</div>}
            </Spring>
        );
    };
}

function Card() {
    const [props, set] = useSpring(() => (
        {xys: [0,0,1],
            config: {mass:1, tension:170, friction:26}})
    );

    return(
        <animated.div
            className="Card"
            // onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
            onMouseOver={() => set({xys: [0,0,1.1]})}
            onMouseLeave={() => set({xys: [0,0,1]})}
            style={{transform:props.xys.interpolate(trans)}}
        >
            stuff here
            </animated.div>
    );
}

export default class Projects extends React.Component{

    render(){
        return(
            <div className="Projects">
                <h2 style={{'font-size': '300%'}}>
                    Projects
                </h2>
                {/* <ProjectCard/> */}
                <Card/>
                <Card/>
            </div>
        );
    };
}
