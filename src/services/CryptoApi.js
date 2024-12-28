import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '6b014d329amshbaca9688a352ba7p1c4c12jsnb4567283805f'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges'

const createRequest = (url) => ({
    url, headers: cryptoApiHeaders
})


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        })
    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery, useGetCryptoHistoryQuery } = cryptoApi;
// var options = {
//     method:'GET',
//     url:'https://coinranking1.p.rapidapi.com/exchanges',
//     headers:{
//         'x-rapidapi-host':'coinranking1.p.rapidapi.com',
//         'x-rapidapi-key':'6b014d329amshbaca9688a352ba7p1c4c12jsnb4567283805f'
//     }
// }