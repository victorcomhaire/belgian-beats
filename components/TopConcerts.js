import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Topconcerts.module.scss"
import SmallCardList from "./SmallCardList"
import { getData, getFPSData } from "../utils/storyblok"
import { createPortal } from "react-dom"



const TopConcerts = ({ data, level, locale }) => {


  var content = data;

  const [concerts, setConcerts] = useState([]);
  getFPSData(content._uid, locale, content.preview = false, 'concert').then(
    function (result) {
      setConcerts(result.data.stories);
  });
  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.newsitem}>
          <h1 className={styles.title}>
            {content.title}
          </h1>

          {content.short&& <div className={styles.short}>
            {render(content.short)}
          </div>}

          {concerts && concerts.length > 0 && <SmallCardList items={concerts} title="Upcoming concerts you can't miss out on" type="concert"></SmallCardList>}

        </div>
      </main>
    </SbEditable>
  )
}

export default TopConcerts
