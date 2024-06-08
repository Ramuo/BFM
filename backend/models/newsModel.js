import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"


const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
      file: {
        type: String,
    },
      newsCategory: {
        type: String,
    },
      subCategory: {
        type: String,
    },
      type: {
        type: String,
    },
      tag: {
        type: String,
    },
      editorText: {
        type: String,
    },
      authorName: {
        type: String,
    },
      isLiveUpdate: {
        type: String,
    },
      liveUpdateType: {
        type: String,
    },
      liveUpdateHeadline: {
        type: String,
    },
}, {timestamps: true});

newsSchema.plugin(mongoosePaginate);

const News = mongoose.model("News", newsSchema);
export default News;