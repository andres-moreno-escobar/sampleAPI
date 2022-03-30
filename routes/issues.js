const express = require('express');
const Data = require('../public/data');
const router = express.Router();

router.get('/', (req, res) => {
    let ids = [];
    for (let i = 0; i < Data.length; i++) {
        ids.push({ id: Data[i].id, name: Data[i].name, severity: Data[i].severity_level });
    }
    res.status(200).json(ids);
});

router.get('/:id', get_issue, (req, res) => {
    res.status(200).json(res.issue);
});

function get_issue(req, res, next) {
    let issue;
    const id = parseInt(req.params.id);
    if (id) {
        issue = Data.find((x) => x.id === id);
    }
    if (!issue) {
        issue = { message: 'no issue found' };
    }
    res.issue = issue;
    next();
}

module.exports = router;
