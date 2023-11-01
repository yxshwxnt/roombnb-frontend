const apartments = [
    {
        id: 1,
        title: "Modern Downtown Apartment",
        rent: 2000,
        location: "Downtown, City Center",
        description:
            "Spacious and modern apartment with stunning city views. Close to all amenities.",
        images: [
            "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.webp?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8=",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fHww",
        ],
    },
    {
        id: 4,
        title: "Cozy Studio near Park",
        rent: 1200,
        location: "Parkside, Suburb",
        description:
            "Charming studio apartment with a lovely park view. Quiet and peaceful neighborhood.",
        images: [
            "https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.webp?b=1&s=170667a&w=0&k=20&c=9cnDfc9tNIAcgvuGHZkST7CP-dFaNXutX8OpzVO1jEA="
        ]
    },
    {
        id: 4,
        title: "Apartment in Navi Mumbain",
        rent: 1200,
        location: "Parkside, Suburb",
        description:
            "Charming studio apartment with a lovely park view. Quiet and peaceful neighborhood.",
        images: [
            "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.webp?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8=",
            "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.webp?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8=",
        ]

    },
    {
        id: 4,
        title: "Apartment in Juhu",
        rent: 1200,
        location: "Parkside, Suburb",
        description:
            "Charming studio apartment with a lovely park view. Quiet and peaceful neighborhood.",
        images: [
            "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.webp?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8=",
        ]
    },
];

export default function handler(req, res) {
    res.status(200).json(apartments);
}