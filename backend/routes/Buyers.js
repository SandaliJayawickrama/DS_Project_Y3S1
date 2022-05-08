const router = require('express').Router();

router.get('/api/items', async(req,res) => {
    try {
        const allTodoItems = await todoItemModel.find({});
        res.status(200).json(allTodoItems);
    } catch (err) {
        res.json(err);
    }
})