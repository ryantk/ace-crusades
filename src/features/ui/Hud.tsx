import "./Hud.css";
import Viewport from "./viewport/Viewport";

// https://www.google.com/search?q=space+crusade+amiga&client=firefox-b-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi1_pmN2tvxAhV6TxUIHf-_ADMQ_AUoAXoECAEQAw&biw=1280&bih=662#imgrc=tmDV3qKFTGSMXM

export default function Hud() {
  return (
    <div id="hud">
      <div id="topHalf">
        <Viewport />
        <div id="rightPanel">
          {'&nbsp;'}
          {/* <div id="playerWeaponsInfo">x</div>
          <div id="mapItemsInfo">y</div> */}
        </div>
      </div>
      <div id="toolbar">
        xxx
      </div>
    </div>
  );
}
