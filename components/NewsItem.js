import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/NewsItem.module.scss"
import SmallCardList from "./SmallCardList"



const NewsItem = ({ data, level }) => {
  var songs = [];
  var artists = [];
  //enriching data
  if (level === 'data') {
    var content = data.story.content;
    songs = data.rels.filter(obj => {
      return content.songs.includes(obj.uuid);
    });
    artists = data.rels.filter(obj => {
      return content.artists.includes(obj.uuid);
    });
  } else {
    var content = data;
  }
  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.newsitem}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>
          <div className={styles.short}>
            {render(content.short)}
          </div>
          <div className={styles.article}>
            {render(content.article)}
          </div>
          {artists && artists.length > 0 && <SmallCardList items={artists} title="Related artists" type="artist"></SmallCardList>}
          {songs && songs.length > 0 && <SmallCardList items={songs} title="Related songs" type="song"></SmallCardList>}
      
        </div>
      </main>
    </SbEditable>
  )
}

export default NewsItem
