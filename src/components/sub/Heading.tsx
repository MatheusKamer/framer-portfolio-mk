interface IHeadingProps {
  text: string;
}

const Heading = ({ text }: IHeadingProps) => {
  return (
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-600 mb-14 self-start dark:text-white transition-colors">
      {text}
    </h1>
  );
};

export default Heading;
