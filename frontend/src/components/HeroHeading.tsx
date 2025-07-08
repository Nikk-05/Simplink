interface HeroHeadingProps {
  text1?: string;
  text2?: string;
}

const HeroHeading = ({ text1, text2 }: HeroHeadingProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-4xl font-medium text-gray-500 mb-2">{text1}</p>
      <p className="text-4xl font-medium text-gray-900 mb-2">{text2}</p>
    </div>
  );
}

export default HeroHeading;