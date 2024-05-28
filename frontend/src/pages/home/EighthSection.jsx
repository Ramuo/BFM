import MidCard from "./MidCard";

function EighthSection() {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "https://www.challenges.fr/assets/img/2017/12/01/cover-r4x3w1200-5a218d136e641-de-muru.jpg",
      text: "'She wasn't too interested in talking': Cop pulls over 2-year-old",
      tag: "Regarder",
    },
    {
      link: "/your-link-url",
      imageSrc: "https://images.bfmtv.com/8V8PBsNXxSuFNd5F699otXjylO0=/0x0:1280x720/1280x0/images/Istres-simulation-de-sauvetage-en-helicoptere-1371478.jpg",
      text: "Sheep rescued after spending years at bottom of sea cliff",
      tag: "Regarder",
    },

    // Add more cards as needed
  ];
  const midCards2 = [
    {
      link: "/your-link-url",
      imageSrc: "https://i.ytimg.com/vi/xgigr_sA5aU/mqdefault.jpg",
      text: "Watch Australian woman break world record for surfing giant wave",
      tag: "Regarder",
    },
    {
      link: "/your-link-url",
      imageSrc: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2023-10/231018-alec-baldwin-rust-set-se-1111a-fca388.jpg",
      text: "New footage shows Alec Baldwin firing prop gun on 'Rust' set",
      tag: "Regarder",
    },

    // Add more cards as needed
  ];

  return (
    <div>
      <h2 className="pl-3.5 pt-6 pb-2 text-4xl font-bold">Regarder</h2>
      <div className="flex flex-wrap">
        {/* First Column (2 parts) */}
        <div className="w-full md:w-1/2 p-4">
          {midCards.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
        </div>

        {/* Second Column (1 part) */}
        <div className="w-full md:w-1/2 p-4">
          {/* Content for the second column */}
          {midCards2.map((card, index) => (
            <MidCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EighthSection