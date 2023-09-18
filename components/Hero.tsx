import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "<Hi, I'm Phil />",
      "<I'm a Web & Mobile developer />",
      "<Check out my portfolio />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center space-y-8 h-screen text-center">
      <BackgroundCircles />
      <div className="relative w-32 h-32">
        <Image
          className="object-cover mx-auto rounded-full"
          fill
          src="/fifisquare.png"
          alt=""
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="flex text-5xl font-semibold lg:text-6xl scroll-pw-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experince">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
