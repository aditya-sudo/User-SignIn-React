import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import "yup-phone";
import { setUsers } from "../redux/actions/action-creator";
import "./Signup.css";

function Signup({ setLogin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (values) => {
    const imageBlob = URL.createObjectURL(values.photo);
    values.photo = imageBlob;
    console.log(imageBlob);
    setLogin(true);
    dispatch(setUsers(values));
    navigate("/home");
  };
  const initialValues = {
    photo: null,
    name: "",
    email: "",
    phoneno: "",
    password: "",
    confirmpassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid Email ID").required("Required"),
    phoneno: Yup.string().required("Required").phone("IN"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Required"),
    photo: Yup.mixed()
      .nullable()
      .required("photo is required!!!")
      .test("fileSize", "photo is too large", (value) => {
        console.log(value);
        return value.size <= 20000000;
      })
      .test("fileType", "image type should be jpg or png only", (value) => {
        return (
          !value ||
          (value !== null &&
            [
              "image/jpg",
              "image/png",
              "image/jpeg",
              "image/webp",
              "image/gif",
            ].includes(value.type))
        );
      }),
  });
  return (
    <div>
      <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="mb-2">
              <label
                for="file-upload"
                type="button"
                className="btn btn-sm btn-light upload"
              >
                Photo +
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  className="pic"
                  onChange={(event) => {
                    setFieldValue("photo", event.currentTarget.files[0]);
                  }}
                />
              </label>
              <ErrorMessage
                name="photo"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="name">Name</label>
              <br />
              <Field type="text" id="name" name="name" className="field" />
              <ErrorMessage
                name="name"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email</label>
              <br />
              <Field type="email" id="email" name="email" className="field" />
              <ErrorMessage
                name="email"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phoneno">Phone no</label>
              <br />
              <Field type="tel" id="phoneno" name="phoneno" className="field" />
              <ErrorMessage
                name="phoneno"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password">Password</label>
              <br />
              <Field
                type="password"
                id="password"
                name="password"
                className="field"
              />
              <ErrorMessage
                name="password"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <br />
              <Field
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                className="field"
              />
              <ErrorMessage
                name="confirmpassword"
                render={(msg) => <div className="error">{msg}</div>}
              />
            </div>

            <button className="btn btn-sm btn-primary mt-3" type="submit">
              Submit
            </button>
            <button
              className="btn btn-sm btn-danger mt-3 ml-3 reset"
              type="reset"
            >
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default Signup;
