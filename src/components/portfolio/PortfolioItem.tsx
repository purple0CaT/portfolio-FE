import { useEffect, useState } from "react";

interface ItemImprt {
  item: {
    image: string;
    title: string;
    url: string;
    description: string;
  };
  index: number;
}
//
function PortfolioItem({ item, index }: ItemImprt) {
  return (
    <li className={`singlePortfolioItem`}>
      <h5>{item.title}</h5>
      <img
        src={item.image}
        alt={item.title}
        style={{ height: "50%", width: "100%", objectFit: "cover" }}
      />
      <p>{item.description}</p>
      <a target="_blank" href={item.url} className="mt-auto">
        <h4>Check out</h4>
      </a>
    </li>
  );
}

export default PortfolioItem;
