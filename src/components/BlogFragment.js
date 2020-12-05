import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function BlogFragment() {
    const posts = useFetch('https://jcapsmn.org/wp-json/wp/v2/posts?status=publish&per_page=3&_embed=1');

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
        return (
            <picture className="card-img-top h-50">
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
                    <img src={photos.medium_large.source_url} alt="..." className="card-img-top" loading="lazy" />
                ) : (
                    <img src={process.env.PUBLIC_URL + '/unavailable-image.jpg'} alt="..." className="card-img-top" loading="lazy" />
                )}
            </picture>
        )
    }
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-3 g-5 py-5">
                {posts && posts.map((article, i) => {
                    return <div key={i} className="col">
                        <div className="ratio ratio-9x16">
                            <div className="card shadow">
                                {featuredImage(article)}
                                <div className="card-body d-flex h-100 flex-column">
                                    <h5 className="card-title"><Link to={"/blog/" + article.slug} className="stretched-link">{article.title.rendered}</Link></h5>
                                    <span className="mb-3">
                                        {listCategories(article)}
                                    </span>
                                    <p className="card-text" dangerouslySetInnerHTML={{ __html: formatExcerpt(article.excerpt.rendered, 110) }} />
                                </div>
                                <div className="card-footer">
                                    <p className="card-text text-right mt-auto"><small>Posted on {formatDate(article.date, { year: 'numeric', month: 'short', day: 'numeric' })}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
