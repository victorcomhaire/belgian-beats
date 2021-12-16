import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const EmailOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Keep me posted through the newsletter</div>
      {formstate&&<iframe width="540" height="900" src="https://92b83b34.sibforms.com/serve/MUIEAEGpk3w6wfZhShKwpY5cei9IwKe5astwHe5XcmGjkRYmYYRoIVkm0FIgMVQheDatt74sp17uEq8kDG1Bi-vhRtyXpMIFEeUIB-xZf5zlZP9UBOXYlMtPprMji8D5MSoUNt81CprOjlHySyjbngwpNHPHKBMlnonq2MQ1IvsxnXQ-f5VjmXoGJ6anXG1S7AOroR-RbM09hSAf" frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>}
    </div>
  );
};

export default EmailOptin;