import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import Title from "./title";

const MDXComponent = (code: string): React.JSX.Element => {
  try {
    const fn = new Function(code);
    console.log(code);
    return fn({ ...runtime }).default;
  } catch (error) {
    console.error(error);
  }
  return <></>;
};

const components = {
  Image,
  Title,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = MDXComponent(code);
  // return <Component components={components} />;
}
