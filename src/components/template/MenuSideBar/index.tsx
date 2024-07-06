import React from "react";
import Sidebar from "../../ui/sidebar";
import MenuListSideBar from "../../ui/menu_list";
import {
    FaCar,
    FaHome,
    FaNewspaper,
    FaPaperPlane,
    FaProcedures,
} from "react-icons/fa";

const MenuSideBar: React.FC = () => {
    return (
        <Sidebar>
            <MenuListSideBar
                icon={<FaHome />}
                text={"Home"}
                isExpandable={false}
            />
            <MenuListSideBar
                icon={<FaPaperPlane />}
                text={"Manutenções"}
                subItems={[
                    {
                        text: "Nova manutenção",
                        iconOptionList: <FaNewspaper />,
                    },
                    { text: "Realizadas", iconOptionList: <FaPaperPlane /> },
                    { text: "Agendadas", iconOptionList: <FaPaperPlane /> },
                    { text: "Vencidas", iconOptionList: <FaPaperPlane /> },
                ]}
                isExpandable
            />
            <MenuListSideBar
                icon={<FaProcedures />}
                text={"Relatórios"}
                subItems={[
                    {
                        text: "Financeiro",
                        iconOptionList: <FaNewspaper />,
                    },
                    {
                        text: "Peças utilizadas",
                        iconOptionList: <FaPaperPlane />,
                    },
                    {
                        text: "Veículos consertados",
                        iconOptionList: <FaPaperPlane />,
                    },
                    {
                        text: "Custo fornecedor",
                        iconOptionList: <FaPaperPlane />,
                    },
                ]}
                isExpandable
            />
            <MenuListSideBar
                icon={<FaCar />}
                text={"Veículos"}
                subItems={[
                    {
                        text: "Financeiro",
                        iconOptionList: <FaNewspaper />,
                    },
                    {
                        text: "Peças utilizadas",
                        iconOptionList: <FaPaperPlane />,
                    },
                    {
                        text: "Veículos consertados",
                        iconOptionList: <FaPaperPlane />,
                    },
                    {
                        text: "Custo fornecedor",
                        iconOptionList: <FaPaperPlane />,
                    },
                ]}
                isExpandable
            />
            <MenuListSideBar
                icon={<FaProcedures />}
                text={"Veículos"}
                subItems={[
                    {
                        text: "Financeiro",
                        iconOptionList: <FaNewspaper />,
                    },
                    {
                        text: "Peças utilizadas",
                        iconOptionList: <FaPaperPlane />,
                    },
                    {
                        text: "Veículos consertados",
                        iconOptionList: <FaPaperPlane />,
                    },
                    {
                        text: "Custo fornecedor",
                        iconOptionList: <FaPaperPlane />,
                    },
                ]}
                isExpandable
            />
        </Sidebar>
    );
};

export default MenuSideBar;
