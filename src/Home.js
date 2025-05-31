import useFetch from './useFetch';  
import BlogList from './BlogList';

const Home = () => {
  const { error, isPending, data: blogs }  = useFetch('http://localhost:3005/blogs');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
    </div>
  );
}
 
export default Home;