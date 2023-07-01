import { LikeEstampaConstants } from "../../constants/constants";
import { IProduct } from "../../interfaces/IProduct";

type ProductDetailVariationsProps = {
  product: IProduct;
};

export default function ProductDetailVariations(
  props: ProductDetailVariationsProps
) {
  const product = props.product;

  return (
    <>
      {product.variations.length > 0 ? (
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Cor:</span>
            {product.variations
              .filter((v) => v.id === LikeEstampaConstants.VARIATION_COLOR_ID)
              .map((v) =>
                Array.isArray(v.values) && v.values.length > 0 ? (
                  v.values.map((vv) => (
                    <button
                      key={vv.id}
                      className={`border-2 border-gray-300 ml-1 ${
                        vv.color
                          ? `bg-[${vv.color.toLowerCase()}]`
                          : "bg-pink-400"
                      } rounded-full w-6 h-6 focus:outline-none`}
                    ></button>
                  ))
                ) : (
                  <p key={v.id}>Não informado</p>
                )
              )}
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Tamanho</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                {product.variations
                  .filter(
                    (v) => v.id === LikeEstampaConstants.VARIATION_SIZE_ID
                  )
                  .map((v) =>
                    Array.isArray(v.values) && v.values.length > 0 ? (
                      v.values.map((vv) => (
                        <option key={v.id}>{vv.value}</option>
                      ))
                    ) : (
                      <p key={v.id}>Não informado</p>
                    )
                  )}
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-4"></div>
      )}
    </>
  );
}
