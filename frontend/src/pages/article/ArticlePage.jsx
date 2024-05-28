import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ThirdAdv from "../home/ThirdAdv";
import TenthSection from "../home/TenthSection";
import ColumnHead from "../home/ColumnHead";
import SmallHorizontalCard from "../home/SmallHorizontalCard";
// import ThirdAdv from "../Home/ThirdAdv";
// import TenthSection from "../Home/TenthSection";
// import ColumnHead from "../Commmon/ColumnHead/ColumnHead";
// import SmallHorizontalCard from "../components/Cards/SmallHorizontalCard";


function Article() {
 
  const smallHorizontalCard = [
    {
      link: "/your-link-url",
      imageSrc: "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/Chris-Sununu-endorses-Nikki-Haley1-Manchester-NH-Dec.-12.-2023.jpg",
      text: "Sununu endorses Haley, hoping to slow Trump’s march to ...",
      tag: "",
    },
    {
      link: "/your-link-url",
      imageSrc: "https://www.wabe.org/app/uploads/news/npr-stories/1225880792/ap24020768335966_custom-77c607d2ba6b504b08aa4e02de7d06a3053260c4-scaled.jpg",
      text: "Here’s Nikki Haley’s path to the Republican ...",
      tag: "",
    },

    {
      link: "/your-link-url",
      imageSrc: "https://www.dailynews.com/wp-content/uploads/2023/12/AP23271068546767-1.jpg?w=525",
      text: "Opinion: The best way to keep Trump off the ballot",
      tag: "",
    },
  ];

  return (
     
    <div className="flex flex-wrap">
      <div className="w-full md:w-3/4 p-4">
        <div className="title">
          <h1 className="text-4xl font-bold m-4 pb-4">Main Title H1</h1>
        </div>
        <div className="author flex">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/231208231252-chris-christie-new-hampshire-10132023.jpg?c=16x9&q=h_833,w_1480,c_fill"
              className="object cover w-full h-full"
              alt=""
            />
          </div>
          <div className="author-name-date">
            <div className="author-name text-base text-gray-600 pl-2">
              By <span className="underline">Author name</span> ,
              Alejandra Jaramillo and Alison Main, CNN
            </div>
            <div className="publish-date text-base text-gray-600 pl-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="pl-2">
                5 minute read Published 9:10 AM EST, Sat December 9, 2023
              </span>
            </div>
          </div>
        </div>
        <div className="content pt-6">
          <div className="image-box bg-gray-100">
            {/* <FileDisplay fileName={article.file} /> */}
          </div>
          <div
            // dangerouslySetInnerHTML={{ __html: article.editorText }}
            className="article-text ml-2 md:ml-16 mr-2 md:mr-16 mt-4"></div>
          <ThirdAdv />
        </div>
        <TenthSection />
      </div>
      <div className="w-full md:w-1/4 p-4">
        <div className="mt-12 md:mt-[12.5rem]">
          <ColumnHead columnHeadTag="MORE FROM BFM" />
        </div>
        <div>
          {smallHorizontalCard.map((card, index) => (
            <SmallHorizontalCard key={index} {...card} />
          ))}
        </div>
        <div className="mt-5">
          <Link to="/adv-link">
            <div className="w-full h-64 group mb-4">
              <div className="w-full h-full group">
                <img
                  src="https://i0.wp.com/www.automotive-marketing.fr/wp-content/uploads/2024/03/pub-peugeot-e-3008.jpg?fit=1856%2C1038&ssl=1"
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="text-xs">Advertisement</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Article;