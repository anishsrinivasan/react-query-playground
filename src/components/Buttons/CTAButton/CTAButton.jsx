import React from 'react';
import styles from "./CTAButton.module.css"

class CTAButton extends React.Component {

render(){
    return((
    <div  onClick={() => this.props.onClick(value)}  className={`${styles.ctaButton} ${value === "yes" ? styles.green : styles.red}`}>
    {value === "yes" ? "Yes" :"No"}
  </div>
  ))
}
}

export default CTAButton;
