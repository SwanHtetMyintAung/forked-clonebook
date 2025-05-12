import Post from "./components/Post";
import StatusBox from "./components/StatusBox";


  export default function Home() {
    return (
      <div className="container overflow-y-auto col-start-2 col-end-4 px-8 relative">
        <StatusBox/>
        <Post/>
        <Post/>

      </div>
    )
  }
      