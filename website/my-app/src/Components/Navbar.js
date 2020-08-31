import React from 'react';

const navbar = () => {

    return(
        <div id="top-border">
        <div className="flexstart" style={{marginLeft:7}}>
            <ul
            style={{
                color: "rgba(0, 0, 0, .55)",
                fontFamily: "Exo 2",
                fontWeight: "600",
                fontSize: "16px",
                listStyleType: "none",
                marginTop: "30px",
                padding: "0",
                display: "block"
            }}
            >
                <li
                    className="teleport"
                    style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginLeft: "0",
                    marginRight: "35px"
                    }}
                    onClick={() => {
                    const element = document.getElementById(
                        "top-border"
                    );
                    const position = element.getBoundingClientRect();
                    window.scrollBy({
                        top: position.y - 20,
                        left: 0,
                        behavior: "smooth"
                    });
                    }}
                >
                    About Me
                </li>

                <li
                    className="teleport"
                    style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    marginRight: "35px"
                    }}
                    onClick={() => {
                    const element = document.getElementById(
                        "projects"
                    );
                    const position = element.getBoundingClientRect();
                    window.scrollBy({
                        top: position.y - 20,
                        left: 0,
                        behavior: "smooth"
                    });
                    }}
                >
                    Projects
                </li>

                <li
                    className="teleport"
                    style={{ display: "inline-block", verticalAlign: "middle" }}
                    onClick={() => {
                    const element = document.getElementById(
                        "outer-features-panel"
                    );
                    const position = element.getBoundingClientRect();
                    window.scrollBy({
                        top: position.y + position.bottom,
                        left: 0,
                        behavior: "smooth"
                    });
                    }}
                >
                    About
                </li>
            </ul>
        </div>
        <div className="flexend" style={{marginRight:7}}>
          <p>time</p>
        </div>
      </div>
    );
}

export default navbar;