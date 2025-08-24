const db = require('../models');

const getAllEvents = async () => {
    try {
        let Events = await db.Event.findAll({
            include: {
                model: db.Categorie,
                required: true,
                as: "category",
                attributes: ["id", "nombre", "descripcion"]
            }
        });
        return Events;
    } catch (error) {
        return error.message || "Failed to get Events";
    }
};

const getEvent = async (id) => {
    try {
        let Event = await db.Event.findByPk(id, {
            include: {
                model: db.Categorie,
                required: true,
                as: "category",
                attributes: ["id", "nombre", "descripcion"]
            }
        });
        return Event;
    } catch (error) {
        throw { status: 500, message: error.message || "Failed to get Event" };
    }
};

const createEvent = async (name, description, startDate, endDate, categoryId, state, maxCapacity) => {
    try {
        let newEvent = await db.Event.create({
            name,
            description,
            startDate,
            endDate,
            categoryId,
            state,
            maxCapacity
        });
        return newEvent;
    } catch (error) {
        return error.message || "Event could not be created";
    }
};

const updateEvent = async (id, name, description, startDate, endDate, categoryId, state, maxCapacity) => {
    try {
        let updatedEvent = await db.Event.update({
            name,
            description,
            startDate,
            endDate,
            categoryId,
            state,
            maxCapacity
        }, {
            where: {
                id
            }
        });
        return updatedEvent;
    } catch (error) {
        return error.message || "Event could not be updated";
    }
};

const deleteEvent = async (id) => {
    try {
        const deletedEvent = await db.Event.destroy({
            where: {
                id
            }
        });
        return deletedEvent;
    } catch (error) {
        return error.message || "Event could not be deleted";
    }
};

module.exports = {
    getAllEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
};