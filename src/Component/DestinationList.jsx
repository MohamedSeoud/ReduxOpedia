import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './DestinationList.module.css'
import { onSelect } from '../Store/DestinationSlice';

function DestinationList() {
    const destinations = useSelector(state => state.destinationStore.destination);
    const dispatch = useDispatch();
    const onSelectHandler = (item)=>{
        dispatch(onSelect(item))
    }

    const items = destinations.map((item)=>{
        return(
            <Fragment>
                <div className={classes.list}>
                    <div className={classes.item}><p>{item.name}</p><button className={classes.btn1} onClick={()=>onSelectHandler(item)}>Details</button></div>
                    <div className={classes.item}><p>{item.days}</p><button className={classes.btn1} onClick={()=>onSelectHandler(item)}>Details</button></div>
                    <div className={classes.item}><p>{item.fact}</p><button className={classes.btn3} onClick={()=>onSelectHandler(item)}>Details</button></div>
                </div>
            </Fragment>
        )
    })

  return (
    <div className={classes.overall}>
      {items}
    </div>
  )
}

export default DestinationList
