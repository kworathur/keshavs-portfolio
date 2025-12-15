import React from 'react';

import * as styles from "./ToggleSwitch.module.scss";

const ToggleSwitch = ({handleClick}: {handleClick: () => void}) => {

return ( <div className={styles['lightSwitch']} onClick={(e) =>{ e.currentTarget.classList.add(styles['pullDown']);handleClick();}} onAnimationEnd={(e) => e.currentTarget.classList.remove(styles['pullDown'])}>
	<div className={styles['roundedCircle']}></div>
	<div className={styles['roundedCircle']}></div>
	<div className={styles['roundedCircle']}></div>
	<div className={styles['roundedCircle']}></div>
	<div className={styles['roundedCircle']}></div>
	<div className={styles['roundedCircle']}></div>
	<div className={styles['knob']}></div>
</div> );
}
 
export default ToggleSwitch ;