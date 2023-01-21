import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
export default function GalleryPage() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
  ];

  return (
    <div>
      <h1>Gallery Page</h1>
      <ImageGallery items={images} />
      <Link to={"/"}>Home</Link>
      <div class="ui labeled button" tabindex="0">
        <div class="ui red button">
          <i class="heart icon"></i> Like
        </div>
        <a class="ui basic red left pointing label">1,048</a>
      </div>
      <div class="ui labeled button" tabindex="0">
        <div class="ui basic blue button">
          <i class="fork icon"></i> Forks
        </div>
        <a class="ui basic left pointing blue label">1,048</a>
      </div>
    </div>
  );
}
