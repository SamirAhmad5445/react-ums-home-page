const InputField = ({ label, type = "text", id, placeholder = "" }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="border border-primary-200 rounded-md shadow-md py-1.5 px-3 focus:outline-0 focus:shadow-[0_0_1rem_0.0625rem] focus:shadow-primary-300"
      />
    </>
  );
};

export default InputField;
