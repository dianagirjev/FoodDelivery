import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div
      className="app-download flex flex-col items-center mt-24 gap-8"
      id="app-download"
    >
      <h2 className="text-center">
        For Better Experience Download
        <br />
        Tomato App
      </h2>
      <div className="download-links flex gap-10">
        <img
          className="cursor-pointer"
          src={assets.play_store}
          alt="Google Play"
        />
        <img
          className="cursor-pointer"
          src={assets.app_store}
          alt="App store"
        />
      </div>
    </div>
  );
};

export default AppDownload;
