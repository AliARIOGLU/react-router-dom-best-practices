/* eslint-disable */
import { useField } from "formik";

export default function Checkbox({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <label>
      <div>{label}</div>
      <input {...props} {...field} />
    </label>
  );
}
