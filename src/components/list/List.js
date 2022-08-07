import { useState } from "react";
import {
  AiOutlineUnorderedList,
  AiOutlineLoading3Quarters,
  AiOutlineCheck,
} from "react-icons/ai";
import Portal from "../ui/Portal";

import classes from "./List.module.css";

const icons = [
  { status: -1, icon: <AiOutlineUnorderedList />, name: "To Watch" },
  { status: 0, icon: <AiOutlineLoading3Quarters />, name: "Watching" },
  { status: 1, icon: <AiOutlineCheck />, name: "Watched" },
];

const isImgLink = (url) => {
  if (typeof url !== "string") {
    return false;
  }
  return (
    url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !== null
  );
};

const ListItem = ({ item }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const imgSrc = isImgLink(item.image)
    ? item.image
    : "/images/image-not-available.png";

  const icon = icons.find((iconItem) => iconItem.status === item.status);

  return (
    <div className={classes.item}>
      <img src={imgSrc} />
      <div className={classes.icon} title={icon.name}>
        {icon.icon}
      </div>
      <button className={classes.edit} onClick={() => setIsEditOpen(true)}>
        Edit
      </button>
      <div className={classes.description}>
        <h4>{item.title}</h4>
      </div>
      {isEditOpen && (
        <Portal onClose={() => setIsEditOpen(false)}>Edit Mode</Portal>
      )}
    </div>
  );
};

const List = ({ list }) => {
  return (
    <div className={classes.list}>
      {list.map((item) => (
        <ListItem item={item} key={Math.random()} />
      ))}
    </div>
  );
};

export default List;
