import useSWR from "swr";
import { User } from "../types";

interface Value {
  user?: User;
  reload: () => void;
}

export const useUser = (): Value => {
  const { data, mutate } = useSWR<User>("/user");

  return {
    user: data,
    reload: mutate,
  };
};
