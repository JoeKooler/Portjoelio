import React from 'react'
import CardComponents, { TeamComponents } from './CardComponents'
import Joe from '../Assets/Joe.jpg'
import Joe2 from '../Assets/Joe2.jpg'
import Mink from '../Assets/Mink.jpg'
import Kit from '../Assets/Kit.jpg'
import EPIC from '../Assets/EPIC.png'
import Fckly from '../Assets/Fckly.png'
import GISAVIA from '../Assets/GISAVIA.png'


export default function Homepage() {
    return (
        <div className="absolute top-0 w-full h-128 z-40">
            <div className="bg-black relative">
                <div className="p-64 bg-fixed overflow-hidden hover:opacity-50 duration-500" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)) ,url(" + require('../Assets/Joe.jpg') + ")" }}>
                </div>
                <h1 className="absolute top-1/2 left-1/2 text-white text-3xl" style={{ WebkitTransform: "translate(-50%,-50%)", transform: "translate(-50%,-50%)" }}>I'm JoeKooler a Full stack and Game Developer</h1>
            </div>

            <section className="flex justify-center m-32 ">
                <img className="rounded-lg" src={Joe2} alt="Woman paying for a purchase" />
                <div className="pl-6 max-w-xl">
                    <div className="uppercase tracking-wide text-6xl text-indigo-600 font-bold">A bit about me</div>
                    <a href="#" className="pt-6 block text-lg leading-tight font-semibold text-gray-900 hover:underline">Hi I'm Chitsanupong Klaithin</a>
                    <p className="mt-2 text-gray-600">The Full-stack and Game Developer. I have been doing some fun projects for about 2 years now ...
                    please hire me so i can just move to Canada Also If the project is a large scale i also have my quality team to solve your problem with ease.
                    </p>

                    <div href="#" className="pt-10 block text-lg leading-tight font-semibold text-gray-900">The stacks that i'm familiar with</div>
                    <div className="mt-2 text-gray-600">
                        <p className="pl-4 mt-2">- HTML CSS and JavaScript</p>
                        <p className="pl-4 mt-2">- jQuery</p>
                        <p className="pl-4 mt-2">- PHP</p>
                        <p className="pl-4 mt-2">- ReactJS , React Native , Electron</p>
                        <p className="pl-4 mt-2">- VueJS</p>
                        <p className="pl-4 mt-2">- NodeJS</p>
                        <p className="pl-4 mt-2">- Java</p>
                        <p className="pl-4 mt-2">- C#</p>
                        <p className="pl-4 mt-2">- Unity</p>
                    </div>
                </div>
            </section>

            <h1 className="text-6xl font-bold text-center m-5 text-gray-700">The Quality Team</h1>
            <div className="flex mb-4 justify-center">
                <TeamComponents imgsrc={Joe} name="Joe" details="The founder of the Game Dev Boi freelance team and game developers team" />
                <TeamComponents imgsrc={Mink} name="Mink" details="The co-founder of the Game Dev Boi freelance team and game developers team" />
                <TeamComponents imgsrc={Kit} name="Kit" details="Fucking useless boi of the Game Dev Boi freelance team and game developers team" />
            </div>

            <h1 className="text-6xl font-bold text-center m-5 text-gray-700">Projects Example</h1>
            <div className="flex mb-4 justify-center">
                <CardComponents imgsrc={EPIC} name="EPIC" details='The so called "Excellent Prototype Infrared Controller" is one of our smarthome remote prototype that mostly based on the infrared remote system that use 
                    to control most of the device using a firebase realtime database for a webservice and a native Java Android for a fast User Interface' />
                <CardComponents imgsrc={Fckly} name="Fuckly Bird" details="The angry bird like game pack with a challenging shooting style along with crazy fun items made by Unity C#" />
                <CardComponents imgsrc={GISAVIA} name="GISAVIA Air Navigation Coverage" details="An aircraft coverage analysis using a line-of-sight with multi angle to analyze the signal coverage in the area using Java as a backend and CesiumJS as a data visualizer" />
            </div>
        </div>
    )
}
