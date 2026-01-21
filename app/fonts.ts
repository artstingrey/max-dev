import localFont from "next/font/local";

export const tiktokSans = localFont({
    src: [
        {
            path: "./../public/fonts/TikTok_Sans/static/TikTokSans_24pt-Regular.ttf",
            weight: "400",
            style: "normal"
        },
        {
            path: "./../public/fonts/TikTok_Sans/static/TikTokSans_24pt-Medium.ttf",
            weight: "500",
            style: "normal"
        },
        {
            path: "./../public/fonts/TikTok_Sans/static/TikTokSans_24pt-SemiBold.ttf",
            weight: "600",
            style: "normal"
        },
        {
            path: "./../public/fonts/TikTok_Sans/static/TikTokSans_24pt-Bold.ttf",
            weight: "700",
            style: "normal"
        },
    ],
    variable: "--font-tiktok-sans"
});

export const roobert = localFont({
    src: [
        {
            path: "./../public/fonts/roobert-font-family/RoobertTRIAL-Regular-BF67243fd53fdf2.otf",
            weight: "400",
            style: "normal"
        }
    ],
    variable: "--roobert"
});