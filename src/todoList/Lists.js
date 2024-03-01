import React from "react"

export const Lists = (props) => {
    return(
            <div style={(props.isDone === true) ? { backgroundColor:"green", color:"white"} : {} } >
                  <ol>
                    <div className="listDetail">
                            <div className = "listName">
                                {props.editMode ? 
                                <input placeholder = {props.name}
                                value = {props.editedTask}
                                onChange = {(event) => props.captureEditedTask(event)}/> 
                                : <span>{props.name}</span>} 
                            </div>

                                <div className="buttons">
                                {(props.isDone === false) && <button className="button" onClick={() => props.completed(props.id)}> Done </button>}
                                {(props.isDone === true) && <button className="button" onClick={() => props.undo(props.id)}> Undo </button>}

                                {(props.editMode === false) && <button className="button" onClick={() => props.edit(props.id)}>  Edit </button>}

                                {props.editMode? <button className="button" onClick={() => props.save(props.id)}> Save </button> : null}
                                          
                                                                
                                <button className="button" onClick={() => props.remove(props.id)}>Remove</button>
                                </div>
                    </div>
                    </ol>        
        </div>
    )
}
