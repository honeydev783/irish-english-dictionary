import { useState, useEffect } from "react";
import { CTAIPhoneMockup01 } from "./word";
import { Share07 } from "@untitledui/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge11Brand } from "./home";
import { Command } from "cmdk";

interface WordItem {
    title: string;
    url: string;
    english: string;
    word_ga: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const BreadcrumbWithShare = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const url = window.location.origin + location.pathname;
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);

            setTimeout(() => {
            }, 2000);
        } catch (err) {
            console.error("Copy failed", err);
        }
    };
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Teach - HeyRúa",
                    text: "Check out this Irish word!",
                    url: url,
                });
            } catch (err) {
                console.error("Share cancelled or failed", err);
            }
        } else {
            handleCopy(); // fallback
        }
    };


    return (
        <section className="w-full bg-white  border-secondary">
            <div className="mx-auto max-w-container px-4 md:px-8 py-4">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    {/* Breadcrumbs */}
                    {/* <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#717680]">

                        <span><HomeLine className="h-5 w-5 text-[#A4A7AE] cursor-pointer transition  hover:text-[#667085]" onClick={() => navigate('/')} /></span>
                        <span onClick={() => navigate(`/category`)}
                            className="
                                px-2 py-1
                                rounded-md
                                cursor-pointer
                                transition
                                hover:bg-[#F2F4F7]
                                hover:text-[#344054]
                            "
                        
                        >Nouns</span>
                    </div> */}

                    {/* Actions */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center ml-auto">

                        {/* Share */}
                        <button onClick={handleShare} className="flex items-center justify-center gap-2 rounded-md border border-[#D5D7DA] px-4 py-2 text-sm font-semibold cursor-pointer transition hover:bg-gray-50
        hover:border-gray-300">
                            <Share07 className="h-4 w-4 text-[#A4A7AE] transition group-hover:text-[#667085]" />
                            Share
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

const CategorySection = () => {
    const navigate = useNavigate();
    const [allWords, setAllWords] = useState<WordItem[]>([]);
    const [results, setResults] = useState<WordItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/words/search`);
                const data = await response.json();
                setAllWords(data);
                setResults(data);
            } catch (error) {
                console.error("Failed to fetch words:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWords();
    }, []);

    useEffect(() => {
        let filtered = allWords;

        if (query.trim() !== "") {
            filtered = allWords.filter((word) =>
                word.title.toLowerCase().includes(query.toLowerCase()) ||
                word.english?.toLowerCase().includes(query.toLowerCase()),
            );
        }

        setResults(filtered);
    }, [query, allWords]);

    return (
        <div>

            {/* Title */}
            {/* <section className="w-full bg-primary border-b border-[#E9EAEB]">
                <div className="mx-auto max-w-container px-4 md:px-8 py-6">
                    <h1 className="font-inter font-semibold text-2xl md:text-3xl lg:text-[36px] text-[#181D27] leading-snug">
                        <span className="text-[#45341A]">Nouns</span>
                    </h1>
                    <p className="mt-2 text-[16px] text-[#535862] font-inter font-normal text-base leading-6 tracking-normal">
                        A noun (ainmfhocal) is a word for a person, place, or thing.
                    </p>
                    <p className="mt-4 flex items-center gap-2 text-base leading-6 text-[#535862] font-inter font-normal whitespace-nowrap">
                        <HiLightBulb className="w-5 h-5 text-yellow-500 shrink-0" />
                        <span className="font-bold">Examples:</span>
                        <span>duine (person), teach (house), madra (dog).</span>
                    </p>

                </div>
            </section> */}

            {/* Content */}
            <section className="w-full bg-primary border-b border-[#E9EAEB] mt-[100px]">
                <div className="mx-auto max-w-container px-4 md:px-8 py-8">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-5">
                            <h4 className="font-inter font-semibold text-5xl leading-[60px] tracking-[-0.02em] text-[#181D27] text-center">
                                Type a word in English or Irish
                            </h4>
                            <p className="text-[16px] text-[#535862] font-inter font-normal text-base leading-6 tracking-normal mb-3 text-center mt-4">
                                Teacher-built work bank to help you find the Irish you need fast
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-[20px] border border-[#E9EAEB] bg-white ">
                            <Command className="w-full" shouldFilter={false}>
                                <div className="flex items-center gap-x-2 border-b border-[#E9EAEB] px-4">
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
                                            className="size-5 text-[#717680]"
                                        >
                                            <path d="m21 21-3.5-3.5m2.5-6a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"></path>
                                        </svg>
                                    </div>

                                    <Command.Input
                                        value={query}
                                        onValueChange={setQuery}
                                        placeholder="Search..."
                                        className="h-12 flex-1 pl-7 text-sm text-[#181D27] outline-none placeholder:text-[#717680]"
                                    />
                                    <div className="min-w-6 rounded-[4px] bg-secondary_alt px-1 py-0.5 text-center text-sm font-medium text-tertiary ring-1 ring-secondary ring-inset">⌘/</div>
                                </div>

                                {query.trim() !== "" && (
                                    <Command.List className="max-h-[420px] min-h-[220px] overflow-y-auto p-3">
                                        {loading ? (
                                            <div className="space-y-2">
                                                {[...Array(6)].map((_, index) => (
                                                    <div
                                                        key={index}
                                                        className="rounded-xl border border-[#F2F4F7] bg-[#FCFCFD] px-3 py-3"
                                                    >
                                                        <div
                                                            className="h-5 animate-pulse rounded-md bg-[#E9EAEB]"
                                                            style={{ width: `${32 + (index % 3) * 12}%` }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <>
                                                <Command.Empty className="py-10 text-center text-sm text-[#535862]">
                                                    {query && results.length === 0 && (
                                                        <div className="mx-auto flex w-full max-w-lg flex-col items-center justify-center overflow-hidden p-6 pb-10">
                                                            <header className="relative mb-4">
                                                                <div data-featured-icon="true" className="relative flex shrink-0 items-center justify-center *:data-icon:size-6 bg-primary ring-1 ring-inset size-12 rounded-[10px] text-fg-secondary ring-primary">
                                                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" data-icon="true" className="z-1">
                                                                        <path d="m21 21-3.5-3.5m2.5-6a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"></path>
                                                                    </svg>
                                                                </div>
                                                            </header>
                                                            <main className="z-10 flex w-full max-w-88 flex-col items-center justify-center gap-1 mb-0">
                                                                <h1 className="text-md font-semibold text-primary">No results found</h1>
                                                                <p className="text-center text-sm text-tertiary">We couldn't find anything matching {query}.</p>
                                                                <button onClick={() => setQuery("")} className="group relative inline-flex h-max cursor-pointer items-center justify-center whitespace-nowrap outline-brand transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2 in-data-input-wrapper:focus:!z-50 in-data-input-wrapper:in-data-leading:-mr-px in-data-input-wrapper:in-data-leading:rounded-r-none in-data-input-wrapper:in-data-leading:before:rounded-r-none in-data-input-wrapper:in-data-trailing:-ml-px in-data-input-wrapper:in-data-trailing:rounded-l-none in-data-input-wrapper:in-data-trailing:before:rounded-l-none disabled:cursor-not-allowed disabled:text-fg-disabled disabled:*:data-icon:text-fg-disabled_subtle *:data-icon:pointer-events-none *:data-icon:size-5 *:data-icon:shrink-0 *:data-icon:transition-inherit-all gap-1 rounded-lg px-3.5 py-2.5 text-sm font-semibold before:rounded-[7px] data-icon-only:p-2.5 in-data-input-wrapper:gap-1.5 in-data-input-wrapper:px-4 in-data-input-wrapper:text-md in-data-input-wrapper:data-icon-only:p-3 bg-primary text-secondary ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-secondary_hover data-loading:bg-primary_hover disabled:ring-disabled_subtle *:data-icon:text-fg-quaternary hover:*:data-icon:text-fg-quaternary_hover mt-5" type="button">
                                                                    <span data-text="true" className="transition-inherit-all px-0.5">Clear search</span>
                                                                </button>
                                                            </main>
                                                        </div>
                                                    )}
                                                </Command.Empty>

                                                {results.length > 0 && (
                                                    <Command.Group
                                                        heading="Words"
                                                        className="px-2 text-xs font-medium text-gray-400"
                                                    >
                                                        {results.map((item, index) => (
                                                            <Command.Item
                                                                key={`${item.word_ga}-${index}`}
                                                                value={item.word_ga}
                                                                onSelect={() => {
                                                                    navigate(item.url);
                                                                    setQuery("");
                                                                }}
                                                                className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer data-[selected=true]:bg-gray-100"
                                                            >
                                                                {item.word_ga}
                                                            </Command.Item>
                                                        ))}
                                                    </Command.Group>
                                                )}
                                            </>
                                        )}
                                    </Command.List>
                                )}
                            </Command>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const CategoryScreen = () => {
    return (
        <div className="bg-primary">
            <Header />
            <div className="overflow-hidden">
                {/* <BreadcrumbWithShare /> */}
                <CategorySection />
                <CTAIPhoneMockup01 />
                <FooterLarge11Brand />
            </div>
        </div>
    );
}

export default CategoryScreen;
