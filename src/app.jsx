import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

function App(){
    
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };




    return(
        <>
            <div className='mainWrapper'>
            <div className='innerWrapper'>
                <div className='listCard'>
                    <h1>Todo List</h1>
                    <input type="text" placeholder="Add a item" onChange={itemEvent} value={inputList} />
                    <button onClick={listOfItems}>+</button>
                    <ul>
                        {items.map((itemVal, index) => {
                                return <ToDoLists 
                                key={index} 
                                id={index} 
                                text={itemVal} 
                                onSelect={deleteItems} 
                                />
                            })}
                    </ul>
                </div>
            </div>
            </div>
        </>
    );
}

export default App;