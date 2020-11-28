import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Blog() {
    const [articles, updateArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
            await Axios.get('https://jcapsmn.org/wp-json/wp/v2/posts?status=publish&per_page=3').then(results => {
                updateArticles(() => [results.data.filter(article => article.status === 'publish')].flat());
            });
        }
        getArticles();
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-md-4 g-4">
            {articles.length > 0 ? (
						articles.map((article, i) => {
                            return  <div key={i} className="col">
                                    <div className="card h-100">
                                        <img src={article.jetpack_featured_media_url} className="card-img-top h-50" alt="..." />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">{article.title.rendered}</h5>
                                            <p className="card-text" dangerouslySetInnerHTML={{__html: article.excerpt.rendered}} />
                                            <p className="card-text mt-auto"><small className="text-muted">{article.date}</small></p>
                                        </div>
                                    </div>
                                </div>})) : (<p className="col-sm-12 col-md-12 col-lg-12 text-center lead">There are currently no blog posts to read</p>)}
		</div>
    )
}