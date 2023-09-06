import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const messageApi = createApi({
  reducerPath: 'messageApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),

  endpoints: (builder: any) => ({
    getMessages: builder.query({
      query: (creatorId: string) => ({
        url: `/message/${creatorId}`,
        method: 'GET',
      }),
    }),

    getMessageById: builder.query({
      query: (data: any) => ({
        url: `/message/${data.creatorId}/${data.recipientId}`,
      }),
    }),

    createMessage: builder.mutation({
      query: (data: any) => ({
        url: `/message`,
        method: 'POST',
        body: data,
      }),
    }),

    updateMessage: builder.mutation({
      query: (data: any) => ({
        url: `/message/${data.id}`,
        method: 'PUT',
        body: data,
      }),
    }),

    deleteMessage: builder.mutation({
      query: (id: string) => ({
        url: `/message/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useCreateMessageMutation, useDeleteMessageMutation, useUpdateMessageMutation, useGetMessageByIdQuery, useGetMessagesQuery } = messageApi;
