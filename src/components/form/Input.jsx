/* eslint-disable */
import { useField } from "formik";

export default function Input({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  // console.log("field", field);
  // console.log("meta", meta);
  // console.log("helpers", helpers);

  return (
    <label>
      <div>{label}</div>
      <input {...props} {...field} />
    </label>
  );
}
