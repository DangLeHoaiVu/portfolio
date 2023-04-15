import { iProps } from "@/interfaces/iProps.interface";
import Link from "next/link";
import { FunctionComponent } from "react";

interface ButtonLinkProps extends iProps {
  href?: string;
  active?: boolean;
  className?: string;
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  href,
  children,
  active,
  className,
  ...props
}: ButtonLinkProps) => {
  return (
    <>
      <Link
        href={href || ""}
        className={`btn relative inline-flex items-center justify-start overflow-hidden transition-all rounded group ${
          active ? "border-b-2" : ""
        }`}
      >
        <span className="w-0 h-0 rounded bg-gradient-to-r from-purple-500 to-pink-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
        <span
          className={`w-full text-white transition-colors duration-150 ease-in-out group-hover:text-white z-10 p-1 text-xl font-semibold ${
            className ? className : ""
          }`}
        >
          {children}
        </span>
      </Link>
    </>
  );
};

export default ButtonLink;
