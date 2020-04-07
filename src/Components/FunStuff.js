import React from 'react'
import CustomCarousel from './CustomCarousel'
import img from '../Assets/pop.jpg';
import img_2 from '../Assets/silence.png';
import img_3 from '../Assets/soo.png';


export default function FunStuff() {
    return (
        <div className="bg-blue-500">
            <CustomCarousel
                images={ [img , img_2 , img_3] }
            />
        </div>
    )
}
