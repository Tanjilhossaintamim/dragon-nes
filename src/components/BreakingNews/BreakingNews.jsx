import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="h-20 p-4 bg-color-dark-7 flex items-center my-7 w-full">
      <button className="bg-color-secondary w-28 h-12 text-white text-xl font-medium">
        Latest
      </button>
      <div className="ml-5 w-[899px]">
        <Marquee pauseOnHover={true} speed={30}>
          <p className="text-lg text-color-dark-2 font-semibold">
            Match Highlights: Germany vs Spain as it happened ! Match
            Highlights: Germany vs Spain as.
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
