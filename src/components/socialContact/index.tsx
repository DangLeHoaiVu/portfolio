import { FunctionComponent } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import { iProps } from "../../interfaces/iProps.interface";

interface SocialContactProps extends iProps {
  className?: string;
}

const SocialContact: FunctionComponent<SocialContactProps> = ({
  children,
  className,
  ...props
}: SocialContactProps) => {
  return (
    <div className={className}>
      <Link href="https://github.com/VuSE150296" target="blank">
        <GitHubIcon fontSize="large" />
      </Link>
      <Link href="https://www.facebook.com/danglehoaivu/" target="blank">
        <FacebookIcon fontSize="large" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/dang-le-hoai-vu-0a9329214/"
        target="blank"
      >
        <LinkedInIcon fontSize="large" />
      </Link>
      <Link href={"mailto:danglehoaivu@gmail.com"} target="blank">
        <MailIcon fontSize="large" />
      </Link>
    </div>
  );
};

export default SocialContact;
