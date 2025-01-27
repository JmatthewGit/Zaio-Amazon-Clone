import React from "react";
import {Link} from 'react-router-dom'
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not_found">
      <Link to="/">
        <div>
          <img
            className="img_top"
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/28._TTD_.jpg"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
