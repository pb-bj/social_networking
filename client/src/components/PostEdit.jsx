import { useState, useEffect } from 'react';
import { updatePostRequest, getUserPostsRequest } from "../services/postApi";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-hot-toast";

const PostEdit = ({ setShowEditPost, posts, postId }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [post, setPost] = useState(null);
  const { token } = useAuth();


  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (postId && token) {
          const postData = await getUserPostsRequest(postId);
          console.log(postData);
          setPost(postData);
          setContent(postData.content);
          setContent(postData.image);
        }
      } catch (error) {
        console.error("Failed to fetch post", error);
      }
    };

    fetchPost();
  }, [postId, token]);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    const fileName = e.target.files[0].name;
    document.getElementById("fileName").textContent = fileName;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("content", content);
      formData.append("image", image);

      if (postId && formData && token) {
        await updatePostRequest(postId, formData, token);
        setShowEditPost(false);
        toast.success("Post updated");
      } else {
        toast.error("Failed to update post");
      }
    } catch (error) {
      console.error("failed", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-400 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form className=" mainblock bg-white py-5 px-3 flex flex-col rounded-md" onSubmit={handleSubmit}>
        <div className="top flex items-center justify-between mb-3">
          <div className="title font-medium">Edit Post</div>
          <div
            onClick={() => setShowEditPost(false)}
            className="cross bg-slate-200 py-1 px-1 rounded-full hover:bg-slate-300 hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          className=" w-full h-32 bg-slate-200  placeholder:py-1  rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300 px-3"
          placeholder="What's on your mind"
          rows="1"
        ></textarea>

        <div className="bottom mt-3">
          <div className="title font-medium">Edit or add options below</div>
          <div className="sharebotm flex item-center justify-between mt-3 px-2 gap-9">
            <div className="flex items-center">
              {" "}
              <label htmlFor="fileInput" className="  cursor-pointer ">
                <span className="flex items-center" id="fileName">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  <div>image</div>
                </span>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onChange={handleImage}
                />
              </label>
            </div>

            <div className="Clipicon flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-6"
              >
                <path d="M3.75 2A1.75 1.75 0 0 0 2 3.75v1.5a.75.75 0 0 0 1.5 0v-1.5a.25.25 0 0 1 .25-.25h1.5a.75.75 0 0 0 0-1.5h-1.5ZM10.75 2a.75.75 0 0 0 0 1.5h1.5a.25.25 0 0 1 .25.25v1.5a.75.75 0 0 0 1.5 0v-1.5A1.75 1.75 0 0 0 12.25 2h-1.5ZM3.5 10.75a.75.75 0 0 0-1.5 0v1.5c0 .966.784 1.75 1.75 1.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.25.25 0 0 1-.25-.25v-1.5ZM14 10.75a.75.75 0 0 0-1.5 0v1.5a.25.25 0 0 1-.25.25h-1.5a.75.75 0 0 0 0 1.5h1.5A1.75 1.75 0 0 0 14 12.25v-1.5ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              </svg>
              Clip
            </div>
            <div className="Attachmenticon flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M11.914 4.086a2 2 0 0 0-2.828 0l-5 5a2 2 0 1 0 2.828 2.828l.556-.555a.75.75 0 0 1 1.06 1.06l-.555.556a3.5 3.5 0 0 1-4.95-4.95l5-5a3.5 3.5 0 0 1 4.95 4.95l-1.972 1.972a2.125 2.125 0 0 1-3.006-3.005L9.97 4.97a.75.75 0 1 1 1.06 1.06L9.058 8.003a.625.625 0 0 0 .884.883l1.972-1.972a2 2 0 0 0 0-2.828Z"
                  clipRule="evenodd"
                />
              </svg>
              Attachment
            </div>
            <div className="Attachmenticon flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-6"
              >
                <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
              </svg>
              Audio
            </div>

            <button type="submit" className="bg-sky-400 text-white py-1 px-3 rounded-full ">
              Save Post
            </button>
          </div>
        </div>
      </form> {/*adad */}
    </div>
  );
};

export default PostEdit;
