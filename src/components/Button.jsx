export default function Button({
  icon,
  text,
  btnClassName = {},
  textClassName = {},
  ...rest
}) {
  return (
    <button
      className={`flex items-center justify-center border-0 outline-0 rounded-full py-2 px-5 gap-2 cursor-pointer transition-all ${btnClassName}`}
      {...rest}
    >
      {icon}
      <span className={`${textClassName}`}>{text}</span>
    </button>
  );
}
