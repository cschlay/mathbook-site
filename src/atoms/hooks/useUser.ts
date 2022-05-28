import useSWR from "swr";
import { User } from "../../types";

interface Value {
  user?: User;
  reload: () => void;
}

export const useUser = (): Value => {
  const { data, error, mutate } = useSWR<User>("/user");

  return {
    user: error ? undefined : data,
    reload: mutate,
  };
};
