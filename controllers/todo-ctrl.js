const Todo = require('../models/todo-model')

exports.createItem = (req , res)=>{
    const body = req.body
    if(!body){
        return res.status(400).json({
            success:false,
            error: 'You must provide an item',
        })
    }
    const todo = new Todo(body)
    if(!todo){
        return res.status(400).json({
            success:false,
            error: err
        })
    }
    todo.save().then(()=>{
        return res.status(200).json({
            success:true,
            id:todo._id,
            message:'todo item created',
        })
    }).catch(error=>{
        return res.status(400).json({
            error,
            message: 'todo item not created',
        })
    })

}
exports.getItems = async (req , res)=>{
    await Todo.find({}, (err, data)=>{
        if(err){
            return res.status(400).json({ success: false, error: err })
        }
        if (!data.length) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found` })
        }
        return res.status(200).json({ success: true, data: data })
    }).catch(err => console.log(err))
}

exports.updateItem = async (req , res)=>{
    let{...data} = req.body;
    const result = await Todo.findOneAndUpdate(
        {_id:req.params.id},
        data,
        {new:true}
    );
    res.send(result);

}