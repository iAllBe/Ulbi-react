import React, {useState} from 'react';
import '../src/styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title:'name', body:'body'},
        {id:2, title:'name 2', body:'body 2'},
        {id:3, title:'name 3', body:'body 3'},
    ])

    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    function removePost(id) {
        setPosts(posts.filter(p => p.id !== id))
    }

  return (
      <div className="App">
          <PostForm create={createPost}/>
          {posts.length !== 0
              ? <PostList remove={removePost} posts={posts}></PostList>
              :<h2 style={{textAlign:'center'}}>Нет постов</h2>
          }
      </div>
  );
}

export default App;
