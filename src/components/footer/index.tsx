import { FunctionComponent } from "react";
import { iProps } from "../../interfaces/iProps.interface";
import Link from "next/link";
import SocialContact from "../socialContact/index";
import ButtonLink from "../button/buttonLink";

interface FooterProps extends iProps {
  className?: string;
}

const Footer: FunctionComponent<FooterProps> = ({
  className,
  children,
  ...props
}: FooterProps) => {
  return (
    <footer className="border-t flex justify-center items-center flex-col">
      <div className="container grid sm:grid-cols-1 md:grid-cols-2 py-10 border-b">
        <div className="flex justify-center">
          <div className="flex flex-col justify-around gap-2 items-start">
            <p className="text-3xl font-semibold">Dang Le Hoai Vu</p>
            <p className="text-xl font-medium text-slate-500">
              Fullstack Web Developer
            </p>
            <div>
              <SocialContact className="icon-intro flex flex-wrap gap-4" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center sm:my-10 md:my-0">
          <div>
            <div>
              <p className="text-xl font-bold">Email me:</p>
              <ButtonLink href={"mailto:danglehoaivu@gmail.com"}>
                danglehoaivu@gmail.com
              </ButtonLink>
            </div>
            <div>
              <p className="text-xl font-bold mt-5">Call me:</p>
              <ButtonLink href={"tel:0912432136"}>0912432136</ButtonLink>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-center">
        <p className="inline">© {new Date().getFullYear()} Copyright:</p>
        <Link
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="https://github.com/VuSE150296"
        >
          {" "}
          Dang Le Hoai Vu
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
