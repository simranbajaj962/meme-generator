import Text from "../components/Text";
import { useState, createRef } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
import { useSearchParams } from "react-router-dom";
const Edit = () => {
  const memeRef = createRef();
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  function handleAddText() {
    setCount(count + 1);
  }
  return (
    <div className="w-64 border-2 absolute top-1/2 left-1/2 -translate-x-[50%] translate-y-[50%]">
      <div ref={memeRef}>
        <img src={params.get("url")} />
        {Array(count)
          .fill(0)
          .map((e, idx) => (
            <Text key={idx} />
          ))}
      </div>
      <button
        onClick={handleAddText}
        className="bg-emerald-900 px-4 py-2 rounded-md text-white"
      >
        Add Text
      </button>
      <button
        onClick={() => exportComponentAsJPEG(memeRef)}
        className="bg-purple-500 px-4 py-2 rounded-md text-white ml-2"
      >
        Save
      </button>
    </div>
  );
};

export default Edit;
