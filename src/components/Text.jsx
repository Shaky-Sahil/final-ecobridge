import React, { useState } from "react";
import Typewriter from "typewriter-effect"
export const Text = () => {

    return (
        <div className="text-animation">
            <span>
            <Typewriter
            options={{loop : true,delay:25, }}
            onInit={(typewriter) => {
                typewriter
                .typeString("Recycle!")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Reuse")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Salvage")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Reutilize")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Reutilize")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Communicate")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Repurpose")
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
        />
        
        </span>
        </div>
    )
}