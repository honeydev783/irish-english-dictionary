import type { FC, ReactNode } from "react";
import { ArrowRight, ChartBreakoutSquare, CheckCircle, Command, MessageChatCircle, MessageHeartCircle, MessageSmileCircle, Zap, ZapFast } from "@untitledui/icons";
import { Badge } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Form } from "@/components/base/form/form";
import { Input } from "@/components/base/input/input";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { UntitledLogo } from "@/components/foundations/logo/untitledui-logo";
import { Header } from "@/components/marketing/header-navigation/header";
import { cx } from "@/utils/cx";
import { useState } from "react";
import { AppStoreButton as AppStoreButtonOutline, GooglePlayButton as GooglePlayButtonOutline } from "@/components/base/buttons/app-store-buttons-outline";
import { IPhoneMockup } from "@/components/shared-assets/iphone-mockup";
import { FooterLarge11Brand } from "./home";


const HeaderCenteredButtons = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">About us</span>
                    <h1 className="mt-3 text-display-md font-semibold text-primary md:text-display-lg">Making data accessible for all</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-6 md:text-xl">We're a dedicated team, for your wildest data dreams.</p>
                    <div className="mt-8 flex flex-col-reverse gap-3 self-stretch sm:mt-12 sm:flex-row sm:self-center">
                        <Button color="secondary" size="xl">
                            Chat to sales
                        </Button>
                        <Button size="xl">Get started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

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
                        color === "success" ? "bg-[#FF8D28]" : "bg-[#FF8D28]",
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

const FeaturesAlternatingLayout04 = () => {
    return (
        <section className="flex flex-col gap-12 bg-primary py-16 sm:gap-16 md:gap-20 md:py-24 lg:gap-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h4 className="text-display-sm font-semibold text-primary md:text-display-md">We're a mission driven company</h4>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-container flex-col gap-12 px-4 sm:gap-16 md:gap-20 md:px-8 lg:gap-24 lg:px-0">
                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-0">
                    <div className="flex-1 self-center lg:py-24 lg:pr-24 lg:pl-12">
                        <FeaturedIcon icon={MessageChatCircle} color="brand" size="lg" theme="light" />

                        <h4 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Share team inboxes</h4>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Leverage automation to move fast",
                                "Always give customers a human to chat to",
                                "Automate customer support and close leads faster",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="contained" color="primary" text={feat}  />
                            ))}
                        </ul>
                    </div>

                    <div className="relative min-h-60 w-full flex-1 md:min-h-140">
                        <img
                            alt="AI Woman 01"
                            src="https://www.untitledui.com/marketing/ai-woman-01.webp"
                            className="absolute inset-0 size-full object-cover lg:right-auto lg:w-[50vw] lg:max-w-[50vw]"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-0">
                    <div className="flex-1 self-center lg:order-last lg:py-24 lg:pr-8 lg:pl-24">
                        <FeaturedIcon icon={ZapFast} color="brand" size="lg" theme="light" />

                        <h4 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Deliver instant answers</h4>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Keep your customers in the loop with live chat",
                                "Embed help articles right on your website",
                                "Customers never have to leave the page to find an answer",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="contained" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative min-h-60 w-full flex-1 md:min-h-140">
                        <img
                            alt="AI Woman 02"
                            src="https://www.untitledui.com/marketing/ai-woman-02.webp"
                            className="absolute inset-0 size-full object-cover lg:left-auto lg:w-[50vw] lg:max-w-[50vw]"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-10 md:gap-20 lg:grid-cols-2 lg:gap-0">
                    <div className="flex-1 self-center lg:py-24 lg:pr-24 lg:pl-12">
                        <FeaturedIcon icon={ChartBreakoutSquare} color="brand" size="lg" theme="light" />

                        <h4 className="mt-5 text-display-xs font-semibold text-primary md:text-display-sm">Manage your team with reports</h4>
                        <p className="mt-2 text-md text-tertiary md:mt-4 md:text-lg">
                            Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
                        </p>
                        <ul className="mt-8 flex flex-col gap-4 pl-2 md:gap-5 md:pl-4">
                            {[
                                "Filter, export, and drilldown on the data quickly",
                                "Save, schedule, and automate reports to your inbox",
                                "Connect the tools you already use with 100+ integrations",
                            ].map((feat) => (
                                <CheckItemText key={feat} size="md" iconStyle="contained" color="primary" text={feat} />
                            ))}
                        </ul>
                    </div>

                    <div className="relative min-h-60 w-full flex-1 md:min-h-140">
                        <img
                            alt="AI Woman 03"
                            src="https://www.untitledui.com/marketing/ai-woman-03.webp"
                            className="absolute inset-0 size-full object-cover lg:right-auto lg:w-[50vw] lg:max-w-[50vw]"
                        />
                    </div>
                </div>
            </div>
        </section>
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

const FeatureTextFeaturedIconTopCentered = ({
    color = "gray",
    theme = "modern",
    icon,
    title,
    subtitle,
    footer,
}: FeatureTextIcon & {
    color?: "brand" | "gray" | "success" | "warning" | "error";
    theme?: "light" | "gradient" | "dark" | "outline" | "modern";
}) => (
    <div className="flex max-w-sm flex-col items-center gap-4 text-center">
        <FeaturedIcon icon={icon} size="lg" color={color} theme={theme} className="hidden md:inline-flex" />
        <FeaturedIcon icon={icon} size="md" color={color} theme={theme} className="inline-flex md:hidden" />

        <div>
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="mt-1 text-md text-tertiary">{subtitle}</p>
        </div>

        {footer}
    </div>
);

const features = [
    {
        title: "Share team inboxes",
        subtitle: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
        icon: MessageChatCircle,
    },
    {
        title: "Deliver instant answers",
        subtitle: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
        icon: Zap,
    },
    {
        title: "Manage your team with reports",
        subtitle: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
        icon: ChartBreakoutSquare,
    },
    {
        title: "Connect with customers",
        subtitle: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
        icon: MessageSmileCircle,
    },
    {
        title: "Connect the tools you already use",
        subtitle: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
        icon: Command,
    },
    {
        title: "Our people make the difference",
        subtitle: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
        icon: MessageHeartCircle,
    },
];

const FeaturesSimpleIcons02 = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto w-full max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Our values</span>
                    <h4 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">
                        What do we value? All sorts of things! But we particularly pride ourselves on:
                    </h4>
                </div>

                <div className="mt-12 md:mt-16">
                    <ul className="grid w-full grid-cols-1 justify-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                        {features.map((item) => (
                            <li key={item.title}>
                                <FeatureTextFeaturedIconTopCentered icon={item.icon} title={item.title} subtitle={item.subtitle} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

const TeamSectionImageCollage02 = () => {
    return (
        <section className="bg-primary py-16 lg:py-24">
            <div className="mx-auto grid max-w-container grid-cols-1 gap-16 overflow-hidden px-4 md:px-8 lg:grid-cols-2 lg:items-center">
                <div className="flex max-w-3xl flex-col items-start">
                    <span className="text-sm font-semibold text-brand-secondary md:text-md">Join our team</span>
                    <h4 className="mt-3 text-display-sm font-semibold text-primary md:text-display-md">We're just getting started</h4>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
                        Our philosophy is simple—hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
                    </p>

                    <div className="mt-8 flex w-full flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
                        <Button color="secondary" size="xl">
                            Read our principles
                        </Button>
                        <Button size="xl" className="bg-[#FF8D28] hover:bg-[#E6761F]">We're hiring!</Button>
                    </div>
                </div>

                <div className="grid h-122 w-[150%] grid-cols-[repeat(12,1fr)] grid-rows-[repeat(12,1fr)] gap-2 justify-self-center sm:h-124 sm:w-[120%] md:w-auto md:gap-4">
                    <img
                        src="https://www.untitledui.com/images/portraits/megan-sims"
                        className="size-full object-cover"
                        alt="Megan Sims"
                        style={{ gridArea: "7 / 5 / 13 / 9" }}
                    />
                    <img
                        src="https://www.untitledui.com/images/portraits/nic-davidson"
                        className="size-full object-cover"
                        alt="Nic Davidson"
                        style={{ gridArea: "1 / 7 / 7 / 11" }}
                    />
                    <img
                        src="https://www.untitledui.com/images/avatars/amelie-laurent?fm=webp&q=80"
                        className="size-full object-cover"
                        alt="Amelie Laurent"
                        style={{ gridArea: "3 / 3 / 7 / 7" }}
                    />
                    <img
                        src="https://www.untitledui.com/images/avatars/lily-rose-chedjou?fm=webp&q=80"
                        className="size-full object-cover"
                        alt="Lily-Rose Chedjou"
                        style={{ gridArea: "7 / 9 / 11 / 13" }}
                    />
                    <img
                        src="https://www.untitledui.com/images/avatars/levi-rocha?fm=webp&q=80"
                        className="size-full object-cover"
                        alt="Levi Rocha"
                        style={{ gridArea: "7 / 1 / 12 / 5" }}
                    />
                </div>
            </div>
        </section>
    );
};

const SimpleCentered = () => {
    return (
        <section className="bg-secondary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    <h1 className="text-display-sm font-semibold text-primary md:text-display-md">Sign up for our newsletter</h1>
                    <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">Be the first to know about releases and industry news and insights.</p>

                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const data = Object.fromEntries(new FormData(e.currentTarget));
                            console.log("Form data:", data);
                        }}
                        className="mt-8 grid grid-cols-1 items-start gap-4 self-stretch sm:grid-cols-[360px_max-content] sm:gap-0 sm:self-center"
                    >
                        <Input
                            isRequired
                            size="md"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            wrapperClassName="py-0.5 md:max-w-[345px]"
                            hint={
                                <span>
                                    We care about your data in our{" "}
                                    <a
                                        href="#"
                                        className="rounded-xs underline underline-offset-3 outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        privacy policy
                                    </a>
                                    .
                                </span>
                            }
                        />
                        <Button type="submit" size="xl">
                            Subscribe
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    );
};

const navList = [
    {
        label: "Product",
        items: [
            { label: "Overview", href: "#" },
            { label: "Features", href: "#" },
            {
                label: "Solutions",
                href: "#",
                badge: (
                    <Badge size="sm" type="modern" className="ml-1">
                        New
                    </Badge>
                ),
            },
            { label: "Tutorials", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Releases", href: "#" },
        ],
    },

    {
        label: "Resources",
        items: [
            { label: "Blog", href: "#" },
            { label: "Newsletter", href: "#" },
            { label: "Events", href: "#" },
            { label: "Help centre", href: "#" },
            { label: "Tutorials", href: "#" },
            { label: "Support", href: "#" },
        ],
    },
];

const FooterLarge04 = () => {
    return (
        <footer className="bg-primary py-12 md:pt-16">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-12 md:gap-16 xl:flex-row">
                    <div className="flex w-full flex-col gap-6 md:max-w-xs md:gap-8">
                        <UntitledLogo className="h-8 w-min shrink-0" />
                        <p className="text-md text-tertiary">Design amazing digital experiences that create more happy in the world.</p>
                    </div>
                    <nav className="flex flex-1 flex-col-reverse gap-12 md:flex-row md:gap-8 xl:justify-end">
                        <ul className="grid w-full grid-cols-2 gap-8 md:max-w-xs">
                            {navList.map((category) => (
                                <li key={category.label}>
                                    <h4 className="text-sm font-semibold text-primary">{category.label}</h4>
                                    <ul className="mt-4 flex flex-col gap-3">
                                        {category.items.map((item) => (
                                            <li key={item.label}>
                                                <Button color="link-color" size="lg" href={item.href} iconTrailing={item.badge} className="gap-1">
                                                    {item.label}
                                                </Button>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const data = Object.fromEntries(new FormData(e.currentTarget));
                                console.log("Form data:", data);
                            }}
                            className="flex w-full flex-col gap-4 md:max-w-90"
                        >
                            <label htmlFor="newsletters-email" className="text-sm font-semibold text-primary">
                                Stay up to date
                            </label>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Input
                                    isRequired
                                    id="newsletters-email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    size="md"
                                    wrapperClassName="flex-1"
                                />
                                <Button type="submit" size="lg">
                                    Subscribe
                                </Button>
                            </div>
                        </Form>
                    </nav>
                </div>
                <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-secondary pt-8 md:mt-16 md:flex-row md:gap-6">
                    <p className="text-md text-quaternary">© 2077 Untitled UI. All rights reserved.</p>

                    <ul className="flex gap-4">
                        {[
                            { label: "Terms", href: "#" },
                            { label: "Privacy", href: "#" },
                            { label: "Cookies", href: "#" },
                        ].map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    className="rounded-xs text-md text-quaternary outline-focus-ring transition duration-100 ease-linear hover:text-tertiary focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

const HeaderSpaceBetween = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="mb-3 text-sm font-semibold text-brand-secondary md:text-md">Nice to meet you</div>
                <div className="flex flex-col gap-x-16 lg:flex-row">
                    <h1 className="flex-1 text-display-md font-semibold text-primary md:text-display-lg">Our mission is to increase the GDP of your startup</h1>

                    <p className="w-ful mt-4 text-lg text-tertiary md:mt-6 md:text-xl lg:mt-3 lg:max-w-120">
                        Untitled is a technology company that builds infrastructure for your startup, so you don't have to. Businesses of every size—from new
                        startups to public companies—use our software to manage their businesses.
                    </p>
                </div>
            </div>
        </section>
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

const CTAIPhoneMockup04 = () => {
    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="relative grid grid-cols-1 overflow-hidden rounded-2xl bg-brand-section md:rounded-3xl md:shadow-xl lg:min-h-120 lg:grid-cols-2 lg:items-center">
                    <div className="flex flex-1 flex-col px-6 pt-10 pb-12 sm:p-12 lg:p-16">
                        <h4 className="text-display-sm font-semibold text-white xl:text-display-md">Start your free trial</h4>
                        <p className="mt-4 text-lg text-tertiary_on-brand md:mt-5 lg:text-xl">Personal performance tracking made easy.</p>
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

const CTACardHorizontal = () => {
    return (
        <section className="bg-primary pb-16 md:pb-24">
            <div className="mx-auto max-w-container px-4 md:px-8">
                <div className="flex flex-col gap-x-8 gap-y-8 rounded-2xl bg-secondary px-6 py-10 lg:flex-row lg:p-16">
                    <div className="flex max-w-3xl flex-1 flex-col">
                        <h4 className="text-display-sm font-semibold text-primary">
                            <span className="hidden md:inline">Start your 30-day free trial</span>
                            <span className="md:hidden">Start your free trial</span>
                        </h4>
                        <p className="mt-4 text-lg text-tertiary lg:text-xl">Join over 4,000+ startups already growing with Untitled.</p>
                    </div>
                    <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start">
                        <Button color="secondary" size="xl">
                            Learn more
                        </Button>
                        <Button size="xl" className="bg-[#FF8D28] hover:bg-[#E6761F]">Get started</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
 

const AboutScreen = () => {
    return (
        <div className="bg-primary">
            <Header />

            <HeaderSpaceBetween />

            <CTAIPhoneMockup04 />

            <FeaturesAlternatingLayout04 />

            <FeaturesTabsMockup09 />

            <FeaturesLargeScreenMockup02 />

            <TeamSectionImageCollage02 />

            <CTACardHorizontal />
            
            {/* <SimpleCentered /> */}

            {/* <FooterLarge04 /> */}
            <FooterLarge11Brand />
        </div>
    );
};

export default AboutScreen;
