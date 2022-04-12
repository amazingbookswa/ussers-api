const books =require("../data/books")

const booksHandlers ={};


booksHandlers.byCategory = (req, res, next)=>{
    const category = req.query.category;
    if (category){
        let _book =books.filter((b)=>b.category == category);
        return res.status(200).json({success:true, data:books})
    }
    next()

};

booksHandlers.byAuthor = (req, res, next)=>{
    const author = req.query.category;
    if (author){
        let _author =books.filter((b)=>b.author == author);
        return res.status(200).json({success:true, data:_author})
    }
    next()

};


module.exports =booksHandlers