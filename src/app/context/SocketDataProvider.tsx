import { createContext, useState } from "react";
import { Stat_ } from "../types";

type SocketDataType = {
  mainStats: Stat_[];
};

export const ChartDataContext = createContext<SocketDataType>({
  mainStats: [],
});

const ChartDataProvider_ = ({ children }: { children: React.ReactNode }) => {
  const [mainStats, setMainStats] = useState<Stat_[]>([]);

  return (
    <ChartDataContext.Provider
      value={{
        mainStats,
      }}
    >
      {children}
    </ChartDataContext.Provider>
  );
};
