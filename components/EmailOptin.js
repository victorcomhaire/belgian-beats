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
      {* {formstate&&<iframe width="540" height="900" src="https://92b83b34.sibforms.com/serve/MUIEAC4fdTfoEoVshn98CGjDzGpxagdzelDhmO80esbHGNA6jqoPkZMWbK-VoIXwLgks1MKMP0enERJSU6rmfhrm3FpsdUhCfZbhxneKduEcF6w9ItgFQVD5uvqiRGrqnlGTvMIiJNiLyuFwLpZSC8z7uh_VZbOjf14a-9RaxDOmfSltvluuv9mtLXJLSGMht0HvUu01yYq1lnR5" frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}>
      </iframe>} *}
    </div>
  );
};

export default EmailOptin;
