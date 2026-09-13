export default function Button({
  icon,
  text,
  btnStyle = {},
  textStyle = {},
  ...rest
}) {
  return (
    <button style={btnStyle} {...rest}>
      {icon}
      <span style={textStyle}>{text}</span>
    </button>
  );
}
