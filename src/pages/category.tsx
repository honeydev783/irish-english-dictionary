import React, { useState, useEffect } from "react";
import { HeaderNavigationSimpleDemo, CTAIPhoneMockup01 } from "./word";
import { Share07, HomeLine } from "@untitledui/icons";
import { HiLightBulb } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "@/components/marketing/header-navigation/header";
import { FooterLarge11Brand } from "./home";

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
                    <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[#717680]">

                        <span><HomeLine className="h-5 w-5 text-[#A4A7AE] cursor-pointer transition  hover:text-[#667085]" onClick={() => navigate('/')} /></span>
                        <span>&gt;</span>
                        <span>Nouns</span>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

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
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/categories`); // adjust base URL if needed
                const data = await response.json();

                // If API returns: ["time", "people", "animals"]
                setCategories(data.categories);
                console.log("categories===>", data.categories);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return (
            <section className="w-full bg-primary border-b border-[#E9EAEB]">
                <div className="mx-auto max-w-container px-4 md:px-8 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(12)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[#E9EAEB] rounded-[12px] p-4 animate-pulse"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-lg" />
                                    <div className="h-4 bg-gray-200 rounded w-24" />
                                </div>

                                <div className="h-3 bg-gray-200 rounded w-full mt-4" />
                                <div className="h-3 bg-gray-200 rounded w-2/3 mt-2" />

                                <div className="h-px bg-[#E9EAEB] my-4" />

                                <div className="flex justify-end">
                                    <div className="h-8 w-24 bg-gray-200 rounded-md" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <div>

            {/* Title */}
            <section className="w-full bg-primary border-b border-[#E9EAEB]">
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
            </section>

            {/* Content */}
            <section className="w-full bg-primary border-b border-[#E9EAEB]">
                <div className="mx-auto max-w-container px-4 md:px-8 py-8">

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {categories.map((category) => (
                            <div
                                key={category}
                                className="bg-white border border-[#E9EAEB] rounded-[12px] p-4 flex flex-col justify-between"
                            >
                                {/* Upper Part */}
                                <div>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="/images/polyMath.png"
                                            alt={category}
                                            className="w-12 h-12 object-cover rounded-lg"
                                        />
                                        <div>
                                            <h3 className="text-[16px] font-semibold text-[#181D27]">
                                                {category}
                                            </h3>

                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[14px] text-[#535862] mt-4">
                                            A list of nouns related to {category}.
                                        </p>
                                    </div>
                                    {/* Divider */}
                                    <div className="h-px bg-[#E9EAEB] my-4" />
                                </div>

                                {/* Lower Part */}
                                <div className="flex justify-end">
                                    <button onClick={() => navigate(`/list?category=${category}`)} className="px-4 py-2 text-sm font-medium bg-white text-[#414651] rounded-[8px] border-[1px] border-[#D5D7DA] transition cursor-pointer hover:bg-gray-100 hover:border-gray-300 hover:text-[#000000]">
                                        View words
                                    </button>
                                </div>
                            </div>
                        ))}

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
                <BreadcrumbWithShare />
                <CategorySection />
                <CTAIPhoneMockup01 />
                <FooterLarge11Brand />
            </div>
        </div>
    );
}

export default CategoryScreen;