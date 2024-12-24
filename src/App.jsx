import { useState } from "react"
function App() {
  const [post, setPost] = useState([])
  const [newPost, setNewPost] = useState('')

  const sendPost = event => {
    event.preventDefault()
    setPost([...post, {
      id: Date.now(),
      title: newPost
    }])
    setNewPost('')
  }
  const deletePost = (id) => {
    const updatedPosts = post.filter((curPost) => curPost.id !== id);
    setPost(updatedPosts);
  };

  return (
    <>
      <div className="container">
        <form action="" onSubmit={sendPost}>
          <div className="mb-3">
            <div className="text-center"><label htmlFor="articleName" className="form-label"><h1 className="text-black mt-4">Crea nuovo articolo</h1></label></div>
            <textarea className="form-control" value={newPost} onChange={(event) => setNewPost(event.target.value)} />
            <div className="text-center mt-4"><button type="submit" className="btn btn-primary"> Salva Post</button></div>
          </div>
        </form>
      </div>
      {(post.length > 0) ? post.map(curPost => <div key={curPost.id}>
        <h3 className="text-center text-black">Ultimi post</h3>
        <div className="text-center mb-3"><img src="../public/339084.jpg" alt="" /></div>
        <div class="card container">
          <div class="card-body text-center">
            {curPost.title}
          </div>
        </div>
        <div className="container text-center"> <button className="btn btn-danger mt-2" onClick={() => deletePost(curPost.id)}> Elimina Post</button></div>
      </div >
      ): <p className="text-center text-black">Articoli non esistenti</p>};

    </>
  )
}

export default App