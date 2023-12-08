const { connectDB } = require('@/lib/mongoDb');

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getApartment(req, res);
        case 'PUT':
            return editApartment(req, res);
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
    } catch (err) {
        return res.json({
            message: new Error(err).message,
            success: false,
        });
    }
}

async function editApartment(req, res) {
    try {
        let { id } = req.query; 
        id = parseInt(id);
        if (!Number.isNaN(id)) {
            const { db } = await connectDB();
            const updatedValues = req.body;
            const result = await db.collection('apartments').findOneAndUpdate(
                { id: id },
                { $set: updatedValues }
            );

            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({
                    message: 'Apartment not found',
                    success: false,
                });
            }
        } else {
            res.status(400).json({
                message: 'Invalid apartment ID',
                success: false,
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false,
        });
    }
}
