import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  tagTypes: ['Todos'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getTodo: build.query({
      query: () => 'todo',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Todos', id })), { type: 'Todos', id: 'LIST' }]
          : [{ type: 'Todos', id: 'LIST' }],
    }),
    addTodo: build.mutation({
      query: (body) => ({
        url: 'todo',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    deleteTodo: build.mutation({
      query: (id) => ({
        url: `todo/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    toggleTodo: build.mutation({
      query: (body) => ({
        url: `todo/${body.id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
  }),
});

export const { useGetTodoQuery, useAddTodoMutation, useDeleteTodoMutation, useToggleTodoMutation } =
  todoApi;
