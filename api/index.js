const express = require('express')
const router = express.Router()
const request = require('request-promise-native')

router.get('/user', async (req, res) => {
    const user = await request('https://randomuser.me/api/')

    res.setHeader('Content-Type', 'application/json')
    return res.send(JSON.parse(user))
})

router.get('*', (req, res) => {
    res.redirect('*')
})

module.exports = router