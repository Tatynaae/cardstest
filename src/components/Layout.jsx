import React from 'react';
import {Header} from "./Header";
import {Sidebar} from "./Sidebar";

export const Layout = ({ children }) => {
    return (
        <section className="w-full h-[100vh] lg:h-[100%] lg:pb-4 layout">
            <div className="hidden lg:block md:px-4">
                <Header />
            </div>

            <div className="flex w-full lg:max-w-[1110px] lg:mt-[120px] lg:mx-auto lg:pt-4 overflow-hidden xl:px-0 md:px-4">
                <div className="flex-grow w-full overflow-hidden lg:rounded-l-lg">
                    {children}
                </div>

                <div className="hidden lg:block bg-white rounded-r-lg">
                    <Sidebar />
                </div>
            </div>
        </section>
    )
};