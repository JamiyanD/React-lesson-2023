import PlaceImage from "./PlaceImage";

export default function Places({ place }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <PlaceImage place={place} />
      <div>
        <b> {place.name}</b>
        {":" + place.description}
      </div>
    </div>
  );
}
