import UploadButton from "./UploadButton";
import PlayButton from "./PlayButton";

export default function ToolbarNext(){
    return(
        <div>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </div>
    )
}