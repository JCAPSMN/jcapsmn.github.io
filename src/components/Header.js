import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-2 border-light">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center text-center text-wrap fs-6" width="200px" to="/">
                    <img src={process.env.PUBLIC_URL + '/JCAPS_NOWords.png'} alt="" height="40" className="d-inline-block align-middle" />
                    <small className="text-center ml-2">Jackson County Animal Protection Society</small>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/adopt">Adopt A Pet</Link>
                        <Link className="nav-link" to="/">Events</Link>
                        <Link className="nav-link" to="/">About Us</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <button className="btn btn-purple my-3 mr-lg-3 my-lg-0" aria-current="page" to="/">Donate Now!</button>
                        <span className="d-flex justify-content-around align-items-center">
                            <a className="py-0 px-1 fs-1 instagram" href="facebook"><FontAwesomeIcon icon={["fab", "instagram"]} /></a>
                            <a className="py-0 px-1 fs-1 facebook" href="twitter"><FontAwesomeIcon icon={["fab", "facebook"]} /></a>
                            <a className="py-0 px-1 fs-1 twitter" href="facebook"><FontAwesomeIcon icon={["fab", "twitter"]} /></a>
                            <a className="py-0 px-1 fs-1 linkedin" href="facebook"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
