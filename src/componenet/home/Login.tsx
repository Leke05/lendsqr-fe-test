import styled from "styled-components";
import FormHeader from "../layout/globalcomponent/FormHeader";
import { Fields, FormGroup } from "../layout/globalcomponent/Utils";
import GlobalInput from "../layout/globalcomponent/GlobalInput";
import { useFormik } from "formik";
import GlobalBtn from "../layout/globalcomponent/GlobalBtn";
import { loginSchema } from "../../validations/addLoginValidation";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

type FormProps = {
  email: string;
  password: string;
};

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const onSuccess = () => {
    enqueueSnackbar("Login successful!", {
      variant: "success",
      preventDuplicate: true,
    });
    navigate("/dashboard");
  };
  const onSubmit = (values: FormProps) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    localStorage.setItem("userLogin", JSON.stringify(payload));

    const localStorageData = localStorage.getItem("userLogin");
    if (localStorageData) {
      onSuccess();
    }
  };

  const { values, handleChange, handleBlur, handleSubmit, errors } =
    useFormik<FormProps>({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      },
    });
  return (
    <FormContainer>
      <FormHeader title="Welcome!" subHeading="Enter details to login." />
      <form onSubmit={handleSubmit}>
        <Fields>
          <FormGroup columns={1} mb="20px">
            <GlobalInput
              inputName="email"
              inputValue={values.email}
              labelText="Email"
              labelColor="#687683"
              inputPlaceholder="Email"
              inputType="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              errorMessage={errors.email}
              error={!!errors.email}
            />
          </FormGroup>
          <FormGroup columns={1}>
            <GlobalInput
              inputName="password"
              inputValue={values.password}
              labelText="Password"
              labelColor="#687683"
              inputPlaceholder="Password"
              inputType="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              errorMessage={errors.password}
              error={!!errors.password}
            />
          </FormGroup>
        </Fields>
        <GlobalBtn
          type="submit"
          className="btn"
          bgClr="#39cdcc"
          hoverBg="#39cdcc"
          disabled={!values.password || !values.email}
        >
          Login
        </GlobalBtn>
      </form>
    </FormContainer>
  );
};

export default Login;

const FormContainer = styled.div`
  background-color: #fff;
  margin-top: 1rem;
  .btn {
    margin: auto;
    margin-top: 10px;
  }

  @media screen and (max-width: 768px) {
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    top: -40px;
    .btn {
      width: 120px;
    }
  }
`;
