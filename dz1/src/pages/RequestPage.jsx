import React, {useEffect, useState} from 'react';

const RequestPage = () => {
    const [post, setPost]= useState([])
    const request = async () =>{
        const response = await fetch('https://dummyjson.com/posts')
        const data = await response.json()
        setPost(data.posts)
    }
    useEffect(() => {
        request()
    }, []);

    return (
        <div>
            {
                post.map((element, idx) =>[
                    <div key={idx}>
                        <h2>Title: {element.title}</h2>
                        <p>{element.body}</p>
                    </div>
                ])
            }

        </div>
    );
};

export default RequestPage;