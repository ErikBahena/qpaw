const ProductList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-24">
      <div className="relative m-6 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-orange-500 shadow-lg">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative flex items-center justify-center px-10 pt-10">
          <div
            className="absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>
          <img className="relative w-40" src="/blue-tag.png" alt="" />
        </div>
        <div className="relative mt-6 px-6 pb-6 text-white">
          <span className="-mb-1 block opacity-75">Indoor</span>
          <div className="flex justify-between">
            <span className="block text-xl font-semibold">Peace Lily</span>
            <span className="block flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-orange-500">
              $36.00
            </span>
          </div>
        </div>
      </div>
      <div className="relative m-6 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-teal-500 shadow-lg">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative flex items-center justify-center px-10 pt-10">
          <div
            className="absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48"
            style={{
              background: "radial-gradient(black, transparent 60%)",
              transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
              opacity: 0.2,
            }}
          ></div>
          <img className="relative w-40" src="/pink-tag.png" alt="" />
        </div>
        <div className="relative mt-6 px-6 pb-6 text-white">
          <span className="-mb-1 block opacity-75">Outdoor</span>
          <div className="flex justify-between">
            <span className="block text-xl font-semibold">Monstera</span>
            <span className="block flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-teal-500">
              $45.00
            </span>
          </div>
        </div>
      </div>
      <div className="relative m-6 max-w-xs flex-shrink-0 overflow-hidden rounded-lg bg-violet-300 shadow-lg">
        <svg
          className="absolute bottom-0 left-0 mb-8"
          viewBox="0 0 375 283"
          fill="none"
          style={{ transform: "scale(1.5)", opacity: 0.1 }}
        >
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </svg>
        <div className="relative flex items-center justify-center px-10 pt-10">
          <div
            className="absolute bottom-0 left-0 -mb-24 ml-3 block h-48 w-48"
            // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
          ></div>
          <img className="relative w-40" src="/purple-tag.png" alt="" />
        </div>
        <div className="relative mt-6 px-6 pb-6 text-white">
          <span className="-mb-1 block opacity-75">Outdoor</span>
          <div className="flex justify-between">
            <span className="block text-xl font-semibold">Oak Tree</span>
            <span className="block flex items-center rounded-full bg-white px-3 py-2 text-xs font-bold leading-none text-purple-500">
              $68.50
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
