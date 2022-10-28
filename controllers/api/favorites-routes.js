const router = require('express').Router();
const { User } = require('../../models')

// Get all drinks with drink_ids matching user favorites

router.get('/', (req, res) => {
    
})

router.post('/', (req,res) => {
    // get current user favorite list
    // get user by id
    router.get('/:id', async (req, res) => {
    const userData = await User.findAll({
      where: {
        id: req.session
      }
    });
    if (!userData){
      res.status(404).json({message: 'No user found with this id'})
    }
    res.json(userData);
  })
})