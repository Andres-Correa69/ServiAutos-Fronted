import { useNavigate } from "react-router-dom";

import BackIcon from "../../assets/icons/back.svg";

function BasicHeaderWithBack({
  title = "",
  showButtomLine = true,
}: {
  title?: string;
  showButtomLine?: boolean;
}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex-1 text-white justify-between pt-[50px] pb-[32px]">
        <div>
          <h1 className="text-[22px] md:text-[32px] text-center font-bold">
            {title}
          </h1>
        </div>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="absolute top-[50px] right-[38px] md:right-[100px] w-[35px] h-[35px] md:w-[60px] md:h-[60px]"
      >
        <BackIcon />
      </button>
      {showButtomLine && (
        <div className="mx-[30px] h-[1px] md:hidden bg-white"></div>
      )}
    </>
  );
}

export default BasicHeaderWithBack;
