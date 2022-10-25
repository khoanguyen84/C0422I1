import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";

// nếu trong component có cả useState và useEffect
// thì callback trong useEffect sẽ phản ứng như thế nào nếu state thay đổi?

const menus = ["posts", "comments", "users"];

function PostList() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(0);

    const [menu, setMenu] = useState("posts");

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    // const [state, setState] = useState({
    //     loading: false,
    //     posts: []
    // });

    // useEffect(() => {
    //     console.log("execute callback");
    // })

    // useEffect(() => {
    //     console.log("execute callback");
    // }, [])

    // useEffect(() => {
    //     console.log("execute callback");

    //     // cleanup function
    //     return () => {
    //         console.log("unmouted component");
    //     }
    // }, [name, email])

    useEffect(() => {
        // setState({ ...state, loading: true })
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/${menu}`)
            .then(async (res) => {
                let data = await res.json();
                // setState({
                //     ...state,
                //     posts: data,
                //     loading: false
                // });
                setPosts(data);
                setLoading(false);
            })
    }, [menu])

    // const { loading, posts } = state;
    return (
        <>
            <div className="container">
                <h1>List Post</h1>
                <input placeholder="Name" type="text" onInput={(e) => setName(e.target.value)} /> <br />
                <input placeholder="Email" type="email" onInput={(e) => setEmail(e.target.value)} /> <br />
                <input placeholder="Age" type="number" onInput={(e) => setAge(e.target.value)} />
            </div>
            <div className="container mt-2">
                {
                    menus.map(tab => (
                        <button className={`btn ${tab === menu ? 'btn-primary' : 'btn-outline-primary'}  btn-sm me-2 `}
                            key={tab}
                            onClick={() => setMenu(tab)}
                        >
                            {tab}</button>
                    ))
                }
                {
                    loading ? <Spinner/> : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.map(post => (
                                        <tr key={post.id}>
                                            <td>{post.id}</td>
                                            <td>{post.title || post.name}</td>
                                            <td>{post.body || post.email}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        </>
    )
}

export default PostList;