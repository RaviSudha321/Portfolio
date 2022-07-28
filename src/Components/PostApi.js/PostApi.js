import React, {useEffect, useState} from "react";
import './PostApi.scss'
import { Container, Row, Col } from "react-bootstrap";


function PostApi() {

    let display_posts = 8;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [showPosts, setShowPosts] = useState(display_posts);

    useEffect(function() {

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET'
        })
        .then((response) => {

            if(!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                  );
            }

            return response.json();
            
        })
        .then((actualData) => {
            setData(actualData);
            setError(null);
            console.log(data);
        })
        .catch((error) => {
            setError(error.message);
            setData(null);
        })
        .finally(() => {
            setLoading(false);
        });

    }, []);


    // useEffect(() => {
    //     const getData = async () => {
    //       try {
    //         const response = await fetch(
    //           `https://jsonplaceholder.typicode.com/posts?_limit=10`
    //         );
    //         if (!response.ok) {
    //           throw new Error(
    //             `This is an HTTP error: The status is ${response.status}`
    //           );
    //         }
    //         let actualData = await response.json();
    //         setData(actualData);
    //         setError(null);
    //       } catch(err) {
    //         setError(err.message);
    //         setData(null);
    //       } finally {
    //         setLoading(false);
    //       }  
    //     }
    //     getData()
    //   }, []); 


    return (
        <>
            <section className="posts_main_sec">
                <Container>
                    <Row>
                        <Col>
                            <div className="posts_main">

                                <h2 className="title">Posts</h2>
                               
                               <div className="posts_content">
                                    {loading && <h3 className="loading_sec">loading ... Please wait ...</h3>}

                                    {error && <h3 className="error_sec">{error}</h3>}

                                    {data && data.slice(0,showPosts).map( (value, index) => {

                                        return (
                                            <div key={index} className="post_item">
                                                <h3>{value.id} {value.title}</h3>
                                                <p>{value.body}</p>
                                            </div>
                                        );

                                    })}

                                    <div className="global_btn" onClick={() => setShowPosts(showPosts + display_posts)}>
                                        <p className="btn_text">Load More</p>
                                    </div>
                                
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );

}

export default PostApi;