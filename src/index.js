import ReactDOM from 'react-dom';
import React from 'react';
import './index.css'

class AddTask extends React.Component {
    handleTaskTextChange(){

    }
    
    handleAddTaskClick(){

    }

    render(){
        return(
            <form>
                <input type="text" onChange={() => this.handleTaskTextChange()} />
                <input type="button" value="Add Task" onClick={() => this.handleAddTaskClick()}/>
            </form>
        )
    }
}

class TaskList extends React.Component {
   render(){
        let list = [];

        for(let i = 0; i < this.props.tasks.length; i++){
            let task = this.props.tasks[i];
            let spanAction;

            if(task.isFinished){
                spanAction = (
                    <span class="material-icons">close</span>
                );
            } else {
                spanAction = (
                    <span class="material-icons">done</span>
                );
            }

            let listItem = (
                <div key={i}>
                    <span>{task.desc}</span>
                    {spanAction}
                </div>
            );
            list.push(listItem);
        }

        return(
            <div className={this.props.forStyling}>
                <div className="list-container">
                    <div className='title'>{this.props.purpose}</div>
                    <div className='content'>
                        {list}
                    </div>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: [{
                desc: 'Switch off light',
                isFinished: false
            }, {
                desc: 'Turn on fan',
                isFinished: false
            }, {
                desc: 'Make tea',
                isFinished: true
            }, {
                desc: 'Make dinner',
                isFinished: true
            }]
        }
    }


    render(){
       let tasks = this.state.tasks;
       let todoTasks = tasks.filter(t => t.isFinished == false);
       let doneTasks = tasks.filter(t => t.isFinished == true);

       return (
           <>
              <div className="add-task">
                <AddTask />
              </div>
              <div className='task-lists'>
                <TaskList tasks={todoTasks} purpose="Todo" forStyling="todo"/>
                <TaskList tasks={doneTasks} purpose="Finished" forStyling="finished"/>
              </div>
           </>
       );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));