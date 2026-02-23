import React, { useState, useRef, useEffect } from "react";
import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";
import { Copy01, Share07, ArrowNarrowUpRight } from "@untitledui/icons";
import WaveSurfer from "wavesurfer.js";
import { Play, Pause } from "lucide-react";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useParams, useLocation, useSearchParams, useNavigate } from "react-router-dom";
import { WordItem } from "./wordlist";
import { Header } from "@/components/marketing/header-navigation/header";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const HeaderNavigationSimpleDemo = () => (
    <HeaderNavigationBase
        items={[
            { label: "Home", href: "/" },
            {
                label: "How it works",
                href: "/dashboard",
            },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Word Bank", href: "/category" },
        ]}
    />
);
interface BreadcrumbWithShareProps {
    normalized_ga?: string;
    category?: string;
    type: string;
    word_ga?: string;
}
const BreadcrumbWithShare = ({ normalized_ga, category, type, word_ga }: BreadcrumbWithShareProps) => {
    const location = useLocation();
    const url = window.location.origin + location.pathname;
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
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
        <section className="w-full bg-primary border-b border-secondary">
            <div className="mx-auto max-w-container px-4 md:px-8 py-4">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#717680]">
                        <span>Home</span>
                        <span>&gt;</span>
                        <span>{type}</span>
                        <span>&gt;</span>
                        <span>{category}</span>
                        {category && <span>&gt;</span>}
                        <span className="rounded-md bg-[#FAFAFA] px-2 py-1 text-[#414651]">
                            {word_ga}
                        </span>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                        {/* Copy */}
                        <div className="flex w-full sm:w-auto">
                            <input
                                value={url}
                                readOnly
                                className="w-full rounded-l-md border border-[#D5D7DA] px-3 py-2 text-sm"
                            />
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 rounded-r-md border border-[#D5D7DA] px-3 py-2 text-sm font-semibold transition cursor-pointer"
                            >
                                {copied ? (
                                    <svg
                                        className="h-4 w-4 text-green-600"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <Copy01 className="h-4 w-4 text-[#A4A7AE]" />
                                )}

                                <span className="min-w-[48px] text-left">
                                    Copy
                                </span>
                            </button>
                        </div>

                        {/* Share */}
                        <button onClick={handleShare} className="flex items-center justify-center gap-2 rounded-md border border-[#D5D7DA] px-4 py-2 text-sm font-semibold cursor-pointer">
                            <Share07 className="h-4 w-4 text-[#A4A7AE]" />
                            Share
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

interface AudioWaveformPlayerProps {
    audioUrl: string;
}
const AudioWaveformPlayer: React.FC<AudioWaveformPlayerProps> = ({ audioUrl }) => {
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    if (!audioUrl) return null; // don't render if no audio

    useEffect(() => {
        if (!waveformRef.current) return;

        wavesurferRef.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#7FAAFF",     // blue-500
            progressColor: "#0055FF", // blue-600
            height: 56,
            barWidth: 1,
            barGap: 2,
            barRadius: 3,
            cursorWidth: 0,
        });

        wavesurferRef.current.load(audioUrl);
        wavesurferRef.current.on("finish", () => {
            setIsPlaying(false);
        });

        return () => {
            wavesurferRef.current?.destroy();
            wavesurferRef.current = null;
        };

    }, [audioUrl]);

    const togglePlay = (): void => {
        if (!wavesurferRef.current) return;
        wavesurferRef.current.playPause();
        setIsPlaying((prev) => !prev);
    }


    return (
        <div className="w-[260px] h-[56px] max-w-xl rounded-tr border border-[#E9EAEB] bg-white p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg flex items-center gap-4 ml-4">
            {/* Play / Pause Button */}
            <button
                type="button"
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-[#0055FF] flex items-center justify-center text-white hover:bg-blue-700 transition cursor-pointer"
            >
                {isPlaying ? <Pause size={16} fill="white" /> : <Play size={16} fill="white" />}
            </button>

            {/* Waveform */}
            <div className="flex-1">
                <div ref={waveformRef} />
            </div>
        </div>
    );

};

const NoWaveAudioPlayer: React.FC<AudioWaveformPlayerProps> = ({ audioUrl }) => {
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const wavesurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    if (!audioUrl) return null; // don't render if no audio

    useEffect(() => {
        if (!waveformRef.current) return;

        wavesurferRef.current = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#7FAAFF",     // blue-500
            progressColor: "#0055FF", // blue-600
            height: 56,
            barWidth: 1,
            barGap: 2,
            barRadius: 3,
            cursorWidth: 0,
        });

        wavesurferRef.current.load(audioUrl);
        wavesurferRef.current.on("finish", () => {
            setIsPlaying(false);
        });

        return () => {
            wavesurferRef.current?.destroy();
            wavesurferRef.current = null;
        };

    }, [audioUrl]);

    const togglePlay = (): void => {
        if (!wavesurferRef.current) return;
        wavesurferRef.current.playPause();
        setIsPlaying((prev) => !prev);
    }


    return (
        <div className="h-[56px] max-w-xl rounded-tr  bg-white p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg flex items-center gap-4 ml-4">
            {/* Play / Pause Button */}
            <button
                type="button"
                onClick={togglePlay}
                className="w-8 h-8 rounded-full bg-[#0055FF] flex items-center justify-center text-white hover:bg-blue-700 transition cursor-pointer"
            >
                {isPlaying ? <Pause size={16} fill="white" /> : <Play size={16} fill="white" />}
            </button>

            {/* Waveform */}
            <div className="flex-1 hidden">
                <div ref={waveformRef} />
            </div>
        </div>
    );

};

interface SentenceItem {
    ga: string;
    en: string;
    path?: string | null;
}

interface SentencesTableProps {
    sentences: SentenceItem[];
    loading?: boolean;
}



const SentencesTable = ({ sentences, loading }: SentencesTableProps) => {
    if (loading) {
        return (
            <div className="animate-pulse p-6 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-full" />
                <div className="h-6 bg-gray-200 rounded w-full" />
                <div className="h-6 bg-gray-200 rounded w-full" />
            </div>
        );
    }
    return (
        <div className="w-full  py-1">
            <div className="max-w-5xl">
                <div className="overflow-x-auto rounded-[12px] shadow-lg border border-[#E9EAEB]">
                    <table className="min-w-full divide-y divide-gray-200">
                        {/* Desktop Header */}
                        <thead className="bg-[#FAFAFA] hidden md:table-header-group">
                            <tr className="font-inter font-semibold text[12px] leading-[18px] tracking-normal text-[#717680] text-left">
                                <th className="px-6 py-3">
                                    Irish
                                </th>
                                <th className="px-6 py-3">
                                    Pronunciation
                                </th>
                                <th className="px-6 py-3">
                                    English
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 font-700 font-normal text-[16px] text-[#535862]">
                            {sentences.length > 0 ? (
                                sentences.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="block md:table-row bg-white md:bg-transparent mb-4 md:mb-0 rounded-xl md:rounded-none shadow md:shadow-none p-4 md:p-0"
                                    >
                                        <td className="block md:table-cell px-6 py-2">
                                            <span className="font-semibold md:hidden">Irish: </span>
                                            <span className="font-bold">{item.ga}</span>
                                        </td>

                                        <td className="block md:table-cell px-6 py-2">
                                            <span className="font-semibold md:hidden">Pronunciation: </span>
                                            {item.path && (
                                                <NoWaveAudioPlayer audioUrl={`/${item.path}`} />
                                            )}
                                        </td>

                                        <td className="block md:table-cell px-6 py-2">
                                            <span className="font-semibold md:hidden">English: </span>
                                            {item.en}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="text-center py-6 text-gray-400">
                                        No sentences available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

interface RelatedTableProp {
    type?: string | null;
}

const RelatedTable = ({ type }: RelatedTableProp) => {
    const [words, setWords] = useState<WordItem[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWords = async () => {
            if (!type) return;
            try {
                setLoading(true);
                const response = await fetch(`${API_BASE_URL}/words?type=${type}`);
                const data = await response.json();
                console.log("data===>", data);
                setWords(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch words:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWords();
    }, [type]);


    return (
        <div className="w-full  py-1">
            <div className="max-w-5xl">
                <div className="overflow-x-auto rounded-[12px] shadow-lg border border-[#E9EAEB]">
                    <table className="min-w-full divide-y divide-gray-200">
                        {/* Desktop Header */}
                        <thead className="bg-[#FAFAFA] hidden md:table-header-group">
                            <tr className="font-inter font-semibold text[12px] leading-[18px] tracking-normal text-[#717680] text-left">
                                <th className="px-6 py-3">
                                    Irish
                                </th>
                                <th className="px-6 py-3">
                                    English
                                </th>
                                <th className="px-6 py-3">
                                    Teams
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 font-700 font-normal text-[16px] text-[#535862]">
                            {loading ? (
                                [...Array(4)].map((_, index) => (
                                    <tr
                                        key={index}
                                        className="block md:table-row bg-white md:bg-transparent mb-4 md:mb-0 rounded-xl md:rounded-none shadow md:shadow-none p-4 md:p-0 animate-pulse"
                                    >
                                        <td className="block md:table-cell px-6 py-5">
                                            <div className="h-4 bg-gray-200 rounded w-24" />
                                        </td>
                                        <td className="block md:table-cell px-6 py-5">
                                            <div className="h-4 bg-gray-200 rounded w-32" />
                                        </td>
                                        <td className="block md:table-cell px-6 py-5">
                                            <div className="h-4 bg-gray-200 rounded w-20" />
                                        </td>
                                    </tr>
                                ))
                            ) : words.length > 0 ? (
                                words.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="block md:table-row bg-white md:bg-transparent mb-4 md:mb-0 rounded-xl md:rounded-none shadow md:shadow-none p-4 md:p-0"
                                    >
                                        {/* Name */}
                                        <td className="block md:table-cell px-6 py-5">
                                            <span className="font-semibold md:hidden">Irish: </span>
                                            <span className="font-bold">{item.word_ga}</span>
                                        </td>

                                        {/* Email */}
                                        <td className="block md:table-cell px-6 py-5">
                                            <span className="font-semibold md:hidden">English: </span>
                                            {item.word_en}
                                        </td>

                                        {/* Role */}
                                        <td className="block md:table-cell px-6 py-5 cursor-pointer">

                                            <a className="flex font-500 text-[#0055FF] text-[14px] items-center" onClick={() => {
                                                navigate(`/${type}/${item.normalized_ga}`);
                                            }}>Learn more <ArrowNarrowUpRight className="w-5 h-5 ml-2" /> </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="text-center py-6 text-gray-400">
                                        No related words found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

interface RelatedWordsTableProp {
    category?: string | null;
}
const RelatedWordsTable = ({ category }: RelatedWordsTableProp) => {
    const [words, setWords] = useState<WordItem[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWords = async () => {
            if (!category) return;
            try {
                setLoading(true);
                const response = await fetch(`${API_BASE_URL}/words?category=${category}`);
                const data = await response.json();
                console.log("data===>", data);
                setWords(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch words:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchWords();
    }, [category]);


    return (
        <div className="w-full  py-1">
            <div className="max-w-5xl">
                <div className="overflow-x-auto rounded-[12px] shadow-lg border border-[#E9EAEB]">
                    <table className="min-w-full divide-y divide-gray-200">
                        {/* Desktop Header */}
                        <thead className="bg-[#FAFAFA] hidden md:table-header-group">
                            <tr className="font-inter font-semibold text[12px] leading-[18px] tracking-normal text-[#717680] text-left">
                                <th className="px-6 py-3">
                                    Irish
                                </th>
                                <th className="px-6 py-3">
                                    English
                                </th>
                                <th className="px-6 py-3">
                                    Teams
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 font-700 font-normal text-[16px] text-[#535862]">
                            {loading ? (
                                [...Array(4)].map((_, index) => (
                                    <tr
                                        key={index}
                                        className="block md:table-row bg-white md:bg-transparent mb-4 md:mb-0 rounded-xl md:rounded-none shadow md:shadow-none p-4 md:p-0 animate-pulse"
                                    >
                                        <td className="block md:table-cell px-6 py-5">
                                            <div className="h-4 bg-gray-200 rounded w-24" />
                                        </td>
                                        <td className="block md:table-cell px-6 py-5">
                                            <div className="h-4 bg-gray-200 rounded w-32" />
                                        </td>
                                        <td className="block md:table-cell px-6 py-5">
                                            <div className="h-4 bg-gray-200 rounded w-20" />
                                        </td>
                                    </tr>
                                ))
                            ) : words.length > 0 ? (
                                words.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="block md:table-row bg-white md:bg-transparent mb-4 md:mb-0 rounded-xl md:rounded-none shadow md:shadow-none p-4 md:p-0"
                                    >
                                        {/* Name */}
                                        <td className="block md:table-cell px-6 py-5">
                                            <span className="font-semibold md:hidden">Irish: </span>
                                            <span className="font-bold">{item.word_ga}</span>
                                        </td>

                                        {/* Email */}
                                        <td className="block md:table-cell px-6 py-5">
                                            <span className="font-semibold md:hidden">English: </span>
                                            {item.word_en}
                                        </td>

                                        {/* Role */}
                                        <td className="block md:table-cell px-6 py-5 cursor-pointer">

                                            <a className="flex font-500 text-[#0055FF] text-[14px] items-center" onClick={() => {
                                                navigate(
                                                    `/nouns/${category}/${encodeURIComponent(item.word_ga)}-${encodeURIComponent(item.word_en)}`,
                                                    {
                                                        state: { normalized_ga: item.word_ga, word_en: item.word_en, category: category },
                                                    }
                                                );
                                            }}>Learn more <ArrowNarrowUpRight className="w-5 h-5 ml-2" /> </a>
                                        </td>
                                    </tr>
                                )
                                )) : (
                                <tr>
                                    <td colSpan={3} className="text-center py-6 text-gray-400">
                                        No related words found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

interface StudySectionProps {
    normalized_ga?: string;
    word_en?: string;
    category?: string;
    type: string;
    word_ga?: string;
}


interface WordDetailType {
    word_type?: string;
    sex?: string;
    pronunciation?: string;
    plural?: string;
    gen_sg_example?: string;
    gen_pl_example?: string;
    pronunciation_path?: string | null;
    sentences: SentenceItem[];

}
const StudySection = ({ normalized_ga, word_en, category, type, word_ga }: StudySectionProps) => {
    const instantAnswerRef = useRef<HTMLDivElement>(null);
    const sentencesRef = useRef<HTMLDivElement>(null);
    const relatedWordsRef = useRef<HTMLDivElement>(null);
    type SectionKey = "instant" | "sentences" | "related";
    const [activeSection, setActiveSection] = useState<SectionKey>("instant");
    const [wordDetail, setWordDetail] = useState<WordDetailType | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchDetails = async () => {
            if (!normalized_ga) return;
            try {
                setLoading(true);
                const response = await fetch(`${API_BASE_URL}/words/${normalized_ga}`);
                const data = await response.json();
                console.log("word detail==>", data);
                setWordDetail(data);
                setLoading(false);

            } catch (error) {
                console.error("Failed to fetch word detail", error)
            }
        }

        fetchDetails();
    }, [normalized_ga])

    const scrollTo = (ref: React.RefObject<HTMLDivElement | null>, section: SectionKey) => {
        setActiveSection(section);
        ref.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const navItemClasses = (section: SectionKey) =>
        `text-left w-full text-[14px] rounded-md px-3 py-2 font-inter font-semibold transition
     ${activeSection === section
            ? "bg-[#FAFAFA] text-[#414651]"
            : "text-[#717680] bg-white hover:bg-[#F9FAFB]"
        }`;


    return (
        <div>

            {/* Title */}
            <section className="w-full bg-primary border-b border-[#E9EAEB]">
                <div className="mx-auto max-w-container px-4 md:px-8 py-6">
                    <h1 className="font-inter font-semibold text-2xl md:text-3xl lg:text-[36px] text-[#181D27] leading-snug">
                        <span className="text-[#45341A]">{word_en} </span>
                        in Irish
                        <span className="text-[#0055FF]"> ({word_ga})</span>
                        : Meaning, Pronunciation, Usage
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="w-full bg-primary border-b border-[#E9EAEB]">
                <div
                    className="
                        mx-auto
                        max-w-container
                        px-4 md:px-8
                        py-6
                        grid
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                        lg:grid-cols-[2fr_6fr_4fr]
                    "
                >

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => scrollTo(instantAnswerRef, "instant")}
                            className={navItemClasses("instant")}
                        >
                            Instant Answer
                        </button>

                        <button
                            onClick={() => scrollTo(sentencesRef, "sentences")}
                            className={navItemClasses("sentences")}
                        >
                            Sentences
                        </button>

                        <button
                            onClick={() => scrollTo(relatedWordsRef, "related")}
                            className={navItemClasses("related")}
                        >
                            Related Words
                        </button>
                    </div>

                    <div className="flex flex-col gap-10">
                        <div ref={instantAnswerRef}>
                            <h3 className="font-semibold text-[30px] text-[#181D27] mb-2">
                                How to say <span className="text-[#0055FF]">“{word_en}”</span> in Irish
                            </h3>
                            {loading ? (
                                <div className="animate-pulse space-y-4 mt-6">
                                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                                    <div className="h-40 bg-gray-200 rounded" />
                                </div>
                            ) : (<>
                                <p className="mt-8 text-[16px] text-[#535862] font-inter font-bold text-base leading-6 tracking-normal">
                                    Explanation
                                </p>
                                <p className="text-[16px] text-[#535862] font-inter font-normal text-base leading-6 tracking-normal">
                                    “{word_ga}” is the most common everyday Irish word for a {word_en}.
                                </p>

                                <div className="bg-[#FAFAFA] rounded-[8px] border-[1px] border-[#E9EAEB] mt-8 ">
                                    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-6 gap-y-2 font-inter font-bold text-base leading-6 tracking-normal text-[#414651] text-[16px] p-[16px]">
                                        <span>Irish:</span>
                                        <span className="text-[#0055FF]">{word_ga}</span>

                                        <span className="pt-4">English:</span>
                                        <span className="pt-4">{word_en}</span>

                                        <span className="pt-4">Word type:</span>
                                        <span className="pt-4">{wordDetail?.word_type}</span>

                                        <span className="pt-4">Sex:</span>
                                        <span className="pt-4">{wordDetail?.sex}</span>

                                        <span className="pt-4">Pronunciation:</span>
                                        <span className="pt-4">“{wordDetail?.pronunciation}” (approx.)</span>
                                    </div>

                                    <div className="flex p-[16px]">
                                        <img src="/images/Avatar.png" className="w-[40px] h-[40px]" />
                                        {wordDetail?.pronunciation_path && (
                                            <AudioWaveformPlayer audioUrl={"/" + wordDetail.pronunciation_path} />
                                        )}
                                    </div>

                                    {wordDetail?.plural &&
                                        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-6 gap-y-2 font-inter font-bold text-base leading-6 tracking-normal text-[#414651] text-[16px] p-[16px]">
                                            <span className="underline">Various Forms</span>
                                            <span className="text-[#0055FF]"></span>

                                            <span className="italic pt-4">Plural: </span>
                                            <span className="italic font-normal pt-4"> {wordDetail?.plural}</span>

                                            <span className="italic pt-4">Genitive singular: </span>
                                            <span className="italic font-normal pt-4"> {wordDetail?.gen_sg_example}</span>

                                            <span className="italic pt-4">Genitive plural: </span>
                                            <span className="italic font-normal pt-4">  {wordDetail?.gen_pl_example}</span>

                                        </div>}

                                </div>
                            </>
                            )
                            }
                        </div>

                        <div ref={sentencesRef}>
                            <h3 className="font-semibold text-[30px] text-[#181D27] mb-2">
                                Irish sentences with “{word_ga}”
                            </h3>
                            <p className="text-[16px] text-[#535862] font-inter font-normal text-base leading-6 tracking-normal mb-3">
                                Below are common Irish sentences using the word “{normalized_ga}”, the Irish word for house.
                            </p>
                            <SentencesTable sentences={wordDetail?.sentences ?? []} loading={loading} />

                        </div>

                        <div ref={relatedWordsRef}>
                            <h3 className="font-semibold text-[30px] text-[#181D27] mb-2">
                                Other Irish {type}
                            </h3>
                            {type == "nouns" && <p className="text-[16px] text-[#535862] font-inter font-normal text-base leading-6 tracking-normal mb-3">
                                Here are other Irish nouns with the primary category of {category}
                            </p>}
                            {
                                type == "nouns" ? <RelatedWordsTable category={category} /> : <RelatedTable type={type} />

                            }

                        </div>
                    </div>

                    <div className="w-full max-w-[320px] mx-auto text-sm text-[#475467] font-inter font-semibold">

                        {/* Top Divider */}
                        <SectionDivider className="bg-[#E9EAEB] w-full" />

                        {/* Content Wrapper */}
                        <div className="mt-8 flex flex-col items-start w-full">

                            {/* Paragraph */}
                            <p className="text-[16px] text-[#0055FF]">
                                Learn Irish, a little every week
                            </p>

                            {/* Input */}
                            <input
                                placeholder="Enter your email"
                                className="
                                    mt-4
                                    h-[44px]
                                    w-full
                                    border
                                    border-[#D5D7DA]
                                    rounded-lg
                                    px-[14px]
                                    py-[10px]
                                    text-[16px]
                                    font-normal
                                    placeholder:text-[16px]
                                    placeholder:text-gray-500
                                "
                            />

                            {/* Button */}
                            <button
                                className="
                                    mt-4
                                    h-[44px]
                                    w-full
                                    rounded-lg
                                    bg-[#0055FF]
                                    text-white
                                    text-[16px]
                                    font-semibold
                                    hover:bg-blue-700
                                    transition
                                "
                            >
                                Join the newsletter
                            </button>
                        </div>

                        {/* Bottom Divider */}
                        <SectionDivider className="bg-[#E9EAEB] mt-8 w-full" />
                    </div>

                </div>
            </section>
        </div>
    );
};

export const CTAIPhoneMockup01 = () => {
    return (
        <section className="overflow-hidden bg-primary md:pb-24">
            <div className="relative mx-auto grid w-full max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="z-20 flex max-w-3xl flex-col items-start">
                    <h2 className="font-inter font-semibold text-5xl leading-[60px] tracking-[-0.02em] text-[#181D27]">
                        Learn Irish by actually speaking it
                    </h2>
                    <p className="mt-4 font-inter font-normal font-700 text-[20px] leading-[30px] tracking-normal text-[#535862]">Learn everyday Irish words through guided <br /> conversation</p>
                    <p className="mt-4 font-inter font-bold font-700 text-[20px] leading-[30px] tracking-normal text-[#535862]">1-week free trial. Cancel anytime.</p>

                    <div className="mt-8 flex w-full gap-3 md:mt-12">
                        <AppStoreButton size="lg" />
                        <GooglePlayButton size="lg" />
                    </div>
                </div>

                <div className="relative min-h-90 md:min-h-100 md:w-full">
                    <svg className="absolute -bottom-24 left-1/2 -translate-x-1/2" width="532" height="416" viewBox="0 0 532 416" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M182.034 461.691C74.9901 428.768 1.32278 329.846 0.0121784 217.408C-1.15817 117.003 82.1936 43.2414 176.777 10.7273C260.07 -17.9056 346.327 12.9156 406.143 77.7959C484.913 163.236 571.343 274.645 512.702 375.097C449.003 484.212 302.448 498.727 182.034 461.691Z"
                            fill="currentColor"
                            className="text-bg-secondary"
                        />
                    </svg>

                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="absolute top-0 right-1/2 w-full max-w-71 translate-x-1/2 drop-shadow-iphone-mockup md:max-w-78.5"
                    />
                </div>
            </div>
        </section>
    );
};

const WordPageScreen = () => {
    // const location = useLocation();
    // const { normalized_ga, word_en, category } = location.state || {};
    const { type, normalized_ga } = useParams();
    const [category, setCategory] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [word_en, setWordEn] = useState<string>("");
    const [word_ga, setWordGa] = useState<string>("");
    console.log("normalized ga", normalized_ga);
    console.log("type=>", type);
    useEffect(() => {
        if (!normalized_ga) return;

        const fetchCategory = async () => {
            try {
                const response = await fetch(
                    `${API_BASE_URL}/words/${normalized_ga}/category`
                );

                if (!response.ok) {
                    throw new Error("Word not found");
                }

                const data = await response.json();
                setCategory(data.category);
                setWordEn(data.word_en);
                setWordGa(data.word_ga);
                setLoading(false);


            } catch (error) {
                console.error("Failed to fetch category:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategory();
    }, [normalized_ga]);

    if (loading) {
        return (
            <div className="bg-primary">
                <Header />
                <div className="animate-pulse">
                    <section className="w-full border-b border-[#E9EAEB]">
                        <div className="mx-auto max-w-container px-4 md:px-8 py-6">
                            <div className="h-8 bg-gray-200 rounded w-2/3" />
                        </div>
                    </section>

                    <section className="w-full">
                        <div className="mx-auto max-w-container px-4 md:px-8 py-6 grid grid-cols-1 lg:grid-cols-[2fr_6fr_4fr] gap-6">
                            <div className="space-y-3">
                                <div className="h-10 bg-gray-200 rounded" />
                                <div className="h-10 bg-gray-200 rounded" />
                                <div className="h-10 bg-gray-200 rounded" />
                            </div>

                            <div className="space-y-6">
                                <div className="h-6 bg-gray-200 rounded w-1/2" />
                                <div className="h-32 bg-gray-200 rounded" />
                                <div className="h-40 bg-gray-200 rounded" />
                            </div>

                            <div className="h-64 bg-gray-200 rounded" />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
    return (
        <div className="bg-primary">
            <Header />
            <BreadcrumbWithShare type={type || ""} category={category || ""} normalized_ga={normalized_ga} word_ga={word_ga} />
            <StudySection type={type || ""} normalized_ga={normalized_ga} word_en={word_en} category={category || ""} word_ga={word_ga} />
            <CTAIPhoneMockup01 />
        </div>
    );
};

export default WordPageScreen;