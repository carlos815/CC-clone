import React from 'react';
import ArticleSmall from './ArticleSmall'

export default function Category(props) {
    return (
        <div className='section'>
            <div className='category'>{props.category}</div>
            {props.posts.map((post) => <ArticleSmall post={post} />
            )}

        </div>
    );
}


