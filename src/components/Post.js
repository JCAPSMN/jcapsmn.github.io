import React from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';

export default function Post() {
    let { slug } = useParams();
    const post = useFetch(`https://jcapsmn.org/wp-json/wp/v2/posts?status=publish&slug=${slug}&_embed=1`);

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
    const featuredImage = (article) => {
        const photos = article['_embedded']['wp:featuredmedia'][0]['media_details']['sizes'];
        const key = Object.keys(photos)[0];
        return (
            <picture className="ratio">
                {photos.medium && (
                    <source media="(max-width: 800px)" srcSet={`${photos.medium.source_url} 500w`} />
                )}
                {photos.medium_large && (
                    <source media="(max-width: 1000px)" srcSet={`${photos.medium_large.source_url} 800w`} />
                )}
                {photos.large && (
                    <source media="(max-width: 1100px)" srcSet={`${photos.large.source_url} 1000w`} />
                )}
                {photos.full && (
                    <source media="(min-width: 1100px)" srcSet={`${photos.full.source_url} 1200w`} />
                )}
                {photos[key] ? (
                    <img src={photos[key].source_url} alt="..." className="img-fluid w-100" loading="lazy" />
                ) : (
                    <img src={process.env.PUBLIC_URL + '/unavailable-image.jpg'} alt="..." className="img-fluid w-100" loading="lazy" />
                )}
            </picture>
        )
    }
    const meta = {};
    const createMeta = (article) => {
        return article['yoast_head']
    } 


    return (<>
        
        {post && post.map((article, i) => {
            return <div key={i} className="">
                {createMeta(article)}
                <DocumentMeta {...createMeta(article)} />
                <div className="ratio ratio-21x9 mb-5 shadow">
                    {featuredImage(article)}
                </div>

                <div className="container d-flex flex-fill flex-column px-5 post-body">
                    <h2 className="display-4 text-teal fredericka-the-great">{article.title.rendered}</h2>
                    <small className="text-muted">Written by {article['_embedded']['author'][0].name}, on {formatDate(article.date, { year: 'numeric', month: 'short', day: 'numeric' })}</small>
                    <span className="mb-5">
                        {listCategories(article)}
                    </span>
                    <p className="mt-2" dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
                </div>
            </div>
        })}
    </>

    )
}
