const EventService = require('../services/eventService');

const getAllEvents = async (req, res) => {
  
        const allEvents = await Eventservice.getAllEvents();
   if(allEvents)
    res.status(200).send({ status: "OK", data: allEvents});
   else
    res.status(400).send({ status: "FAILED", data: allEvents});
};


const createEvent = async (req, res) => {
   const{body} = req;
   const createdEvent = await Eventservice.createEvent(body.name, body.description, body.startDate, body.endDate, body.categoryId, body.state, body.maxCapacity);
if (createdEvent) 
    res.status(201).send({ status: "OK", data: createdEvent});
else
    res.status(400).send({ status: "FAILED", data: createdEvent});
    
};

const getEvent = async (req, res) => {
    let id = req.params.eventId;
    try {
        const Event = await Eventservice.getEvent(id);
        res.status(200).send({status: "OK", data: Event});
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", 
            data: { error: error.message } 
        });
    }
};

const updateEvent = async (req, res) => {
   let id = req.params.EventId;
   let {name,description,startDate,endDate,idCategorie,state,maxCapacity} = req.body;
   const updatedEvent = await Eventservice.updateEvent(name,description,startDate.endDate.CategoryId,state,maxCapacity);
   if (updatedEvent) 
    res.status(200).send({ status: "OK", data: updatedEvent});
else
    res.status(200).send({ status: "FAILED", data: updatedEvent});
   
};

const deleteEvent = async (req, res) => {
    let id = req.params.eventId;
    
        const deletedEvent = await Eventservice.deleteEvent(id);
        if (deletedEvent) 
             res.status(200).send({ status: "FAILED", data: deletedEvent });
        else 
            res.status(400).send({status: "FAILED", data: deletedEvent});
    };

module.exports = {
    getAllEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
};