import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const albumApi = createApi({
  reducerPath: "albumApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAlbum: builder.query({
      query: () => "photos?albumId=1",
    }),
    getPhoto: builder.query({
      query: (id) => `photos?id=${id}`,
      transformResponse: (response) => response[0],
    }),
  }),
});

export const { useGetAlbumQuery, useGetPhotoQuery } = albumApi;
