import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

// initialState of our items should be set to false only if the user
// clicks thats when it becomes false.
const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

// ContextProvider always have the "children" as property
// export const ContextProvider = ({children}) = {
//     return (
//         // <StateContext.Provider
//         // // What ever value we pass here
//         //     value= {{test: 'text'}}
//         // >
//         // </StateContext.Provider>
//     )
// }
