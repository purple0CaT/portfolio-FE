import { ParallaxBanner } from "react-scroll-parallax";
import HChildren from "./HChildren";
import "./style/Home.scss";
//
function VideoPlayer() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        filter: "blur(2px)"
      }}
    >
      <video src="https://rr2---sn-vgqsknls.googlevideo.com/videoplayback?expire=1644609818&ei=umwGYotKlfOKBM7cpuAM&ip=102.129.240.208&id=o-ADGgz3jHOXis1MMN0lqg-JGHompP_7Ltx6rPibwbHCbo&itag=22&source=youtube&requiressl=yes&mh=hJ&mm=31%2C29&mn=sn-vgqsknls%2Csn-vgqsrnsy&ms=au%2Crdu&mv=u&mvi=2&pl=24&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=64.133&lmt=1630920475115410&mt=1644586512&fvip=2&fexp=24001373%2C24007246&c=ANDROID&txp=6211224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAO_W0fEMz2Xg6LGlek1ek_t0TR_zGafE2-HPLCwr8hdpAiEA34vgVTv0c6XIaCOdKpNJZ7cMYcsfiJuQbuSZYtnsBXA%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRQIgB9MEwdtpmDQwK8ap3bKe8j9ouPeFdIJsattnAySw6kcCIQDcfpWPKSRTP8IoJ81VGQJHR1D-427TzC8HrhYexTVSJg%3D%3D" height="100%" autoPlay loop muted></video>
    </div>
  );
}

function Home() {
  return (
    <main className="homeWrapper">
      <HChildren />
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            children: <VideoPlayer />,
            image: "https://i.imgur.com/qJQezzj.jpg",
            amount: 0.12,
          },
        ]}
        style={{
          height: "100%",
        }}
      />
    </main>
  );
}

export default Home;
