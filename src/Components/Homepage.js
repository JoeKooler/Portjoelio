import React from 'react'

export default function Homepage() {
    return (
        <div>
            <div className="p-64 bg-fixed" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(" + require('../Assets/silence.png') + ")" }}>
                <h1 className="text-center text-white text-3xl">Hi I'm Silence ... Your Global Healer</h1>
            </div>
            <div className="p-64 bg-scroll transition ease-in-out duration-700 hover:opacity-0" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(" + require('../Assets/pop.jpg') + ")" }}>
                <h1 className="text-center text-white text-3xl">Hi I'm Eo Yoon Soo , .... Your fucking web dev</h1>
            </div>
        </div>
    )
}
