import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host':'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key':'6b014d329amshbaca9688a352ba7p1c4c12jsnb4567283805f'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest=(url)=>({url, headers:cryptoNewsHeaders})


export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({
        baseUrl
    }),
    endpoints:(builder)=>({
        getCryptoNews: builder.query({
            query:({newsCategory, count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off?textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi;