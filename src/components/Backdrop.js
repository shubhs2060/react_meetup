import classes from '../styles/BackDrop.module.css'

function BackDrop(props){
  return <div className={classes.cardBorder}>{props.children}</div>
}
export default BackDrop;