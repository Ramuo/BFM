import { Link } from "react-router-dom";
import ColumnHead from "./ColumnHead";
import MidCard from './MidCard';
import TextOnly from "./TextOnly";
import BidCard from "./BidCard";
import SmallHorizontalCard from "./SmallHorizontalCard";

const SecondSection = () => {
    const midCards = [
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
          text: "Texas Supreme Court blocks pregnant woman from emergency abortion",
        },
        {
          link: "/your-link-url",
          text: "HIV vaccine trial dubbed ‘last roll of the dice’ halted over poor results",
        },
        {
          link: "/your-link-url",
          text: "Bill Nye explains how climate change is affecting our pocket books",
        },
        {
          link: "/your-link-url",
          text: "Tesla failed at battery swapping. Stellantis says it may have the secret",
        },
        {
          link: "/your-link-url",
          text: "‘Not done yet.’ Cristiano Ronaldo scores on his 1,200th game",
        },
      ];
      const bigCard = [
        {
          link: "/your-link-url",
          imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhpuH1FoE9pTyS3eCA5yVlhhk4JM6T-5rNew&s",
          text: "Extinction Rebellion climate activists dye Venice’s Grand Canal green in COP 28 protest",
          tag: "",
        },
    
        // Add more cards as needed
      ];
      const smallHorizontalCard = [
        {
          link: "/your-link-url",
          imageSrc: "https://images.bfmtv.com/Je0uFySTzFwjrdnKTkgQmz-779s=/0x0:1280x720/images/IDF-Decouverte-la-Fondation-Cherqui-and-un-guide-d-experiences-insolites-a-Paris-1417044.jpg",
          text: "Her mother vanished when she was 1. Some 40 years later, a phone call from a stranger helped her understand why",
          tag: "",
        },
        {
          link: "/your-link-url",
          imageSrc: "https://images.bfmtv.com/8gMECNLn8Vp-S1bbmT8Z2ILMDHU=/0x0:1280x720/images/Le-pate-creole-la-recette-ideale-pour-epater-vos-invites-1774569.jpg",
          text: "The grove robbers flooding the market with fake extra virgin olive oil",
          tag: "",
        },
    
        // Add more cards as needed
      ];
      const smallHorizontalCard3 = [
        {
          link: "/your-link-url",
          imageSrc: "https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2019.2F09.2F03.2F77bb5a94-11fe-4ec0-a717-c40f3c4e6a63.2Ejpeg/1200x630/focus-point/513%2C407/les-locales-de-bfm-tv-rediffuseront-les-matchs-de-ligue-des-champions-du-psg-et-de-lyon-1349053.jpg",
          text: "Mbappé missed the penalty to give his team the lead",
          tag: "",
        },
        {
          link: "/your-link-url",
          imageSrc: "https://images.bfmtv.com/5mxFMiqER1nA1XDKI8C_hjZO0hM=/0x0:1280x720/1280x0/images/Paris-un-festival-de-musique-et-de-sport-organise-au-Halles-avant-les-JO-2024-1869541.jpg",
          text: "Analysis: Rishi Sunak is picking a fight on an issue that he probably cannot win",
          tag: "",
        },
        {
          link: "/your-link-url",
          imageSrc: "https://images.bfmtv.com/57QGFMh80JYi41HUmvQtNxeWouI=/0x0:1280x720/images/La-Tesla-Model-3-est-elle-vraiment-la-voiture-la-plus-vendue-en-Europe-BFMTV-repond-a-vos-questions-1155041.jpg",
          text: "Tesla failed at battery swapping. Stellantis says it may have the secret",
          tag: "",
        },
        {
          link: "/your-link-url",
          imageSrc: "https://images.bfmtv.com/YmWR89UpnacLSrRbFxjiBAO-y6c=/0x0:1280x720/1280x0/images/Passions-Provence-du-samedi-17-fevrier-2024-Marseille-initiation-au-golf-a-la-valentine-1807861.jpg",
          text: "‘Massive coup’: Top golfer who once criticized LIV golf joins for $300M",
          tag: "",
        },
    
        // Add more cards as needed
      ];

    return (
        <main className='flex flex-col md:flex-row'>
            <section className="w-full md:w-1/3 p-4">
              <ColumnHead columnHeadTag="Plus d'actualité"/>
              {midCards.map((card, index) => (
                  <MidCard key={index} {...card}/>
              ))}
              {textOnly.map((card, index) => (
                  <TextOnly key={index} {...card}/>
              ))}
            </section>

            <section className="w-full md:w-1/3 p-4">
              <ColumnHead columnHeadTag="À La Une"/>
              {bigCard.map((card, index) => (
                  <BidCard key={index} {...card}/>
              ))}
              {smallHorizontalCard.map((card, index) => (
                  <SmallHorizontalCard key={index} {...card}/>
              ))}
            </section>

            <section className="w-full md:w-1/3 p-4">
                <Link to="/adv-link">
                    <div className="w-full h-64 group mb-4">
                        <div className="w-full h-full group">
                            <img src="https://cdn.mgig.fr/2020/10/mg-d06fd858-w2427-w828-w1250.jpg" alt="" 
                            className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="text-xs">Publicité</div>
                    </div>
                </Link>
                <div className="">
                    {smallHorizontalCard3.map((card, index) => (
                       <SmallHorizontalCard key={index} {...card}/> 
                    ))}
                </div>
            </section>
        </main>
    );
};

export default SecondSection;