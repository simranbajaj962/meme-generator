import { useNavigate } from "react-router-dom";

const MemeCard = (props) => {
  const { title, img } = props;
  const navigate = useNavigate();
  return (
    <div className="max-w-60 m-6 border-2">
      <img src={img} alt="" />
      <p>{title}</p>
      <button
        onClick={() => navigate(`/edit?url=${img}`)}
        className="bg-emerald-900 px-5 py-1 rounded-md text-white"
      >
        Edit
      </button>
    </div>
  );
};

export default MemeCard;
