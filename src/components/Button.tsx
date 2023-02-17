import React from "react";

import { Icon } from "@iconify/react";
import roundCheck from '@iconify/icons-ic/round-check';

type Props = {
  children?: React.ReactNode;
  onClick?: () => void
};

export default function Button({ children, onClick }: Props) {
  return (
    <button onClick={onClick} className="flex min-w-[3rem] items-center justify-center rounded-xl bg-slate-100 p-3 text-slate-500 transition hover:bg-slate-200 active:scale-90 dark:bg-zinc-600/80 dark:hover:bg-zinc-600/40 dark:text-zinc-400">
      {children}
    </button>
  );
}
