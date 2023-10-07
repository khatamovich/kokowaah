import { Link } from "react-router-dom";

const ButtonLink = ({ children, ...props }) => {
   return <Link {...props}>{children}</Link>;
};

export default ButtonLink;
