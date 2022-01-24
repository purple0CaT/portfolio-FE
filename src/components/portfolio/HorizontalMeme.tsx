import memeData from "../../data/memes.json";

function HorizontalMeme() {
  return (
    <div className="memeContainer">
      <ul className="memeWrapper1 p-0">
        {memeData.length > 0 &&
          memeData.map((img: any, index: number) => (
            <li className="d-flex mx-2 memeItem" key={index + "mem"}>
              <img
                src={img.img}
                alt="memeImg"
                style={{
                  height: "100%",
                  aspectRatio: "1/1",
                  objectFit: "contain",
                }}
              />
            </li>
          ))}
        {memeData.length > 0 &&
          memeData.map((img: any, index: number) => (
            <li className="d-flex mx-2 memeItem" key={index + "mems"}>
              <img
                src={img.img}
                alt="memeImg"
                style={{
                  height: "100%",
                  aspectRatio: "1/1",
                  objectFit: "contain",
                }}
              />
            </li>
          ))}
        {memeData.length > 0 &&
          memeData.map((img: any, index: number) => (
            <li className="d-flex mx-2 memeItem" key={index + "mems3"}>
              <img
                src={img.img}
                alt="memeImg"
                style={{
                  height: "100%",
                  aspectRatio: "1/1",
                  objectFit: "contain",
                }}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HorizontalMeme;
