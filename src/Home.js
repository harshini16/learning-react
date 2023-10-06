import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
    // let name = "aria";

    /*Click events */
    // const handleClick = (e) => {
    //     alert('hello, you have clicked the button!',e);
    // }
    /*End of Click events example */

    /* UseState Hook example */
    /*
    const [name, setName] = useState('aria');
    const [age, setAge] = useState(24);
    const handleClick2 = () => {
        setName("luca");
        setAge(29);
        // console.log(name);
        // console.log(setName);
    } 
    */
    /* End of UseState Hook example */

<<<<<<< HEAD
    /*Outputting lists/blogs */
    /*Outputting lists/blogs and then learning about props */
=======
    /*Outputting lists/blogs and then learning about props */
    
>>>>>>> 42dfcd90c7fb4ec77c984a0d3abb273da3751930
    const [blogs, setBlogs] = useState([
        {title: 'My New website', body: 'lorem wei j fij ajfom aj', author: 'mario', id: 1},
        {title: 'My 2nd website', body: 'loremasbganetij ajfom aj', author: 'watson', id: 2},
        {title: 'My 3rd website', body: 'lDVGsrjjmdf fij ajfom aj', author: 'mario', id: 3}
    ]);
/*
    const handleCLickAgain = (name, e) => {
        console.log('Hello '+name );
    }
     */
    return ( 
        <div className="Home">
            {/* <h2>Homepage</h2>
            //Click events
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>CLICK ME </button> 
            <button onClick={handleClick2}>CLICK ME </button>
            <button onClick={() => handleCLickAgain('harshini')}>CLICK ME again </button> */}

            {/* Outputing links/blogs , props */}

            {/* {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} */}

            {/* End of Outputing links/blogs , props */}
            {/* Using external component BlogList */}
            <BlogList blogs={blogs} title="All blogs..!!!"/>
<<<<<<< HEAD
            {/* Reusing components */}
            <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Marios blogs..!!!"/>
            {/* End of Reusing components */}
=======
>>>>>>> 42dfcd90c7fb4ec77c984a0d3abb273da3751930

        </div>

    );
}
 
export default Home;