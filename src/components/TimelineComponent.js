import React from 'react';
import './TimelineComponent.css';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import timelineInfo from './Timeline.json';
import {ReactComponent as MMC} from '../images/mmc.svg';
import {ReactComponent as Princeton} from '../images/princeton.svg';
import {ReactComponent as ACM} from '../images/acm.svg';
import {ReactComponent as PSHS} from '../images/pshs.svg';
const icons ={
    "MMC":[
        <MMC />
    ],
    "Princeton":[
        <Princeton/>
    ],
    "ACM":[
        <ACM/>
    ],
    "PSHS":[
        <PSHS/>
    ],
}

export default class TimelineComponent extends React.Component{
    makeTimeline = () =>{
        const timeline = [];

        for(let t in timelineInfo){
            let info = timelineInfo[t];
            let l = info["link"];

            let descriptions = info["description"].map((d) => <li>{d}</li>);

            timeline.push(
                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    //background & font color to be changed
                    contentStyle={{background: "#fff", color: "#000"}}
                    date={info["date"]}
                    iconStyle={{background: "#fff"}}
                    icon={icons[info["icon"]]}
                    iconOnClick={() => window.open(info["link"], "_blank")}
                    onTimelineElementClick={() => window.open(info["link"], "_blank")}
                >
                    <h3 className="vertical-timeline-element-title">{info["title"]}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{info["position"]}</h4>
                    <h4 className="vertical-timeline-element-subtitle">{info["location"]}</h4>
                    <ul>
                        {descriptions}
                    </ul>
                </VerticalTimelineElement>
            );
        }

        return [...timeline];
    }

    render(){
        const timeline = this.makeTimeline();

        return(
            <div className = "Timeline">
                <h2 style={{'font-size': '300%'}}>
                    Timeline
                </h2>
                <VerticalTimeline style={{'width': '100%'}}>
                    {timeline}
                </VerticalTimeline>
            </div>
        );
    }
}
