import React from "react";
import { ReactDOM } from "react";
import "./scroll/Scroll.sass";
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
        {Array.from(GERMAN_DIGITS).map((digit, index) => (
          <div>
            <img src="" alt="Meme" width={50} height={50} />
            {/* <span
              style={{
                color: `hsl(${
                  (index / GERMAN_DIGITS.length) * 360
                }deg 100% 50%)`,
              }}
            >
              {digit}.
            </span> */}
          </div>
        ))}
      </InfiniteScrollLoop>
    </>
  );
};
