import React from 'react'

type Props = {
  children?: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="flex flex-col rounded-2xl bg-white p-6 w-full mx-4 sm:w-[608px] dark:bg-zinc-700">
      {children}
    </div>
  )
}
