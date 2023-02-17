import React from 'react'
import Button from "./Button";

import { Icon } from "@iconify/react";
import roundContentCopy from "@iconify/icons-ic/round-content-copy";
import roundAutorenew from "@iconify/icons-ic/round-autorenew";

type Props = {
  password: string;
  updateClicked: () => void;
  copyClicked: () => void;
}

export default function TopBar({ password, updateClicked, copyClicked }: Props) {
  return (
    <div className="flex items-center place-content-between gap-4">
      <div className='flex items-center flex-wrap'>
        {[...password].map((letter) => {
          console.log(letter)
          if (/^\d+$/.test(letter)) {
            return <span className="font-semibold text-xl leading-6 text-blue-600 break-all dark:text-blue-500">{letter}</span>
          }
          if (letter.match(/^[!@#$%^&*]*$/)) {
            return <span className="font-semibold text-xl leading-6 text-rose-600 break-all dark:text-rose-500">{letter}</span>
          }
          if (letter == letter.toUpperCase()) {
            return <span className="font-semibold text-xl leading-6 text-emerald-600 break-all dark:text-emerald-500">{letter}</span>
          }
          else {
            return <span className="font-semibold text-xl leading-6 text-slate-700 break-all dark:text-zinc-300">{letter}</span>
          }
        })}
      </div>
      <div className="flex gap-3">
        <Button onClick={copyClicked}>
          <Icon width="1.5rem" height="1.5rem" icon={roundContentCopy} />
        </Button>
        <Button onClick={updateClicked}>
          <Icon width="1.5rem" height="1.5rem" icon={roundAutorenew} />
        </Button>
      </div>
    </div>
  )
}
