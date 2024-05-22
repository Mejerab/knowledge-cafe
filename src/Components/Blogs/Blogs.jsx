
import { useState, useEffect } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({addToRead, markAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="">
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    markAsRead={markAsRead}
                    addToRead={addToRead}
                    blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    addToRead: PropTypes.func,
    markAsRead: PropTypes.func
}
export default Blogs;