import React from 'react';
import AdoptionFragment from "../components/AdoptionFragment";
import BlogFragment from "../components/BlogFragment";
export default function Home() {
    return (<>
        <h2 className="display-4 text-center text-teal">Find a companion</h2>
        <AdoptionFragment />
        <h2 className="display-4 text-center text-purple">Latest Pets News</h2>
        <BlogFragment />
    </>)
}
