import React from 'react'
import CustomCarousel from './CustomCarousel'
import CardComponents from './CardComponents'
import img from '../Assets/pop.jpg';
import img_2 from '../Assets/silence.png';
import img_3 from '../Assets/soo.png';
import Fckly from '../Assets/Fckly.png'
import Multi from '../Assets/Multi.png'
import FckingBall from '../Assets/FckingBall.png'
import FckingBusy from '../Assets/FckingBusy.png'
import Medon from '../Assets/Medon.png'
import UEFPS from '../Assets/uefps.png'
import CS from '../Assets/cs.png'
import CR from '../Assets/cr.jpg'
import Risa from '../Assets/risa.jpg'
import Meowmer from '../Assets/mm.png'
import CC from '../Assets/cc.png'
import NodeJSPic from '../Assets/node.png' 
import BIGTU from '../Assets/review.png'
import Bomber from '../Assets/bomber.png'
import ModelPic from '../Assets/Model.png'
import LowpolyMap from '../Assets/lowpolymap.png'
import YellowWings from '../Assets/bot.png'
import KF from '../Assets/kot.png'
import KVSWI from '../Assets/kvswi.png'
import KENDORS from '../Assets/kendors.png'

export default function FunStuff() {
    return (
        <div>
            <CustomCarousel
                images={[CC, UEFPS, LowpolyMap]}
            />
            <div className="h-128 spacer"></div>
            <div className="flex mb-4 justify-center">
                <CardComponents imgsrc={Fckly} name="Fxckly Bird" details=''></CardComponents>
                <CardComponents imgsrc={FckingBall} name="Fxcking Ball" details=''></CardComponents>
                <CardComponents imgsrc={FckingBusy} name="Fxcking Busy" details=''></CardComponents>
            </div>
            <div className="flex mb-4 justify-center">
                <CardComponents imgsrc={Medon} name="Medon Adventure" details=''></CardComponents>
                <CardComponents imgsrc={UEFPS} name="Unreal Engine FPS First Try" details=''></CardComponents>
                <CardComponents imgsrc={CS} name="Counter Stark" details=''></CardComponents>
            </div>
            <div className="flex mb-4 justify-center">
                <CardComponents imgsrc={CR} name="Crxsh Rxyale" details=''></CardComponents>
                <CardComponents imgsrc={Risa} name="Homesick Riza" details=''></CardComponents>
                <CardComponents imgsrc={Meowmer} name="Mr.Meowmer" details=''></CardComponents>
            </div>
            <div className="flex mb-4 justify-center">
                <CardComponents imgsrc={Multi} name="Number racer" details=''></CardComponents>
                <CardComponents imgsrc={CC} name="Custom Carousel Component" details=''></CardComponents>
                <CardComponents imgsrc={NodeJSPic} name="NodeJS Auth. Boilerplate" details=''></CardComponents>
            </div>
            <div className="flex mb-4 justify-center">
                <CardComponents imgsrc={BIGTU} name="Game Review UI Design" details=''></CardComponents>
                <CardComponents imgsrc={ModelPic} name="Assasins Creed Lowpoly Model" details=''></CardComponents>
                <CardComponents imgsrc={LowpolyMap} name="Lowpoly FPS Map" details=''></CardComponents>
            </div>
            <div className="flex mb-4 justify-center">
                <CardComponents imgsrc={YellowWings} name="YellowWings Discord Bot" details=''></CardComponents>
                <CardComponents imgsrc={KF} name="Kotlin Firebase OTP" details=''></CardComponents>
                <CardComponents imgsrc={Bomber} name="Startale Bomber Drawing" details=''></CardComponents>
            </div>
            <div className="flex mb-4 justify-center">
                <CardComponents imgsrc={KVSWI} name="KVSWI" details=''></CardComponents>
                <CardComponents imgsrc={KENDORS} name="KENDORS" details=''></CardComponents>
            </div>
        </div>
    )
}
