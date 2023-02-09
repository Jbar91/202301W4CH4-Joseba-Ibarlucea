import { useContext } from "react";
import { PhoneContext } from "../../core/context/phone-context";

export function Keyboard() {
  const { keyboard, handleClickNumber, handleDelete } =
    useContext(PhoneContext);
  console.log(keyboard);
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <li>
          <button className="key" onClick={() => handleClickNumber("1")}>
            1
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClickNumber("2")}>
            2
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClickNumber("3")}>
            3
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClickNumber("4")}>
            4
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClickNumber("5")}>
            5
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClickNumber("6")}>
            6
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClickNumber("7")}>
            7
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClickNumber("8")}>
            8
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClickNumber("9")}>
            9
          </button>
        </li>
        <li>
          <button className="key" onClick={() => handleClickNumber("0")}>
            0
          </button>
        </li>
        <li>
          <button className="key big" onClick={() => handleDelete()}>
            delete
          </button>
        </li>
      </ol>
    </div>
  );
}
