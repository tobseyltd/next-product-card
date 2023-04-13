import Image from "next/image";
import tw from "tailwind-styled-components";

interface Props {
  id: number;
  advice: string;
  randomAdvice: () => void;
}

// COMPONENT FUNCTION ///////////////////////////////////////////////////////////////////////////////////////

const AdviceGenerator = ({ advice, id, randomAdvice }: Props) => {
  return (
    <DIVwrapper>
      <DIVcontainer>
        <Pid>ADVICE #{id}</Pid>

        <BQadvice>"{advice}"</BQadvice>

        <img
          className="mt-5"
          src="/media/advice-generator/pattern-divider-desktop.svg"
          alt=""
        />
      </DIVcontainer>

      <DIVbuttonWrapper onClick={randomAdvice}>
        <Image
          src="/media/advice-generator/icon-dice.svg"
          width={20}
          height={20}
          alt=""
        />
      </DIVbuttonWrapper>
    </DIVwrapper>
  );
};

export default AdviceGenerator;

// STYLED COMPONENTS ///////////////////////////////////////////////////////////////////////////////////////

const DIVwrapper = tw.div`
    flex
    h-screen 
    w-screen 
    flex-col 
    items-center 
    justify-center 
    bg-dark-grayish-blue2
    p-5
`;

const DIVcontainer = tw.div`
    container
    md:w-7/12
    xl:w-3/12 
    mx-auto 
    flex 
    flex-col 
    items-center 
    rounded-3xl
    bg-grayish-blue/50
    p-16
`;

const DIVbuttonWrapper = tw.div`
    -mt-8 
    rounded-full 
    bg-neon-green 
    p-5 
    hover:cursor-pointer
`;

const Pid = tw.p`
    text-sm
    text-center 
    tracking-widest 
    text-neon-green
`;

const BQadvice = tw.blockquote`
    mb-5 
    text-center 
    text-4xl 
    font-bold 
    leading-10
    text-light-cyan
    bg-transparent 
`;
