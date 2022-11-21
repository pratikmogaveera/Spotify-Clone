import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v2',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '6b776c3000mshea84bb09187ac6ap1106c7jsnc3318cdc913f')

            return headers
        }
    }),
    endpoints: (builder) => ({
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        }),
});

export const {
    useGetSongDetailsQuery,
} = shazamCoreApi;