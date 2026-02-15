import { useEffect, useMemo, useRef, useState } from "react";

export type UseTitleHookProps = {
    titles: string[];
    delay: number;
}

export default function useTitles(
    {
        titles = [],
        delay = 1000
    }: UseTitleHookProps
): string {
    const [titleIndex, setTitleIndex] = useState(0);
    const title = useMemo(() => {
        return titles[titleIndex];
    }, [
        titles,
        titleIndex
    ]);
    const prevTime = useRef(0);
    const acc = useRef(0);
    const rafID = useRef(0);

    useEffect(() => {
        prevTime.current = performance.now();
    }, []);

    useEffect(() => {
        function loop(now: number) {
            const delta = now - prevTime.current;
            prevTime.current = now;

            acc.current += delta;

            if (acc.current >= delay) {
                setTitleIndex((prevTitleIndex) => (prevTitleIndex + 1) % titles.length)
                acc.current %= delay;
            }

            rafID.current = requestAnimationFrame(loop);
        }

        rafID.current = requestAnimationFrame(loop);

        return () => cancelAnimationFrame(rafID.current);
    }, [
        titles.length,
        delay
    ]);

    return title;
}
