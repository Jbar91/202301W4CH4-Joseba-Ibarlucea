import { useContext } from "react";
import { PhoneContext } from "../../core/context/phone-context";

export function Display() {
  const { keyboard } = useContext(PhoneContext);

  return <span className="number">{keyboard}</span>;
}
