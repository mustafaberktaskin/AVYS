// ** Icons Import
import { Heart } from "react-feather";

const Footer = () => {
  return (
    <p className="clearfix mb-0">
      <span className="float-md-start d-block d-md-inline-block mt-25">
        COPYRIGHT © {new Date().getFullYear()}{" "}
        <a
          href="https://www.linkedin.com/in/mustafa-berk-ta%C5%9Fk%C4%B1n-5938b6207/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Mustafa Berk TAŞKIN
        </a>
        <span className="d-none d-sm-inline-block">, Tüm hakları saklıdır.</span>
      </span>

    </p>
  );
};

export default Footer;
