const { connectDB } = require('@/lib/mongoDb');
const objectID = require('mongodb').ObjectId;

export default async function handler(req, res) {
    switch (req.method) {
        case 'GET': {
            return getApartments(req, res);
        }
        case 'POST': {
            return getApartments(req, res);
        }
    }
}

async function getApartments(req, res) {
    try {
        let { db } = await connectDB();
        let apartments = await db
            .collection('apartments')
            .find({})
            .toArray();
        return res.send(apartments);
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}