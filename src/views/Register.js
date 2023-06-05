// ** React Imports
import { Link } from "react-router-dom";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

import { useState } from "react";

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from "react-feather";

// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";

// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

// ** Illustrations Imports
import illustrationsLight from "@src/assets/images/pages/register-v2.svg";
import illustrationsDark from "@src/assets/images/pages/register-v2-dark.svg";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

// ** Firebase import
import {register} from "../Firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // ** Hooks
  const { skin } = useSkin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const source = skin === "dark" ? illustrationsDark : illustrationsLight;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password);
    navigate("/");
  };

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" xs="12" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Buradan hesap oluşturabilirsiniz! 
            </CardTitle>
            <CardText className="mb-2">
              Lütfen bilgilerinizi eksiksiz giriniz.
            </CardText>
            <Form
              className="auth-register-form mt-2"
              onSubmit={handleSubmit}
            >
              <div className="mb-1">
                <Label className="form-label" for="register-email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="register-email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-password">
                  Şifre
                </Label>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="register-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button  color="primary" block disabled={!email || !password}>
                Kayıt ol
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">Hesabın var mı?</span>
              <Link to="/login">
                <span>Giriş yap</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
