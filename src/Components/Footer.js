import React from 'react'
import FacebookIcon from '../Assets/facebook.png'
import TwitterIcon from '../Assets/twitter.png'
import LineIcon from '../Assets/line.png'

export default function Footer() {
    return (
        <div className="p-10 w-full bg-gray-800 text-white flex">
            <div className="left-section max-w-3xl px-64">
                <div className="flex">
                    <img className="p-1" style={{ maxWidth: '2rem' }} src={FacebookIcon} />
                    <h1 className="pl-3">/JosephKoolerson</h1>
                </div>

                <div className="flex">
                    <img className="p-1" style={{ maxWidth: '2rem' }} src={TwitterIcon} />
                    <h1 className="pl-3">@JosephKoolerson</h1>
                </div>

                <div className="flex">
                    <img className="p-1" style={{ maxWidth: '2rem' }} src={LineIcon} />
                    <h1 className="pl-3">@/JosephKoolerson</h1>
                </div>
                <h1>©2020 All Rights Reserved JoeKooler</h1>
            </div>
            <div className="left-section max-w-3xl pl-56">
                <div className="flex">
                    The site is actually under-construction.Honestly I don't really know what to type any more zzZZ.
                </div>
                <div className="flex">
                    This website is actually the Final Project for the CGM212 Subject which is to develop a static website
                </div>
                <div className="flex">
                    I may build some backend support to make it easier to make the site dynamic so that i can make my own CMS to deal with these contents
                </div>
            </div>
        </div>
    )
}
