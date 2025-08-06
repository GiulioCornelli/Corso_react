import { createSlice, isAction } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                id: 1,
                titol: "Tokyo",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?",
                imgUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisitede: false
            },
            {
                id: 2,
                titol: "New York",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?",

                imgUrl: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisitede: true
            },
            {
                id: 3,
                titol: "Paris",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?",

                imgUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisitede: true
            },
            {
                id: 4,
                titol: "London",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus?",
                imgUrl: "https://images.unsplash.com/photo-1494922275507-58dc039ed337?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isVisitede: true
            }
        ]
    },
    reducers: {
        add: (state, action)=>{
            state.value.push(action.payload)
        }
    }

});

export const {add} = citiesSlice.actions; 

export const citiesReducer = citiesSlice.reducer;


