import React, { Fragment } from 'react';
import classes from './DestinationDetail.module.css';
import { useSelector } from 'react-redux';


function DestinationDetail() {

    const item = useSelector(state=>state.destinationStore.selectedDestination);
    console.log(item);
  return (
    <Fragment>
        {item !== null? <div className={classes.list}>
      <p>Name:{item.name}</p>
      <p>Days:{item.days}</p>
      <p>fact:{item.fact}</p>
    </div>:<div className={classes.list} > <p>There is no item for Review !</p> </div>}
    
    </Fragment>
  )
}

export default DestinationDetail
