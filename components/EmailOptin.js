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
      {* {formstate&&iframe width="540" height="900" src="https://92b83b34.sibforms.com/serve/MUIEAHTEv1_ib7kCBTln9JFhAq5yZMA2hTW-zI-IymVRdCJluH2GrhV7uPxIZ0jDScaNySQi9sLeYF1r-FUXVpD9VpNrAq3uZP3jXCdvubwvKE4EGlWyVihj7GGkENUNx5IE-9gzrT2YM0584AeG17CdqSvH3KApNtte647MNT-zO1o_8ZHR3kry-6Xt2nedNI3S5sPb3ShtYjqQ" frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>}
      </div>
    </div>
  );
};

export default EmailOptin;
