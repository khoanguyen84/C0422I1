import React, { useState } from "react";
import PostList from './PostList';

// useEffect(callback, [deps]) : deps: dependence
// callback: sẽ được thực thi khi component được mounted DOM
// Hiển thị UI sẽ được thực thi trước khi gọi callback
// có 3 tình huống sử dụng
// useEffect(callback): callback luôn được gọi khi state thay đổi
// useEffect(callback, []): callback chỉ được gọi 1 lần duy nhất, khi component được mounted vào DOM
// useEffect(callback, [deps]): callback chỉ được gọi khi state trong deps thay đổi

// cleanup function: nằm trong useEffect và được thực thi khi component được unmouted khỏi DOM


function Content() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="container">
                <button className="btn btn-danger" onClick={() => setShow(!show)}>Show Post</button>
            </div>
            { show && <PostList />}
        </>
    )
}

export default Content;