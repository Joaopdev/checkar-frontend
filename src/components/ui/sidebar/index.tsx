// Sidebar.js
import { SideBarWrapper, SidebarContainer } from "./styles";

interface ISidebar {
    children: React.ReactNode;
}

const Sidebar: React.FC<ISidebar> = ({ children }) => {
    return (
        <SideBarWrapper>
            <p>CheckCar Logo</p>
            <SidebarContainer>{children}</SidebarContainer>
        </SideBarWrapper>
    );
};

export default Sidebar;
