import PropTypes from "prop-types";

const NoItem = (props) => {
  const { image, title, subTitle } = props;
  return (
    <div className="content flex h-full flex-col content-center items-center justify-center text-center md:pt-12 xl:flex-row xl:gap-x-10">
      <div className="icon">
        <img src={image} className="mx-auto w-[500px] object-cover" alt="404" />
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold leading-normal dark:text-white md:text-5xl">
          {title}
        </h2>
        <p className="my-3 text-sm dark:text-white md:py-5 md:text-base">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

NoItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default NoItem;
