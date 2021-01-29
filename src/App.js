import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments/8")
      .then((response) => response.json())
      .then((json) => console.log(json));
    // Обновляем заголовок документа с помощью API браузера

    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}

export default App;
