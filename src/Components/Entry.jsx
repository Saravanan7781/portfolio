import React, { useEffect, useState } from "react";
import "../Styles/Entry.css";
import me from "../assets/meadobe-cropped.png";

const fullName = "Saravanan";

function Entry() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index++;
      setName(fullName.slice(0, index));
      if (index >= fullName.length) {
        clearInterval(timer);
        setImage(true);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="EntryContainer" id="home">
      <div className="innerEntryContainer">
        <div className="innerEntryContainerH1">
          {/* the typed name is aria-hidden so screen readers get the full text at once */}
          <h1 aria-label={`${fullName}, web developer`}>
            <span id="innerEntryname" aria-hidden="true">{name}&nbsp;</span>
            <span aria-hidden="true">Web developer</span>
          </h1>
        </div>
        <div className={`entryImage ${image ? "entryImageShow" : ""}`}>
          <img src={me} alt="Portrait of Saravanan" />
        </div>
        <div className={`entryActions ${image ? "entryActionsShow" : ""}`}>
          <a href="#projects" className="entryButton entryButtonPrimary">View my projects</a>
          <a href="#contact" className="entryButton">Get in touch</a>
        </div>
      </div>
    </section>
  );
}

export default Entry;
