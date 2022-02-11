interface ItemImprt {
  item: {
    image: string;
    title: string;
    url: string;
    description: string;
    techStack: string[];
  };
  index: number;
}
//
function PortfolioItem({ item, index }: ItemImprt) {
  return (
    <a href={item.url} className={`singlePortfolioItem`} target="_blank">
      <div className="portfolioCardHeader">
        <h4 className="font-weight-bold mt-3">{item.title}</h4>
        {item.description && (
          <p className="font-weight-bold">{item.description}</p>
        )}
      </div>
      <img
        src={item.image}
        alt={item.title}
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
      <div className="portfolioCardFooter">
        <div className="portfolioItems mb-3">
          {item &&
            item.techStack.map((skill, i) => (
              <img src={skill} alt="" key={i} height={35} width={35} />
            ))}
        </div>
      </div>
    </a>
  );
}

export default PortfolioItem;
