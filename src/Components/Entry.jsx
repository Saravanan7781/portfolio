import { React, useEffect, useState } from "react";
import "../Styles/Entry.css";
import me from "../assets/meadobe-cropped.png";

  const preloadImage = (src) => {
    const img = new Image();
    img.src = src
  };

function Entry() {
  const [name, setName] = useState("");
  const fullName = "Saravanan";
  const [image, setImage] = useState(false);

  useEffect(() => {
    preloadImage({me});
  }, []);

  useEffect(() => {
    let index = 0;
    let val = "";
      const func = setInterval(() => {
        if (index < fullName.length) {
            val += fullName[index];
        setName(val); 
        // console.log(fullName[index]);
        index++; 
      } else {
        clearInterval(func);
        setImage(true); 
      }
    }, 120);

    return () => clearInterval(func);
  }, []); 

  return (
    <div className="EntryContainer">
      <div className="innerEntryContainer">
        <div className="innerEntryContainerH1">
          <h1 id="innerEntryname">{name}</h1>
          <h1>Web developer</h1>
        </div>
              <div className={ `entryImage ${image ? "entryImageShow" : ""}` }>
                        <img  src={me} alt="My Image" />
                </div>
      </div>
    </div>
  );
}

export default Entry;
