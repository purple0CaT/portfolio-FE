import dateFormat from "dateformat";

//
function ActivityItem({ item }: any) {
  return (
    <li className="homeActivityItem">
      <small className="font-weight-bold text-right">
        {dateFormat(new Date(item.createdAt.seconds * 1000), "mmm d, yyyy")}
      </small>
      <p>{item.text}</p>
      {item.link && (
        <a href={item.link} target="_blank" className="text-center">
          <small className="font-weight-bold"> Click Here</small>
        </a>
      )}
    </li>
  );
}

export default ActivityItem;
