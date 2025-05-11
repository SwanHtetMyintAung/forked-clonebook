import Post from "./components/Post";
import StatusBox from "./components/StatusBox";


  export default function Home() {
    return (
      <div className="container w-5/12 mx-20 overflow-y-auto">
        <StatusBox/>
        <Post/>
        <Post/>

      </div>
    )
  }
      