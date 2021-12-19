import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Song.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"


// const resolveDirectors = {
//   en: 'Directors',
//   nl: 'Regisseurs',
// }

const Song = ({ data, level }) => {
  var locale = 'en';
  var artists = [];
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
    // var directors = data.rels.filter(obj => {
    //   return content.directors.includes(obj.uuid);
    // });
    var genres = data.rels.filter(obj => {
      return content.genres.includes(obj.uuid);
    })
    artists = data.rels.filter(obj => {
      return content.artists.includes(obj.uuid);
    });
  } else {
    var content = data;
  }

  const [products, setProducts] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'product', 'movies').then(
    function (result) {
      setProducts(result.data.stories);
    });

  const [newsitems, setNewsitems] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'newsitem', 'movies').then(
    function (result) {
      setNewsitems(result.data.stories);
    });

  // var pictures = content.pictures;

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.song}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.genrelist}>
            {genres.map((item, index) => (
              <div className={styles.genre}>
                {item.content.title}
              </div>
            ))}
          </div>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>
          <div className={styles.date}>
            {render(content.date)}
          </div>
          <div className={styles.short}>
            {render(content.short)}
          </div>
          {artists && artists.length > 0 && <SmallCardList items={artists} title="Artists" type="artist"></SmallCardList>}
        </div>
      </main>
    </SbEditable>
  )
}

export default Song
