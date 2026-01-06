import localFont from "next/font/local";

export const tiktokSans = localFont({
    src: [
        {
            path: "./../public/fonts/TikTok_Sans/static/TikTokSans_24pt_Condensed-Regular.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "./../public/fonts/TikTok_Sans/static/TikTokSans_24pt_Condensed-Medium.ttf",
            weight: "500",
            style: "normal"
        },
        {
            path: "./../public/fonts/TikTok_Sans/static/TikTokSans_24pt_Condensed-SemiBold.ttf",
            weight: "600",
            style: "normal"
        },
    ],
    variable: "--font-tiktok-sans"
});