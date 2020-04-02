import React, { useState } from 'react'

export default function CustomCarousel() {

    let carouselImages = [1, 2, 3, 4, 5]
    const [xAxis, setX] = useState(0)

    const goLeft = () => {
        if(xAxis === 0){
            setX(-400)
        }else {
            setX(xAxis + 100)
        }
    }

    const goRight = () => {
        if (xAxis === -400) {
            setX(0)
        } else {
            setX(xAxis - 100)
        }
    }

    return (
        <div className="flex items-center border-2 border-red-600 w-100 h-100 box-border m-0 p-0 overflow-hidden">
            {carouselImages.map((item, index) => {
                return (<div key={index} className="border-2 border-blue-400 min-w-full h-128" style={{ transform: `translateX(${xAxis}%)`, transition: `0.5s` }}>
                    {item}
                </div>)
            })}
            <button onClick={goLeft} className="absolute top-auto left-0 -translate-y-1/2 w-1/12 h-128 "></button>
            <button onClick={goRight} className="absolute top-auto right-0 -translate-y-1/2 w-1/12 h-128"></button>
        </div>
    )
}
