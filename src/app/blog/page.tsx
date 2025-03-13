import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Blogs | My primer Next.js",
  description: "curso Next.js",
};

const Blog = () => {
  return (
    <div className='bg-amber-600 flex items-center justify-center p-10'>
        <h1 className='text-4xl font-bold'>Blog</h1>
    </div>
  )
}

export default Blog;