import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Blog() {
    const posts = useFetch('https://jcapsmn.org/wp-json/wp/v2/posts?status=publish&_embed=1');


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

    const featuredImage = (article) => {
        const photos = article['_embedded']['wp:featuredmedia'][0]['media_details']['sizes'];
        console.log(photos)
        return (
            <picture className="w-25 ratio ratio-1x1">
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
                {photos['post-thumbnail'] ? (
                    <img src={photos.full.source_url} alt="..." className="img-fluid w-100" loading="lazy" />
                ) : (
                        <img src={process.env.PUBLIC_URL + '/unavailable-image.jpg'} alt="..." className="img-fluid w-100" loading="lazy" />
                    )}
            </picture>
        )
    }

    return (
        <div className="container">
            <div className="posts-list d-flex flex-column">
                {posts && posts.map((article, i) => {
                    return <div key={i}><div className="d-flex mt-5">
                        {featuredImage(article)}

                        <div className="w-75 d-flex flex-fill flex-column px-5">
                            <h2 className=""><Link to={"/blog/" + article.slug}>{article.title.rendered}</Link></h2>
                            <small className="text-muted">Written by {article['_embedded']['author'][0].name}, on {formatDate(article.date, { year: 'numeric', month: 'short', day: 'numeric' })}</small>
                            <span>
                                {listCategories(article)}
                            </span>
                            <p className="mt-2" dangerouslySetInnerHTML={{ __html: formatExcerpt(article.excerpt.rendered, 110) }} />
                        </div>
                    </div>
                        {i < posts.length && <hr />}
                    </div>
                })
                }
            </div>
        </div>
    )
}
