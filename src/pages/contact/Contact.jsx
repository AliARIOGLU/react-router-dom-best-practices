/* eslint-disable */

import { Helmet } from "react-helmet";
import { Formik, Field, Form } from "formik";
import Input from "../../components/form/Input";
import File from "../../components/form/File";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Formik
        initialValues={{
          name: "codex",
          about: "",
          accept: false,
          gender: 1,
          skills: ["react"],
          avatar: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <Input name="name" label="name-surname" /> <br />
            <Field component="textarea" name="about" /> <br />
            <label>
              <Field type="checkbox" name="accept" />
              Kurallari kabul ediyorum!
            </label>
            <br />
            <Field component="select" name="gender">
              <option value={1}>Male</option>
              <option value={2}>Female</option>
            </Field>
            <Field component="select" name="skills" multiple={true}>
              <option value="react">React</option>
              <option value="css">CSS</option>
              <option value="js">Javascript</option>
              <option value="vuejs">VueJs</option>
            </Field>{" "}
            <br />
            <File label="Avatar" name="avatar" /> <br />
            <button disabled={!values.accept} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Contact;
