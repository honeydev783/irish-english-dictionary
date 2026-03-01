import type { FC, ReactNode, SVGProps } from "react";
import { useState } from "react";
import { Avatar } from "@/components/base/avatar/avatar";
import { ArrowRight, ChartBreakoutSquare, CheckCircle, MessageChatCircle, PlayCircle, ZapFast } from "@untitledui/icons";
import { BadgeGroup } from "@/components/base/badges/badge-groups";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";
import { AppStoreButton as AppStoreButtonOutline, GooglePlayButton as GooglePlayButtonOutline } from "@/components/base/buttons/app-store-buttons-outline";
import { Button } from "@/components/base/buttons/button";

import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { AngelList, Dribbble, Facebook, GitHub, Layers, LinkedIn, X } from "@/components/foundations/social-icons";
import { Header } from "@/components/marketing/header-navigation/header";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";
import { SectionDivider } from "@/components/shared-assets/section-divider";
import { cx } from "@/utils/cx";
import { motion } from "motion/react";

const BlobPattern = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="532" height="480" viewBox="0 0 532 480" fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M182.034 461.691C74.9901 428.768 1.32278 329.846 0.0121784 217.408C-1.15817 117.003 82.1936 43.2414 176.777 10.7273C260.07 -17.9056 346.327 12.9156 406.143 77.7959C484.913 163.236 571.343 274.645 512.702 375.097C449.003 484.212 302.448 498.727 182.034 461.691Z"
                className="fill-bg-secondary"
            />
        </svg>
    );
};

const HeroIPhoneMockup01 = () => {
    return (
        <div className="relative overflow-hidden bg-primary">
            {/* Background pattern */}
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-md-desktop.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 hidden max-w-none -translate-x-1/2 md:block dark:brightness-[0.2]"
            />
            <img
                alt="Grid of dots"
                aria-hidden="true"
                loading="lazy"
                src="https://www.untitledui.com/patterns/light/grid-md-mobile.svg"
                className="pointer-events-none absolute top-0 left-1/2 z-0 max-w-none -translate-x-1/2 md:hidden dark:brightness-[0.2]"
            />



            <section className="relative overflow-hidden pt-16 md:py-24">
                <div className="mx-auto flex max-w-container flex-col gap-16 px-4 md:px-8 lg:flex-row lg:items-center lg:gap-16">
                    <div className="flex w-full max-w-3xl flex-1 flex-col items-start">
                        <a href="#" className="rounded-[10px] outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                            <BadgeGroup className="hidden md:flex" size="lg" addonText="Now Live" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Personalized coaching in-app
                            </BadgeGroup>
                            <BadgeGroup className="md:hidden" size="md" addonText="Now Live" iconTrailing={ArrowRight} theme="modern" color="brand">
                                Personalized coaching in-app
                            </BadgeGroup>
                        </a>

                        <h1 className="mt-4 text-display-md font-semibold text-primary md:text-display-lg lg:text-display-xl">
                            Learn Irish, by actually speaking.
                        </h1>
                        <p className="mt-6 text-lg text-balance font-semibold text-tertiary md:mt-6 md:text-xl">
                            Meet Rua, your new Irish language teacher.
                        </p>
                        <p className="mt-2 text-lg text-balance text-tertiary md:mt-2 md:text-xl">
                            Chat about real-life topics, learn phrases with flashcards, and track your progress as your Gaeilge grows.
                        </p>
                        <div className="mt-8 flex gap-3 md:mt-12">
                            <AppStoreButton size="lg" />
                            <GooglePlayButton size="lg" />
                        </div>
                    </div>

                    <div className="relative flex h-90 w-full items-start justify-center lg:h-160 lg:max-w-lg lg:items-center">
                        <div className="absolute top-24 w-133 lg:top-auto">
                            <BlobPattern />
                        </div>

                        <IPhoneMockup
                            image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                            imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                            className="h-[579px] w-71 drop-shadow-iphone-mockup md:h-auto md:w-[313px]"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

interface TextCentered {
    title: string;
    subtitle: string;
    footer?: ReactNode;
}

interface FeatureTextIcon extends TextCentered {
    icon: FC<{ className?: string }>;
}

const FeatureTextFeaturedIconTopLeft = ({ icon, title, subtitle, footer }: FeatureTextIcon) => (
    <div className="flex max-w-sm flex-col gap-4">
        <FeaturedIcon icon={icon} size="lg" color="gray" theme="modern" className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color="gray" theme="modern" className="inline-flex md:hidden" />

        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);


const CTAIPhoneMockup04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24 font-inter">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="relative grid grid-cols-1 overflow-hidden rounded-2xl bg-brand-section md:rounded-3xl md:shadow-xl lg:min-h-120 lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-1 flex-col px-6 pt-10 pb-12 sm:p-12 lg:p-16">
                        <h4 className="text-display-sm font-semibold text-white xl:text-display-md">Designed by Irish teachers.</h4>
                        <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 lg:text-xl">HeyRua isn’t random exercises.</p>
                        <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 lg:text-xl">It’s built by experienced Irish teachers who understand real-world mistakes and how confidence is built step by step.</p>
                        <div className="mt-8 flex w-full gap-3 md:mt-12">
                            <AppStoreButtonOutline size="lg" className="dark-mode" />
                            <GooglePlayButtonOutline size="lg" className="dark-mode" />
                        </div>
                    </div>

                    <IPhoneMockup
                        image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                        imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                        className="top-10 right-16 max-h-70 w-full max-w-67 justify-self-center drop-shadow-iphone-mockup lg:absolute lg:max-h-none lg:max-w-78.5"
                    />

                    {/*  Notifications List */}
                    <ul className="absolute bottom-10 left-1/2 hidden -translate-x-2 flex-col gap-3 lg:flex" aria-hidden="true">
                        <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 backdrop-blur-lg">
                            <img
                                alt="Olivia Rhye"
                                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                                className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                            />
                            <div>
                                <p className="text-sm text-tertiary">
                                    <span className="font-medium text-brand-secondary">Olivia Rhye</span> followed you!
                                </p>
                                <p className="text-sm text-tertiary">@oliviarhye</p>
                            </div>
                        </li>
                        <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 backdrop-blur-lg">
                            <img
                                alt="Candice Wu"
                                src="https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80"
                                className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                            />
                            <div>
                                <p className="text-sm text-tertiary">
                                    <span className="font-medium text-brand-secondary">Candice Wu</span> and 2 other gave you kudos on{" "}
                                    <span className="font-medium text-brand-secondary">Clubhouse 101</span> post
                                </p>
                            </div>
                        </li>
                        <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 opacity-75 backdrop-blur-lg">
                            <img
                                alt="Phoenix Baker"
                                src="https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80"
                                className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                            />
                            <div>
                                <p className="text-sm text-tertiary">
                                    <span className="font-medium text-brand-secondary">Phoenix Baker</span> joined your team{" "}
                                    <span className="font-medium text-brand-secondary">Melbourne Startups Growth</span>
                                </p>
                            </div>
                        </li>
                        <li className="flex w-full max-w-xs gap-3 rounded-lg bg-alpha-white/90 p-4 opacity-50 backdrop-blur-lg">
                            <img
                                alt="Lana Steiner"
                                src="https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80"
                                className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-avatar-contrast-border"
                            />
                            <div>
                                <p className="text-sm text-tertiary">
                                    <span className="font-medium text-brand-secondary">Lana Steiner</span> just launched{" "}
                                    <span className="font-medium text-brand-secondary">The 10k users challenge</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const plans = [
    {
        title: "Basic plan",
        subtitle: "$10/mth",
        description: "Billed annually.",
        callOut: "Most popular!",
        features: [
            "Access to all basic features",
            "Basic reporting and analytics",
            "Up to 10 individual users",
            "20 GB individual data",
            "Basic chat and email support",
        ],
        hasCallout: true,
    },
    {
        title: "Business plan",
        subtitle: "$20/mth",
        description: "Billed annually.",
        features: ["200+ integrations", "Advanced reporting", "Up to 20 individual users", "40 GB individual data", "Priority chat and email support"],
    },
];

const CheckItemText = (props: {
    size?: "sm" | "md" | "lg" | "xl";
    text?: string;
    color?: "primary" | "success";
    iconStyle?: "outlined" | "contained" | "filled";
    textClassName?: string;
}) => {
    const { text, color, size, iconStyle = "contained" } = props;

    return (
        <li className="flex gap-3">
            {iconStyle === "contained" && (
                <div
                    className={cx(
                        "flex shrink-0 items-center justify-center rounded-full",
                        color === "success" ? "bg-success-secondary text-featured-icon-light-fg-success" : "bg-brand-primary text-featured-icon-light-fg-brand",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                >
                    <svg
                        width={size === "lg" ? 16 : size === "md" ? 15 : 13}
                        height={size === "lg" ? 14 : size === "md" ? 13 : 11}
                        viewBox="0 0 13 11"
                        fill="none"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            )}

            {iconStyle === "filled" && (
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-solid text-white">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1.5 4L4.5 7L10.5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            )}

            {iconStyle === "outlined" && (
                <CheckCircle
                    className={cx(
                        "shrink-0",
                        color === "success" ? "text-[#FF8D28]" : "text-[#FF8D28]",
                        size === "lg" ? "size-7 md:h-8 md:w-8" : size === "md" ? "size-7" : "size-6",
                    )}
                />
            )}

            <span
                className={cx(
                    "text-tertiary",
                    size === "lg" ? "pt-0.5 text-lg md:pt-0" : size === "md" ? "pt-0.5 text-md md:pt-0 md:text-lg" : "text-md",
                    iconStyle === "filled" && "text-brand-secondary",
                    props.textClassName,
                )}
            >
                {text}
            </span>
        </li>
    );
};

const PricingTierCardCallout = (props: {
    title: string;
    subtitle: string;
    description?: string;
    features: string[];
    secondAction?: string;
    checkItemTextColor?: "primary" | "success";
    hasCallout?: boolean;
    className?: string;
}) => {
    return (
        <div className={cx("relative flex flex-col rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt", props.className)}>
            {props.hasCallout && (
                <div className="absolute -top-6 right-2 md:-right-16">
                    <div className="flex text-brand-secondary">
                        <svg width="60" height="46" viewBox="0 0 60 46" fill="none">
                            <path
                                d="M9.22056 42.4485C9.06321 43.2619 9.595 44.0488 10.4084 44.2061C11.2217 44.3635 12.0086 43.8317 12.166 43.0184L9.22056 42.4485ZM50.5841 3.7912C51.405 3.68023 51.9806 2.92474 51.8696 2.10378C51.7586 1.28282 51.0032 0.707267 50.1822 0.818242L50.5841 3.7912ZM4.78725 32.3308C4.36038 31.6208 3.43878 31.3913 2.7288 31.8182C2.01882 32.2451 1.78931 33.1667 2.21618 33.8766L4.78725 32.3308ZM8.9767 42.2098L7.69117 42.9828L7.69189 42.984L8.9767 42.2098ZM12.5932 43.2606L11.9803 41.8916L11.979 41.8921L12.5932 43.2606ZM23.5123 40.0155C24.2684 39.677 24.6069 38.7897 24.2684 38.0336C23.9299 37.2774 23.0425 36.9389 22.2864 37.2774L23.5123 40.0155ZM10.6933 42.7334C12.166 43.0184 12.1659 43.0187 12.1658 43.019C12.1658 43.0189 12.1658 43.0192 12.1658 43.0192C12.1658 43.0192 12.1658 43.0189 12.166 43.0184C12.1662 43.0173 12.1666 43.0152 12.1672 43.012C12.1684 43.0058 12.1705 42.9953 12.1735 42.9808C12.1794 42.9517 12.1887 42.9064 12.2016 42.8456C12.2274 42.7239 12.2676 42.5403 12.3233 42.3008C12.4349 41.8216 12.6088 41.1193 12.8551 40.2421C13.3481 38.4863 14.1291 36.0371 15.2773 33.2782C17.5833 27.7375 21.3236 21.0615 27.0838 16.2002L25.1489 13.9076C18.8763 19.2013 14.905 26.3651 12.5076 32.1255C11.3042 35.0171 10.4856 37.5837 9.96684 39.4311C9.7073 40.3554 9.52235 41.1015 9.40152 41.6204C9.34109 41.8799 9.29667 42.0827 9.26695 42.2227C9.25209 42.2927 9.24091 42.3471 9.23323 42.385C9.22939 42.4039 9.22643 42.4187 9.22432 42.4294C9.22327 42.4347 9.22243 42.4389 9.22181 42.4421C9.22149 42.4437 9.22123 42.4451 9.22103 42.4461C9.22092 42.4467 9.22081 42.4473 9.22075 42.4475C9.22065 42.4481 9.22056 42.4485 10.6933 42.7334ZM27.0838 16.2002C38.8964 6.23107 48.2848 4.10201 50.5841 3.7912L50.1822 0.818242C47.3237 1.20465 37.402 3.56662 25.1489 13.9076L27.0838 16.2002ZM2.21618 33.8766L7.69117 42.9828L10.2622 41.4369L4.78725 32.3308L2.21618 33.8766ZM7.69189 42.984C8.83415 44.8798 11.2204 45.5209 13.2074 44.6291L11.979 41.8921C11.2779 42.2068 10.5661 41.9412 10.2615 41.4357L7.69189 42.984ZM13.2061 44.6297L23.5123 40.0155L22.2864 37.2774L11.9803 41.8916L13.2061 44.6297Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span className="-mt-2 text-sm font-semibold">Most popular!</span>
                    </div>
                </div>
            )}

            <div className="flex flex-col items-center px-6 pt-10 text-center md:px-8">
                <h4 className="text-display-md font-semibold text-primary md:text-display-lg">{props.subtitle}</h4>
                <p className="mt-4 text-xl font-semibold text-primary md:text-xl">{props.title}</p>
                <p className="mt-1 text-md text-tertiary">{props.description}</p>
            </div>

            <ul className="flex flex-col gap-4 px-6 pt-8 pb-8 md:p-8 md:pb-10">
                {props.features.map((feat) => (
                    <CheckItemText key={feat} text={feat} color={props.checkItemTextColor} />
                ))}
            </ul>

            <div className="mt-auto flex flex-col gap-3 px-6 pb-8 md:px-8">
                <Button size="xl">Get started</Button>
                {props.secondAction && (
                    <Button color="secondary" size="xl">
                        {props.secondAction}
                    </Button>
                )}
            </div>
        </div>
    );
};


const footerSocials = [
    { label: "X (formerly Twitter)", icon: X, href: "https://x.com/" },
    { label: "LinkedIn", icon: LinkedIn, href: "https://www.linkedin.com/" },
    { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
    { label: "GitHub", icon: GitHub, href: "https://github.com/" },
    { label: "AngelList", icon: AngelList, href: "https://angel.co/" },
    { label: "Dribbble", icon: Dribbble, href: "https://dribbble.com/" },
    { label: "Layers", icon: Layers, href: "https://layers.com/" },
];

export const FooterLarge11Brand = () => {
    return (
        <footer className="bg-white py-12 md:pt-16 text-black">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col items-center border-b border-gray-600 pb-8 text-center md:pb-16">
                    <h4 className="text-display-xs font-semibold  md:text-display-sm">No long-term contracts. No catches. Simple.</h4>
                    <p className="mt-2 text-md  md:mt-4 md:text-xl">Start your 30-day free trial. Cancel anytime.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch md:mt-12 md:flex-row md:self-center">
                        <Button color="primary" size="xl" iconLeading={PlayCircle} className="shadow-xs! ring-0 bg-black text-white hover:bg-gray-800">
                            View demo
                        </Button>
                        <Button size="xl" className="bg-[#FF8D28]  hover:bg-[#E6761F] text-white  hover:text-white">Get started</Button>
                    </div>
                </div>

                <div className="mt-12 flex flex-col justify-between gap-x-8 gap-y-12 md:mt-16 lg:flex-row">
                    <div className="flex flex-col gap-8 md:items-start">
                        <div className="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
                            <UntitledLogo className="dark-mode" />
                            <p className="text-md text-black">Design amazing digital experiences that create more happy in the world.</p>
                        </div>
                        <nav>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-[repeat(6,max-content)]">
                                {[
                                    { label: "Overview", href: "#" },
                                    { label: "Features", href: "#" },
                                    { label: "Pricing", href: "#" },
                                    { label: "Careers", href: "#" },
                                    { label: "Help", href: "#" },
                                    { label: "Privacy", href: "#" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <Button
                                            className="text-black hover:text-[#7F56D9]"
                                            color="link-color"
                                            size="lg"
                                            href={item.href}
                                        >
                                            {item.label}
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div>
                        <h4 className="text-md font-medium text-black">Get the app</h4>
                        <div className="mt-4 flex w-max flex-row gap-4 lg:flex-col">
                            <AppStoreButtonOutline href="#" className="dark-mode w-[135px] bg-black hover:bg-gray-800" />
                            <GooglePlayButtonOutline href="#" className="dark-mode w-[135px] bg-black hover:bg-gray-800" />
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col-reverse justify-between gap-6 border-t border-gray-600 pt-8 md:mt-16 md:flex-row">
                    <p className="text-md text-black">© 2077 Untitled UI. All rights reserved.</p>
                    <ul className="flex gap-6">
                        {footerSocials.map(({ label, icon: Icon, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex rounded-xs text-black outline-focus-ring transition duration-100 ease-linear hover:text-fg-quaternary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    <Icon size={24} aria-label={label} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

interface FeatureTabProps {
    title: string;
    subtitle: string;
    footer?: ReactNode;
    isCurrent?: boolean;
}

const FeatureTabHorizontal = ({ title, subtitle, footer, isCurrent }: FeatureTabProps) => (
    <div
        className={cx(
            "relative flex cursor-pointer flex-col items-start gap-4 border-l-4 border-tertiary py-4 pl-5 transition duration-100 ease-linear hover:border-brand",
            isCurrent && "border-brand",
        )}
    >
        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);

const FeaturesAlternatingLayout03 = () => {
    return (
        <section className="flex flex-col gap-12 overflow-hidden bg-primary pb-16 sm:gap-16 md:gap-20 md:pb-24 lg:gap-24 pt-8 mt-8">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-[#FF8D28] md:text-md">You don’t learn a language by playing memory games</span>
                    <h4 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">You learn a language by speaking</h4>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        That’s why everything inside HeyRua is designed around conversation, confidence, and actually speaking.
                    </p>

                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Because Gaeilge isn’t meant to stay in a book.
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24">
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={ChartBreakoutSquare} className="text-[#FF8D28]" color="brand" size="lg" theme="light" />

                        <h4 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Learn by chatting</h4>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            The fastest way to improve your Irish? Use it.
                        </p>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            With HeyRua, you learn through conversation on everyday topics, the kind you’d actually have in real life.
                        </p>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            No pressure. No embarrassment. Just steady progress.
                        </p>

                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4 ">
                            {[
                                "Practice everyday Irish",
                                "Get clear corrections that make sense",
                                "Prepare for exams or just chat for fun",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative -ml-4 w-screen flex-1 bg-tertiary px-4 py-6 md:ml-0 md:min-h-128 md:w-full md:overflow-hidden md:p-0 lg:overflow-visible">
                        <div className="top-0 left-0 bg-tertiary md:absolute md:h-full md:w-screen lg:overflow-hidden">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="top-12 left-12 w-full rounded object-contain object-left-top ring-4 ring-screen-mockup-border md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="top-12 left-12 w-full rounded object-contain object-left-top ring-4 ring-screen-mockup-border not-dark:hidden md:absolute md:h-[120%] md:w-auto md:max-w-5xl md:rounded-[10px] lg:max-w-3xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={ZapFast} className="text-[#FF8D28]" color="brand" size="lg" theme="light" />

                        <h4 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Flashcards for everyday phrases</h4>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Real-life example sentences",
                                "Audio pronunciation",
                                "Irish and English translations",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative -ml-4 h-90 w-screen overflow-hidden bg-tertiary px-4 pt-6 md:ml-0 md:min-h-128 md:w-full md:flex-1 md:overflow-hidden md:p-0 md:px-12 lg:overflow-visible">
                        <div className="top-0 right-0 h-full bg-tertiary md:absolute md:w-screen lg:overflow-hidden">

                            <IPhoneMockup
                                image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                                imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                                className="absolute top-28 right-1/2 hidden w-full translate-x-[30%] md:block md:w-78.5 md:max-w-none lg:right-62 lg:translate-x-0"
                            />
                            <IPhoneMockup
                                image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                                imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                                className="top-12 right-1/2 mx-auto w-71 drop-shadow-iphone-mockup md:absolute md:mx-0 md:w-78.5 md:max-w-none md:translate-x-[70%] lg:right-12 lg:translate-x-0"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={ChartBreakoutSquare} color="brand" size="lg" theme="light" />

                        <h4 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Track your progress </h4>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Confidence builds when you can see improvement.                        </p>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Track your streaks, vocabulary growth, and conversation time as you build real Gaeilge week by week.                      </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Daily streak tracking",
                                "Earn badges",
                                "Follow a curriculum",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative -ml-4 h-90 w-screen overflow-hidden bg-tertiary px-4 pt-6 md:ml-0 md:min-h-128 md:w-full md:flex-1 md:overflow-hidden md:p-0 md:px-12 lg:overflow-visible">
                        <div className="top-0 left-0 bg-tertiary md:absolute md:h-full md:w-screen lg:overflow-hidden">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="absolute top-12 left-50 w-full rounded object-contain object-left-top ring-4 ring-screen-mockup-border max-md:hidden md:h-[120%] md:w-auto md:max-w-3xl md:rounded-[10px] dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="absolute top-12 left-50 w-full rounded object-contain object-left-top ring-4 ring-screen-mockup-border not-dark:hidden max-md:hidden md:h-[120%] md:w-auto md:max-w-3xl md:rounded-[10px]"
                            />



                            <IPhoneMockup
                                image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                                imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                                className="top-28 left-12 mx-auto w-71 object-contain shadow-2xl drop-shadow-iphone-mockup md:absolute md:mx-0 md:w-78.5 md:max-w-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center lg:order-last">
                        <FeaturedIcon icon={ZapFast} color="brand" size="lg" theme="light" />

                        <h4 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Earn your Gaeilge badges</h4>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Consistency deserves recognition.                        </p>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Earn badges for showing up, completing conversations, mastering vocabulary, and hitting new milestones.                        </p>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Learning should feel rewarding.                       </p>

                    </div>

                    <div className="relative -ml-4 h-90 w-screen overflow-hidden bg-tertiary px-4 pt-6 md:ml-0 md:min-h-128 md:w-full md:flex-1 md:overflow-hidden md:p-0 md:px-12 lg:overflow-visible">
                        <div className="top-0 right-0 h-full bg-tertiary md:absolute md:w-screen lg:overflow-hidden">

                            <IPhoneMockup
                                image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                                imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                                className="absolute top-28 right-1/2 hidden w-full translate-x-[30%] md:block md:w-78.5 md:max-w-none lg:right-62 lg:translate-x-0"
                            />
                            <IPhoneMockup
                                image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                                imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                                className="top-12 right-1/2 mx-auto w-71 drop-shadow-iphone-mockup md:absolute md:mx-0 md:w-78.5 md:max-w-none md:translate-x-[70%] lg:right-12 lg:translate-x-0"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-24">
                    <div className="max-w-xl flex-1 self-center">
                        <FeaturedIcon icon={ChartBreakoutSquare} color="brand" size="lg" theme="light" />

                        <h4 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Learn With Friends (Leaderboards)</h4>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Irish thrives in community.                   </p>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Join leaderboards, compete with friends, and keep each other accountable as you climb the ranks.                   </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Weekly leaderboards",
                                "Monthly leaderboards",
                                "Friendly competition",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="outlined" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative -ml-4 h-90 w-screen overflow-hidden bg-tertiary px-4 pt-6 md:ml-0 md:min-h-128 md:w-full md:flex-1 md:overflow-hidden md:p-0 md:px-12 lg:overflow-visible">
                        <div className="top-0 left-0 bg-tertiary md:absolute md:h-full md:w-screen lg:overflow-hidden">
                            {/* Light mode image (hidden in dark mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                                className="absolute top-12 left-50 w-full rounded object-contain object-left-top ring-4 ring-screen-mockup-border max-md:hidden md:h-[120%] md:w-auto md:max-w-3xl md:rounded-[10px] dark:hidden"
                            />
                            {/* Dark mode image (hidden in light mode) */}
                            <img
                                alt="Dashboard mockup showing application interface"
                                src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                                className="absolute top-12 left-50 w-full rounded object-contain object-left-top ring-4 ring-screen-mockup-border not-dark:hidden max-md:hidden md:h-[120%] md:w-auto md:max-w-3xl md:rounded-[10px]"
                            />


                            <IPhoneMockup
                                image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                                imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                                className="top-28 left-12 mx-auto w-71 object-contain shadow-2xl drop-shadow-iphone-mockup md:absolute md:mx-0 md:w-78.5 md:max-w-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeaturesTabsMockup09 = () => {
    const [currentTab, setCurrentTab] = useState(0);

    return (
        <section className="overflow-hidden bg-primary pt-16 lg:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="flex w-full flex-col lg:max-w-3xl">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Features</span>

                    <h4 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Overflowing with useful features</h4>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 lg:items-center">
                    <ul className="flex flex-col">
                        {[
                            {
                                title: "Share team inboxes",
                                subtitle: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
                            },
                            {
                                title: "Deliver instant answers",
                                subtitle: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
                            },
                            {
                                title: "Manage your team with reports",
                                subtitle:
                                    "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
                            },
                        ].map((item, index) => (
                            <li key={item.title} onClick={() => setCurrentTab(index)}>
                                <FeatureTabHorizontal
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    isCurrent={index === currentTab}
                                    footer={
                                        <Button color="link-color" size="lg" href="#" iconTrailing={ArrowRight}>
                                            Learn more
                                        </Button>
                                    }
                                />
                            </li>
                        ))}
                    </ul>

                    <div className="relative flex h-104 w-full justify-center md:h-120 lg:-ml-4 lg:h-140 lg:overflow-y-clip">
                        <IPhoneMockup
                            image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                            imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                            className="absolute top-16 left-1/2 hidden w-78.5 -translate-x-3/4 drop-shadow-iphone-mockup md:block lg:left-0 lg:translate-x-0"
                        />
                        <IPhoneMockup
                            image="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-light-01.webp"
                            imageDark="https://www.untitledui.com/marketing/screen-mockups/dashboard-mobile-mockup-dark-01.webp"
                            className="h-[579px] w-71 drop-shadow-iphone-mockup md:absolute md:top-0 md:right-1/2 md:h-160 md:w-78.5 md:translate-x-2/3 lg:right-0 lg:translate-x-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeaturesLargeScreenMockup02 = () => {
    return (
        <section className="bg-primary pb-16 md:pb-0">
            <div className="bg-secondary pt-16 pb-28 md:pt-24 md:pb-40">
                <div className="mx-auto w-full max-w-container px-4 md:px-8">
                    <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                        <span className="text-sm font-semibold text-brand-secondary md:text-md">Features</span>

                        <h4 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">Cutting-edge features for advanced analytics</h4>
                        <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000
                            startups.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto -mt-17 w-full max-w-container px-4 pt-1 md:-mt-26 md:overflow-hidden md:px-8 md:pt-2">
                <div className="flex flex-col md:items-start">
                    <div className="flex h-full w-full items-center justify-center md:max-h-105 md:w-full md:items-start lg:max-h-140">
                        {/* Light mode image (hidden in dark mode) */}
                        <img
                            alt="Dashboard mockup showing application interface"
                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-light-01.webp"
                            className="size-full rounded object-cover ring-4 ring-screen-mockup-border md:rounded-xl md:ring-8 dark:hidden"
                        />
                        {/* Dark mode image (hidden in light mode) */}
                        <img
                            alt="Dashboard mockup showing application interface"
                            src="https://www.untitledui.com/marketing/screen-mockups/dashboard-desktop-mockup-dark-01.webp"
                            className="size-full rounded object-cover ring-4 ring-screen-mockup-border not-dark:hidden md:rounded-xl md:ring-8"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


const TestimonialSimpleCentered02 = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <figure className="flex w-full shrink-0 snap-start flex-col gap-8 text-center">

                    <blockquote className="text-display-sm font-medium text-primary md:text-display-lg">
                        “This feels completely different to school Irish. It actually makes sense.”
                    </blockquote>
                    <figcaption className="flex justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <Avatar src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80" alt="Amelie Laurent" size="2xl" />
                            <div className="flex flex-col gap-1">
                                <p className="text-lg font-semibold text-primary">Amélie Laurent</p>
                                <cite className="text-md text-tertiary not-italic">Finance Manager, Sisyphus</cite>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};


const faqsExtended = [
    { question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "Can I change my plan later?", answer: "" },
    { question: "What is your cancellation policy?", answer: "" },
    { question: "Can other info be added to an invoice?", answer: "" },
    { question: "How does billing work?", answer: "" },
    { question: "How do I change my account email?", answer: "" },
];

const FAQAccordion01 = () => {
    const [openQuestions, setOpenQuestions] = useState(new Set([0]));

    const handleToggle = (index: number) => {
        openQuestions.has(index) ? openQuestions.delete(index) : openQuestions.add(index);
        setOpenQuestions(new Set(openQuestions));
    };

    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h4 className="text-display-sm font-semibold text-primary md:text-display-md">Frequently asked questions</h4>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Everything you need to know about the product and billing.</p>
                </div>

                <div className="mx-auto mt-12 max-w-3xl md:mt-16">
                    <div className="flex flex-col gap-8">
                        {faqsExtended.map((faq, index) => (
                            <div key={faq.question} className="not-first:-mt-px not-first:border-t not-first:border-secondary not-first:pt-6">
                                <h3>
                                    <button
                                        onClick={() => handleToggle(index)}
                                        className="flex w-full cursor-pointer items-start justify-between gap-2 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6"
                                    >
                                        <span className="text-lg font-medium text-primary">{faq.question}</span>

                                        <span aria-hidden="true" className="mt-0.5 flex size-6 items-center text-fg-quaternary">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <line
                                                    className={cx(
                                                        "origin-center rotate-0 transition duration-150 ease-out",
                                                        openQuestions.has(index) && "-rotate-90",
                                                    )}
                                                    x1="12"
                                                    y1="8"
                                                    x2="12"
                                                    y2="16"
                                                ></line>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                            </svg>
                                        </span>
                                    </button>
                                </h3>

                                <motion.div
                                    className="overflow-hidden"
                                    initial={false}
                                    animate={{ height: openQuestions.has(index) ? "auto" : 0, opacity: openQuestions.has(index) ? 1 : 0 }}
                                    transition={{ type: "spring", damping: 24, stiffness: 240, bounce: 0.4 }}
                                >
                                    <div className="pt-2 pr-8 md:pr-12">
                                        <p className="text-md text-tertiary">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

const CTAIPhoneMockup01 = () => {
    return (
        <section className="overflow-hidden bg-primary md:pb-24">
            <div className="relative mx-auto grid w-full max-w-container grid-cols-1 gap-16 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="z-20 flex max-w-3xl flex-col items-start">
                    <h4 className="text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg">
                        Start Your 7-Day Free Trial
                    </h4>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">Built by Irish teachers. Designed for real progress.</p>
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

const CTACardHorizontal = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col justify-between gap-x-8 gap-y-8 rounded-2xl bg-secondary px-6 py-10 lg:flex-row lg:p-16">
                    <div className="flex max-w-3xl flex-1 flex-col">
                        <h4 className="text-display-sm font-semibold text-primary">
                            <span className="hidden md:inline">Start your 7-day free trial</span>
                            <span className="md:hidden">Start your free trial</span>
                        </h4>
                        <p className="mt-4 text-lg text-tertiary lg:text-xl">Join the movement building confidence in Gaeilge — one conversation at a time.</p>
                    </div>
                    <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">

                        <Button size="xl" className="bg-[#FF8D28] hover:bg-[#E6761F]"
                        >Get started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HomeScreen = () => {
    return (
        <div className="bg-primary">
            <Header />
            <HeroIPhoneMockup01 />
            <section id="how-it-works">
                <FeaturesAlternatingLayout03 />
            </section>

            <CTAIPhoneMockup04 />

            {/* <FeaturesTabsMockup09 /> */}

            <FeaturesLargeScreenMockup02 />

            <TestimonialSimpleCentered02 />

            <FAQAccordion01 />

            <CTACardHorizontal />

            <CTAIPhoneMockup01 />

            <SectionDivider />

            <FooterLarge11Brand />
        </div>
    );
};

export default HomeScreen;
