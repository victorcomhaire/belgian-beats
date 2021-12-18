import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/TopSongs.module.scss"
import SmallCardList from "./SmallCardList"
import { getData, getFPSData } from "../utils/storyblok"
import { createPortal } from "react-dom"



const TopSongs = ({ data, level, locale }) => {

    var content = data;

  const [songs, setSongs] = useState([]);
  getFPSData(content._uid, locale, content.preview = false, 'song').then(
    function (result) {
      setSongs(result.data.stories);
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

          {songs && songs.length > 0 && <SmallCardList items={songs} title="Top Songs" type="song"></SmallCardList>}

        </div>
      </main>
    </SbEditable>
  )
}

export default TopSongs
