import memeData from "../../data/memes.json";

function HorizontalMeme() {
  const arrayLength = Array.from(
    Array(Math.floor(window.screen.width / (66 * 10)) + 2).keys(),
  );
  return (
    <div className="memeContainer">
      <ul className="memeWrapper1 p-0">
        {memeData.length > 0 &&
          arrayLength.map((numArr) =>
            memeData.map((img: any, index: number) => (
              <li className="d-flex mx-2 memeItem" key={numArr + index + "mem"}>
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
            )),
          )}
      </ul>
    </div>
  );
}

export default HorizontalMeme;
