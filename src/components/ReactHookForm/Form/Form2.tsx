import React from "react";
import {
  useForm,
  UseFormReturn,
  UseFormRegisterReturn,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

const Input = (props: Partial<UseFormRegisterReturn> & { type?: string }) => {
  return <input {...props} />;
};

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectProps = UseFormRegisterReturn & { options: Option[] };

const Select = ({ options, ...props }: SelectProps) => (
  <select {...props}>
    {options.map(({ label, value }) => (
      <option value={value}>{label}</option>
    ))}
  </select>
);

type FormProps<TFormValues extends FieldValues = FormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};

type FormValues = {
  firstName: string;
  lastName: string;
  sex: string;
};

export default function Form2() {
  const onSubmit = (data: FormValues) => alert(JSON.stringify(data));

  return (
    <>
      <h1>React Hook Form - UseFormReturn</h1>
      <Form<FormValues> onSubmit={onSubmit}>
        {({ register }) => (
          <>
            <Input {...register("firstName")} />
            <Input {...register("lastName")} />
            <Select
              {...register("sex")}
              options={[
                { label: "Female", value: "female" },
                { label: "Male", value: "male" },
              ]}
            />
            <Input type="submit" />
          </>
        )}
      </Form>
    </>
  );
}
