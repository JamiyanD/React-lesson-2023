import { getImageUrl } from "../data/utils";
import { useContext } from "react";
import { ImageContext } from "../Context/ImageContext";

export default function PlaceImage({ place }) {
  const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);
  return (
    <div>
      <img
        src={getImageUrl(place)}
        alt={place.name}
        width={imageSize}
        height={imageSize}
      />
    </div>
  );
}
