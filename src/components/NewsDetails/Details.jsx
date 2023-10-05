const NewsDetails = ({ news }) => {
  const { title, image_url, details } = news || {};
  return (
    <div className="news mt-5">
      <img
        src={
          image_url ||
          "https://plus.unsplash.com/premium_photo-1694825173871-7b5df4d57ba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        }
        alt=""
      />
      <h1 className="text-xl font-bold text-color-dark-2 leading-8 my-3">
        {title}
      </h1>
      <p className="text-justify text-color-dark-3 text-[16px] leading-6 mt-3">
        {details}
      </p>
    </div>
  );
};

export default NewsDetails;
