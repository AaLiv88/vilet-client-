import { JSXElementConstructor, ReactElement, Ref, useEffect } from "react";


//todo пеоеписать с useLatest по видосу с .туба
export const useOutsideClick = (elementRef: any, handler: () => void, attached: boolean = true) => {
    // const latestHandler = useLatest(handler);

    useEffect(() => {
        if (!attached) return;

        const handleClick = (e: Event) => {
            if (!elementRef.current) return;
            if (!elementRef.current.contains(e.target)) {
                handler();
            }
            // elementRef.forEach(ref => {
            //     if (!ref.current) return;
            //     if (!ref.current.contains(e.target)) {
            //         handler();
            //     }
            // })
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [elementRef, handler, attached]);
}