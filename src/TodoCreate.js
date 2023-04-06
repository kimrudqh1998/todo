import React, {useState} from "react";

function TodoCreate({onCreate}){
  //할 일 목록에 들어갈 이름을 설정하기위한 state
  const [name, setName] = useState('');

  //인풋 박스의 내용이 변경되었을 때 입력값을 setName에 저장
  const handleChange = (event) => {
    setName(event.target.value);
  };

  //호출 시 입력된 값을 기반으로 배열 생성 후 입력 박스 초기화
  const handleClick = () => {
    const newTodo = {
      id: null,
      name: name,
      status: false,
      time: new Date(),
    };
    onCreate(newTodo);
    setName('');
  };
  //엔터 키를 입력했을 때 handleClick 호출
  const handleKeyDown = (event) => {
    if(event.keyCode === 13){
      handleClick();      
    }
  };

  //input 상자 및 저장 버튼 리턴
  return (
    <div>
      <input className="input" style={{height:"24px", fontSize:"20px", alignContent:"center"}} type="text" value={name} onChange={handleChange} onKeyDown={handleKeyDown} placeholder="할 일 입력" />
    
    </div>
  );
}

export default TodoCreate;