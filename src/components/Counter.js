import { useMemo } from "react";

function fib(n) {
    if (n === 1 || n === 2) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
}

function Counter() {

    let number = 10;

    

    const fibMemo = useMemo(()=>fib(number), [number])
    // const fibMemo = fib(number)

    return (
        <>
        {fibMemo}
        </>
    )
}

export default Counter;