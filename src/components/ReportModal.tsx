import { useState, useEffect } from "react";

interface Props {
    onClose: () => void;
    entry: {
        entry_id: number;
        entry_slug: string;
        headword: string;
        sense_id: number | null;
    };
}

export default function ReportModal({ onClose, entry }: Props) {
    const [issueType, setIssueType] = useState("");
    const [details, setDetails] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const hiddenFields = {
        entry_id: entry.entry_id,
        entry_slug: entry.entry_slug,
        headword: entry.headword,
        sense_id: entry.sense_id,
        page_url: window.location.href,
        selected_text: window.getSelection()?.toString() || "",
        user_id: null, // replace if logged in
        user_agent: navigator.userAgent,
        created_at: new Date().toISOString(),
    };

    const handleSubmit = () => {
        if (!issueType) {
            setError("Please select what’s wrong.");
            return;
        }

        if (details.trim().length < 10) {
            setError("Details must be at least 10 characters.");
            return;
        }

        setError("");

        const payload = {
            issueType,
            details,
            email,
            ...hiddenFields,
        };

        console.log(payload); // replace with API call

        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white w-[95%] sm:w-[480px] rounded-xl shadow-xl p-6 z-10 animate-in fade-in zoom-in-95">

                {/* Title */}
                <h2 className="text-lg font-semibold text-[#101828]">
                    Have you noticed an error?
                </h2>

                <p className="text-sm text-[#667085] mt-2">
                    If anything looks off (meaning, spelling, example, audio), tell us and we’ll fix it.
                </p>

                {/* Form */}
                <div className="mt-6 space-y-4">

                    {/* Issue Type */}
                    <div>
                        <label className="block text-sm font-medium text-[#344054] mb-1">
                            What’s wrong? *
                        </label>
                        <div className="relative">
                            <select
                                value={issueType}
                                onChange={(e) => setIssueType(e.target.value)}
                                className="w-full appearance-none border border-[#D0D5DD] rounded-md p-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055FF] cursor-pointer"
                            >
                                <option className="cursor-pointer">Meaning / translation</option>
                                <option className="cursor-pointer">Spelling / grammar</option>
                                <option className="cursor-pointer">Example sentence</option>
                                <option className="cursor-pointer">Pronunciation / audio</option>
                                <option className="cursor-pointer">Other</option>
                            </select>

                            <svg
                                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-3 w-3 text-[#667085]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Details */}
                    <div>
                        <label className="block text-sm font-medium text-[#344054] mb-1">
                            What should be corrected? *
                        </label>
                        <textarea
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            placeholder="Tell us what’s wrong and what it should be instead."
                            rows={4}
                            className="w-full border border-[#D0D5DD] rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055FF]"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-[#344054] mb-1">
                            Email (optional)
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-[#D0D5DD] rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055FF]"
                        />
                        <p className="text-xs text-[#667085] mt-1">
                            Only if you want a reply.
                        </p>
                    </div>

                    {error && (
                        <p className="text-sm text-red-500">{error}</p>
                    )}

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-sm rounded-md border border-[#D0D5DD] hover:bg-gray-50 transition cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 text-sm rounded-md bg-[#0055FF] text-white hover:bg-[#0047D4] transition cursor-pointer"
                        >
                            Send report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}