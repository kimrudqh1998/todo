import React from "react";

class TodoMain extends React.Component{

    //실시간 시간 표시
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
  //타이머 렌더링
    render() {   
        return (
            <div>
                <h2>{this.state.date.toLocaleString()}.</h2>
            </div>
                );
            }
    }   
  
export default TodoMain;