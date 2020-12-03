import React from 'react';
import AdoptionFragment from "../components/AdoptionFragment";
import BlogFragment from "../components/BlogFragment";
export default function Home() {
    const tealeyes = {
        backgroundImage: "url(" + process.env.PUBLIC_URL + "/teal-cat-eye.jpg)",
    }

    const doghug = {
        backgroundImage: "url(" + process.env.PUBLIC_URL + "/dog-hug.jpg)",
    }
    return (<>
        <div id="call-to-action-carousel" className="carousel slide" data-ride="carousel" data-interval="8000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row cta-slider" style={tealeyes}>
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 d-flex flex-column bg-purple cta-splash p-5 justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6 offset-lg-2 text-white text-center">
                                <h2 className="display-1 fredericka-the-great">Adopt a pet</h2>
                                <h3 className="display-5 kavivanar">Make a <span className="text-teal kavivanar">Difference</span></h3>
                                <p className="lead">Saving one dog or cat will not change the world, but surely for them, the world will change forever.</p>
                                <a href="https://www.petfinder.com/member/us/mn/jackson/jackson-county-animal-protection-society-mn483/" target="_blank" rel="noreferrer" className="btn btn-lg btn-teal-o">Find a Friend on Petfinder</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row cta-slider" style={doghug}>
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 d-flex flex-column bg-teal cta-splash p-5 justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6 offset-lg-2 text-white text-center">
                                <h2 className="display-1 fredericka-the-great">Volunteer</h2>
                                <h3 className="display-5 kavivanar">We are their <span className="text-purple kavivanar">voices</span></h3>
                                <p className="lead">The journey of a thousand miles begins with a single step.</p>
                                <button className="btn btn-lg btn-purple-o">Get Involved</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#call-to-action-carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#call-to-action-carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
        <section className="">
            <h2 className="display-4 text-center text-purple fredericka-the-great mt-5 mb-5">Find a Companion</h2>
            <AdoptionFragment />
        </section>

        <section id="blogfragment" className="content-box" >
            <h2 className="display-4 text-center text-purple fredericka-the-great mt-5 mb-5">Latest Pets News</h2>
            <hr />
            <BlogFragment />
        </section>
    </>)
}
