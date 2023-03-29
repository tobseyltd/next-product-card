
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'
import { Input, Spacer } from "@nextui-org/react"

type ProductCardProps = {
    imgSrc: string,
    imgAlt: string,
    imgSize: number,
    prodCat: string,
    prodTitle: string,
    prodDesc: string,
    prodPrice: number,
    prodPriceOld: number
}

const notify = () => {

    toast('Good Job! Feel free to use this component in your projects', {
        icon: '👏',
        position: "bottom-center"
    });
}

export default function ProductCard({
    
    imgSrc,
    imgAlt,
    imgSize,
    prodCat,
    prodTitle,
    prodDesc,
    prodPrice,
    prodPriceOld

}: ProductCardProps): JSX.Element {

    const [title, setTitle]: any = useState({ prodTitle });
    const [description, setDescription]: any = useState({ prodDesc });
    const [category, setCategory]: any = useState({ prodCat });
    const [image, setImage]: any = useState({ imgSrc });
    const [price, setPrice]: any = useState({ prodPrice });
    const [oldPrice, setOldPrice]: any = useState({ prodPriceOld });

    const handleTitleChange = ({ target }: any) => {
        const { newTitle, value } = target;

        setTitle((prev: any) => ({
            ...prev,
            newTitle: value
        }));
    }

    const handleDescChange = ({ target }: any) => {
        const { newDesc, value } = target;

        setDescription((prev: any) => ({
            ...prev,
            newDesc: value
        }));
    }

    const handleProdCatChange = ({ target }: any) => {
        const { newCat, value } = target;

        setCategory((prev: any) => ({
            ...prev,
            newCat: value
        }))
    }

    const handleImageChange = ({ target }: any) => {
        const { newImg, value } = target;

        setImage((prev: any) => ({
            ...prev,
            newImg: value
        }))
    }

    const handlePriceChange = ({ target }: any) => {
        const { newPrice, value } = target;

        setPrice((prev: any) => ({
            ...prev,
            newPrice: value
        }))
    }

    const handleOldPriceChange = ({ target }: any) => {
        const { newOldPrice, value } = target;

        setOldPrice((prev: any) => ({
            ...prev,
            newOldPrice: value
        }))
    }

    

    return (

        <section>
            <div className="wrapper w-screen md:flex md:flex-row md:justify-center md:items-center">
                <Toaster />

                <div className="hidden md:pl-20 md:inline-block md:w-2/6">
                    <label>Change Component Content</label>

                    <div className="mt-5">
                        <Input
                            aria-label="Change Url"
                            width="400px"
                            type="text"
                            placeholder="Insert Image Url.. https://"
                            onChange={handleImageChange}
                        />
                        <Spacer y={0.5} />
                        <Input
                            aria-label="Change Product Category"
                            width="400px"
                            type="text"
                            placeholder="Insert Product Category"
                            onChange={handleProdCatChange}
                        />
                        <Spacer y={0.5} />
                        <Input
                            aria-label="Change Product Title"
                            width="400px"
                            type="text"
                            placeholder="Insert Product Title"
                            onChange={handleTitleChange}
                        />
                        <Spacer y={0.5} />
                        <Input
                            aria-label="Change Product Description"
                            width="400px"
                            type="text"
                            placeholder="Insert Product Descriptions"
                            onChange={handleDescChange}
                        />
                        <Spacer y={0.5} />
                        <Input
                            aria-label="Change Price"
                            width="400px"
                            type="number"
                            placeholder="Insert Product Price (number)"
                            onChange={handlePriceChange}
                        />
                        <Spacer y={0.5} />
                        <Input
                            aria-label="Change Old Price"
                            width="400px"
                            type="number"
                            placeholder="Insert Product Price old (number)"
                            onChange={handleOldPriceChange}
                        />
                    </div>
                </div>

                <div className="md:wrapper inline-block m-10 md:w-2/6 xl:flex mxl:flex-row bg-white rounded-xl shadow-lg shadow-grey">

                    <div className="img-container w-full xl:w-3/6">
                        <img className="md:rounded-l-xl"
                            src={image.newImg || imgSrc}
                            alt={imgAlt}
                            width={imgSize}
                            height={imgSize}
                        />
                    </div>

                    
                    <div className="product-info md:w-3/6 md:flex md:flex-col justify-between p-7">

                        <p className="mb-2 md:mb-0 uppercase text-xs tracking-widest">{category.newCat || prodCat}</p>
                        <h1 className="mb-2 md:mb-0 capitalize text-3xl font-bold leading-7">{title.newTitle || prodTitle}</h1>
                        <p>{description.newDesc || prodDesc}</p>

                        <div className="my-2 md:my-0 price-box flex flex-row py-3 items-center">
                            <p className="price text-3xl text-green-900 font-bold mr-5 tracking-tighter">${price.newPrice || prodPrice}</p>
                            <p className="old-price line-through text-sm">${oldPrice.newOldPrice || prodPriceOld}</p>
                        </div>

                        <button className="bg-green-900 text-white p-2.5 rounded-xl tracking-tighter w-full" onClick={notify}>
                            <img className="inline mr-2" width={13} src="../media/icon-cart.svg" />Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>

    )
}

