import AllPosts from "../../components/posts/all-posts";

export default function AllPostsPage() {
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
      <div>
        <AllPosts posts={DUMMY_POSTS} />
      </div>
    )
  }