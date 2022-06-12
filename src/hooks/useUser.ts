import { User } from "app/types";
import useSWR from "swr";

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
