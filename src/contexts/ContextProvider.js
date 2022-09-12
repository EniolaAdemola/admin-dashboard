import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

// initialState of our items should be set to false only if the user
// clicks thats when it becomes false.
const initialState = {
	cart: false,
	chat: false,
	notification: false,
	userProfile: false,
};

// ContextProvider always have the "children" as property
export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [screenSize, setScreemSize] = useState(undefined);

	const handleClick = (clicked) => {
		setIsClicked({
			...initialState,
			[clicked]: true,
		});
	};
	return (
		<StateContext.Provider
			// What ever value we pass here
			value={{
				// it's the same as using activeMenu only like i did fo setActiveMenu
				activeMenu: activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreemSize,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
