import React from "react";
import {IconOfLock} from "../../../assets/icons/IconOfLock";
import {IconOfJs} from "../../../assets/icons/IconOfJs";

export const TopCards = () => {
    return (
        <div className="flex md:flex-nowrap flex-wrap items-center justify-center gap-2 w-full">
            <div className="md:w-1/2 w-full bg-[#D4EEFF] p-2 rounded flex gap-2 items-center">
                <div className="w-[40px] h-[40px] rounded bg-white flex items-center justify-center">
                    <IconOfLock className="h-[70%] w-[70%] object-contain"/>
                </div>
                <p className="font-medium text-sm w-[80%]">Review Puppeteer plugin to solve reCAPTCHAs automatically</p>
            </div>
            <div className="md:w-1/2 w-full bg-[#D4EEFF] p-2 rounded flex gap-2 items-center">
                <div className="w-[40px] h-[40px] rounded bg-white flex items-center justify-center">
                    <IconOfJs className="h-[70%] w-[70%] object-contain"/>
                </div>
                <p className="font-medium text-sm w-[80%]">Review Puppeteer plugin</p>
            </div>
        </div>
    )
};