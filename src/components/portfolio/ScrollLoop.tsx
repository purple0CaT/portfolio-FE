import React from "react";
import { ReactDOM } from "react";
import "./scroll/Scroll.sass";
import memeData from "../../data/memes.json";
//
const GERMAN_DIGITS = [
  "Null",
  "Ein",
  "Zwei",
  "Drei",
  "Vier",
  "Fünf",
  "Sechs",
  "Sieben",
  "Acht",
  "Neun",
];

function InfiniteScrollLoop({
  surroundingBackup = 4,
  outerStyle,
  innerStyle,
  children,
}: any): JSX.Element {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const scrollRef: any = React.useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = React.useState<number>(0);

  const backupHeight = height * surroundingBackup;

  const handleScroll = React.useCallback(() => {
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollTop;
      if (scroll < backupHeight || scroll >= backupHeight + height) {
        scrollRef.current.scrollTop = backupHeight + (scroll % height);
      }
    }
  }, [height]);

  React.useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
      scrollRef.current.scrollTop = backupHeight;
    }
  });

  return (
    <div className="infinite-scroll-loop-outer" style={outerStyle}>
      <div
        className="infinite-scroll-loop-inner"
        ref={scrollRef}
        style={{
          height: "70vh",
          width: "100px",
          ...innerStyle,
        }}
        onScroll={handleScroll}
      >
        {Array(surroundingBackup)
          .fill(null)
          .map(() => (
            <div>{children}</div>
          ))}
        <div ref={contentRef}>{children}</div>
        {Array(surroundingBackup)
          .fill(null)
          .map(() => (
            <div>{children}</div>
          ))}
      </div>
    </div>
  );
}

export const ScrollRender = (props: any) => {
  return (
    <>
      <InfiniteScrollLoop>
        {memeData.map((img: any, index) => (
          <div>
            <img
              src={img.img}
              alt="memeImg"
              style={{
                height: "50px",
                aspectRatio: "1/1",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </InfiniteScrollLoop>
    </>
  );
};
