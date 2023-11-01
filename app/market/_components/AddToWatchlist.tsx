import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const AddToWatchlist = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <>
      {isSelected ? (
        <CheckCircleIcon
          className="w-5 h-5 cursor-pointer z-30"
          color="gray"
          onClick={() => setIsSelected(false)}
        />
      ) : (
        <PlusCircleIcon
          className="w-5 h-5 cursor-pointer z-30"
          color="gray"
          onClick={() => setIsSelected(true)}
        />
      )}
    </>
  );
};

export default AddToWatchlist;
