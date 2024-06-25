import { useNavigate } from "react-router-dom";
import { Back, BackProps } from "./Utils";
import { FaArrowLeft } from "react-icons/fa";

export const BackBtn = ({ inset }: BackProps) => {
  const navigate = useNavigate();

  return (
    <Back inset={inset} onClick={() => navigate(-1)}>
      <FaArrowLeft /> Back to users
    </Back>
  );
};
