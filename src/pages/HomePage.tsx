import { useEffect, useState } from "react"
import { getDocs, collection } from "firebase/firestore"
import { db } from "../FireBase/config"
import PostCard from "../components/PostCard"
import useTitle from "../hooks/useTitle"
import SkeletonCard from "../components/SkeletonCard"


const HomePage = () => {

  const [posts, setPosts] = useState(new Array(2).fill(false))
  const [toggle, setToggle] = useState(false)
  const postsRef = collection(db, 'posts')
  useTitle('Home')

  useEffect(() => {
   async function getPosts(){
    const data = await getDocs(postsRef)
    setPosts(data.docs.map((document) => (
      {...document.data(), id: document.id}
    )))
  }
  getPosts()
  },[postsRef,toggle])

  return (
    <section>
      {posts.map((post, index) => (
        post ? (
          <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle}/>
        ) : (
          <SkeletonCard key={index}/>
        )
       
      ))}
    </section>
  )
}

export default HomePage