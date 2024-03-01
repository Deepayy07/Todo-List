import React, { useState } from "react";
import { Lists } from "./Lists";
import "./List.css"

export const Test = () => {
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    const [editedTask, setEditedTask] = useState("")

    const grabTask = (event) => {
        setTask(event.target.value)
    }

    const addTask = () => {
        const newTask = {
            id: (taskList.length === 0) ? 1 : taskList.length + 1,
            editMode: false,
            name: task,
            // name: (task.editMode === true) ? task : editedTask, 
            isDone: false,
        }
        setTaskList([...taskList, newTask])
    }

    const clearTasks = () => {
        setTaskList([])
    }

    const completed = (taskID) => {
        setTaskList(taskList.map((task) => {
            if(taskID === task.id)
            return{
                ...task, isDone:true
            }
            else {return{...task}}
        })  )
    }

    const remove = (taskID) => {
            setTaskList(taskList.filter((task) => task.id !== taskID ))
    }
    
    const undo = (taskID) => {
        setTaskList(taskList.map((task) => {
            if(task.id === taskID)return{
            ...task, isDone: false
            }
            else
            return{...task}
        }))
    }

    const captureEditedTask = (event) => {
        setEditedTask(event.target.value)
    }

    const edit = (taskID) => {
        setTaskList(taskList.map((task) => {
                if(taskID === task.id){return{
                        ...task, editMode : true
                    }}
                    else {return{
                        ...task}}
            })
        )
        }

    const save = (taskID) => {
        setTaskList(taskList.map((task) => {
            if(taskID === task.id){
                return{
                    ...task, name:editedTask, editMode:false}    
            }
            else{
                return{...task}
            }
        })) 
    }


    return(
        <div className="content">
            <div className="topPart">
                <h1>Todo List</h1>
                <div>
                    <input className="input" placeholder="Enter the task here" value={task} onChange={grabTask}/>
                    <button className="button" onClick={addTask}> Add Task </button>
                    <button className="button" onClick={clearTasks}> Clear Tasks </button>
                </div>
                
            </div>

            <div className="bottomPart">
            {taskList.map((task) => {
                return(
                    <Lists 
                    name={task.name}
                    id = {task.id}
                    isDone = {task.isDone}
                    completed = {completed}
                    remove = {remove}
                    undo = {undo}
                    edit = {edit}
                    save = {save}
                    editMode = {task.editMode}
                    editedTask = {task.editedTask}
                    setEditedTask = {setEditedTask}
                    captureEditedTask = {captureEditedTask}
              
                    />
                )
            })}
            </div>
            
        </div>
    )
    
}