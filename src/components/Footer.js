import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className="mt-auto text-muted text-center p-3 border-top border-1 border-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 justify-content-md-center">
                    <div className="col col-lg-6">
                        Privacy Policy / JCAPS &copy; 2021 / All Rights Reserved
                    </div>
                    <div className="col col-lg-6">
                        <Link className="mx-2 text-purple" to="/">Contact Us</Link>
                        <Link className="mx-2 text-purple" to="/adopt">Adopt a Pet</Link>
                        <Link className="mx-2 text-purple" to="/blog">Blog</Link>
                        <Link className="mx-2 text-purple" to="/">Events</Link>
                    </div>
                </div>
            </div>            
        </footer>
    )
}
