import { Fragment } from "react"
import FeaturedPosts from "../components/home-page/featured-posts"
import Hero from "../components/home-page/hero"
// import { getFeaturedPosts } from "../lib/posts-util"

export default function HomePage(props) {
  const DUMMY_POSTS = [
    { 
      slug: "getting-started-with-nextjs", 
      title: "Getting Started with Next Js", 
      image: "getting-started-nextjs.png", 
      excerpt: "Next Js is a React Framework for production - It makes building fullstack React Applications a breeze", 
      date: "2022-06-28" 
    },
    { 
      slug: "getting-started-with-nextjs2", 
      title: "Getting Started with Next Js", 
      image: "getting-started-nextjs.png", 
      excerpt: "Next Js is a React Framework for production - It makes building fullstack React Applications a breeze", 
      date: "2022-06-28" 
    },
    { 
      slug: "getting-started-with-nextjs3", 
      title: "Getting Started with Next Js", 
      image: "getting-started-nextjs.png", 
      excerpt: "Next Js is a React Framework for production - It makes building fullstack React Applications a breeze", 
      date: "2022-06-28" 
    },
    { 
      slug: "getting-started-with-nextjs4", 
      title: "Getting Started with Next Js", 
      image: "getting-started-nextjs.png", 
      excerpt: "Next Js is a React Framework for production - It makes building fullstack React Applications a breeze", 
      date: "2022-06-28" 
    },
  ]
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}


// export function getStaticProps(){
//   const featuredPostsData = getFeaturedPosts()
//   return{
//     props:{
//       posts: featuredPostsData,
//     }
//   }
// }
