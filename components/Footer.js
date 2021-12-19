import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
          <img
            src="https://a.storyblok.com/f/138540/120x135/243204d9a7/belgian_beats_logo_footer.png"
            alt="Belgian Beats Logo"
            className=""
          />
        </div>
        <p>Belgian Beats to beat the silence!</p>
      </div>
    </footer>



  )
}

export default Footer
