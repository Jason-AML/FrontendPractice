import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

export const BtnVolver = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/")} className="btn btn-secondary">
      <Icon icon="ion:arrow-back-outline" width="24" height="24" />
    </button>
  );
};
