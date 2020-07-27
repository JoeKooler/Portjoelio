import React, { useState } from 'react'

export default function CustomCarousel({ images }) {

    let carouselImages = [...images]
    const [xAxis, setX] = useState(0)

    const goLeft = () => {
        if (xAxis === 0) {
            setX(-((carouselImages.length - 1) * 100))
        } else {
            setX(xAxis + 100)
        }
        console.log(images.length);
        console.log(`x = ${xAxis}`);
    }

    const goRight = () => {
        if (xAxis === -((carouselImages.length - 1) * 100)) {
            setX(0)
        } else {
            setX(xAxis - 100)
        }
    }

    return (
        <div className="absolute top-0 flex items-center w-full h-128 box-border m-0 p-0 overflow-hidden shadow-xl z-40">
            {carouselImages.map((item, index) => {
                return (
                    <div key={index} className="min-w-full h-128 duration-500" style={{ transform: `translateX(${xAxis}%)` }}>
                        <div className="w-full h-full"
                            style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) ,url(" + item + ")" }}
                        />
                    </div>)
            })}
            <button onClick={goLeft} className="absolute top-auto left-0 -translate-y-1/2 w-1/12 h-128" >
                O
                <div className="absolute top-0 w-full h-full bg-black opacity-0 duration-200 hover:opacity-25" />
            </button>
            <button onClick={goRight} className="absolute top-auto right-0 -translate-y-1/2 w-1/12 h-128">
                O
            <div className="absolute top-0 w-full h-full bg-black opacity-0 duration-200 hover:opacity-25" />
            </button>
        </div>
    )
}
