import react from "react";
import "./Grid.css"

export default function Grid(){
    return(
        <div className="image-grid">
  <div className="grid-item">
    <img src="https://picsum.photos/id/1011/400/400" alt="item" />
    <p>Electronics</p>
  </div>

  <div className="grid-item">
    <img src="https://picsum.photos/id/1012/400/400" alt="item" />
    <p>Fashion</p>
  </div>

  <div className="grid-item">
    <img src="https://picsum.photos/id/1013/400/400" alt="item" />
    <p>Home</p>
  </div>

  <div className="grid-item">
    <img src="https://picsum.photos/id/1014/400/400" alt="item" />
    <p>Appliances</p>
  </div>
  <div className="grid-item">
    <img src="https://picsum.photos/id/1011/400/400" alt="item" />
    <p>Electronics</p>
  </div>

  <div className="grid-item">
    <img src="https://picsum.photos/id/1012/400/400" alt="item" />
    <p>Fashion</p>
  </div>

  <div className="grid-item">
    <img src="https://picsum.photos/id/1013/400/400" alt="item" />
    <p>Home</p>
  </div>

  <div className="grid-item">
    <img src="https://picsum.photos/id/1014/400/400" alt="item" />
    <p>Appliances</p>
  </div>
</div>

    );
}