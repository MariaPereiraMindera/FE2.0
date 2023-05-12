import React from "react";

type LinkProps = {
  description: string;
  url: string;
};

const Link = ({ description, url }: LinkProps) => {
  return (
    <p>
      {description} (
      <a href={url} target="_blank">
        {url}
      </a>
      )
    </p>
  );
};

export default Link;
