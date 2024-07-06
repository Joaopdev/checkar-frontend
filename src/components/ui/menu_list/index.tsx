import React, { useState } from "react";

import { SC_List, SC_ListItemOption, SC_ListItemText } from "./styles";

import { Collapse, ListItemButton, ListItemIcon } from "@mui/material";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

interface IMenuSideBar {
    icon: React.ReactNode;
    text: string;
    subItems?: { text: string; iconOptionList?: React.ReactNode }[];
    isExpandable?: boolean;
}

const MenuListSideBar: React.FC<IMenuSideBar> = ({
    icon,
    text,
    subItems,
    isExpandable,
}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        if (isExpandable) {
            setOpen(!open);
        } else {
            return;
        }
    };
    return (
        <div>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <SC_ListItemText primary={text} />
                {isExpandable && (
                    <>{open ? <MdExpandLess /> : <MdExpandMore />}</>
                )}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <SC_List>
                    {subItems?.map((subItem, index) => (
                        <ListItemButton key={index} sx={{ pl: 4 }}>
                            <ListItemIcon>
                                {subItem.iconOptionList}
                            </ListItemIcon>
                            <SC_ListItemOption primary={subItem.text} />
                        </ListItemButton>
                    ))}
                </SC_List>
            </Collapse>
        </div>
    );
};

export default MenuListSideBar;
