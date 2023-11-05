const roommatesData = [
    {
        id: 1,
        name: "Alice",
        gender: "female",
        age: 25,
        work: "Software Developer",
        rent: "$800",
        location: "Downtown",
        interests: ['Cricker', 'Football', 'Coding'],
        profilePicture:
            "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
        apartmentImages: [
            "https://www.shutterstock.com/image-photo/interior-small-apartment-living-room-260nw-2154108011.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Cabgb1cpvdAx34-rHWmEUZzkgoGavItOGzO_TMz0ClGZJqOju198Bk073Vja1XF4PPA&usqp=CAU",
        ],
    },
    {
        id: 2,
        name: "Bob",
        gender: "male",
        age: 28,
        work: "Graphic Designer",
        rent: "$700",
        location: "Midtown",
        interests: ['Cricker', 'Football', 'Gaming'],
        profilePicture:
            "https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
        apartmentImages: [
            "https://www.shutterstock.com/image-photo/interior-small-apartment-living-room-260nw-2154108011.jpg",
        ],
    },
];

export default function handler(req, res) {
    res.status(200).json(roommatesData);
}