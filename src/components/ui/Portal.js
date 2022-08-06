import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useData } from "../../context/DataProvider";
import Button from "./Button";
import classes from "./Portal.module.css";

const Portal = ({ children, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { searchOpenHandler } = useData();
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  if (!isMounted) return null;
  return createPortal(
    <div className={classes.portal}>
      <div className={classes.nav}>
        <button onClick={onClose} className={classes.close}>
          ✕
        </button>
      </div>
      {children}
    </div>,
    document.getElementById("portal")
  );
};

export default Portal;
