import Template from "../components/Template";
import loginImg from "../assets/login.png";

function Login({setLogin}) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setLogin={setLogin}
    />
  );
}

export default Login;
