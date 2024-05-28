import { Link } from "react-router-dom";
import MidCard from "./MidCard";

function NinthSection() {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1rJECbf9bkVrrdpQB4KiCZCJTqh6GDwKEeYb7vn00NQ&s",
      text: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "https://images.bfmtv.com/umMwcWYTz29YZ4VnW7uTR6Uxj5E=/0x0:1280x720/860x0/images/Ils-n-ont-pas-pu-etre-separes-trop-longtemps-l-ex-femme-d-Igor-Bogdanoff-temoigne-sur-BFMTV-1204450.jpg",
      text: "",
      tag: "",
    },
  ];
  const midCards2 = [
    {
      link: "/your-link-url",
      imageSrc: "https://images.bfmtv.com/usPu7vr01CRlMJV6qWbBkaeNvb0=/0x27:2048x1179/385x0/images/Miss-France-2024-Eve-Gilles-Miss-Nord-Pas-de-Calais-a-Dijon-le-16-decembre-2023-1769740.jpg",
      text: "",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "https://images.bfmtv.com/4QaFhddHSWSrXrlXbofZNZBx2_0=/0x18:1600x918/1600x0/images/MIss-France-1759598.jpg",
      text: "",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "https://images.bfmtv.com/2mYInHt2g7aDOmuzclk0GNSZXQU=/0x106:2048x1258/2048x0/images/Kendji-Girac-1848955.jpg",
      text: "",
      tag: "",
    },
  ];
  const midCards3 = [
    {
      link: "/your-link-url",
      imageSrc: "https://img.lemde.fr/2021/07/30/0/0/5568/3712/664/0/75/0/e0b2f9b_5336788-01-06.jpg",
      text: "",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "https://images.bfmtv.com/LGYWDBfY9g061ap5av--Bdzl5iQ=/0x0:1280x720/images/Zidane-fete-ses-50-ans-retour-en-images-sur-la-carriere-d-une-legende-du-football-1437382.jpg",
      text: "",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "https://nagalandpost.com/wp-content/uploads/2022/12/FFF-to-decide.jpg",
      text: "",
      tag: "",
    },

    // Add more cards as needed
  ];
  // const midCards2 = [
  //   {
  //     link: "/your-link-url",
  //     imageSrc: "images/EighthSection/21.webp",
  //     text: "Watch Australian woman break world record for surfing giant wave",
  //     tag: "Watch",
  //   },
  //   {
  //     link: "/your-link-url",
  //     imageSrc: "images/EighthSection/22.webp",
  //     text: "New footage shows Alec Baldwin firing prop gun on 'Rust' set",
  //     tag: "Watch",
  //   },

  //   // Add more cards as needed
  // ];

  return (
    <div>
      <h2 className="pl-3.5 pt-6 pb-2 text-4xl font-bold">
        Photos
      </h2>
      <div className="flex">
        {/* First Column (2 parts) */}
        <div className="w-2/3 p-4 flex">
          <div className="w-1/3 p-2 ">
            {midCards.map((card, index) => (
              <MidCard key={index} {...card} />
            ))}
          </div>
          <div className="w-1/3 p-2 ">
            {midCards2.map((card, index) => (
              <MidCard key={index} {...card} />
            ))}
          </div>
          <div className="w-1/3 p-2 ">
            {midCards3.map((card, index) => (
              <MidCard key={index} {...card} />
            ))}
          </div>
        </div>

        {/* Second Column (1 part) */}
        <div className="w-1/3 p-4 ">
          {/* Content for the second column */}

          <Link to="/your-link-url">
            <div className=" relative w-305 h-171 group mb-4 ">
              {/* Replace 'videos/sample.mp4' with the path to your video file */}
              <div className="relative w-250 h-300 group">
                {/* Image */}
                <img
                  src="https://static.wixstatic.com/media/32d6e3_3a1c83a49e3348c285883e9ee7720500~mv2.jpg/v1/fill/w_816,h_1056,al_c,q_90/file.jpg"
                  alt="Analyse"
                  className="w-full h-full object-cover transition-transform transform group-hover:scale-100"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gray-400 opacity-0  ">
                  {/* Additional content can be added here, if needed */}
                </div>
                <div className=" text-xs">Publicité</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NinthSection