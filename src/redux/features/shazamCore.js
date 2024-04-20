import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '172d9b3315msh36e639f14d3c211p1be1b8jsn1099cde2ee46',
//         'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
//     }
// };

// fetch('/search', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com',
        // before each api call prepare
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '172d9b3315msh36e639f14d3c211p1be1b8jsn1099cde2ee46')
            return headers
        }
    }),
    endpoints: (builder) => ({
        // redux allows this as hook
        getTopCharts: builder.query({ query: () => '/charts/get-top-songs-in-world' })
    })
})

export const {
    useGetTopChartsQuery
} = shazamCoreApi