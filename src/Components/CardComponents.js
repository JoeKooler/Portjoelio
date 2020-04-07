import React, { useState } from 'react'

export function TeamComponents({ imgsrc, name, details }) {
    return (
        <div>
            <div className="bg-white rounded-lg p-6 max-w-sm">
                <img className="h-56 w-56 rounded-full mx-auto m-6" src={imgsrc} />
                <div className="text-center">
                    <h2 className="text-2xl text-gray-700 font-semibold">{name}</h2>
                    <div className="pt-2 text-gray-600">{details}</div>
                </div>
            </div>
        </div>
    )
}

export default function CardComponents({ imgsrc, name, details }) {
    const [hoverOpacity, setHoverOpacity] = useState(100)
    const [buttonOpactiy, setButtonOpacity] = useState(0)
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
                <div className="bg-black relative">
                    <img className={"w-full duration-500 opacity-" + hoverOpacity} src={imgsrc}
                        onMouseEnter={() => {
                            setButtonOpacity(100)
                            setHoverOpacity(50)
                        }} onMouseLeave={() => {
                            setButtonOpacity(0)
                            setHoverOpacity(100)
                        }
                        } />
                    <button className={"absolute bg-transparent text-white font-semibold py-2 px-4 border border-white rounded top-1/2 left-1/2 duration-500 opacity-"
                        + buttonOpactiy +
                        " hover:text-black hover:bg-white"}
                        style={{ WebkitTransform: "translate(-50%,-50%)", transform: "translate(-50%,-50%)" }}
                        onMouseEnter={() => {
                            setButtonOpacity(100)
                            setHoverOpacity(50)
                        }}>
                        Learn More
                    </button>
                </div>
                <div className="px-6 py-4">
                    <div className="text-gray-700 font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-600 text-base">{details}</p>
                </div>
            </div>
        </div>
    )
}
