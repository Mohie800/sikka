import { useEffect, useRef, RefObject } from "react";

export function useHorizontalScroll<T extends HTMLElement>(): RefObject<T> {
    const elRef = useRef<T>(null);

    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: WheelEvent) => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                // Increase the scroll speed by adjusting the multiplier (e.g., 2)
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 2, // Adjust multiplier as needed
                    behavior: "smooth"
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    }, []);

    return elRef;
}
