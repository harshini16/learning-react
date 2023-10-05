const Home = () => {
    const handleClick = (e) => {
        alert('hello, you have clicked the button!',e);
    }

    const handleCLickAgain = (name, e) => {
        console.log('Hello '+name );
    }
    return ( 
        <div className="Home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>CLICK ME </button>
            <button onClick={() => handleCLickAgain('harshini')}>CLICK ME again </button>
        </div>

    );
}
 
export default Home;