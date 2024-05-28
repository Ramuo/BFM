import React from 'react';
import {Link} from "react-router-dom";

import MidCard from './MidCard';
import TextOnly from './TextOnly';

import breakingVdeo from "../../assets/videos/FirstSection/breaking.mp4";
import video from "../../assets/videos/FirstSection/video.mp4";



const FirstSection = () => {
    
    const MidCards = [
        {
            link: "/your-news-link",
            imageSrc:'https://images.bfmtv.com/jiQ64F4CQKMdDYVpPyeMYm5zrus=/0x40:768x472/640x0/images/Le-porte-parole-du-gouvernement-Gabriel-Attal-a-la-sortie-de-l-Elysee-le-7-juillet-2021-a-Paris-1063377.jpg',
            text: "Gabriel Attal is picking a fight on the migration issue that he probably cannot win",
            tag: "Analysis",
        },
        {
            link: "/your-link-url",
            imageSrc:'https://gdb.voanews.com/01000000-0aff-0242-fcd8-08dc62605e70_cx0_cy7_cw0_w1080_h608_s.jpg',
            text: "Protesters for Gaza war asking for a cease-fire",
            tag: "Anger",
        },
        {
            link: "/your-link-url",
            imageSrc: 'https://images.bfmtv.com/lkJlLZcRWz-um9pWtT5eNTxfEKQ=/0x0:1280x720/images/Cop28-et-Gaza-a-Dubai-Emmanuel-Macron-sur-un-double-front-diplomatique-1759680.jpg',
            text: "President Macron express his concern about rising antisemitism incidents",
            tag: "",
        },
        // Add more cards as needed
    ];

    
    const textOnly = [
        {
            link: "/your-link-url",
            text: "iMichigan school shooter sentenced to life in prison without parole",
        },
        {
            link: "/your-link-url",
            text: "Six French teenagers convicted in connection with 2020 beheading of teacher Paty",
        },
        {
            link: "/your-link-url",
            text: "Appeals court maintains most of Trump gag order in federal election subversion case",
        },
        {
            link: "/your-link-url",
            text: "Ryan O’Neal, star of ‘Love Story’ and ‘Peyton Place,’ dead",
        },
        {
            link: "/your-link-url",
            text: "Wartime spread of drug-resistant infections in Ukraine is an ‘urgent crisis,’ CDC report says",
        },
        {
            link: "/your-link-url",
            text: "European Union agrees to regulate potentially harmful effects of artificial intelligence",
        },
    ];


    return (
        <>
            <main className="flex flex-col md:flex-row">
                {/* First Col */}
                <section className="w-full md:w-2/3">
                    <Link to='/new-link'>
                        <div className='maw-w-screen-md mx-auto p-8'>
                            <h1 className="text-5xl font-bold mb-4 text-black text-center hover:underline">
                                Cinq points à retenir du débat Bardella vs Attal
                            </h1>
                            <div className="max-w-screen-md mx-auto mb-3">
                                <div className="aspect-w-16 aspect-h-9">
                                    <video
                                    autoPlay={true} 
                                    muted
                                    playsInline
                                    loop
                                    className='w-full h-full rounded-sm'
                                    >
                                        <source src={breakingVdeo} type='video/mp4'/>
                                        Votre navigateur ne supporte pas cette video
                                    </video>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold mb-2 underline">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </h4>
                            <ul className="px-4 text-justify">
                                <li className="list-disc mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, temporibus!</li>
                                <li className="list-disc mb-1">There are many variations of passages of Lorem Ipsum available</li>
                                <li className="list-disc mb-1">It uses a dictionary of over 200 Latin words, combined with a handful of model</li>
                                <li className="list-disc mb-1">structures, to generate Lorem Ipsum which looks reasonable. The generated </li>
                                <li className="list-disc mb-1">Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                                <li className="list-disc">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</li>
                            </ul>
                        </div>
                    </Link>
                </section>
                {/* Second Col (Midcards) */}
                <section className="w-full md:w-1/3 p-4">
                    {
                        MidCards.map((card, index) => (
                            <MidCard key={index} {...card}/>
                        ))
                    }
                </section>
                 {/* Third Col  (textOnly) */}
                <section className="w-full md:w-1/3 p-4">
                    <Link to="/news-link" className="relative w-305 h-171 group mb-4">
                        <video
                        autoPlay={true}
                        muted
                        playsInline
                        loop
                        controls
                        className="w-full  rounded-sm">
                            <source src={video} />
                        </video>
                    </Link>
                    <div className="">
                        <div className="mb-2 mt-4 font-bold text-xl hover:underline">
                            Tenez-vous au courant de l'actualité mondiale 
                        </div>
                        <div>
                            {textOnly.map((card, index) => (
                                <TextOnly
                                key={index}
                                {...card}
                                />  
                            ))}
                        </div>  
                    </div>
                </section>
            </main>
        </>
    )
}

export default FirstSection