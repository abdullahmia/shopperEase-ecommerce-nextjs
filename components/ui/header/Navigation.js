import { useState } from "react";
import Header from "./Header";
import NavDrower from "./NavDrower";

const Navigation = () => {
    const [isDrowerOpen, setIsDrowerOpen] = useState(false);

    // toggole header
    const toggoleDrower = () => {
        setIsDrowerOpen(!isDrowerOpen);
    }

  return (
    <>
        <NavDrower isDrowerOpen={isDrowerOpen} setIsDrowerOpen={toggoleDrower} />
        <Header toggoleDrower={toggoleDrower} />
    </>
  )
}

export default Navigation