import style from './Button.module.css'
import PropTypes from 'prop-types';

export const Button =({title})=>{
  return (
    <button className={style.button}>{title}</button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
}