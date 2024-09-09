import mePicture from '../image/alePicture.png'
import './picture.css';

function Picture() {
    return (
        <div className="left">
            <img src={mePicture} />
        </div>
    );
}

export default Picture;