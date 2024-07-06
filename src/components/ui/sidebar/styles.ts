import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

export const SideBarWrapper = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	p {
		color: red;
		z-index: 9999;
		margin: 20px 60px;
	}
`;

export const SidebarContainer = styled.div`
	height: 100vh;
	width: 250px;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #fff;
	overflow-x: hidden;
	transition: 0.3s;
	padding-top: 60px;
	z-index: 2;
	gap: 10px;
	display: flex;
	flex-direction: column;
`;

export const SidebarButton = styled.button`
	top: 15px;
	left: 15px;
	font-size: 20px;
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	z-index: 9800;
`;

export const SidebarLink = styled.button`
	padding: 10px 15px;
	text-decoration: none;
	font-size: 18px;
	color: #818181;
	display: flex;
	flex-direction: row;
	align-items: center;
	border: none;
	background: none;
	text-align: left;
	width: 100%;
	height: 40px;
	cursor: pointer;
	transition: 0.3s;
	overflow: hidden;
	white-space: nowrap;

	&:hover {
		color: #f1f1f1;
	}

	svg {
		margin-right: 10px;
		transition: margin-right 0.3s;
	}
`;

export const MenuIcon = styled(FaBars)`
	color: black;
	font-size: 24px;
	z-index: 9900;
	margin-left: 12px;
	margin-top: 12px;
`;

export const CloseIcon = styled(FaTimes)`
	color: black;
	font-size: 24px;
	margin-left: 12px;
	margin-top: 12px;
`;

export const Overlay = styled.div`
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1;
`;

export const MenuOptionText = styled.p`
	color: #818181;
	font-size: 12px;
	margin-left: 40px;
	font-family: Verdana, Geneva, Tahoma, sans-serif;

	&:hover {
		color: #f1f1f1;
	}
`;
