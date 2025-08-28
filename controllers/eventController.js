const EventService = require('../services/eventService');

const getAllEvents = async (req, res) => {
    try {
        const allEvents = await EventService.getAllEvents();
        res.status(200).send({ status: "OK", data: allEvents });
    } catch (error) {
        res.status(400).send({ status: "FAILED", data: { error: error.message } });
    }
};

const createEvent = async (req, res) => {
    try {
        const { body } = req;
        const createdEvent = await EventService.createEvent({
            name: body.name,
            description: body.description,
            startDate: body.startDate,
            endDate: body.endDate,
            categoryId: body.categoryId,
            state: body.state,
            maxCapacity: body.maxCapacity,
            userId: body.userId // ← Agregar userId si es necesario
        });
        
        if (createdEvent) {
            res.status(201).send({ status: "OK", data: createdEvent });
        } else {
            res.status(400).send({ status: "FAILED", data: "No se pudo crear el evento" });
        }
    } catch (error) {
        res.status(400).send({ status: "FAILED", data: { error: error.message } });
    }
};

const getEvent = async (req, res) => {
    try {
        let id = req.params.eventId;
        const event = await EventService.getEvent(id);
        res.status(200).send({ status: "OK", data: event });
    } catch (error) {
        res.status(error.status || 500).send({ 
            status: "FAILED", 
            data: { error: error.message } 
        });
    }
};

const updateEvent = async (req, res) => {
    try {
        let id = req.params.eventId; // ← Corregir a eventId (no EventId)
        let { name, description, startDate, endDate, categoryId, state, maxCapacity } = req.body;
        
        const updatedEvent = await EventService.updateEvent(id, {
            name, description, startDate, endDate, categoryId, state, maxCapacity
        });
        
        if (updatedEvent) {
            res.status(200).send({ status: "OK", data: updatedEvent });
        } else {
            res.status(400).send({ status: "FAILED", data: "No se pudo actualizar el evento" });
        }
    } catch (error) {
        res.status(400).send({ status: "FAILED", data: { error: error.message } });
    }
};

const deleteEvent = async (req, res) => {
    try {
        let id = req.params.eventId;
        const deletedEvent = await EventService.deleteEvent(id);
        
        if (deletedEvent) {
            res.status(200).send({ status: "OK", data: "Evento eliminado correctamente" });
        } else {
            res.status(400).send({ status: "FAILED", data: "No se pudo eliminar el evento" });
        }
    } catch (error) {
        res.status(400).send({ status: "FAILED", data: { error: error.message } });
    }
};

module.exports = {
    getAllEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
};