
import React from 'react';

export const NotionIcon: React.FC = () => (
    <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-white rounded p-1">
        <path d="M2.53333 2.33334H11.5L12.1333 4.85334C12.3333 5.65334 13.3867 6.06667 14.0533 5.54667L15.4 4.43334L19.4667 9.56667L18.0667 10.68C17.4 11.2 17.8133 12.2533 18.6133 12.4533L21.1333 13.0867V22.0533L12.5467 25.6667L4 22.0533V13.0867L2.53333 9.56667V2.33334Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12.1333 22.0533L18.6133 13.0867V4.43334L12.1333 9.56667V22.0533Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M21.1333 22.0533V13.0867L25.4667 9.56667V22.0533L21.1333 25.6667L12.5467 22.0533" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
);

export const YouTubeIcon: React.FC = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M21.938 6.549a2.75 2.75 0 0 0-1.938-1.938C18.36 4.167 12 4.167 12 4.167s-6.36 0-7.999.444A2.75 2.75 0 0 0 2.062 6.55C1.617 8.188 1.617 12 1.617 12s0 3.812.445 5.45a2.75 2.75 0 0 0 1.938 1.938C5.64 19.833 12 19.833 12 19.833s6.36 0 7.999-.444a2.75 2.75 0 0 0 1.938-1.938C22.383 15.812 22.383 12 22.383 12s0-3.812-.445-5.451ZM9.75 15.167V8.833L15.583 12 9.75 15.167Z"></path>
    </svg>
);

export const PlayIcon: React.FC = () => (
    <div className="bg-red-600 rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-white ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
        </svg>
    </div>
);

export const TravelPlannerLogo: React.FC = () => (
    <div className="flex items-center gap-4">
        <div className="border-4 border-white p-2">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M9 20L3 17V4L9 7V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 20L9 17V4L15 7V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 20L15 17V4L21 7V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <div>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                <p className="text-2xl font-bold tracking-widest">TRAVEL</p>
            </div>
            <p className="text-3xl font-extrabold tracking-wider">PLANNER</p>
            <p className="text-xs tracking-widest text-gray-200">YOUNIS PROJECT</p>
        </div>
    </div>
);
