import styles from "../style/loader.module.css";

function Loader() {

  return (
    <>
      <div className={styles.captionWrapper}>
        <div className={styles.caption}>
          <div id={styles.container}>
            <div id={styles.ball1} className={styles.circle}></div>
            <div id={styles.ball2} className={styles.circle}></div>
            <div id={styles.ball3} className={styles.circle}></div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Loader;