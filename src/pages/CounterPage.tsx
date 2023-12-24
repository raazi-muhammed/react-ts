import { useState } from "react";
import { Button } from "../components/Button";

const CounterPage = (): JSX.Element => {
    const [count, setCount] = useState<number>(0);

    const handleChangeCountBy = (changeCountBy: number) => {
        setCount((c) => c + changeCountBy);
    };
    return (
        <main>
            <p className="font-bold text-2xl text-indigo-500">Count: {count}</p>
            <Button onClick={() => handleChangeCountBy(1)}>Add</Button>
            <Button onClick={() => handleChangeCountBy(-1)}>Minus</Button>
        </main>
    );
};

export default CounterPage;
