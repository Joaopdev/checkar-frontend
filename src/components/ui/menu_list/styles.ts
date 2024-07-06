import { ListItemText } from "@mui/material";
import styled from "styled-components";

export const SC_List = styled.nav`
	width: 100%;
	max-width: 360;
	background-color: white;
	color: black;
`;
export const SC_ListItemText = styled(ListItemText)`
	& .MuiListItemText-primary {
		font-size: 16px;
		color: black;
		font-weight: 600;
		font-family: "Montserrat", sans-serif;
	}
`;

export const SC_ListItemOption = styled(ListItemText)`
	& .MuiListItemText-primary {
		font-size: 12px;
		color: black;
		font-weight: 500;
		text-align: right;
		margin-right: 20px;
		font-family: "Montserrat", sans-serif;
	}
`;

