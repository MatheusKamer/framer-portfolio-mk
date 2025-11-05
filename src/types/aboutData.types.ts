import type { ReactNode } from "react";

export type AboutDataItem = {
  title: string;
  amount: number;
  icon: ReactNode;
};

export type AboutData = AboutDataItem[];
