import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });

interface INum {
  type: number;
}
export default function Home() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  function add(): any {
    setResult(Number(num1) + Number(num2));
  }
  function subtract(): any {
    setResult(Number(num1) - Number(num2));
  }
  function multiply(): any {
    setResult(Number(num1) * Number(num2));
  }
  function divide(): any {
    setResult(Number(num1) / Number(num2));
  }
  return (
    <div className={styles.container} data-testid="result">
      <div className={styles.result} data-test-id="result">
        {result}
      </div>
      <input
        className={styles.input}
        value={num1}
        data-testid="num1"
        onChange={(e: any) => setNum1(e.target.value)}
      />
      <input
        className={styles.input}
        value={num2}
        data-testid="num2"
        onChange={(e: any) => setNum2(e.target.value)}
      />
      <button className={styles.button} data-testid="add" onClick={() => add()}>
        Add
      </button>
      <button
        className={styles.button}
        data-testid="subtract"
        onClick={subtract}
      >
        Subtract
      </button>
      <button
        className={styles.button}
        data-testid="multiply"
        onClick={() => multiply()}
      >
        Multiply
      </button>
      <button
        className={styles.button}
        data-testid="divide"
        onClick={() => divide()}
      >
        Divide
      </button>
    </div>
  );
}
