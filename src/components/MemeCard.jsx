const MemeCard = ({ title, img }) => {
  return (
    <div className="max-w-60 m-6 border-2">
      <img src={img} alt="" />
      <p>{title}</p>
      <button className="bg-emerald-900 px-5 py-1 rounded-md text-white">
        Edit
      </button>
    </div>
  );
};

export default MemeCard;
