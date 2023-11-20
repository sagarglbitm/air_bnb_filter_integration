import React, { ButtonHTMLAttributes } from 'react';
// import './Button.scss';
 
interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    // text ?: string;
    className ? : string;
  count:  string;
  selected?: boolean;
  onClick?: ( count : string ) => void;
}
 
const Button: React.FC<ButtonProps> = ({ className, count, selected = false, onClick, ...props }) => {

    const handleClick = () => {
        if(onClick){
            onClick(count)
        }
    }
  return (
    <button className={`button ${selected ? 'selected' : ''}`} onClick={handleClick} {...props}>
      {/* <button className={`button ${selected ? 'selected' : ''}`} onClick={()=> onClick(count)} >  */}
      {count} 
      {/* {typeof count === 'number' ? `${count}`: count} */}
    </button>
  );
};
 
export default Button;
