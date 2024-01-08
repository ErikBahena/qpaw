import Link from "next/link";

const products = [
  {
    id: 1,
    color: "orange",
    imageSrc: "/blue-tag.png",
    subtitle: "Outdoor",
    title: "Blue Skies",
    price: 15.49,
    linkToProduct: "/product/1",
  },
  {
    id: 2,
    color: "teal",
    imageSrc: "/pink-tag.png",
    subtitle: "Sweet",
    title: "Heart",
    price: 10.99,
    linkToProduct: "/product/2",
  },
  {
    id: 3,
    color: "purple",
    imageSrc: "/purple-tag.png",
    subtitle: "Doggy",
    title: "Friend",
    price: 12.99,
    linkToProduct: "/product/3",
  },
];

const ProductList = () => {
  return (
    <div className="p-24">
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-600">
          Explore the World of Qtag
        </h2>
        <h1 className="mt-2 text-3xl font-semibold text-gray-800">
          Unique Tags for Your Furry Friends
        </h1>
      </div>

      <div className="mt-9 flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

interface ProductCardProps {
  color: string;
  imageSrc: string;
  subtitle: string;
  title: string;
  price: number;
  linkToProduct: string;
}

const ProductCard = ({
  color,
  imageSrc,
  subtitle,
  title,
  price,
  linkToProduct,
}: ProductCardProps) => {
  return (
    <Link
      href={linkToProduct}
      className={`${tailwindCssVariantGenerator(
        "bg",
        color
      )} relative m-6 flex-shrink-0 overflow-hidden rounded-lg shadow-lg transition-all
       duration-500 hover:scale-105 hover:shadow-xl`}
    >
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
        <img className="relative w-40" src={imageSrc} alt="" />
      </div>
      <div className="relative mt-6 px-6 pb-6 text-white">
        <span className="-mb-1 block opacity-75">{subtitle}</span>
        <div className="flex justify-between">
          <span className="block text-xl font-semibold">{title}</span>
          <button
            className={`${tailwindCssVariantGenerator(
              "text",
              color
            )} block items-center rounded-full bg-white px-3 py-2 text-xs font-semibold leading-none`}
          >
            ${price.toFixed(2)}
          </button>
        </div>
      </div>
    </Link>
  );
};

const tailwindCssVariantGenerator = (prefix: string, color: string) => {
  return `${prefix}-${color}-500`;
};
