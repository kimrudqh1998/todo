import React, {useState} from "react";
import Timer from "./TodoMain";
import TodoItem from "./TodoItem"
import TodoCreate from "./TodoCreate"
import './index.css';

function App() {

  //State 훅
  const [todos, setTodos] = useState([])
  const [nextId, setNextId] = useState(0);

  //배열 생성
  const handleCreate = (newTodo) => {
      newTodo.id = nextId;
      setNextId(nextId + 1);
      setTodos([...todos,newTodo]);
  };

  //배열 삭제를 위한 필터
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //수정 반영
  const handleEdit = (id, newName) => {
    const updatedTodos = todos.map((todo) =>                                                
      todo.id === id ? { ...todo, name: newName } : todo
    );
    setTodos(updatedTodos);
  };

  //리턴
  return (
    //css 파일을 따로 만들어서 import만으로도 적용할 수 있다.
    <div className="App"
        style={{backgroundColor : "#00BD9D", border: "1px", width:"450px", borderRadius:"20px", 
        justifyContent:"center",margin:'auto', textAlign: "center"}}
    >
      <header className="Time">
        <h1>TodoList</h1>
        <p>
          <Timer />
        </p>
        </header>
        <body>
          <div className="centerbox"
          /*맵을 이용해서 배열 출력, 각 버튼에 맞는 함수 지정 */ 
            style={{backgroundColor:"#218380", textAlign:"left", width:"400px", height:"auto", minHeight:"450px", borderRadius:"20px", justifyContent:"center", margin:"auto"}}>
              <div style={{width:"380px", height:"auto",justifyContent:"center", margin:"auto", fontSize:"30px"}}>            
                  {todos.map(todo => (
                  <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onEdit={handleEdit}/>
                  ))}                
              </div>
          </div>
        </body>
        <footer>
          <div>
            <TodoCreate onCreate={handleCreate}/>
          </div>
        </footer>
    </div>
  );
}

export default App;
