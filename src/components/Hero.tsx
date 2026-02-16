import React, {useState} from "react";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold md:text-3xl sm:2xl p-2">Making AI Work for Your Business.</p>
                <h1 className="md:text-6xl sm:text-6xl text-4xl font-bold">Discover Implement AI</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-3xl sm:2xl text-xl font-bold py-4">Deploy </p>
                    <TypeAnimation
                        sequence={[
                            'HubSpot AI',
                            1000, // Waits 1s
                            'Zendesk AI', 
                            2000, // Waits 2s
                            'Salesforce Agentforce 360',
                            2000, // Waits 2s
                            'Zapier AI',
                            2000, // Waits 2s
                            'n8n',
                            () => {
                            //console.log('Sequence completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="md:text-3xl sm:2xl text-xl font-bold md:pl-4 pl-2"
                        />
                </div>
                <p className="md:text-2xl text-xl font-meidum text-gray-500">We guide you in selecting and implementing the right AI tools to drive growth and efficiency.</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
            </div>
        </div>
    );
};

export default Hero;