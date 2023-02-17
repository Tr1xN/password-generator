import TopBar from "./components/TopBar";
import Center from "./components/Center";
import Card from "./components/Card";
import Options from "./components/Options";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

import { generatePassword } from "./lib/random";

export default function App() {
  const [length, setLength] = useState(24);
  const [special, setSpecial] = useState(false);
  const [digit, setDigit] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [password, setPassword] = useState(generatePassword(length, { special: special, digit: digit, uppercase: uppercase, lowercase: lowercase }));

  type Options = {
    uppercase: boolean;
    lowercase: boolean;
    digit: boolean;
    special: boolean;
  }

  function updatePassword(length: number, options: Options) {
    setPassword(generatePassword(length, options))
  }

  function copyPassword() {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        toast.success('Copied!', { className: 'shadow-none border border-slate-200 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300 border-none', iconTheme: { primary: '#10b981', secondary: 'white' } })
      })
      .catch(() => {
        toast.error('Something went wrong', { className: 'shadow-none border border-slate-200 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300 border-none', iconTheme: { primary: '#f43f5e', secondary: 'white' } })
      })
    toast.dismiss();
  }

  function optionClicked(option: string, state: boolean) {
    let nextSpecial = special;
    let nextDigit = digit;
    let nextUppercase = uppercase;
    let nextLowercase = lowercase;
    if (option == 'special') {
      nextSpecial = state;
    }
    else if (option == 'digit') {
      nextDigit = state;
    }
    else if (option == 'uppercase') {
      nextUppercase = state;
    }
    else if (option == 'lowercase') {
      nextLowercase = state;
    }

    if (!nextSpecial && !nextDigit && !nextUppercase && !nextLowercase) {
      nextLowercase = true;
    }

    setSpecial(nextSpecial);
    setDigit(nextDigit);
    setUppercase(nextUppercase);
    setLowercase(nextLowercase);
    updatePassword(length, { special: nextSpecial, digit: nextDigit, uppercase: nextUppercase, lowercase: nextLowercase })
  }

  const handleChange = (e: any) => {
    let nextLength = e.target.value;
    setLength(e.target.value)
    updatePassword(nextLength, { special: special, digit: digit, uppercase: uppercase, lowercase: lowercase })
  }

  return (
    <div className="App">
      <Center>
        <Card>
          <TopBar password={password} updateClicked={() => { updatePassword(length, { special: special, digit: digit, uppercase: uppercase, lowercase: lowercase }) }} copyClicked={copyPassword} />
          <div className="border-b -mx-6 my-6 border-slate-200 dark:border-zinc-600"></div>
          <Options optionClicked={optionClicked} lengthValue={length} handleChange={handleChange} special={special} digit={digit} uppercase={uppercase} lowercase={lowercase} />
        </Card>
      </Center>
      <Toaster />
    </div>
  );
}
