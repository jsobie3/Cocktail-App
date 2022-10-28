const router = require('express').Router();
const{ User, Post } = require('../../models');

router.post('/'), async (req, res) => {
    try {
        Comment.create({
            content: 'Get text from input for here',
            user_id: req.session.username,
            drink_id: 'Get the drink_id provided by the external API for here'
        })
        res.status(200).json({message: 'Comment added successfully'})
        } catch (err) {
            res.status(500).json(err)
        }
        }


