import type { FieldValues, Path, UseFormRegister } from "react-hook-form";


type InputBoxProps<T extends FieldValues> = {
  label: string;
  id: Path<T>;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
};

function InputBox<T extends FieldValues>({
  label,
  id,
  type = "text",
  placeholder,
  register,
}: InputBoxProps<T>) {


  return (
    <div className="flex flex-col gap-1 ">
      <label htmlFor={id} className="font-bold">{label}</label>

      <input
        id={id}
        type={type}
        className={`border-2 border-[rgb(var(--primary-rgb)/0.3)] rounded-xl px-2 py-1 focus:outline-none focus:border-[var(--primary-color)] hover:border-[var(--primary-color)]`}
        placeholder={placeholder}
        {...register(id)}
      />
    </div>
  );
}

export default InputBox;