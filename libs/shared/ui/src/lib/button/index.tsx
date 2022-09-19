import styles from './button.module.scss';
import React from 'react';

/* eslint-disable-next-line */
export interface ButtonProps {
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void,
  label: string,
  size?: 'sm' | 'md' | 'lg',
  disabled?: boolean,
}

export function Button(props: ButtonProps) {

  const [size, setSize] = React.useState<string>("px-8 py-2");
  const [bgColor, setBgColor] = React.useState<string>("bg-indigo-600 hover:bg-indigo-700 text-white");

  React.useEffect(() => {
    if(props.size == 'sm'){
      setSize("px-6 py-3");
    } if(props.size == 'lg'){
      setSize("px-10 py-5");
    } if (props.size == 'md'){
      setSize("px-8 py-2");
    }
  }, [props.size])

  React.useEffect(() => {
    if(props.disabled){
      setBgColor("bg-gray-300 text-gray-900 disabled");
    } if(!props.disabled){
      setBgColor("bg-indigo-600 hover:bg-indigo-700 text-white");
    }
  }, [props.disabled])



  return (
    <button onClick={props.onClick} disabled={props.disabled} className={`${bgColor} ${size} rounded font-semibold duration-300 transition`}>
      {props.label}
    </button>
  );
}

export default Button;
