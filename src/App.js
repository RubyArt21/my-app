import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);
  const name = useRef("");
  const textInput = useRef("");
  const idInput = useRef("");
  const [ourIdn, setOurIdn] = useState(9);
  [ourIdk, setOurIdk] = useState(ourIdn);

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
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => response.json())
      .then((json) => setComments(json.slice(0, ourIdn)));
  }, [ourIdn]);
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
