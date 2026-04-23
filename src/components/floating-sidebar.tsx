import React, { useEffect, useRef, useState } from "react";

interface FloatingSidebarProps {
    children: React.ReactNode;
    className?: string;
    boundaryRef?: React.RefObject<HTMLElement | null>;
    topOffset?: number;
    minWidth?: number;
}

export const FloatingSidebar = ({
    children,
    className = "",
    boundaryRef,
    topOffset = 150,
    minWidth = 1024,
}: FloatingSidebarProps) => {
    const anchorRef = useRef<HTMLDivElement | null>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const floatingRef = useRef<HTMLDivElement | null>(null);
    const [isFloating, setIsFloating] = useState(false);
    const [metrics, setMetrics] = useState({ left: 0, width: 0, height: 0 });

    useEffect(() => {
        if (typeof window === "undefined") return;

        const updatePosition = () => {
            const anchor = anchorRef.current;
            const panel = panelRef.current ?? floatingRef.current;

            if (!anchor || !panel) return;

            const desktopLayout = window.innerWidth >= minWidth;

            if (!desktopLayout) {
                setIsFloating(false);
                setMetrics((prev) => ({
                    ...prev,
                    height: panel.offsetHeight,
                }));
                return;
            }

            const anchorRect = anchor.getBoundingClientRect();
            const panelRect = panel.getBoundingClientRect();
            const anchorTop = anchorRect.top + window.scrollY;
            const boundaryBottom = boundaryRef?.current
                ? boundaryRef.current.getBoundingClientRect().bottom + window.scrollY
                : Number.POSITIVE_INFINITY;
            const floatingBottom = window.scrollY + topOffset + panelRect.height;
            const shouldFloat = window.scrollY + topOffset >= anchorTop && floatingBottom < boundaryBottom;

            setMetrics({
                left: panelRect.left,
                width: panelRect.width,
                height: panelRect.height,
            });
            setIsFloating(shouldFloat);
        };

        updatePosition();

        const handleScroll = () => {
            window.requestAnimationFrame(updatePosition);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", updatePosition);

        const resizeObserver = new ResizeObserver(() => {
            updatePosition();
        });

        if (anchorRef.current) resizeObserver.observe(anchorRef.current);
        if (panelRef.current) resizeObserver.observe(panelRef.current);
        if (floatingRef.current) resizeObserver.observe(floatingRef.current);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updatePosition);
            resizeObserver.disconnect();
        };
    }, [boundaryRef, minWidth, topOffset]);

    return (
        <div ref={anchorRef}>
            {!isFloating && (
                <div ref={panelRef} className={className}>
                    {children}
                </div>
            )}

            {isFloating && (
                <>
                    <div
                        aria-hidden="true"
                        className={className}
                        style={{ height: metrics.height, visibility: "hidden" }}
                    />
                    <div
                        ref={floatingRef}
                        className={className}
                        style={{
                            position: "fixed",
                            top: topOffset,
                            left: metrics.left,
                            width: metrics.width,
                            margin: 0,
                            zIndex: 9999,
                            isolation: "isolate",
                            transform: "translateZ(0)",
                        }}
                    >
                        {children}
                    </div>
                </>
            )}
        </div>
    );
};
