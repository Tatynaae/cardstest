import React, { useState } from "react";
import IconSEO from "../assets/icons/seo_ico.svg";
import IconPosters from "../assets/icons/posteri-sabmitteri_ico.svg";
import IconSocial from "../assets/icons/social.svg";
import IconGaming from "../assets/icons/gaming.svg";
import IconScripts from "../assets/icons/scripts.svg";
import IconPositions from "../assets/icons/positions.svg";
import IconParser from "../assets/icons/parser.svg";
import IconVote from "../assets/icons/vote.svg";
import IconAuto from "../assets/icons/auto.svg";
import IconBitcoin from "../assets/icons/bitc.svg";
import IconWeb from "../assets/icons/web.svg";
import IconOther from "../assets/icons/other.svg";
import Plus from "../assets/icons/plus-white.svg";

const sidebarList = [
    {
        title: 'Category',
        items: [
            { title: "SEO", img: IconSEO },
            { title: "Posters and submitters", img: IconPosters },
            { title: "Social networks", img: IconSocial },
            { title: "Gaming bots", img: IconGaming },
            { title: "Scripts and libraries", img: IconScripts },
            { title: "Position checkers", img: IconPositions },
            { title: "Parsers", img: IconParser },
            { title: "Votebots", img: IconVote },
            { title: "Auto earnings", img: IconAuto },
            { title: "Bitcoin bots", img: IconBitcoin },
            { title: "Websites", img: IconWeb },
            { title: "Others", img: IconOther },
        ]
    },
    {
        title: 'Articles',
        items: [
            { title: "SEO", img: IconSEO },
            { title: "Posters and submitters", img: IconPosters },
            { title: "Social networks", img: IconSocial },
            { title: "Gaming bots", img: IconGaming },
            { title: "Scripts and libraries", img: IconScripts },
            { title: "Position checkers", img: IconPositions },
            { title: "Parsers", img: IconParser },
            { title: "Votebots", img: IconVote },
            { title: "Auto earnings", img: IconAuto },
            { title: "Bitcoin bots", img: IconBitcoin },
            { title: "Websites", img: IconWeb },
            { title: "Others", img: IconOther },
        ]
    }
];

export const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState('Category');

    return (
        <div className="md:py-4 px-2 border-l border-l-[#E1EAF6] w-[270px] h-full">
            <form className="w-full mb-4">
                <div className="flex">
                    <div className="w-full flex items-center gap-2 rounded border border-gray-300 overflow-hidden">
                        <input
                            type="search"
                            className="block px-2.5 py-2 w-full text-sm text-gray-900 bg-white outline-none"
                            placeholder="Search..."
                            required
                        />
                        <button
                            type="submit"
                            className="p-2.5 text-sm font-medium h-full text-gray-300"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
            {sidebarList.map((item, i) => {
                const className = `${openDropdown === item.title && "w-[5px] bg-[#00A1B3] h-[28px]"} rounded mr-3`;
                return (
                    <div key={i}>
                        <button
                            onClick={() => setOpenDropdown(prev => prev !== item.title ? item.title : '')}
                            className={`w-full h-[36px] text-[#333333] font-semibold text-base text-left mt-1 py-2 flex items-center hover:bg-gray-100
                            ${openDropdown === item.title && "bg-[#F8F9FB] rounded"}
                        `}
                        >
                            <div
                                className={className}></div>
                            {item.title}
                        </button>

                        <ul className={`transition-all duration-300 overflow-hidden ${
                            openDropdown === item.title ? "h-fit" : "h-0"
                        }`}>
                            {item.items.map((child, j) => (
                                <li key={j}
                                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    <img src={child.img} alt={child.title} className="w-4 h-4"/>
                                    <span className="text-[#333333] font-normal text-sm">{child.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
            <button className="w-full bg-[#00A1B3] rounded mt-4 h-[40px] flex items-center justify-center gap-2">
                <img src={Plus} alt=""/>
                <span className="text-white font-normal text-base">Add program</span>
            </button>
        </div>
    );
};
