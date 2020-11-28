import React from 'react';
import AdoptionFragment from "../components/AdoptionFragment";
import BlogFragment from "../components/BlogFragment";
export default function Home() {

    return (<>
        <div className="container">
            <div className="row">


            </div>
        </div>
        <section className="">
        <h2 className="display-4 text-center text-purple fredericka-the-great">Find a Companion</h2>
        <AdoptionFragment />
        </section>
        <h2 className="display-4 text-center text-purple fredericka-the-great">Latest Pets News</h2>
        <section id="blogfragment" className="content-box" >
            <BlogFragment />
        </section>
    </>)
}
