import Image, { ImageProps } from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import Title from "./title";

const NextImage = (props: ImageProps) => <Image {...props} />;

const components = {
  NextImage,
  Title,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
