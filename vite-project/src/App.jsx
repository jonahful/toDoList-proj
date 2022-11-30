import { useState, useRef } from "react"
import "./App.css"

 function App() {
    const [toDoList, setToDoList] = useState([
      'Work on coding',
      'Walk the dog',
      'Read a book'
    ])
    const inputRef = useRef("");
  /**
   *
   * Whenever we click on the add toDo button we want to add the value typed
   * inside of the input to the todoList state array
   *
   * Then we want to display inside the <ul> as an <li> each item inside of the todoList array
   * using the .map method
   */
    return(
    <div className = "App">
        <input type="text" ref={inputRef} />
        <button onClick={() => setToDoList([...toDoList, inputRef.current.value])}>Add to do</button>

        <ul>{
           toDoList.map(function (value, index) {
                return <li>{ value } </li>
            })
            }
        </ul>
    </div>
  )
}

export default App;