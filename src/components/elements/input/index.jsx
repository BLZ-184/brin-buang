const Input = ({ id, type = "text", placeholder, label }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder || label}
        className="border-2 border-white rounded-md p-2 bg-black text-white"
      />
    </>
  );
};

export default Input;
