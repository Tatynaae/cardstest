import React from "react";
import { IconOfLock } from "../../../assets/icons/IconOfLock";
import { IconOfJs } from "../../../assets/icons/IconOfJs";
import { IconOfBox } from "../../../assets/icons/IconOfBox";
import {Card} from "../../../components/Card";
import {IconArrow} from "../../../assets/icons/IconArrow";

const data = [
    {
        id: 1,
        title: '2Captcha solver',
        label: 'Official software',
        description: 'This software is designed to work with any site',
        rating: '4.6',
        reviews: '456',
        price: 'Free',
        img: <IconOfLock className="lg:w-[70px] lg:h-[70px] md:w-[50%]"/>
    },
    {
        id: 2,
        title: 'Puppeteer plugin to solve reCAPTCHAs automatically',
        label: 'Official software',
        description: 'This software is designed to work with any site',
        rating: '4.6',
        reviews: '456',
        price: '$67',
        img: <IconOfBox className="lg:w-[70px] lg:h-[70px] md:w-[50%]"/>
    },
    {
        id: 3,
        title: '2captcha-javascript',
        label: 'Official software',
        description: 'This software is designed to work with any site',
        rating: '4.6',
        reviews: '456',
        price: '$67',
        img: <IconOfJs className="lg:w-[70px] lg:h-[70px] md:w-[50%]"/>
    }
];

export const Content = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-start gap-2">
                <h1 className="font-semibold text-2xl">Software</h1>
                <button
                    className="lg:hidden flex flex-col items-center justify-center rounded gap-1 w-[40px] h-[40px] bg-[#F8F9FB]">
                    <span className="w-[3px] h-[3px] bg-[#333333] rounded-full"></span>
                    <span className="w-[3px] h-[3px] bg-[#333333] rounded-full"></span>
                    <span className="w-[3px] h-[3px] bg-[#333333] rounded-full"></span>
                </button>
                <form className="hidden lg:block w-[230px]">
                    <select className="bg-white border border-[#E1EAF6] text-[#333333] text-sm rounded-lg block w-full p-2.5 outline-0">
                        <option value="1" selected>Sort by: Most relevant</option>
                        <option value="2">Sort by: Option 2</option>
                        <option value="3">Sort by: Option 3</option>
                        <option value="4">Sort by: Option 4</option>
                    </select>
                </form>
            </div>
            <form className="lg:hidden w-full mx-auto mt-3">
                <select className="bg-white border border-[#E1EAF6] text-[#333333] text-sm rounded-lg block w-full p-2.5 outline-0">
                    <option value="1" selected>Sort by: Most relevant</option>
                    <option value="2">Sort by: Option 2</option>
                    <option value="3">Sort by: Option 3</option>
                    <option value="4">Sort by: Option 4</option>
                </select>
            </form>
            {
                data?.map((item, index) => (
                    <Card key={index} data={item} />
                ))
            }
            <button className="mt-3 flex items-center gap-2 border border-[#E1EAF6] text-[#5B6A7D] w-full rounded py-2 justify-center">Load more <IconArrow/></button>
        </div>
    )
};