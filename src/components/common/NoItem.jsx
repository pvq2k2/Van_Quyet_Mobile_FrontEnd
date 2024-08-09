const NoItem = () => {
  return (
    <div className="content flex h-full flex-col content-center items-center justify-center text-center md:pt-12 xl:flex-row xl:gap-x-10">
      <div className="icon">
        <img
          src="../../../src/assets/images/Oh-no-amico.svg"
          className="mx-auto w-[500px] object-cover"
          alt="404"
        />
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold leading-normal dark:text-white md:text-5xl">
          Không có sản phẩm nào !
        </h2>
        <p className="my-3 text-sm dark:text-white md:py-5 md:text-base">
          Rất tiếc, không có sản phẩm bạn yêu cầu.
        </p>
      </div>
    </div>
  );
};

export default NoItem;
