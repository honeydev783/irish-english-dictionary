import React, { useState, useEffect } from "react";
import { HeaderNavigationSimpleDemo, CTAIPhoneMockup01 } from "./word";
import { Share07, ArrowNarrowUpRight } from "@untitledui/icons";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/marketing/header-navigation/header";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface BreadcrumbWithShareProps {
    category: string | null;
}
const BreadcrumbWithShare = ({ category }: BreadcrumbWithShareProps) => {
    const [url] = useState("heyrua.com/english-irish/teach");


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
        <section className="w-full bg-primary  border-secondary">
            <div className="mx-auto max-w-container px-4 md:px-8 py-4">

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    {/* Breadcrumbs */}
                    <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#717680]">
                        <span>Home</span>
                        <span>&gt;</span>
                        <span>Nouns</span>
                        <span>&gt;</span>
                        <span>{category}</span>
                        {/* <span>&gt;</span> */}
                        {/* <span className="rounded-md bg-[#FAFAFA] px-2 py-1 text-[#414651]">
                            Teach
                        </span> */}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

                        {/* Share */}
                        <button onClick={handleShare} className="flex items-center justify-center gap-2 rounded-md border border-[#D5D7DA] px-4 py-2 text-sm font-semibold  cursor-pointer">
                            <Share07 className="h-4 w-4 text-[#A4A7AE]" />
                            Share
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export interface WordItem {
    word_ga: string;
    word_en: string;
    normalized_ga: string;
}

const RelatedWordsTable = () => {
    const [words, setWords] = useState<WordItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
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

    if (loading) {
        return (
            <div className="w-full py-1">
                <div className="max-w-5xl">
                    <div className="overflow-x-auto rounded-[12px] shadow-lg border border-[#E9EAEB]">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-[#FAFAFA] hidden md:table-header-group">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#717680]">
                                        Irish
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#717680]">
                                        English
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-semibold text-[#717680]">
                                        Teams
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="animate-pulse">
                                {[...Array(16)].map((_, index) => (
                                    <tr key={index} className="bg-white">
                                        <td className="px-6 py-4">
                                            <div className="h-4 bg-gray-200 rounded w-24" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="h-4 bg-gray-200 rounded w-32" />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="h-4 bg-gray-200 rounded w-20" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    if (!words.length) {
        return (
            <div className="w-full py-4 text-center">
                <p>No words found for category: {category}</p>
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
                                    English
                                </th>
                                <th className="px-6 py-3">
                                    Teams
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 font-700 font-normal text-[16px] text-[#535862]">
                            {words.map((item, index) => (
                                <tr
                                    key={index}
                                    className="block md:table-row bg-white md:bg-transparent mb-4 md:mb-0 rounded-xl md:rounded-none shadow md:shadow-none p-4 md:p-0"
                                >
                                    {/* Name */}
                                    <td className="block md:table-cell px-6 py-4">
                                        <span className="font-semibold md:hidden">Irish: </span>
                                        <span className="font-bold">{item.word_ga}</span>
                                    </td>

                                    {/* Email */}
                                    <td className="block md:table-cell px-6 py-4">
                                        <span className="font-semibold md:hidden">English: </span>
                                        {item.word_en}
                                    </td>

                                    {/* Role */}
                                    <td className="block md:table-cell px-6 py-4">

                                        <a className="flex font-500 text-[#0055FF] text-[14px] items-center cursor-pointer" onClick={() => {
                                            navigate(
                                                `/nouns/${category}/${encodeURIComponent(item.word_ga)}-${encodeURIComponent(item.word_en)}`,
                                                {
                                                    state: { normalized_ga: item.word_ga, word_en: item.word_en, category: category },
                                                }
                                            );
                                        }}>Learn more <ArrowNarrowUpRight className="w-5 h-5 ml-2" /> </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

interface ListSectionProps {
    category: string | null;
}

const ListSection = ({ category }: ListSectionProps) => {
    return (
        <div className="mb-[40px]">

            {/* Title */}
            <section className="w-full bg-primary border-b border-[#E9EAEB]">
                <div className="mx-auto max-w-container px-4 md:px-8 py-6">
                    <h1 className="font-inter font-semibold text-2xl md:text-3xl lg:text-[36px] text-[#181D27] leading-snug">
                        <span className="text-[#45341A]">{category}</span>
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="w-full bg-primary">
                <div className="mx-auto max-w-container px-4 md:px-8 py-8 grid grid-cols-1 lg:grid-cols-[8fr_4fr] gap-8">
                    <div className="flex flex-col gap-5">
                        <h3 className="font-semibold text-[30px] text-[#181D27]">
                            Irish words related to {category}
                        </h3>

                        <RelatedWordsTable />
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
}

const WordListScreen = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    console.log("category===>", category);
    return (
        <div className="bg-primary">
            <Header />
            <BreadcrumbWithShare category={category} />
            <ListSection category={category} />
            <CTAIPhoneMockup01 />
        </div>
    );
}
export default WordListScreen;