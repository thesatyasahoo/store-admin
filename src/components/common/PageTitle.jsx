import React from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title> {title ? `${title}` : "Air Expert India"}</title>
      <meta
        name="description"
        content={
          description
            ? ` ${description} `
            : "Kachabazar : React Grocery & Organic Food Store e-commerce Admin Dashboard"
        }
      />
    </Helmet>
  );
};

export default PageTitle;
