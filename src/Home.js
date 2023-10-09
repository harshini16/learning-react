
import BlogList from "./BlogList";
import useFetch from "./useFetch";

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

    // const [name2, setName2] = useState('Mario');

    /*Outputting lists/blogs and then learning about props */
    
    const {data: blogs , isPending, error} = useFetch('http://localhost:8000/blogs');
    // const [blogs, setBlogs] = useState(null);

    // const [isPending, setIsPending] = useState(true);
    
    /* data 
    [
        {title: 'My New website', body: 'lorem wei j fij ajfom aj', author: 'mario', id: 1},
        {title: 'My 2nd website', body: 'loremasbganetij ajfom aj', author: 'watson', id: 2},
        {title: 'My 3rd website', body: 'lDVGsrjjmdf fij ajfom aj', author: 'mario', id: 3}
    ]
    */
/*

    const handleCLickAgain = (name, e) => {
        console.log('Hello '+name );
    }
     */
    // to delete blogs
    {/* 
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !==id );
        setBlogs(newBlogs);
    }
*/}
{/*}
    //Use effect + dependancy array --> so only once useeffect runs
    useEffect(()=> {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data=>{
                // console.log(data)
                setBlogs(data);
                setIsPending(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);
*/}
    // end of use effect 

    return ( 
        <div className="Home">
            {/* <h2>Homepage</h2>
            //Click events
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>CLICK ME </button> 
            <button onClick={handleClick2}>CLICK ME </button>
            <button onClick={() => handleCLickAgain('harshini')}>CLICK ME again </button> */}

            {/* End of click events */}

            {/* Outputing links/blogs , props */}

            {/* Making components  */}
            {/* {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))} */}
            {/* End of Making components */}

            {/* End of Outputing links/blogs , props */}

            {/* Using external component BlogList */}

            {error && <div>{error}</div>}
            {isPending && <div>Loading.....</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs..!!!"  /> }
            
            {/* Reusing components */}
            {/*  
            <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} title="Marios blogs..!!!"/> */}
            {/* End of Reusing components */}

            {/* Dependancy array  */}
            {/* <button onClick={()=> setName2('Luigi')}>Change name </button>
            <p>{name2}</p> */}
            {/* End of dependancy array  */}

        </div>

    );
}
 
export default Home;