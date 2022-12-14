import { colorCollections } from "@syncfusion/ej2/treemap";
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
	const [currentColor, setCurrentColor] = useState("#03C9D7");
	const [currentMode, setCurrentMode] = useState("Light");
	const [themeSettings, setThemeSettings] = useState(false);

	const setMode = (e) => {
		setCurrentMode(e.target.value);

		localStorage.setItem("themeMode", e.target.value);

		setThemeSettings(false);
	};
	const setColor = (color) => {
		setCurrentColor(color);

		localStorage.setItem("colorMode", color);
		setThemeSettings(false);
	};
	const handleClick = (clicked) => {
		setIsClicked({
			...initialState,
			[clicked]: true,
		});
	};
	const closeNav = (clicked) => {
		setIsClicked({
			...initialState,
			[clicked]: false,
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
				currentMode,
				currentColor,
				themeSettings,
				setThemeSettings,
				setMode,
				setColor,
				closeNav,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
