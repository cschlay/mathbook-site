import { useMediaQuery } from "beautiful-react-hooks";

export const useTablet = () => {
  return useMediaQuery("(min-width: 600px)");
};
