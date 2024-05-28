import MidCard from "./MidCard";
import SmallHorizontalCard from "./SmallHorizontalCard";
import BidCard from "./BidCard";


const FourthSection = () => {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "https://ew.com/thmb/LOHub0ifJZFx9D25bkT8FVI-Oog=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/madona-celebration-tour-012424-166dc8e9503d4ee9ba363f3aba677de9.jpg",
      text: "Madonna’s ‘Celebration Tour’ is her most radical LGBTQ statement in decades",
      tag: "OPINION",
    },
  
    // Add more cards as needed
  ];

  const smallHorizontalCard = [
    {
      link: "/your-link-url",
      imageSrc: "https://www.challenges.fr/assets/img/2024/02/01/cover-r4x3w1200-65bbedc976166-6015-hr.jpg",
      text: "More women of color in the US are choosing birth centers over hospitals",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4nLUnSNgYMJw5pzdtj5twl6ZpCwEA06NQA&s",
      text: "First tyrannosaur fossil discovered with its last meal perfectly preserved in stomach",
      tag: "",
    },

    {
      link: "/your-link-url",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSph9QjgZGP20DTvQR2LDr8IkFKGhGyfyMICNuzYp8qGQ&s",
      text: "Salah scores 200th Liverpool goal to spark comeback win over Crystal Palace",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "https://www.actu-juridique.fr/app/uploads/2020/02/AdobeStock_273041234-scaled.jpeg",
      text: "Police officer borrows bike to chase drug dealer",
      tag: "",
    },

    // Add more cards as needed
  ];
  const bigCard = [
    {
      link: "/your-link-url",
      imageSrc: "https://media.ouest-france.fr/v1/pictures/MjAyMjAyNWNiMGZmZWE4Y2JkZGUyYjk2YWIyNGU4YTg3N2ZlNDk?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=30a59185cd17238e4c3176b4c85d7167823a8e6e293217cb4a133b404b49c505",
      text: "French teenage phenom Ilia Malinin makes more figure skating history",
      tag: "",
    },

    // Add more cards as needed
  ];
    
  const smallHorizontalCard2 = [
      {
        link: "/your-link-url",
        imageSrc: "https://static.actu.fr/uploads/2023/08/var-marjorie-ghizoli-prend-la-tete-de-la-police-nationale-1494238.jpg",
        text: "Retired NYPD cops visited Martin Luther King Jr.’s birth home to take a picture. They caught an alleged would-be arsonist",
        tag: "",
      },
      {
        link: "/your-link-url",
        imageSrc: "https://images.bfmtv.com/Qj4L7pV_CqCezJecWHj_YIcG3wo=/0x0:1280x720/1280x0/images/C-beau-chez-nous-Le-sentier-du-littoral-entre-Nice-et-Villefranche-sur-Mer-un-bord-de-mer-unique-1679424.jpg",
        text: "The world’s most spectacular coastlines",
        tag: "",
      },
  
      // Add more cards as needed
  ];
    
  const midCards2 = [
      {
        link: "/your-link-url",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRac_71RYHBidVLk1oQr6qZWLTllO3QFm9oS-khed4JFQ&s",
        text: "Frédéric Mitterrand remembers the ‘generosity’ of her late ‘Love Story’ costar Ryan O’Neal",
        tag: "",
      },
  
      // Add more cards as needed
  ];
  const smallHorizontalCard3 = [
      {
        link: "/your-link-url",
        imageSrc: "https://images.bfmtv.com/PaA5Fvz0S9pI909HVVCIPyhHe1M=/0x0:1280x720/1280x0/images/C-beau-chez-nous-a-la-decouverte-de-Domfront-un-village-medieval-1673600.jpg",
        text: "‘Bone biographies’ reveal what life was like for everyday medieval people",
        tag: "",
      },
      {
        link: "/your-link-url",
        imageSrc: "https://images.bfmtv.com/qQuxVf6i1vbKF82k_RHUEztixP8=/0x0:1280x720/images/Le-stress-favorise-bel-et-bien-lapparition-de-cheveux-blancs-298033.jpg",
        text: "Could the most magical time of year be so full of loneliness, anger and stress?",
        tag: "",
      },
      {
        link: "/your-link-url",
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKRyzNgTMIZ5xxMT9uBIIhaFxAB2Jy_wteA&s",
        text: "How to care for a Christmas cactus",
        tag: "",
      },
      {
        link: "/your-link-url",
        imageSrc: "https://images.bfmtv.com/gWGpW6eBDkiuUKNxu5IaliZ4AIo=/4x159:468x420/464x0/images/1109102.jpg",
        text: "‘Sickest thing I’ve ever done’: Watch epic trick off skyscraper",
        tag: "",
      },
  
      // Add more cards as needed
  ];


  return (
    <main className="flex flex-col md:flex-row">
        <section className="w-full md:1/3 p-4">
          {midCards.map((card, index) => (
              <MidCard key={index} {...card}/> 
          ))}
          {smallHorizontalCard.map((card, index) => (
              <SmallHorizontalCard key={index} {...card}/> 
          ))}
        </section>

        <section className="w-full md:2/3 p-4">
          {bigCard.map((card, index) => (
              <BidCard key={index} {...card}/> 
          ))}
          {smallHorizontalCard2.map((card, index) => (
              <SmallHorizontalCard key={index} {...card}/> 
          ))}
        </section>
        <section className="w-full md:1/3 p-4">
          {midCards2.map((card, index) => (
              <MidCard key={index} {...card}/> 
          ))}
          {smallHorizontalCard3.map((card, index) => (
              <SmallHorizontalCard key={index} {...card}/> 
          ))}
        </section>
    </main>
)
}

export default FourthSection;