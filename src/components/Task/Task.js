import styles from "./Task.module.css";
import Controls from "../Controls/Controls";

const Task = (props) => {
  let blobs = [
    styles.blob1,
    styles.blob2,
    styles.blob3,
    styles.blob4,
    styles.blob5,
    styles.blob6,
    styles.blob7,
    styles.blob8,
    styles.blob9,
    styles.blob10,
    styles.blob11,
    styles.blob12,
  ];

  let arr = [];
  for (let i = 1; i <= props.goals; i++) {
    if (i <= props.done) {
      arr.push(`${styles.blob} ${blobs[i - 1]} ${styles.active}`);
    } else {
      arr.push(`${styles.blob} ${blobs[i - 1]}`);
    }
  }

  return (
    <>
      <div className={styles.box}>
        <div className={styles.symbol}>
          <img src={props.emoji} alt="blog" />
          {arr.map((item) => (
            <div className={item} />
          ))}
        </div>
        <Controls
          goals={props.goals}
          done={props.done}
          change={props.change}
          id={props.id}
        />
      </div>
    </>
  );
};

export default Task;
