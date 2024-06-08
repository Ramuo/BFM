import { apiSlice } from "./apiSlice";
import { NEWS_URL } from "../constant";


export const newsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        newsList: builder.query({
            query: ({pageNumber}) => ({
                url: `${NEWS_URL }/newsList`,
                params:{
                   pageNumber 
                }
            }),
            providesTags: ['News'],
            keepUnusedDataFor: 5,
        }),
    })
});

export const {
    useNewsListQuery,
} = newsApiSlice;