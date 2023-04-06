import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


function TodoItem({todo, onRemove, onEdit}){
        const [status, setStatus] = useState(todo.status);
        const [isEditing, setIsEditing] = useState(false);
        const [content,setContent] = useState(todo.name);

        //토글
        const handleToggle = () => {
           setStatus(!status);
        }
        //삭제
        const handleRemove = () => {
            onRemove(todo.id);
        };
        //수정모드 ON
        const handleEdit = () => {
            setIsEditing(true);
        }
        //수정후 원래대로 돌아가기
        const handleSave = () => {
            onEdit({
                ...todo,
                name: content
            });
            setIsEditing(false);
        }    
        //수정값 반영
        const handleInputChange = (event) => {
            setContent(event.target.value);
        }
        // 엔터입력 시 호출
        const handleKeyDown = (event) => {
            if(event.keyCode === 13){
              handleSave();
            }
          }

        return (
            <div className="todo-item" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div className="todo-item-content" style={{display:"flex", alignItems:"center"}}>
                    <input type="checkbox" style={{backgroundColor:"transparent",border:"none",cursor:"pointer",fontSize:"24px",height:"32px",width:"32px", padding:"0px"}}
                    checked={status} onChange={handleToggle} placeholder="할 일 입력"/>
                    <span style={{textDecoration: status ? "line-through" : "none", color : status ? "gray" : "black"}}>{content}</span>
                </div>
                {isEditing ? ( //수정 버튼을 눌렀을 때 입력창을 나타나게 함
                    <>
                    <input value={content} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
                    </>
                ):(
                <div className="todo-item-buttons" style={{display:"flex", gap:"8px"}}>
                <button 
                style={{backgroundColor:"transparent", border:"none",cursor:"pointer", fontSize:"24px", height:"32px", width:"32px", padding:"0"}} onClick={handleEdit}>
                    <FontAwesomeIcon icon={faEdit}/>
                </button>
                <button 
                style={{backgroundColor:"transparent", border:"none",cursor:"pointer", fontSize:"24px", height:"32px", width:"32px", padding:"0"}} onClick={handleRemove}>
                    <FontAwesomeIcon icon={faTrash}/>
                </button>
                </div>
                )}
            </div>
        );
}


export default TodoItem;

