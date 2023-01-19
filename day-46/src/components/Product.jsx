import { Rating } from "react-simple-star-rating";
import products from "../data/seed";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Product(props) {
  // const { id } = useParams();
  let foundProduct = {};
  // if (id) {
  //   foundProduct = products.filter((product) => {
  //     if (product.id == id) {
  //       return product;
  //     }
  //   })[0];
  // }

  // if (Object.keys(props).length > 0) {
  // foundProduct = props.product;
  // }

  // const product = foundProduct;
  const liked = props.wishlist.filter(
    (wish) => wish.id === props.product.id
  )[0];
  console.log(liked);
  return (
    <div className="item">
      <div className="image">
        <img src={props.product.productImageUrl} />
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a onClick={() => props.product.onVote(props.product.id)}>
            <i className="large caret up icon" />
          </a>
          {props.product.votes}
          <a
            onClick={() => {
              console.log("heart clicked");
              // setLiked(!liked);
              if (!liked) {
                const likedProduct = {
                  id: props.product.id,
                  name: props.product.title,
                  liked: true,
                };
                props.setWishList([...props.wishlist, likedProduct]);
              } else {
                props.setWishList(
                  props.wishlist.filter((w) => w.id !== props.product.id)
                );
              }
            }}
          >
            {liked ? (
              <i className="heart icon"></i>
            ) : (
              <i className="heart outline icon"></i>
            )}
          </a>
        </div>
        <div className="description">
          <a href={props.product.url}>{props.product.title}</a>
          <p>{props.product.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img
            className="ui avatar image"
            src={props.product.submitterAvatarUrl}
          />
        </div>
        <Rating initialValue={5} />
      </div>
    </div>
  );
}
