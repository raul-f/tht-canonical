import { useEffect, useState } from 'react'
import './App.scss'

import BlogCard from './components/BlogCard'

type PostProps = {
  topic: string,
  postURL: string,
  img: string,
  title: string,
  author: string,
  authorURL: string,
  date: string,
  category: string
}

const App = () => {
  let postArray: PostProps[] = []
  const [posts, setPosts] = useState(postArray)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts")
        const postData = await res.json()
        console.log(postData)

        let updatedPosts = []
        for(let i = 0; i < postData.length; i++) {
            let newPost: PostProps = {
              topic: postData[i]["_embedded"]["wp:term"][2][0] === undefined ? "General" : postData[i]["_embedded"]["wp:term"][2][0]["name"],
              postURL: postData[i]["link"],
              img: postData[i]["featured_media"],
              title: postData[i]["title"]["rendered"],
              author: postData[i]["_embedded"]["author"][0]["name"],
              authorURL: postData[i]["_embedded"]["author"][0]["link"],
              date: postData[i]["date"],
              category: postData[i]["_embedded"]["wp:term"][0][0]["name"]
            }
            updatedPosts.push(newPost)
        }
        console.log(updatedPosts)
        setPosts(updatedPosts)
      } catch (error) {
        console.log("Something went wrong:", error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default App
