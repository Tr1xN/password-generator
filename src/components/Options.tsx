import ToggleButton from './ToggleButton'

type Props = {
    optionClicked: (option: string, state: boolean) => void;
    handleChange: (e: any) => void;
    uppercase: boolean;
    lowercase: boolean;
    digit: boolean;
    special: boolean;
    lengthValue: number;
}

export default function Options({ optionClicked, uppercase, lowercase, digit, special, handleChange, lengthValue }: Props) {
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex gap-6 items-center'>
                <span className='whitespace-nowrap w-28 -mr-4 text-slate-600 dark:text-zinc-300'>Length: {lengthValue}</span>
                <input className='w-full' type="range" min={4} max={48} step={1} value={lengthValue} onChange={handleChange} />
            </div>
            <div className="inline-flex rounded-xl divide-x divide-zinc-500/10 overflow-hidden">
                <ToggleButton toggled={uppercase} onClick={(state) => { optionClicked('uppercase', state) }}>A-Z</ToggleButton>
                <ToggleButton toggled={lowercase} onClick={(state) => { optionClicked('lowercase', state) }}>a-z</ToggleButton>
                <ToggleButton toggled={digit} onClick={(state) => { optionClicked('digit', state) }}>0-9</ToggleButton>
                <ToggleButton toggled={special} onClick={(state) => { optionClicked('special', state) }}>&$!#%</ToggleButton>
            </div>
        </div>
    )
}
