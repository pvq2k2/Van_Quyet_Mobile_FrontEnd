const VerifyAccountSkeleton = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <div className="flex animate-pulse flex-col">
        <div className="content flex h-full flex-col content-center items-center justify-center gap-10 text-center md:pt-12 xl:flex-row">
          <div className="icon h-[400px] w-[500px] rounded bg-gray-200 dark:bg-gray-800"></div>

          <div className="flex flex-col">
            <div className="h-10 w-96 rounded bg-gray-200 dark:bg-gray-800"></div>
            <div className="mt-3 h-4 w-full rounded bg-gray-200 dark:bg-gray-800"></div>
            <div className="mb-3 mt-1 h-4 w-full rounded bg-gray-200 dark:bg-gray-800"></div>
            <div className="mt-5 h-4 rounded-3xl bg-gray-200 px-10 py-2 dark:bg-gray-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccountSkeleton;
