import React from "react";
import Logo from "../assets/icons/logo.svg";
import {Navbar} from "./Navbar";
import {IconArrowLeft} from "../assets/icons/IconArrowLeft";
import {useLocation} from "react-router-dom";
import PlusIcon from "../assets/icons/plus.svg";
import ProgramIcon from "../assets/icons/apps.svg";

export const Header = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <div className="w-full h-[60px] bg-[#111923] fixed left-0 top-0 z-99 md:px-4">
                <div className="max-w-[1110px] mx-auto h-full flex items-center justify-between">
                    <img src={Logo} alt=""/>
                    <Navbar />
                </div>
            </div>
            <div className="w-full h-[60px] bg-[#00A1B3] fixed left-0 top-[60px] z-99 md:px-4">
                <div className="max-w-[1110px] mx-auto h-full flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <IconArrowLeft />
                        <span className="text-white text-2xl font-semibold">{path.slice(1,2)?.toUpperCase() + path.slice(2)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 bg-white rounded-lg flex items-center gap-2">
                            <img src={PlusIcon} alt=""/>
                            <span className="text-[#00A1B3] font-normal text-sm underline">Add program</span>
                        </button>
                        <button className="px-4 py-2 bg-white rounded-lg flex items-center gap-2">
                            <img src={ProgramIcon} alt=""/>
                            <span className="text-[#00A1B3] font-normal text-sm underline">My programs: 0</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};