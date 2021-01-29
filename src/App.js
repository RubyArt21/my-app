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
  const tableRef = useRef("");

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

  function agregate() {
    let sum = 0;

    let table = tableRef.current;
    console.log(tableRef);
    let trList = table.getElementsByClassName("trch");
    for (let tr in trList) {
      let td = tr.getElementByTagName("td");
      sum += td.text;
    }
    return sum;
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => response.json())
      .then((json) => setComments(json.slice(0, n)));
  }, []);
  //  console.log(comments);
  return (
    <div>
      <table ref={tableRef}>
        <tbody>
          {comments.map((comment, index) => (
            <tr class="trch" key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div> {agregate()}</div>
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
