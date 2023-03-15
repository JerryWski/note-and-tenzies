import styles from "./Dice.module.css"

const Dice = (props) => {
  return (
    <div className={styles.dice_face}>
      <h2 className={styles.dice_num}>{props.value}</h2>
    </div>
  );
};

export default Dice;
