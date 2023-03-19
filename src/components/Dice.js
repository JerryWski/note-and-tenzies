import styles from "./Dice.module.css"

const Dice = (props) => {
  const styling = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }
  return (
    <div onClick={props.holdDice} className={styles.dice_face} style={styling}>
      <h2 className={styles.dice_num}>{props.value}</h2>
    </div>
  );
};

export default Dice;
