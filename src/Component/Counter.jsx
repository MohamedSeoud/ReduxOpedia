import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Counter.module.css';
import { AddValue, decrement, increment } from '../Store/CounterSlice';


function Counter() {

    const [textInput,setTextInput] = useState(0);

    const count = useSelector((state)=>state.counterStore.count);
    const dispatch = useDispatch();

    const onAddHandler =()=>{
        dispatch(increment());

    }

    const onRemoveHandler = ()=>{
        dispatch(decrement());
    }
    const onChangeHandler = (event)=>{
        setTextInput(+(event.target.value));
        console.log(textInput);
    }

    const onAddValueHandler = ()=>{
     dispatch(AddValue(textInput))   
    }

  return (
    <div className={classes.count}>
      <h1>{count}</h1>

      <div className={classes.btn}>
        <button className={classes.btn1} onClick={onAddHandler}>Add</button>
        <button className={classes.btn2} onClick={onRemoveHandler}>Remove</button>
      </div>
      <div className={classes.btn3}>
        <button className={classes.btn1} onClick={onAddValueHandler}>Add</button>
        <button className={classes.btn2} onClick={onAddValueHandler}>Remove</button>
        <input onChange={onChangeHandler} className={classes.input} type='number'/>
      </div>
    </div>
  )
}

export default Counter
