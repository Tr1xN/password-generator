import React from 'react'
import { useState } from 'react'

type Props = {
    children?: React.ReactNode;
    toggled?: boolean;
    onClick: (state: boolean) => void;
};

export default function ToggleButton({ children, toggled, onClick }: Props) {
    const callback = () => {
        onClick(!toggled)
    }

    if (toggled) {
        return (
            <button onClick={callback} className='flex w-full items-center justify-center bg-slate-200 p-3 text-slate-500 transition active:bg-slate-300 dark:bg-zinc-600/50 dark:text-zinc-400 dark:active:bg-zinc-600/30'>
                {children}
            </button>
        )
    }
    else {
        return (
            <button onClick={callback} className='flex w-full items-center justify-center bg-slate-100 p-3 text-slate-500 transition active:bg-slate-300 dark:bg-zinc-600 dark:text-zinc-400 dark:active:bg-zinc-600/30'>
                {children}
            </button>
        )
    }
}
