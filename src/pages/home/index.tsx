import classNames from "classnames";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-around h-full min-w-fit">
      <div
        className={classNames(
          "flex flex-row gap-x-46.25 px-8 md:px-23.75 relative h-1/2 min-w-full",
          'before:content-[""] before:absolute before:top-20.5 before:left-0 before:w-full before:h-40.75',
          "text-3xl text-white",
        )}
      >
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
