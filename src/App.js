import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);
  const name = useRef("");
  const textInput = useRef("");
  const idInput = useRef("");

  let n = 9;
  let k = n;

  function addElement() {
    let newComments = [...comments];
    let newName = name.value;
    console.log(name);
    let newText = textInput.value;
    k++;
    newComments.push({ id: k, name: newName, body: newText });
    console.log(newComments);
    setComments(newComments);
  }
  function deleteElement() {
    let newComments = [...comments];
    let deletedId = idInput.value;
    newComments.splice(deletedId - 1, 1);
    setComments(newComments);
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => response.json())
      .then((json) => setComments(json.slice(0, n)));
  }, [n]);
  //  console.log(comments);
  return (
    <div>
      <table>
        <tbody>
          {comments.map((comment, index) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.body}</td>
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
      </div>
    </div>
  );
}

export default App;
