import React, { useState } from "react";
import "./FormTodo.css";

const FormTodo = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");

  const inputUser = (e) => {
    const nameInput = e.target.name;
    if (nameInput === "title") {
      setTitle(e.target.value);
    } else if (nameInput === "text") {
      setText(e.target.value);
    } else if (nameInput === "url") {
      setUrl(e.target.value);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const itemObj = {
      title: title,
      text: text,
      img: url,
      id: Math.random().toString(),
    };
    props.pushMas(itemObj);
  };

  return (
    <form onSubmit={submitForm} className="form">
      <input
        name="title"
        onChange={inputUser}
        type="text"
        placeholder="title"
      />
      <input name="text" onChange={inputUser} type="text" placeholder="text" />
      <input name="url" onChange={inputUser} type="url" placeholder="img" />
      <button>Add</button>
    </form>
  );
};

export default FormTodo;
