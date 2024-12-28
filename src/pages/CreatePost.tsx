import { addDoc, collection } from "firebase/firestore"
import { db, auth } from "../FireBase/config"
import { useNavigate } from "react-router-dom"


const CreatePost = () => {

  const postRef = collection(db, "posts")
  const navigate = useNavigate();

  async function handleCreatePost(event){
    event.preventDefault();
    console.log(auth)
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author: {
        name: auth.currentUser?.displayName,
        id: auth.currentUser?.uid
      }
    }
    await addDoc(postRef, document)
    navigate('/')
  }

  return (
    <section className="create">
      <div className="heading">
         <h1>Add New Post</h1>
      </div>
      <form className="createPost" onSubmit={handleCreatePost}>
         <input type="text" className="title" name="title" placeholder="Title" maxLength='50' required/>
         <textarea  type="text" className="description" name="description" placeholder="Description" maxLength='600' required ></textarea>
         <button type="submit" className="submit">Create </button>
      </form>
    </section>
  )
}

export default CreatePost