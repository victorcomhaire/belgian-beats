import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/SongList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList"

const SongList = ({ data, level, locale }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [sortby, setSortby] = useState();

  function updateSortby(sortby){
    setSortby(sortby);
    getAllItems('song', locale, sortby).then(
      function (result) {
        setItems(result.data.stories);
      });
  }
  

  const [items, setItems] = useState([]);
  getAllItems('song', locale, sortby).then(
    function (result) {
      setItems(result.data.stories);
    });

  return (
    <div className={styles.list}>
      <div className={styles.orderbypicker}>
        <div className={styles.orderbytitle}>
          Order by
        </div>
        <div className={styles.orderbyoptions} >
          <div className={styles.orderbyoption} onClick={() => updateSortby("name:asc")}>
            Title
          </div>
        </div>
      </div>
      <div>
        {items && items.length > 0 && <SmallCardList items={items} type="movie"></SmallCardList>}
      </div>
    </div>

  );
};

export default SongList;
