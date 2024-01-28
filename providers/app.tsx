import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface State {
  selected: null | string | number;
  loading: boolean;
  visible: boolean;
}

export interface AppContextValue extends State {}

const initialState: State = {
  selected: null,
  loading: true,
  visible: true,
};

const AppContext = createContext({
  state: {} as State,
  setState: {} as Dispatch<SetStateAction<State>>,
  ...(initialState as AppContextValue),
});

type AppProps = {
  children: React.ReactNode;
  value?: Partial<State>;
};

function AP({ children }: AppProps) {
  const [state, setState] = useState(initialState);

  React.useEffect(() => {
    setTimeout(() => {
      setState((s) => ({ ...s, visible: false }));
    }, 2000);
    setTimeout(() => {
      setState((s) => ({ ...s, loading: false }));
    }, 2500);
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const AppProvider = AP;

export const useApp = () => useContext(AppContext);

export default AppProvider;
