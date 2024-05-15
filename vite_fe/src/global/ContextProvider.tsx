import { FC, PropsWithChildren, createContext, useState } from "react";

interface iProps {
  toggle: boolean;
  toggled: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
  onToggle: () => void;
}
export const GlobalContext = createContext({} as iProps);

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggled, setToggled] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <GlobalContext.Provider value={{ onToggle, toggle, toggled, setToggled }}>
      {children}
    </GlobalContext.Provider>
  );
};
