// Sidebar.js
import { useState } from "react";
import {
    CloseIcon,
    MenuIcon,
    MenuOptionText,
    SideBarWrapper,
    SidebarButton,
    SidebarContainer,
    SidebarLink,
} from "./styles";
import { FaCog, FaHome, FaInfo, FaUser } from "react-icons/fa";

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        setIsFixed(!isFixed);
    };

    const closeSidebar = () => {
        setIsOpen(false);
        setIsFixed(false);
    };
    return (
        <SideBarWrapper>
            <SidebarButton onClick={toggleSidebar}>
                {isOpen ? <CloseIcon /> : <MenuIcon />}
            </SidebarButton>
            <SidebarContainer
                isOpen={isOpen}
                onMouseEnter={() => !isFixed && setIsOpen(true)}
                onMouseLeave={() => !isFixed && setIsOpen(false)}
            >
                <SidebarLink isOpen={isOpen} onClick={closeSidebar}>
                    <FaHome />
                    {isOpen && <MenuOptionText>Home</MenuOptionText>}
                </SidebarLink>
                <SidebarLink isOpen={isOpen} onClick={closeSidebar}>
                    <FaUser />
                    {isOpen && <MenuOptionText>Profile</MenuOptionText>}
                </SidebarLink>
                <SidebarLink isOpen={isOpen} onClick={closeSidebar}>
                    <FaCog />
                    {isOpen && <MenuOptionText>Settings</MenuOptionText>}
                </SidebarLink>
                <SidebarLink isOpen={isOpen} onClick={closeSidebar}>
                    <FaInfo />
                    {isOpen && <MenuOptionText>About</MenuOptionText>}
                </SidebarLink>
            </SidebarContainer>
        </SideBarWrapper>
    );
};

export default Sidebar;
