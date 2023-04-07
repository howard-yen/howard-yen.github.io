import React from 'react';
import './TimelineComponent.css';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import timelineInfo from './Timeline.json';
import {ReactComponent as MMC} from '../images/mmc.svg';
import {ReactComponent as Princeton} from '../images/princeton.svg';
import {ReactComponent as ACM} from '../images/acm.svg';
import {ReactComponent as PSHS} from '../images/pshs.svg';
import {ReactComponent as HappyHarvest} from '../images/happyharvest.svg';
import {ReactComponent as ResInDe} from '../images/ResInDe.svg';
import {ReactComponent as Facebook} from '../images/facebook.svg';
import {ReactComponent as RealityLabs} from "../images/realitylabs.svg";

const icons ={
    "MMC": <MMC />,
    "Princeton": <Princeton/>,
    "ACM": <ACM/>,
    "PSHS": <PSHS/>,
    "Happy Harvest": <HappyHarvest/>,
    "ResInDe": <ResInDe/>,
    "Facebook": <Facebook />,
    "RealityLabs": <RealityLabs />
}

export default class TimelineComponent extends React.Component{
    makeTimeline = () =>{
        const timeline = [];

        for(let t in timelineInfo){
            let info = timelineInfo[t];
            let descriptions = info["description"].map((d) => <li key={d}>{d}</li>);

            timeline.push(
                <VerticalTimelineElement
                    className="vertical-timeline-element"
                    //background & font color to be changed
                    contentStyle={{background: "#fff", color: "#000"}}
                    date={info["date"]}
                    dateClassName={"Date"}
                    iconStyle={{background: "#fff"}}
                    icon={icons[info["icon"]]}
                    iconOnClick={() => window.open(info["link"], "_blank")}
                    onTimelineElementClick={() => window.open(info["link"], "_blank")}
                    key={t}
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
            <div className="Timeline">
                <h2 style={{'font-size': '300%', "padding": "2%", "width": "auto", "height": "auto"}}>
                    Timeline
                </h2>
                <VerticalTimeline style={{'width': '100%'}} layout={"1-column-left"}>
                    {timeline}
                </VerticalTimeline>
            </div>
        );
    }
}
