import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);
  const name = useRef("");
  const textInput = useRef("");
  const idInput = useRef("");
  const n = 9;
  const [ourIdk, setOurIdk] = useState(n + 1);
  const idInputEdit = useRef("");
  const textInputEdit = useRef("");

  function addElement() {
    let newComments = [...comments];
    let newName = name.current.value;
    console.log(name);
    let newText = textInput.current.value;
    setOurIdk(ourIdk + 1);
    newComments.push({ id: ourIdk, name: newName, body: newText });
    console.log(newComments);
    setComments(newComments);
  }
  function deleteElement() {
    let newComments = [...comments];
    let deletedId = idInput.current.value;
    newComments.splice(deletedId - 1, 1);
    setComments(newComments);
  }

  function editElement() {
    let newComments = [...comments];
    let editedId = idInputEdit.current.value;
    newComments.splice(editedId - 1, 1);
    setComments(newComments);
  }

  function cell() {
    var elem = document.getElementById("35");
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => response.json())
      .then((json) => setComments(json.slice(0, n)));
  }, []);
  //  console.log(comments);
  return (
    <div>
      <table>
        <tbody>
          {comments.map((comment, index) => (
            <tr key={comment.id}>
              <td id={id}>{comment.id}</td>
              <td id={name}>{comment.name}</td>
              <td id={body}>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <input ref={name}></input>
        <br />
        <input ref={textInput}></input>
        <button onClick={addElement}>добавить</button>
        <input ref={idInput}></input>
        <button onClick={deleteElement}>удалить</button>
        <input ref={idInputEdit}></input>
        <input ref={textInputEdit}></input>
        <button onClick={editElement}>редактировать</button>
      </div>
    </div>
  );
}

export default App;
