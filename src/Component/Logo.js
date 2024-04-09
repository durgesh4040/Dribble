import React from "react";

const Logo = ({ src, alt }) => {
  console.log(src);
  console.log(alt);
  return (
    <div className="flex items-center">
      <img src={src} alt={alt} className="w-20 h-auto" />
    </div>
  );
};

export default Logo;
