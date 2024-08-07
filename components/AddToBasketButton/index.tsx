import React from "react";
import { AmazonButton } from "../../styles/sharedstyles";
import { useAppDispatch } from "@/lib/store/hooks";
import { addToCart } from "@/lib/store/reducers/cartReducer";

interface ProductProps {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

const AddToBasketButton = ({
  id,
  title,
  image,
  price,
  rating,
}: ProductProps) => {
  const dispatch = useAppDispatch();
  const addToBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      addToCart({
        id,
        title,
        image,
        price,
        rating,
      })
    );
  };


  return (
    <AmazonButton onClick={(e) => addToBasket(e)}>Add To Basket</AmazonButton>
  );
};

export default AddToBasketButton;