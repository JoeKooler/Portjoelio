import React from 'react'
import CardComponents from './CardComponents'
import GISAVIA from '../Assets/GISAVIA.png'
import Horizonsoft from '../Assets/horizon.png'
import GEM from '../Assets/gempos.png'


export default function EXP() {
    return (
        <div className="min-h-screen">
            <div className="spacer h-20 bg-gray-800"></div>
            <div className="flex mb-4 justify-center">
                <CardComponents imgsrc={GISAVIA} name="GISAVIA Air Navigation Coverage" details=''></CardComponents>
                <CardComponents imgsrc={GEM} name="GEM Point of Sale" details=''></CardComponents>
                <CardComponents imgsrc={Horizonsoft} name="Horizonsoft Employee" details=''></CardComponents>
            </div>
        </div>
    )
}
