import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from "./Loader";

export default function Post() {
    const [loading, setLoading] = useState(true);
    const loadingRef = useRef(loading);

    let { slug } = useParams();
    const [post, updatePost] = useState([]);
    const [url, updateURL] = useState([]);
    useEffect(() => {
        updateURL(`https://jcapsmn.org/wp-json/wp/v2/posts?status=publish&slug=${slug}&_embed=1`);
        const getPost = async () => {
            await Axios.get(url).then(results => {
                updatePost(() => [results.data.filter(article => article.status === 'publish')].flat());
                updateLoading(false);
            });
        }
        getPost();
    }, [slug, url])

    const formatDate = (date, options) => {
    	return new Date(date).toLocaleDateString('en-US', options);
    }
    const listCategories = (article) => {
        const categories = article['_embedded']['wp:term'];
        for (let index = 0; index < categories.length; index++) {
            const terms = categories[index];
            for (let index = 0; index < terms.length; index++) {
                const category = terms[index];
                return <span className="badge rounded-pill bg-teal">{category.name}</span>;     
            } 
        }
    }


    const updateLoading = data => {
		loadingRef.current = data;
		setLoading(data);
	};

    let loader;
	if (!post.length || loading) {
		loader = (
			<div className="spinner">
				<Loader />
			</div>
		);
	}

    return (
        <div className="container">
            <div className="d-flex flex-column">
                {post.length > 0 ? (
                    post.map((article, i) => {
                        return <div key={i}>
                            <div className="img-fluid my-5 ratio ratio-21x9 shadow w-100">
                                <img src={article.jetpack_featured_media_url} className="img-rect img-thumbnail" alt="..." />
                            </div>

                            <div className="d-flex flex-fill flex-column px-5">
                                <h2 className="display-4 text-teal fredericka-the-great">{article.title.rendered}</h2>
                                <small className="text-muted">Written by {article['_embedded']['author'][0].name}, on {formatDate(article.date, { year: 'numeric', month: 'short', day: 'numeric' })}</small>
                                <span>
                                    {listCategories(article)}
                                </span>
                                <p className="mt-2" dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
                            </div>
                        </div>
                    })
                ) : (<p className="col-sm-12 col-md-12 col-lg-12 col-xxl-12 text-center lead">Post not found</p>)
                }
            </div>
            {loader}
        </div>
    )   
}
