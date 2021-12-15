import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/ArtistList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const ArtistList = ({ data, level }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [items, setItems] = useState([]);
  getAllItems('artist').then(
    function (result) {
      setItems(result.data.stories);
    });

  return (

    <div>
      {items && items.length > 0 && <SmallCardList items={items} type="artist"></SmallCardList>}
    </div>

  );
};

export default ArtistList;
