import Image from "next/image";
import { getAnimalById } from "./api/animals";
import { useRouter } from "next/router";

const Card = () => {
  // get the id from the url
  const router = useRouter();
  const { id } = router.query;

  // get data from api
  const data = getAnimalById(id);

  // if data is not fetched yet show loading version of card
  if (!data) {
    return (
      <main className={`flex min-h-screen flex-col bg-blue-400`}>
        <div className="mx-auto h-[350px] w-full max-w-lg bg-gray-200"></div>

        {/* card with dog info */}
        <div className="px-2 pb-4">
          <div className="mx-auto -mt-8 flex w-full max-w-md flex-col rounded-3xl bg-slate-50 p-4">
            <div className="flex justify-between animate-pulse duration-500">
              <div className="h-4 w-1/4 bg-gray-200 animate-pulse duration-500"></div>
              <div className="h-4 w-1/4 bg-gray-200 animate-pulse duration-500"></div>
            </div>

            <div className="flex justify-between animate-pulse duration-500">
              <div className="h-4 w-1/4 bg-gray-200 animate-pulse duration-500"></div>
              <div className="h-4 w-1/4 bg-gray-200 animate-pulse duration-500"></div>
            </div>

            {/* div with 1px border bottom */}
            <div className="my-2 border-b border-gray-300 animate-pulse duration-500"></div>

            {/* Description */}
            <div className="my-2 h-4 bg-gray-200 animate-pulse duration-500"></div>

            {/* div with 1px border bottom */}
            <div className="my-2 border-b border-gray-300 animate-pulse duration-500"></div>

            {/* Owner */}
            <div className="my-2 animate-pulse duration-500">
              <div className="flex gap-4 animate-pulse duration-500">
                <div className="h-14 w-14 rounded-full bg-gray-200 animate-pulse duration-500"></div>
                <div className="flex flex-col animate-pulse duration-500">
                  <div className="h-4 w-32 bg-gray-200 animate-pulse duration-500"></div>
                  <div className="mt-1 h-4 w-20 bg-gray-200 animate-pulse duration-500"></div>
                </div>
              </div>
            </div>

            <a
              href={`tel:`}
              className="mt-2 rounded-3xl bg-blue-500 px-5 py-3 text-center blur-[2px] font-semibold text-white"
            >
              Call Owner
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={`flex min-h-screen flex-col bg-blue-400`}>
      <Image
        className="mx-auto h-[350px] w-full max-w-lg object-cover"
        src={data.image}
        alt={data.name}
        priority
        width={500}
        height={500}
      />

      {/* card with dog info */}
      <div className="px-2 pb-4">
        <div className="mx-auto -mt-8 flex w-full max-w-md flex-col rounded-3xl bg-slate-50 p-4">
          <div className="flex justify-between">
            <h1 className="flex items-center gap-0.5 text-2xl font-semibold capitalize">
              {data.name}
              {data.type === "Dog" ? (
                <img className="inline-block h-6 w-6" src="/dog-paw.png" alt="dog paw" />
              ) : (
                <img className="ml-1 inline-block h-4 w-4" src="/cat-paw.svg" alt="cat paw" />
              )}
            </h1>
            <p className="text-sm text-gray-500">
              {data.age_in_months / 12} year old
            </p>
          </div>

          <div className="flex justify-between">
            <div className="text-sm text-gray-500">{data.breed}</div>
            <p
              className={`cursive text-sm capitalize ${
                data.gender === "male" ? "text-blue-500" : "text-pink-500"
              }`}
            >
              {data.gender}
            </p>
          </div>

          {/* div with 1px border bottom */}
          <div className="my-2 border-b border-gray-300"></div>

          {/* Description */}
          <p className="my-2 text-gray-700">{data.description}</p>

          {/* div with 1px border bottom */}
          <div className="my-2 border-b border-gray-300"></div>

          {/* Owner */}
          <div className="my-2">
            <div className="flex gap-4">
              <Image
                className="h-14 w-14 rounded-full"
                src={data.owner.image}
                alt="owner"
                width={100}
                height={100}
              />
              <div className="flex flex-col">
                <p className="font-semibold text-gray-800">{data.owner.name}</p>
                <p className="text-sm text-gray-400">Owner of {data.name}</p>
              </div>
            </div>
          </div>

          <a
            href={`tel:${data.owner.phone}`}
            className="mt-2 rounded-3xl bg-blue-500 px-5 py-3 text-center font-semibold text-white"
          >
            Call Owner
          </a>
        </div>
      </div>
    </main>
  );
};

export default Card;
