import { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import { RestaurantContext } from "../context/restaurants.context";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { NeighborhoodsContext } from "../context/neighborhoods.context";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const restaurants = useContext(RestaurantContext);
  const neighborhoods = useContext(NeighborhoodsContext);
  console.log(neighborhoods);
  const purpleOptions = { color: "purple" };
  const polygon = [
    [-0.09, 51.515],
    [-0.1, 51.52],
    [-0.12, 51.52],
    [54.52, -0.52],
  ];
  return (
    <div>
      <h1>My map</h1>

      {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {restaurants.map((map) => {
          console.log(map.address.coord[0]);
          return (
            <Marker position={[map.address.coord[1], map.address.coord[0]]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })}
      </MapContainer> */}
      <hr />
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {neighborhoods.map((map) => {
          return (
            <Polygon
              pathOptions={purpleOptions}
              positions={map.geometry.coordinates}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}
