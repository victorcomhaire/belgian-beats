import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Artist.module.scss"
import { getData } from "../utils/storyblok"
import InPageSlideshow from "./InPageSlideshow"
import RelatedItemGallery from "./RelatedItemGallery"
import SmallCardList from "./SmallCardList"

const Artist = ({ data, level }) => {
  var songs = [];
  var concerts = [];
  if (level === 'data') {
    var content = data.story.content;
    var countries = data.rels.filter(obj => {
      return content.nationality.includes(obj.uuid);
    });
    songs = data.rels.filter(obj => {
      return content.songs.includes(obj.uuid);
    });
    concerts = data.rels.filter(obj => {
      return content.concerts.includes(obj.uuid);
    });
  } else {
    var content = data;
  }

  const [products, setProducts] = useState([]);
  getData(data.story.uuid, data.story.lang, content.preview = false, 'product', 'personalities').then(
    function (result) {
      setProducts(result.data.stories);
    });

  const [newsitems, setNewsitems] = useState([]);
  getData(data.story.uuid, data.story.lang, content.preview = false, 'newsitem', 'personalities').then(
    function (result) {
      setNewsitems(result.data.stories);
    });

  // var genres = data.rels.filter(obj => {
  //   return content.genres.includes(obj.uuid);
  // })
  var pictures = content.pictures;

  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.artist}>
          <h1 className={styles.title}>
            {content.artist_name} 
          </h1>
          <div className={styles.countrylist}>
            {countries.map((item, index) => (
              <div className={styles.country}>
                <img src={item.content.flag.filename}></img>
              </div>
            ))}
          </div>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}></div>
          <div className={styles.imagegallery}>
            <InPageSlideshow pictures={pictures}></InPageSlideshow>
          </div>
          <div className={styles.short}>
            {render(content.short)}
          </div>
          <div className={styles.bio}>
            {render(content.bio)}
          </div>
          {songs && songs.length > 0 && <SmallCardList items={songs} title="Songs" type="song"></SmallCardList>}
          {concerts && concerts.length > 0 && <SmallCardList items={concerts} title="Concerts" type="concert"></SmallCardList>}
          {products&&products.length>0&&<RelatedItemGallery items={products} title="Merchandise" type="product"></RelatedItemGallery>}
          {newsitems&&newsitems.length>0&&<RelatedItemGallery items={newsitems} title="News" type="newsitem"></RelatedItemGallery>}
        </div>
      </main>
    </SbEditable>
  )
}

export default Artist