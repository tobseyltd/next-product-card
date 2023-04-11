import toast, { Toaster } from "react-hot-toast";

interface ProductCardProps {
  imgSrc: string;
  imgAlt: string;
  imgSize: number;
  prodCat: string;
  prodTitle: string;
  prodDesc: string;
  prodPrice: number;
  prodPriceOld: number;
}

const notify = () => {
  toast("Good Job! Feel free to use this component in your projects", {
    icon: "👏",
    position: "bottom-center",
  });
};

export default function ProductCard({
  imgSrc,
  imgAlt,
  imgSize,
  prodCat,
  prodTitle,
  prodDesc,
  prodPrice,
  prodPriceOld,
}: ProductCardProps) {
  return (
    <>
      <section>
        <Toaster />

        <div className="md:wrapper inline-block m-10 md:w-2/6 xl:flex mxl:flex-row bg-white rounded-xl shadow-lg shadow-grey">
          <div className="img-container w-full xl:w-3/6">
            <img
              className="md:rounded-l-xl"
              src={imgSrc}
              alt={imgAlt}
              width={imgSize}
              height={imgSize}
            />
          </div>

          <div className="product-info md:w-3/6 md:flex md:flex-col justify-between p-7">
            <p className="mb-2 md:mb-0 uppercase text-xs tracking-widest">
              {prodCat}
            </p>
            <h1 className="mb-2 md:mb-0 capitalize text-3xl font-bold leading-7">
              {prodTitle}
            </h1>
            <p>{prodDesc}</p>

            <div className="my-2 md:my-0 price-box flex flex-row py-3 items-center">
              <p className="price text-3xl text-green-900 font-bold mr-5 tracking-tighter">
                ${prodPrice}
              </p>
              <p className="old-price line-through text-sm">${prodPriceOld}</p>
            </div>

            <button
              className="bg-green-900 text-white p-2.5 rounded-xl tracking-tighter w-full"
              onClick={notify}
            >
              <img
                className="inline mr-2"
                width={13}
                src="../media/icon-cart.svg"
              />
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
