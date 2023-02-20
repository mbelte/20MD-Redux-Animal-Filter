import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type AnimalType = {
    name: string;
    image: string;
    specie: string;
}

export const animalsApi = createApi({
    reducerPath: 'animalsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3004/'
    }),
    tagTypes: ['Animals'],
    endpoints: (builder) => ({
        getAllAnimals: builder.query<AnimalType[], void>({
            query: () => 'animals',
        }),

        postAnimal: builder.mutation<AnimalType, Partial<AnimalType>>({
            query: ({ ...post }) => {
                url: '/animals',
                method: 'POST',
                body: post,
            }
        })
    })
})



export const { useGetAllAnimalsQuery, usePostAnimalMutation } = animalsApi