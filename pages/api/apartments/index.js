const apartments = [
    {
        id: 1,
        title: "Modern Downtown Apartment",
        rent: 2000,
        location: "Tripathi Heights, Plot No 68, Survey No 302/3A/1, Sai Samruddhi, Dy Patil University Rd,, Lohegaon Dhanori, Pune",
        description:
            "Spacious and modern apartment with stunning city views. Close to all amenities.",
        features: [
            "2 Double Occupancy",
            "Attached Washroom",
            "Hot and Delicious Meals",
            "High-Speed WIFI",
            "Professional Housekeeping"
        ],
        images: [
            "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.webp?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8=",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fHww",
        ],
        latitude: 21.171454,
        longitude: 79.095649,
        sellerName: "John Doe",
        sellerEmail: "john@example.com",
        sellerPhoto: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
    },
    {
        id: 4,
        title: "Cozy Studio near Park",
        rent: 1200,
        location: "Tripathi Heights, Plot No 68, Survey No 302/3A/1, Sai Samruddhi, Dy Patil University Rd,, Lohegaon Dhanori, Pune",
        description:
            "Charming studio apartment with a lovely park view. Quiet and peaceful neighborhood.",
        images: [
            "https://res.cloudinary.com/apartmentlist/image/upload/f_auto,q_auto,t_web-base/8328d31a1779e0cf5e9d25fc840bdfe0.jpg",
            "https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.webp?b=1&s=170667a&w=0&k=20&c=9cnDfc9tNIAcgvuGHZkST7CP-dFaNXutX8OpzVO1jEA="
        ],
        latitude: 21.171454,
        longitude: 79.095649,
        sellerName: "John Doe",
        sellerEmail: "john@example.com",
        sellerPhoto: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
    },
    {
        id: 4,
        title: "Apartment in Navi Mumbain",
        rent: 1200,
        location: "Tripathi Heights, Plot No 68, Survey No 302/3A/1, Sai Samruddhi, Dy Patil University Rd,, Lohegaon Dhanori, Pune",
        description:
            "Charming studio apartment with a lovely park view. Quiet and peaceful neighborhood.",
        images: [
            "https://images1.apartments.com/i2/_rDyXkgVut3AB6y99xWmxPi0QwfFSFePsqzNj2JJfLQ/111/image.jpg",
            "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.webp?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8=",
            "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.webp?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8=",
        ],
        latitude: 21.171454,
        longitude: 79.095649,
        sellerName: "John Doe",
        sellerEmail: "john@example.com",
        sellerPhoto: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",

    },
    {
        id: 4,
        title: "Apartment in Juhu",
        rent: 1200,
        location: "Tripathi Heights, Plot No 68, Survey No 302/3A/1, Sai Samruddhi, Dy Patil University Rd,, Lohegaon Dhanori, Pune",
        description:
            "Charming studio apartment with a lovely park view. Quiet and peaceful neighborhood.",
        images: [
            "https://images1.apartments.com/i2/48BUPMHq-vpcujZrVtR_u-tfQXsLVIISwJJjtSoJGdI/111/rivers-edge-apartments---open-now-coeur-dalene-id-building-photo.jpg",
            "https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.webp?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8=",
        ],
        latitude: 21.171454,
        longitude: 79.095649,
        sellerName: "John Doe",
        sellerEmail: "john@example.com",
        sellerPhoto: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
    },
    {
        id: 45,
        title: "Cozy Studio near Park",
        rent: 1200,
        location: "Tripathi Heights, Plot No 68, Survey No 302/3A/1, Sai Samruddhi, Dy Patil University Rd,, Lohegaon Dhanori, Pune",
        description:
            "Charming studio apartment with a lovely park view. Quiet and peaceful neighborhood.",
        images: [
            "https://media.istockphoto.com/id/1384642884/photo/the-evening-sun-is-reflected-in-the-modern-glass-facade-with-balconies.webp?b=1&s=170667a&w=0&k=20&c=9cnDfc9tNIAcgvuGHZkST7CP-dFaNXutX8OpzVO1jEA="
        ],
        latitude: 21.171454,
        longitude: 79.095649,
        sellerName: "John Doe",
        sellerEmail: "john@example.com",
        sellerPhoto: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
    },
    {
        id: 47,
        title: "Cozy Studio near Park",
        rent: 1200,
        location: "Tripathi Heights, Plot No 68, Survey No 302/3A/1, Sai Samruddhi, Dy Patil University Rd,, Lohegaon Dhanori, Pune",
        description:
            "Charming studio apartment with a lovely park view. Quiet and peaceful neighborhood.",
        images: [
            "https://images1.apartments.com/i2/_rDyXkgVut3AB6y99xWmxPi0QwfFSFePsqzNj2JJfLQ/111/image.jpg"
        ],
        latitude: 21.171454,
        longitude: 79.095649,
        sellerName: "John Doe",
        sellerEmail: "john@example.com",
        sellerPhoto: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
    },
];

export default function handler(req, res) {
    res.status(200).json(apartments);
}