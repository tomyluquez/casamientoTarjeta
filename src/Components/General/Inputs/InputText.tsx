interface PropsInputs {
  label: string;
  register: Function;
  errors: any;
  name: string;
  placeholder: string;
  error: string;
}
const InputText = ({
  label,
  register,
  errors,
  name,
  placeholder,
  error,
}: PropsInputs) => {
  return (
    <div className={`flex flex-col justify-center align-center text-center`}>
      <label htmlFor={name}>{label}</label>
      <input
        className={`inputCustom ${errors && 'inputError'}`}
        id={name}
        type="text"
        {...register(name, { required: true })}
        placeholder={placeholder}
      />
      {errors && errors[name]?.type === 'required' && (
        <span className="text-error">{error}</span>
      )}
    </div>
  );
};

export default InputText;
