import React from 'react';
import './ContactsComponent.css';
import galleryInfo from './Gallery.json';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';

const path = (name) => '/gallery/' + name;
const gallerylength = Object.keys(galleryInfo).length;

class Gallery extends React.Component{
    makeGallery = () =>{
        const gallery = [];
        let i = 0;
        for(let g in galleryInfo){
            gallery.push(
                <ParallaxLayer offset={i} speed={0} factor={1} >
                    <img src={path("stars.svg")} alt={"stars"}/>
                </ParallaxLayer>
            );


            for(let o of galleryInfo[g]["Others"]){
                gallery.push(
                    <ParallaxLayer
                        offset={i + o["offset"]}
                        speed={o["speed"]}
                        style={{opacity: o["opacity"]}}
                    >
                        <img src={path(o["file"])} alt={o["file"]} style={{display: "block", width: o["width"], height: "auto", marginLeft: o["left"]}}/>
                    </ParallaxLayer>
                );
            }

            for(let p of galleryInfo[g]["Photos"]){
                gallery.push(
                    <ParallaxLayer
                        offset={i + p["offset"]}
                        speed={p["speed"]}
                    >
                        <img className="Photo" src={path(p["file"])} alt={p["file"]} style={{display: "block", width: p["width"], height: "auto", marginLeft: p["left"]}}/>
                    </ParallaxLayer>
                );
            }

            for(let t of galleryInfo[g]["Text"]){
                gallery.push(
                    <ParallaxLayer
                        offset={i + t["offset"]}
                        speed={t["speed"]}
                    >
                        <h2 className="Caption" style={{"font-size": t["size"], marginLeft: t["left"]}}>
                            {t["text"]}
                        </h2>
                    </ParallaxLayer>
                        );
            }

            i++;
        }
        return [...gallery];
    }

    render(){
        const gallery = this.makeGallery();

        return(
        <div className="Gallery">
            <Parallax
                ref={ref => (this.parallax = ref)}
                pages={gallerylength}
                style={{"position": "relative", "width":"100%", "height": "100%"}}
            >
                {/* background layer need it here so doesn't cover the photo from previous layer*/}
                <ParallaxLayer offset={0} speed={0} factor={gallerylength} style={{backgroundColor: "#363946"}}/>

                {gallery}
            </Parallax>
        </div>
        );
    }
}

export default class ContactsComponent extends React.Component{
    render(){
        return(
            <div className="Contacts">
                <h2 style={{'font-size':'300%'}}>
                    Contacts
                </h2>
                <h3>
                    If you have any questions or just want to chat, feel free to reach out to me at hyen@princeton.edu
                </h3>
                <p>
                    Thanks for checking out my website and here are some interesting photos!
                </p>
                <Gallery/>
            </div>
        );
    }
}
