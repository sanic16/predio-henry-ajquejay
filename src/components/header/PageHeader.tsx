interface PageHeaderProps {
  title: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, className }) => {
  return (
    <div
      className={`${className} bg-no-repeat bg-center bg-cover h-[15vh] sm:h-[25vh] flex justify-start items-center p-4`}
    >
      <h1 className="text-white text-3xl font-bold tracking-wider">{title}</h1>
    </div>
  );
};

export default PageHeader;
