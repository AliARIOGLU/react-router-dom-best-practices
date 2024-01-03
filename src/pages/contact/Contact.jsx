/* eslint-disable */

import { Helmet } from "react-helmet";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";

import File from "../../components/form/File";
import Input from "../../components/form/Input";
import { useAuth } from "../../context/AuthContext";

const Contact = () => {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  return (
    <div className="contact">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Formik
        initialValues={{
          name: user.username || "",
          about: "",
          gender: "female",
          skills: [],
          avatar: "",
          accept: false,
        }}
        onSubmit={(values, actions) => {
          console.log("submit", values);
          console.log("actions", actions);
          setUser({ ...user, username: values.name ?? user.username });
          navigate("/");
        }}
      >
        {({ values }) => (
          <Form className="form">
            <Input name="name" label="name-surname" /> <br />
            <Field
              placeholder="Write about you..."
              cols={25}
              rows={4}
              component="textarea"
              name="about"
            />
            <br />
            <Field
              style={{ marginBottom: "10px" }}
              component="select"
              name="gender"
            >
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
            </Field>
            <Field component="select" name="skills" multiple={true}>
              <option value="" disabled>
                Select skill/s
              </option>
              <option value="react">React</option>
              <option value="css">CSS</option>
              <option value="js">Javascript</option>
              <option value="vuejs">VueJs</option>
            </Field>
            <br />
            <File label="Avatar" name="avatar" /> <br />
            <label>
              <Field type="checkbox" name="accept" />
              Kurallari kabul ediyorum!
            </label>
            <br />
            <button
              className="submit-btn"
              disabled={!values.accept}
              type="submit"
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
