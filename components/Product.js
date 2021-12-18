import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Product.module.scss"
import Storyblok, { useStoryblok, getData } from "../utils/storyblok"
import RelatedItem from "./RelatedItem"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"
import { FacebookShareButton, FacebookIcon,TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from 'next-share';



const Product = ({ data, level }) => {
  var artists = [];
  var songs = [];
  if (level === 'data') {
    var content = data.story.content;
    var artists = data.rels.filter(obj => {
      return content.artists.includes(obj.uuid);
    });
    songs = data.rels.filter(obj => {
      return content.songs.includes(obj.uuid);
    });
  } else {
    var content = data;
  }

  return (
    <SbEditable content={content} key={data.uuid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.product}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className="sharebar">
            <FacebookShareButton url={"http://imdbplus.vercel.app/"+data.story.full_slug} quote={content.short} hashtag={'#imdbplus'}><FacebookIcon size={32} round /></FacebookShareButton>
            <LinkedinShareButton url={"http://imdbplus.vercel.app/"+data.story.full_slug} summary={content.short}><LinkedinIcon size={32} round /></LinkedinShareButton>
            <TwitterShareButton url={"http://imdbplus.vercel.app/"+data.story.full_slug} title={content.title}><TwitterIcon size={32} round /></TwitterShareButton>
          </div>
          <div className={styles.producthead}>
            <div className={styles.producthead_first}>
              <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
              </div>
            </div>
            <div className={styles.producthead_second}>
              <div className={styles.price}>
                €{content.price}
              </div>
              <div className={styles.short}>
                {render(content.short)}
              </div>
            </div>
          </div>


          <div className={styles.imagegallery}>
            <InPageSlideshow pictures={content.pictures}></InPageSlideshow>
          </div>

          <div className={styles.description}>
            <div className={styles.title}>Description</div>
            <div className={styles.content}> {render(content.description)}</div>

          </div>
          {artists && artists.length > 0 && <SmallCardList items={artists} title="Related artists" type="artist"></SmallCardList>}
          {songs && songs.length > 0 && <SmallCardList items={songs} title="Related songs" type="song"></SmallCardList>}
        </div>
      </main>
    </SbEditable>
  )
}

export default Product
