import React, { useState } from "react";
import FileBase from "react-file-base64";

import "./style.css";

function Form() {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = () => {};
  const clear = () => {};

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="title">Creating a Memory</label>
        <input
          className="input-field"
          name="creator"
          placeholder="Creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <input
          className="input-field"
          name="title"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          className="input-field"
          name="message"
          placeholder="Message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          className="input-field"
          name="tags"
          placeholder="Tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className="file-container">
          <input
            className="fileInput"
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
        <button className="clear" onClick={clear}>
          Clear
        </button>
      </form>
    </div>
  );
}

export default Form;
