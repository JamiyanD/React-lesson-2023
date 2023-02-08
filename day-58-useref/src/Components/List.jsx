import { places } from "../data/data";
import Place from "./Place";
export default function List() {
  return (
    <div>
      {places.map((place, index) => (
        <Place place={place} key={index} />
      ))}
    </div>
  );
}
