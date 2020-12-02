import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from "../components/Loader";

export default function Blog() {
    const [loading, setLoading] = useState(true);
    const loadingRef = useRef(loading);

    const [articles, updateArticles] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
                await Axios.get('https://jcapsmn.org/wp-json/wp/v2/posts?status=publish&_embed=1').then(results => {
                    updateArticles(() => [results.data.filter(article => article.status === 'publish')].flat());
                    updateLoading(false);
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
    const listCategories = (article) => {
        const categories = article['_embedded']['wp:term'];
        for (let index = 0; index < categories.length; index++) {
            const terms = categories[index];
            for (let index = 0; index < terms.length; index++) {
                const category = terms[index];
                return <span className="badge rounded-pill bg-purple">{category.name}</span>;     
            } 
        }
    }

    const updateLoading = data => {
		loadingRef.current = data;
		setLoading(data);
	};

    let loader;
	if (!articles.length || loading) {
		loader = (
			<div className="spinner">
				<Loader />
			</div>
		);
	}

    return (
        <div className="container">
            <div className="articles-list d-flex flex-column">
            {articles.length > 0 ? (
                articles.map((article, i) => {
                    return  <div key={i}><div  className="d-flex mt-5">
                                <div className="w-25 ratio ratio-1x1">
                                    <img src={article.jetpack_featured_media_url} className="img-rect img-thumbnail" alt="..." />
                                </div>
                                
                                <div className="w-75 d-flex flex-fill flex-column px-5">
                                    <h2 className=""><Link to={"/blog/" + article.slug}>{article.title.rendered}</Link></h2>
                                    <small className="text-muted">Written by {article['_embedded']['author'][0].name}, on {formatDate(article.date, { year: 'numeric', month: 'short', day: 'numeric' })}</small>
                                    <span>
                                        {listCategories(article)}
                                    </span>
                                    <p className="mt-2" dangerouslySetInnerHTML={{__html: formatExcerpt(article.excerpt.rendered, 110)}}/>
                                </div>
                            </div> 
                            {i < articles.length && <hr />}
                            </div>
                            })
                        ) : (<p className="col-sm-12 col-md-12 col-lg-12 col-xxl-12 text-center lead">There are currently no blog posts to read</p>)
                    }
                </div>
                {loader}
		    </div>
    )
}
