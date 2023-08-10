export const PostOwner = ({
  fullName,
  studentId,
  ProfileImg,
  postText,
  likeNum,
  commentt,
}) => {
  return (
    <div className="d-flex align-items-center gap-3">
      <img
        src={ProfileImg}
        width="48"
        height="48"
        className="rounded-circle"
        style={{ objectFit: "cover" }}
      />
      <span className="fw-semibold fs-5 text-white">
        {fullName} {studentId}
      </span>

      <span className="text-white">{postText}</span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span style={{ color: "#B0B3B8" }}>{likeNum}</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};

{
  /* <div className="d-flex align-items-center gap-3">
            <img
              src="/profileImages/handsome.jpg"
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5 text-white">
              Chayanin Suatap 650610560
            </span>
          </div> */
}
