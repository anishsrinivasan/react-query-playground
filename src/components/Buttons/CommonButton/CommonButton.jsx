import React from 'react';
import styles from "./CommonButton.module.css"

class CommonButton extends React.Component {

render(){
  const {text,onClick,color} = this.props
    return((
    <div  onClick={() => onClick()}  className={`${styles.button}`}
    style={{backgroundColor: color ? color : "#f17e3a"}}>
    {text || ""}
  </div>
  ))
}
}

export default CommonButton;
