const express = require('express');
const router = express.Router();

// @route     GET api/contact
// @desc      Get all users contacts
// @access    Private
router.get('/', (req, res, next) => {
  res.send('Get all contacts');
});

// @route     POST api/contact
// @desc      Add new contact
// @access    Private
router.post('/', (req, res, next) => {
  res.send('Add a new contact');
});

// @route     PUT api/contact
// @desc      Update a contact
// @access    Private
router.put('/:id', (req, res, next) => {
  res.send('Update a contact');
});

// @route     DELETE api/contact
// @desc      Update a contact
// @access    Private
router.delete('/:id', (req, res, next) => {
  res.send('Delete a contact');
});

module.exports = router;
