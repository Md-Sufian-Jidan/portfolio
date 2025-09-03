import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { cn } from '@/lib/utils';
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vh]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='blue' />
            </div>

            {/* grid & dot background */}
            <div className=" flex h-screen w-full items-center justify-center bg-white dark:bg-[#000319] absolute top-0 left-0">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-[#000319]" />
            </div>
            {/* content */}
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                        Dynamic Web Magic With Next.js
                    </h2>
                    <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Crafting Interactive Web Experiences' />

                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, I&apos; m Md Abu Sufian, a Next.js Developer</p>
                    <a href="#about">
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position='right' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;