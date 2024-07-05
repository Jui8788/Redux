import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const [tally, setTally] = useState<number[]>([]);

  useEffect(() => {
    if (count % 5 === 0 && count !== 0) {
      setTally((prevTally) => [...prevTally, count]);
    }
  }, [count]);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white mx-2"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white mx-2"
        >
          Increment By 5
        </button>

        <h1 className="text-3xl mx-10">{count}</h1>

        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white mx-2"
        >
          Decrement
        </button>
      </div>

      <div className="mt-5 flex space-x-2">
        {tally.map((value, index) => (
          <div
            key={index}
            className="w-20 h-20 flex justify-center items-center border border-gray-400 rounded-md bg-orange-500 text-2xl"
          >
            {value / 5}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
