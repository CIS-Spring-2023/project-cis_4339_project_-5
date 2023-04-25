const express = require('express')
const router = express.Router()

const org = process.env.ORG

// import services model
const { services } = require('../models/models')

// GET all services for organization
router.get('/', (req, res, next) => {
    activeQueryParam = req.query.Active;
    dbQuery = { org }

    if (activeQueryParam) {
        dbQuery.active = activeQueryParam;
    }
    console.log(dbQuery)
    services
        .find(dbQuery, (error, data) => {
            if (error) {
                return next(error)
            } else {
                return res.json(data)
            }
        })
})

// GET a single service by ID
router.get('/id/:id', (req, res, next) => {
    services.findOne({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error)
        } else if (!data) {
            res.status(400).send('Service not found')
        } else {
            res.json(data)
        }
    })
})



// POST create a new service
router.post('/', (req, res, next) => {
    const newService = req.body
    newService.org = org;
    services.create(newService, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// update a service, and get the respond with the updated service
router.put('/update/:id', (req, res, next) => {
    services.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// delete service completely
router.delete('/:id', (req, res, next) => {
    services.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else if (!data) {
            res.status(400).send('service not found')
        } else {
            res.send('Service deleted')
        }
    })
})

module.exports = router
