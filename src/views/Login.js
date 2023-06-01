// ** React Imports
import { useSkin } from "@hooks/useSkin";
import { Link } from "react-router-dom";

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
import illustrationsLight from "@src/assets/images/pages/login-v2.svg";
import illustrationsDark from "@src/assets/images/pages/login-v2-dark.svg";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

const Login = () => {
  const { skin } = useSkin();

  const source = skin === "dark" ? illustrationsDark : illustrationsLight;

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
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Akademik Veri Yönetim Paneline Hoşgeldiniz! 👋
            </CardTitle>
            <CardText className="mb-2">
              Lütfen giriş yapmak için bilgilerinizi giriniz.
            </CardText>
            <Form
              className="auth-login-form mt-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-email">
                  Email
                </Label>
                <Input
                  type="email"
                  id="login-email"
                  placeholder="john@example.com"
                  autoFocus
                />
              </div>
              <div className="mb-1">
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Password
                  </Label>
                  <Link to="/forgot-password">
                    <small>Parolamı unuttum</small>
                  </Link>
                </div>
                <InputPasswordToggle
                  className="input-group-merge"
                  id="login-password"
                />
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  Beni hatırla
                </Label>
              </div>
              <Button tag={Link} to="/kisisel-bilgiler" color="primary" block>
                Giriş yap
              </Button>
            </Form>
            <p className='text-center mt-2'>
              <span className='me-25'>Hesabın yok mu ?</span>
              <Link to='/register'>
                <span>Hesap oluştur</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
