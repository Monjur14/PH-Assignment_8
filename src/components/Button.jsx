const Button = ({bgColor, textColor, text}) => {
  return (
    <button className={`${bgColor} px-4 py-1 rounded-md ${textColor}`}>{text}</button>
  )
}

export default Button
