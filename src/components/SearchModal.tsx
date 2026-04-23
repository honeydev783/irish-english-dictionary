import { useEffect, useState, useRef } from "react"
import { Command } from "cmdk"
import { useNavigate } from "react-router-dom"
import { Search, X } from "lucide-react"
import { ChevronDown, SearchLg, ArrowSquareUp, ArrowSquareDown } from "@untitledui/icons";

interface WordItem {
    title: string
    url: string
    english: string
    word_ga: string
}



interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function SearchModal({ open, setOpen }: Props) {

    const navigate = useNavigate()
    const inputRef = useRef<HTMLInputElement>(null)
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<WordItem[]>([])
    const [allWords, setAllWords] = useState<WordItem[]>([])

    useEffect(() => {

        const fetchWords = async () => {

            const res = await fetch(`${API_BASE_URL}/words/search`)
            const data = await res.json()

            setAllWords(data)
            setResults(data)

        }

        fetchWords()

    }, [])

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 50)
        }
    }, [open])

    useEffect(() => {

        let filtered = allWords;

        if (query.trim() !== "") {
            filtered = allWords.filter(word => word.title.toLowerCase().includes(query.toLowerCase()) ||
                word.english?.toLowerCase().includes(query.toLowerCase()))
        }

        setResults(filtered)

    }, [query, allWords])

    useEffect(() => {

        const down = (e: KeyboardEvent) => {

            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen(!open)
            }

            if (e.key === "Escape") {
                setOpen(false)
            }

        }

        document.addEventListener("keydown", down)

        return () => document.removeEventListener("keydown", down)

    }, [open])

    if (!open) return null

    return (

        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-gray-900/40 backdrop-blur-sm pt-24 px-4" onClick={() => setOpen(false)}>

            <div className="w-full max-w-xl rounded-2xl bg-white  border border-gray-200" onClick={(e) => e.stopPropagation()}>

                <Command className="w-full" shouldFilter={false}>

                    {/* Search input */}

                    <div className="flex items-center gap-x-2 border-b border-gray-200 px-4">

                        <div className="pointer-events-none absolute"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" className="size-5 text-fg-quaternary"><path d="m21 21-3.5-3.5m2.5-6a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"></path></svg></div>

                        <Command.Input
                            ref={inputRef}
                            value={query}
                            onValueChange={setQuery}
                            placeholder="Search..."
                            className="flex-1 h-12 outline-none text-sm pl-7"
                        />

                        {/* <button
                            onClick={() => setOpen(false)}
                            className="p-1 rounded-md hover:bg-gray-100 cursor-pointer"
                        >
                            <X className="w-4 h-4 text-gray-500" /> 
                        </button> */}
                        <div className="min-w-6 rounded-[4px] bg-secondary_alt px-1 py-0.5 text-center text-sm font-medium text-tertiary ring-1 ring-secondary ring-inset">⌘/</div>


                    </div>

                    {/* Results */}

                    {query.trim() !== "" && (<Command.List className="max-h-[420px] overflow-y-auto py-2">

                        <Command.Empty className="py-10 text-center text-sm text-gray-500">
                            {query && results.length === 0 && (
                                <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center overflow-hidden p-6 pb-10">
                                    <header className="relative mb-4">
                                        <div data-featured-icon="true" className="relative flex shrink-0 items-center justify-center *:data-icon:size-6 bg-primary  ring-1 ring-inset size-12 rounded-[10px] text-fg-secondary ring-primary">
                                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-icon="true" className="z-1">
                                                <path d="m21 21-3.5-3.5m2.5-6a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"></path>
                                            </svg>
                                        </div>
                                    </header>
                                    <main className="z-10 flex w-full max-w-88 flex-col items-center justify-center gap-1 mb-0">
                                        <h1 className="text-md font-semibold text-primary">No results found</h1>
                                        <p className="text-center text-sm text-tertiary">We couldn't find anything matching {query}.</p>
                                        <button onClick={() => setQuery("")} className="group relative inline-flex h-max cursor-pointer items-center justify-center whitespace-nowrap outline-brand transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2  in-data-input-wrapper:focus:!z-50 in-data-input-wrapper:in-data-leading:-mr-px in-data-input-wrapper:in-data-leading:rounded-r-none in-data-input-wrapper:in-data-leading:before:rounded-r-none in-data-input-wrapper:in-data-trailing:-ml-px in-data-input-wrapper:in-data-trailing:rounded-l-none in-data-input-wrapper:in-data-trailing:before:rounded-l-none disabled:cursor-not-allowed disabled:text-fg-disabled disabled:*:data-icon:text-fg-disabled_subtle *:data-icon:pointer-events-none *:data-icon:size-5 *:data-icon:shrink-0 *:data-icon:transition-inherit-all gap-1 rounded-lg px-3.5 py-2.5 text-sm font-semibold before:rounded-[7px] data-icon-only:p-2.5 in-data-input-wrapper:gap-1.5 in-data-input-wrapper:px-4 in-data-input-wrapper:text-md in-data-input-wrapper:data-icon-only:p-3 bg-primary text-secondary  ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-secondary_hover data-loading:bg-primary_hover  disabled:ring-disabled_subtle *:data-icon:text-fg-quaternary hover:*:data-icon:text-fg-quaternary_hover mt-5" data-rac="" type="button" data-react-aria-pressable="true" id="react-aria4663485734-_r_7m8_">
                                            <span data-text="true" className="transition-inherit-all px-0.5">Clear search</span>
                                        </button>
                                    </main>
                                </div>)}
                        </Command.Empty>

                        {results.length > 0 && (
                            <Command.Group
                                heading="Words"
                                className="px-2 text-xs font-medium text-gray-400"
                            >

                                {results.map((item, index) => (

                                    <Command.Item
                                        key={index}
                                        value={item.word_ga}
                                        onSelect={() => {

                                            navigate(item.url)
                                            setOpen(false)
                                            setQuery("")

                                        }}
                                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer data-[selected=true]:bg-gray-100"
                                    >
                                        {item.word_ga}
                                    </Command.Item>

                                ))}

                            </Command.Group>
                        )}

                    </Command.List>)
                    }

                    {/* Footer */}

                    <div className="flex flex-col gap-3 border-t border-gray-200 px-4 py-3 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">

                        {/* Navigate */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <div className="flex gap-1.5">
                                <div className="flex h-7 min-w-7 items-center justify-center rounded-lg bg-primary p-1.5 ring-1 ring-secondary ring-inset">
                                    <svg viewBox="0 0 24 24" className="size-4 text-fg-quaternary" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 19V5m0 0-7 7m7-7 7 7"></path>
                                    </svg>
                                </div>

                                <div className="flex h-7 min-w-7 items-center justify-center rounded-lg bg-primary p-1.5 ring-1 ring-secondary ring-inset">
                                    <svg viewBox="0 0 24 24" className="size-4 text-fg-quaternary" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 5v14m0 0 7-7m-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>

                            <span className="text-sm font-semibold text-quaternary">
                                to navigate
                            </span>
                        </div>


                        {/* Select */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <div className="flex h-7 min-w-7 items-center justify-center rounded-lg bg-primary p-1.5 ring-1 ring-secondary ring-inset">
                                <svg viewBox="0 0 24 24" className="size-4 text-fg-quaternary" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 4v1.4c0 3.36 0 5.04-.654 6.324a6 6 0 0 1-2.622 2.622C15.44 15 13.76 15 10.4 15H4m0 0 5-5m-5 5 5 5"></path>
                                </svg>
                            </div>

                            <span className="text-sm font-semibold text-quaternary">
                                to select
                            </span>
                        </div>


                        {/* Close */}
                        <div className="flex items-center gap-2 sm:ml-auto">
                            <div className="flex h-7 min-w-7 items-center justify-center rounded-lg bg-primary p-1.5 ring-1 ring-secondary ring-inset">
                                <span className="text-sm font-semibold text-fg-quaternary">
                                    esc
                                </span>
                            </div>

                            <span className="text-sm font-semibold text-quaternary">
                                to close
                            </span>
                        </div>

                    </div>

                </Command>

            </div>

        </div>

    )
}