import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const NewsHeaders = { 
  'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com', 
  'X-RapidAPI-Key': '29748c5ecamshed47e3e3f6ef6ccp1cd272jsn499a5dedc5b6'
}
const baseUrl = "https://google-news-api1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: NewsHeaders });
export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
      getNews: builder.query({
        query: ({ newsCategory, count }) =>
          createRequest(
            `/search?language=EN&q=chess&limit=15`
          ),
      }),
    }),
  });
  export const { useGetNewsQuery } = newsApi;