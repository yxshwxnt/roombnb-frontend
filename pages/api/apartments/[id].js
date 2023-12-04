const { connectDB } = require('@/lib/mongoDb');

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
        case 'POST':
            return getApartment(req, res);
    }
}

async function getApartment(req, res) {
    try {
        let { id } = req.query;
        id = parseInt(id);

        if (!Number.isNaN(id)) {
            const { db } = await connectDB();

            let apartment = await db
                .collection('apartments')
                .findOne({
                    id: id
                });

            if (apartment) {
                res.status(200).json(apartment);
            } else {
                res.status(404).send("Apartment not found");
            }
        } else {
            res.status(400).send("Invalid id");
        }
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
