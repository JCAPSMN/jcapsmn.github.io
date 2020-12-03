import React from 'react';
import { Link } from 'react-router-dom';
import AdoptionFragment from "../components/AdoptionFragment";
export default function Adopt() {
    return (<>
        <h1 className="display-4 fredericka-the-great text-purple text-center mt-5">Find a Companion</h1>
        <h2 className="display-5 kavivanar text-purple text-center mb-5">Meet your <span className="text-teal kavivanar">Match</span></h2>
        <AdoptionFragment />
        <hr className="mt-5" />
        <div className="container mt-5">
            <h2 className="display-4 text-center text-purple fredericka-the-great">The Adoption Process</h2>
            <section className="my-5">
                <h3 className="kavivanar">What is Petfinder</h3>
                <figure className="shadow">
                    <blockquote className="blockquote p-4">
                        <p>Petfinder is an online, searchable database of animals who need homes. It is also a directory of nearly 11,000 animal shelters and adoption organizations across the U.S., Canada and Mexico. Organizations maintain their own home pages and available-pet databases.</p>
                        <figcaption className="blockquote-footer text-right">
                            Petfinder, <cite title="Source Title">https://petfinder.com/about</cite>
                        </figcaption>
                    </blockquote>
                </figure>
            </section>
            <section className="my-5">
                <h3 className="kavivanar mt-5">How does the adoption process work?</h3>
                <p><span className="lead">Adoption is a process.</span> Your first step should be to make sure that everyone in the household is on board and understands the commitment involved. We have a handful of articles on our <Link to="/blog">Blog</Link> about preparing you and your family for a new member of the household and what to expect.</p>
                <p>So everyone is onboard? The next step, assuming you've already found a dog or cat your are interested in, is to schedule a visit. You can preemptively fill out an <a href="https://drive.google.com/file/d/1gJ8bH7kbEdsHOi-en1LQdA1hRPcHA8CZ/view?usp=sharing">Adoption Application</a> to help move the process along.</p>
                <p>You've fell in love, you've submitted an adoption form. We have checked in to your personal and veterinary references and everything checks out; Now we need you to fill out our <a href="https://drive.google.com/file/d/1cDCQg0Iv3bBSyvcER2sgkRuAoxkvKEY1/view?usp=sharing">Adoption Agreement</a>, pay the adoption fee &amp; prepare your home if you haven't already. Now you may take your newest family member home.</p>
                <p className="text-center text-muted">* JCAPS may request a home visit &amp; reserves the right to postpone or refuse adoption.</p>
            </section>

            <section className="my-5">
                <h3 className="kavivanar mt-5">What are the adoptions fees &amp; what does it go towards?</h3>
                <p>Currently our adoption fees are <strong>$100</strong> for cats and <strong>$250</strong> for dogs. This is to cover the cost of vaccinations, other medical needs and to keep our doors open.</p>
                <p>In the event that an animal is too young to be spayed or neutered at the time of adoption and additional $100 fee is required and is refundable to the adoptor when they can furnish proof of the aforementioned spay/neuter.</p>
            </section>
        </div>
    </>)
}
