import React from "react";
import {TopCards} from "./components/TopCards";
import {Content} from "./components/Content";
import {Layout} from "../../components/Layout";


export const Software = () => {
    return (
        <Layout>
            <section className="md:px-5 md:py-5 px-2 py-2 sm:bg-white sm:px-1 sm:py-2 flex flex-col justify-start items-start gap-8">
                <TopCards />
                <Content />
            </section>
        </Layout>
    )
};