interface AboutType {
  AboutData: {
    image: string;
    extraDes: string;
    id: string;
    description: string;
  } | null;
}
//
function AAboutInfo({ AboutData }: AboutType) {
  return (
    <section className="adminRegCard">
      <img
        src={AboutData?.image}
        alt="Profile picture"
        style={{ height: "300px", width: "auto " }}
      />
      <h5 className="font-weight-bold m-0">Description</h5>
      <p>{AboutData?.description}</p>
      <h5 className="font-weight-bold m-0">Extra Info</h5>
      <p>{AboutData?.extraDes}</p>
    </section>
  );
}

export default AAboutInfo;
