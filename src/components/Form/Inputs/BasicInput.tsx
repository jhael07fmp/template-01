import { InputWrapper, LabelForInput } from "./InputCustom";
import { InputCustomType } from "./types/types";

const BasicInput = ({
  isVisible,
  label,
  rules,
  type,
  defaultValue,
  disabled,
  placeholder,
  register,
  name,
}: InputCustomType) => {
  return (
    <InputWrapper isVisible={isVisible}>
      <LabelForInput label={label} required={rules} />
      <input
        type={type}
        value={defaultValue}
        disabled={disabled}
        placeholder={placeholder}
        className="input-basic"
        {...register!(name, rules)}
      />
    </InputWrapper>
  );
};

export default BasicInput;
