import asyncHandler from "../middleware/asyncHandler.js";
import News from "../models/newsModel.js";
import dotenv from "dotenv";
dotenv.config();
import mongodb from "mongodb";
import { v4 as uuid } from 'uuid';
uuid();
const connectDB = new mongodb.MongoClient(process.env.MONGO_URI);
import mongoosePagination from "mongoose-paginate-v2"



//@desc     Create News 
//@route    POST /api/news/createnews 
//@acc      Private/admin
const createnews = asyncHandler (async(req, res) => {
    
    console.log("NewsData is :", req.body);

    try {
        if (req.file) {
            connectDB.connect().then(() => {
            const db = connectDB.db("Mern-Blog-V2");
            const bucket = new mongodb.GridFSBucket(db);
    
            const file = req.file;
            console.log("File is :", file);
            const fileBuffer = file.buffer;
            const uniqueIdentifier = uuid();
    
            const newFileName = `${uniqueIdentifier}_${file.originalname}`;
    
            bucket
              .openUploadStream(newFileName)
              .end(fileBuffer)
              .on("error", function (error) {
                console.log("Error uploading file", error);
                res.status(500).json({
                  message: "Error uplading file",
                  error: error.message,
                });
              })
              .on("finish", function (file) {
                const news = new News({
                  title: req.body.title,
                  file: newFileName,
                  newsCategory: req.body.newsCategory,
                  subCategory: req.body.subCategory,
                  type: req.body.type,
                  tag: req.body.tag,
                  editorText: req.body.editorText,
                  authorName: req.body.authorName,
                  isLiveUpdate: req.body.isLiveUpdate,
                  liveUpdateType: req.body.liveUpdateType,
                  liveUpdateHeadline: req.body.liveUpdateHeadlinie,
                });
                news
                  .save(news)
                  .then((data) => {
                    res.status(200).json("News Submitted Successfull");
                  })
                  .catch((error) => {
                    res.status(500).json({
                      message: "Error saving news",
                      error: error.message,
                    });
                  });
                console.log("News Submitted Successfull");
              });
          });
        } else {
          const news = new News({
            title: req.body.title,
            newsCategory: req.body.newsCategory,
            subCategory: req.body.subCategory,
            type: req.body.type,
            tag: req.body.tag,
            editorText: req.body.editorText,
            authorName: req.body.authorName,
            isLiveUpdate: req.body.isLiveUpdate,
            liveUpdateType: req.body.liveUpdateType,
            liveUpdateHeadline: req.body.liveUpdateHeadlinie,
          });
          news
            .save(news)
            .then((data) => {
              res.status(200).json("News Submitted Successfull");
            })
            .catch((error) => {
              res.status(500).json({
                message: "Error saving news",
                error: error.message,
              });
            });
        }
    } catch (error) {
        console.log("Internal server error: ", error);
        res.status(500).json({
          message: "Internal Server Error",
          error: error.message,
        });
    }
});

//@desc     Get News 
//@route    GET /api/news/createnews 
//@acc      Private/admin
const newsList = asyncHandler(async(req, res) => {
  
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 5;

    const options = {
      page: page,
      limit: pageSize,
      sort: { createdAt: -1 }, // Adjust the sorting based on your requirements
    };

    const paginatedNews = await News.paginate({}, options);
    res.json({
      news: paginatedNews.docs,
      totalPages: paginatedNews.totalPages,
    });
  } catch (error) {
    console.error("Error fetching news data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  
})


export {
    createnews,
    newsList,
};