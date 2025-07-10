import React from "react";
import {IconOfLock} from "../assets/icons/IconOfLock";
import {IconOfCheck} from "../assets/icons/IconOfChec";
import {IconOfStar} from "../assets/icons/IconOfStar";
import TextArrow from "../assets/icons/text-arrow.svg";

export const Card = ({ data }) => {
    return (
        <div className="border border-[#E1EAF6] bg-[#F8F9FB]  p-3 rounded-lg mt-2">
            <div className="w-full flex gap-2 items-start">
                <div className="w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded bg-white flex items-center justify-center">
                    {data?.img}
                </div>
                <div className="w-[80%] lg:w-[90%]">
                    <p className="font-medium text-lg m-0 lg:w-full lg:flex lg:items-center lg:justify-between">
                        <span>
                            {data?.title} <img src={TextArrow} alt="" className="inline align-middle ml-1 w-[14px] h-[14px]"/>
                        </span>
                        <div className="text-[#00A1B3] font-semibold text-xl hidden lg:block">{data?.price}</div>
                    </p>
                    <div className="bg-[#00A1B3] rounded-xl flex items-center justify-start gap-2 px-3 w-max mt-1 lg:hidden">
                        <IconOfLock color='#FFFFFF'/>
                        <span className="font-normal text-white text-sm">{data?.label}</span>
                    </div>
                    <div className="hidden lg:block">
                        <div className="w-full flex gap-2 items-center mt-2">
                            <IconOfCheck/>
                            <span className="font-normal text-[#333333] text-sm">{data?.description}</span>
                        </div>
                    </div>
                    <div className="hidden lg:block mt-3">
                        <div className="flex gap-4 items-center">
                            <div className="flex gap-1 items-center bg-[#E1EAF6] rounded-xl px-2">
                                <span className="text-sm font-semibold">{data?.rating}</span>
                                <IconOfStar/>
                            </div>
                            <div className="text-[#5B6A7D] font-normal text-sm">{data?.reviews}</div>
                            <div className="hidden lg:block">
                                <div className="bg-[#00A1B3] rounded-xl flex items-center justify-start gap-2 px-3 w-max mt-1">
                                    <IconOfLock width='11' height="16" color='#FFFFFF'/>
                                    <span className="font-normal text-white text-sm">{data?.label}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-2 items-center mt-2 lg:hidden">
                <IconOfCheck/>
                <span className="font-normal text-[#333333] text-sm">{data?.description}</span>
            </div>
            <div className="w-full flex gap-2 items-center justify-between mt-2">
                <div className="flex gap-4 items-center lg:hidden">
                    <div className="flex gap-1 items-center bg-[#E1EAF6] rounded-xl px-2">
                        <span className="text-sm font-semibold">{data?.rating}</span>
                        <IconOfStar/>
                    </div>
                    <div className="text-[#5B6A7D] font-normal text-sm">{data?.reviews}</div>
                    <div className="hidden lg:block">
                        <div className="bg-[#00A1B3] rounded-xl flex items-center justify-start gap-2 px-3 w-max mt-1">
                            <IconOfLock width='11' height="16" color='#FFFFFF'/>
                            <span className="font-normal text-white text-sm">{data?.label}</span>
                        </div>
                    </div>
                </div>
                <div className="text-[#00A1B3] font-semibold text-xl lg:hidden">{data?.price}</div>
            </div>
            <div className="hidden lg:block">
                <div className="w-full flex gap-2 items-center mt-2">
                    <span className="font-normal text-[#5B6A7D] text-sm">{data?.largeDesc}</span>
                </div>
            </div>
        </div>
    )
};