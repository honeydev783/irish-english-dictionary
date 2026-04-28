import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { Command } from "cmdk";
import { useNavigate } from "react-router-dom";

interface WordItem {
    title: string;
    url: string;
    english: string;
    word_ga: string;
}

interface SearchWordItem extends WordItem {
    searchTitle: string;
    searchEnglish: string;
}

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const MAX_RESULTS = 50;

export default function SearchModal({ open, setOpen }: Props) {
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("");
    const [allWords, setAllWords] = useState<SearchWordItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasFetched, setHasFetched] = useState(false);
    const deferredQuery = useDeferredValue(query);

    useEffect(() => {
        if (!open || hasFetched) {
            return;
        }

        const controller = new AbortController();

        const fetchWords = async () => {
            setLoading(true);

            try {
                const res = await fetch(`${API_BASE_URL}/words/search`, {
                    signal: controller.signal,
                });
                const data: WordItem[] = await res.json();

                setAllWords(
                    data.map((word) => ({
                        ...word,
                        searchTitle: word.title.toLowerCase(),
                        searchEnglish: word.english?.toLowerCase() ?? "",
                    })),
                );
                setHasFetched(true);
            } catch (error) {
                if ((error as Error).name !== "AbortError") {
                    console.error("Failed to fetch search words:", error);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchWords();

        return () => controller.abort();
    }, [open, hasFetched]);

    useEffect(() => {
        if (!open) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            inputRef.current?.focus();
        }, 50);

        return () => window.clearTimeout(timeoutId);
    }, [open]);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(!open);
            }

            if (e.key === "Escape") {
                setOpen(false);
            }
        };

        document.addEventListener("keydown", down);

        return () => document.removeEventListener("keydown", down);
    }, [open, setOpen]);

    const normalizedQuery = deferredQuery.trim().toLowerCase();

    const results = useMemo(() => {
        if (normalizedQuery === "") {
            return [];
        }

        const startsWithMatches: SearchWordItem[] = [];
        const includesMatches: SearchWordItem[] = [];

        for (const word of allWords) {
            const matchesTitle = word.searchTitle.includes(normalizedQuery);
            const matchesEnglish = word.searchEnglish.includes(normalizedQuery);

            if (!matchesTitle && !matchesEnglish) {
                continue;
            }

            if (
                word.searchTitle.startsWith(normalizedQuery) ||
                word.searchEnglish.startsWith(normalizedQuery)
            ) {
                startsWithMatches.push(word);
            } else {
                includesMatches.push(word);
            }

            if (startsWithMatches.length + includesMatches.length >= MAX_RESULTS) {
                break;
            }
        }

        return [...startsWithMatches, ...includesMatches].slice(0, MAX_RESULTS);
    }, [allWords, normalizedQuery]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-gray-900/40 px-4 pt-24 backdrop-blur-sm"
            onClick={() => setOpen(false)}
        >
            <div
                className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white"
                onClick={(e) => e.stopPropagation()}
            >
                <Command className="w-full" shouldFilter={false}>
                    <div className="flex items-center gap-x-2 border-b border-gray-200 px-4">
                        <div className="pointer-events-none absolute">
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                className="size-5 text-fg-quaternary"
                            >
                                <path d="m21 21-3.5-3.5m2.5-6a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"></path>
                            </svg>
                        </div>

                        <Command.Input
                            ref={inputRef}
                            value={query}
                            onValueChange={setQuery}
                            placeholder="Search..."
                            className="h-12 flex-1 pl-7 text-sm outline-none"
                        />

                        <div className="min-w-6 rounded-[4px] bg-secondary_alt px-1 py-0.5 text-center text-sm font-medium text-tertiary ring-1 ring-inset ring-secondary">
                            ⌘/
                        </div>
                    </div>

                    {query.trim() !== "" && (
                        <Command.List className="max-h-[420px] overflow-y-auto py-2">
                            {loading && (
                                <div className="space-y-2 px-3 py-3">
                                    {[...Array(5)].map((_, index) => (
                                        <div
                                            key={index}
                                            className="h-10 animate-pulse rounded-lg bg-gray-100"
                                        />
                                    ))}
                                </div>
                            )}
                            {!loading && (
                                <Command.Empty className="py-10 text-center text-sm text-gray-500">
                                    {results.length === 0 && (
                                        <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center overflow-hidden p-6 pb-10">
                                            <header className="relative mb-4">
                                                <div
                                                    data-featured-icon="true"
                                                    className="relative flex size-12 shrink-0 items-center justify-center rounded-[10px] bg-primary text-fg-secondary ring-1 ring-inset ring-primary *:data-icon:size-6"
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        aria-hidden="true"
                                                        data-icon="true"
                                                        className="z-1"
                                                    >
                                                        <path d="m21 21-3.5-3.5m2.5-6a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"></path>
                                                    </svg>
                                                </div>
                                            </header>
                                            <main className="z-10 mb-0 flex w-full max-w-88 flex-col items-center justify-center gap-1">
                                                <h1 className="text-md font-semibold text-primary">No results found</h1>
                                                <p className="text-center text-sm text-tertiary">
                                                    We couldn&apos;t find anything matching {query}.
                                                </p>
                                                <button
                                                    onClick={() => setQuery("")}
                                                    className="group relative mt-5 inline-flex h-max cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-primary px-3.5 py-2.5 text-sm font-semibold text-secondary ring-1 ring-inset ring-primary transition duration-100 ease-linear before:absolute before:rounded-[7px] hover:bg-primary_hover hover:text-secondary_hover hover:*:data-icon:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:text-fg-disabled disabled:ring-disabled_subtle disabled:*:data-icon:text-fg-disabled_subtle data-loading:bg-primary_hover *:data-icon:pointer-events-none *:data-icon:shrink-0 *:data-icon:size-5 *:data-icon:text-fg-quaternary *:data-icon:transition-inherit-all in-data-input-wrapper:focus:!z-50 in-data-input-wrapper:data-icon-only:p-3 in-data-input-wrapper:gap-1.5 in-data-input-wrapper:px-4 in-data-input-wrapper:text-md in-data-input-wrapper:in-data-leading:-mr-px in-data-input-wrapper:in-data-leading:rounded-r-none in-data-input-wrapper:in-data-leading:before:rounded-r-none in-data-input-wrapper:in-data-trailing:-ml-px in-data-input-wrapper:in-data-trailing:rounded-l-none in-data-input-wrapper:in-data-trailing:before:rounded-l-none"
                                                    data-rac=""
                                                    type="button"
                                                    data-react-aria-pressable="true"
                                                >
                                                    <span data-text="true" className="px-0.5 transition-inherit-all">
                                                        Clear search
                                                    </span>
                                                </button>
                                            </main>
                                        </div>
                                    )}
                                </Command.Empty>
                            )}

                            {!loading && results.length > 0 && (
                                <Command.Group heading="Words" className="px-2 text-xs font-medium text-gray-400">
                                    {results.map((item) => (
                                        <Command.Item
                                            key={item.url}
                                            value={`${item.word_ga} ${item.english ?? ""}`}
                                            onSelect={() => {
                                                navigate(item.url);
                                                setOpen(false);
                                                setQuery("");
                                            }}
                                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm cursor-pointer data-[selected=true]:bg-gray-100"
                                        >
                                            <span className="font-medium text-gray-900">{item.word_ga}</span>
                                            {item.english && (
                                                <span className="truncate text-gray-500"> | {item.english}</span>
                                            )}
                                        </Command.Item>
                                    ))}
                                </Command.Group>
                            )}

                            {!loading && results.length === MAX_RESULTS && (
                                <div className="px-3 pt-2 text-xs text-gray-400">
                                    Showing the first {MAX_RESULTS} matches. Keep typing to narrow results.
                                </div>
                            )}
                        </Command.List>
                    )}

                    <div className="flex flex-col gap-3 border-t border-gray-200 px-4 py-3 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="flex h-7 min-w-7 items-center justify-center rounded-lg bg-primary p-1.5 ring-1 ring-inset ring-secondary">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="size-4 text-fg-quaternary"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 19V5m0 0-7 7m7-7 7 7"></path>
                                    </svg>
                                </div>

                                <div className="flex h-7 min-w-7 items-center justify-center rounded-lg bg-primary p-1.5 ring-1 ring-inset ring-secondary">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="size-4 text-fg-quaternary"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 5v14m0 0 7-7m-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>

                            <span className="text-sm font-semibold text-quaternary">to navigate</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                            <div className="flex h-7 min-w-7 items-center justify-center rounded-lg bg-primary p-1.5 ring-1 ring-inset ring-secondary">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="size-4 text-fg-quaternary"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 4v1.4c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C15.44 15 13.76 15 10.4 15H4m0 0 5-5m-5 5 5 5"></path>
                                </svg>
                            </div>

                            <span className="text-sm font-semibold text-quaternary">to select</span>
                        </div>

                        <div className="sm:ml-auto flex items-center gap-2">
                            <div className="flex h-7 min-w-7 items-center justify-center rounded-lg bg-primary p-1.5 ring-1 ring-inset ring-secondary">
                                <span className="text-sm font-semibold text-fg-quaternary">esc</span>
                            </div>

                            <span className="text-sm font-semibold text-quaternary">to close</span>
                        </div>
                    </div>
                </Command>
            </div>
        </div>
    );
}
