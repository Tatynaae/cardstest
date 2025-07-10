import React from "react";
import {IconOfLock} from "../assets/icons/IconOfLock";
import {IconOfCheck} from "../assets/icons/IconOfChec";
import {IconOfStar} from "../assets/icons/IconOfStar";

export const Card = ({ data }) => {
    return (
        <div className="border border-[#E1EAF6] bg-[#F8F9FB] hover:bg-white p-3 rounded-lg mt-2">
            <div className="w-full flex gap-2 items-start">
                <div className="w-[40px] h-[40px] lg:w-[90px] lg:h-[90px] rounded bg-white flex items-center justify-center">
                    {data?.img}
                </div>
                <div className="w-[80%]">
                    <p className="font-medium text-lg m-0">{data?.title}</p>
                    <div className="bg-[#00A1B3] rounded-xl flex items-center justify-start gap-2 px-3 w-max mt-1 lg:hidden">
                        <IconOfLock color='#FFFFFF'/>
                        <span className="font-normal text-white text-sm">{data?.label}</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-2 items-center mt-2">
                <IconOfCheck/>
                <span className="font-normal text-[#333333] text-sm">{data?.description}</span>
            </div>
            <div className="w-full flex gap-2 items-center justify-between mt-2">
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
                <div className="text-[#00A1B3] font-semibold text-xl">{data?.price}</div>
            </div>
        </div>
    )
};