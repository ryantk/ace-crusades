import { useDispatch } from "react-redux";
import GameCanvas from "../GameCanvas";
import { PanDirection, panViewport } from "./viewportSlice";

import "./Viewport.css"

export default function Viewport() {

  const dispatch = useDispatch();

  const handlePan = (direction: PanDirection) => () =>
    dispatch(panViewport(direction))

  return (
    <>
      <div id="controls">
        <div className="panPanel" id="panLeft">
          <button onClick={handlePan(PanDirection.Left)}>{"<-"}</button>
        </div>

        <div className="panPanel" id="panUp">
          <button onClick={handlePan(PanDirection.Up)}>{"^"}</button>
        </div>

        <div className="panPanel" id="panRight">
          <button onClick={handlePan(PanDirection.Right)}>{"->"}</button>
        </div>

        <div className="panPanel" id="panDown">
          <button onClick={handlePan(PanDirection.Down)}>{"V"}</button>
        </div>
      </div>

      <div id="viewport">
        <GameCanvas />
      </div>
    </>
  )
}
