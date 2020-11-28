import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function BlogFragment() {
    const [articles, updateArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
            await Axios.get('https://jcapsmn.org/wp-json/wp/v2/posts?status=publish&per_page=3&_embed=1').then(results => {
                updateArticles(() => [results.data.filter(article => article.status === 'publish')].flat());
            });
        }
        getArticles();
    }, [])

    const formatExcerpt = (excerpt, length) => {
        excerpt = excerpt.replace(/(<([^>]+)>)/gi, "");
    	return excerpt.substring(0, length) + ' <small> ... readmore</small>';
    };
      
    const formatDate = (date, options) => {
    	return new Date(date).toLocaleDateString('en-US', options);
    }
    const getCategory = (article) => {
        const category = article['_embedded']['wp:term'][0].filter(term => term);
        return category[0];
    }
    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 py-5">
            {articles.length > 0 ? (
                articles.map((article, i) => {
                    return  <div key={i} className="col">
                                <div className="ratio ratio-9x16">
                                    <div className="card shadow">
                                        <img src={article.jetpack_featured_media_url} className="card-img-top h-50" alt="..." />
                                        <div className="card-body d-flex h-100 flex-column">
                                            <h5 className="card-title">{article.title.rendered}</h5>
                                            <span className="mb-3">
                                            <span className="badge rounded-pill bg-purple">{getCategory(article).name}</span>
                                            </span>
                                            <p className="card-text" dangerouslySetInnerHTML={{__html: formatExcerpt(article.excerpt.rendered, 110)}} />
                                        </div>
                                        <div className="card-footer">
                                        <p className="card-text text-right mt-auto"><small className="text-muted">Posted on {formatDate(article.date, { year: 'numeric', month: 'short', day: 'numeric' })}</small></p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            })
                        ) : (<p className="col-sm-12 col-md-12 col-lg-12 text-center lead">There are currently no blog posts to read</p>)
                    }
		    </div>
        </div>
    )
}
