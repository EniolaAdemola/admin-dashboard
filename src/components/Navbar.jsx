import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import homeAvatar from "../data/homeAvatar.png";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
	<TooltipComponent content={title} position="BottomCenter">
		<button
			type="button"
			onClick={customFunc}
			style={{ color }}
			className="relative text-xl rounded-full p-3 hover:bg-light-gray"
		>
			<span
				style={{ background: dotColor }}
				className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
			/>
			{icon}
		</button>
	</TooltipComponent>
);

const Navbar = () => {
	const {
		activeMenu,
		setActiveMenu,
		isClicked,
		setIsClicked,
		handleClick,
		screenSize,
		setScreemSize,
		currentColor,
	} = useStateContext();

	// use Effect accepts a `[]` dependency array meaning when is this going to be called
	useEffect(() => {
		// Handling the screen size
		const handleResize = () => setScreemSize(window.innerWidth);

		window.addEventListener("resize", handleResize);

		handleResize();

		// in react when we use event listeners we usualy remove it so return this below
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (screenSize <= 900) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	return (
		<div className="flex justify-between p-2 md:mx-6 relative">
			<NavButton
				title="Menu"
				customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
				color={currentColor}
				icon={<AiOutlineMenu />}
			/>
			<div className="flex">
				<NavButton
					title="Cart"
					customFunc={() => handleClick("cart")}
					color={currentColor}
					icon={<FiShoppingCart />}
				/>
				<NavButton
					title="Chat"
					dotColor="#03C9D7"
					customFunc={() => handleClick("chat")}
					color={currentColor}
					icon={<BsChatLeft />}
				/>
				<NavButton
					title="Notification"
					dotColor="#03C9D7"
					customFunc={() => handleClick("notification")}
					color={currentColor}
					icon={<RiNotification3Line />}
				/>
				<TooltipComponent content="Profile" position="BottomCenter">
					<div
						className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
						onClick={() => handleClick("userProfile")}
					>
						<img src={homeAvatar} className="rounded-full w-9 h-9" />
						<p className="text-gray-400">
							<span>Hi, </span>{" "}
							<span className="text-gray-400 font-bold ml-1 text-14">
								Eniola
							</span>
						</p>
						<MdKeyboardArrowDown className="text-gray-400 font-bold ml-1 text-14" />
					</div>
				</TooltipComponent>

				{isClicked.cart && <Cart />}
				{isClicked.chat && <Chat />}
				{isClicked.notification && <Notification />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	);
};

export default Navbar;
