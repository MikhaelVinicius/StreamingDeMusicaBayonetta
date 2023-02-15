import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



  
 
    export const shazamCoreApi = createApi({reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders:(headers) => {
        headers.set('X-RapidAPI-Key', 'd6f9a89a16msh9fabf6d5b9f1856p1bf1dajsne2c6e5779c9f');
        return headers;
    },

}),
    endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
        getSongDetails: builder.query({query:(songid) => `/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({query: ({songid}) => `/tracks/related?track_id=${songid}` }),
    })
    

});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
} = shazamCoreApi;