import React, { useState, useEffect } from 'react'
import ClassCard from '../components/ClassCard'
export default function Blog() {
	const [posts, setPosts] = useState([])


	useEffect(() => {
		fetch('https://kekambas-bs.herokuapp.com/posts')
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setPosts(data)
			})
	}, [])
  
  
  
  
  
	return (
    	<>
			<h1 className="text-center">Class Blog</h1>
			{posts.map((post, idx) => <ClassCard post={post} key={idx} />)}
	    </>
  )
}
