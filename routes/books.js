const express=require("express");
const {books}=require("../data/books.json");
const {users} = require("../data/users.json");
const router=express.Router();



// * Route: /books
// *Method: GET
// * Description : Get all books
// * Access :Public
// * Parameters: None
router.get("/",(req,res)=>{
res.status(200).json({success:true, data:books})
})

// * Route: /books/:id
// *Method: GET
// * Description : Get  book by id
// * Access :Public
// * Parameters: id

router.get("/:id",(req,res)=>{

    const {id}=req.params;

    const book =books.find((each) => each.id === id);
    if(!book){
        return res.status(404).json({
            success:false,
            message:"Book not Found"
        })
    }
    return res.status(200).json({
        success:true,
        data:book
    })
})

// * Route: /books/issued
// *Method: GET
// * Description : Get all issued books
// * Access :Public
// * Parameters: None
router.get("/issued/by-user",(req,res)=>{
     const usersWithIssuedBooks=users.filter((each)=>{
        if(each.issuedBook) return each
     })
  const issuedBooks=[];
  usersWithIssuedBooks.forEach((each)=>{
    const book= books.find((book)=> book.id === each.issuedBook);

    book.issuedBy=each.name;
    book.issuedDate=each.issuedDate;
    book.returnDate=each.returnDate;

    issuedBooks.push(book);
  })
  if(issuedBooks.length === 0)
     return res.status(404).json({
    success:false,
    message:"No books has been Isuued"
})
  return res.status(200).json({
    success:true,
    data:issuedBooks
  })
})

// * Route: /books
// *Method: POST
// * Description : Create new book
// * Access :Public
// * Parameters: None
// * Data:author, name, genre, price, publisher,id

router.post("/",(req,res)=>{
const {data}=req.body;
if(!data){
  return res.status(404).json({
    success:false,
    message:"Data not provided"
  })
}
const book= books.find((each)=> each.id === data.id)
if(book)
  return res.status(400).json({
success:false,
message:"Book with the given id doesnot exist"
})
const allBooks=[...books, data]

return res.status(200).json({
  success:true,
  data:allBooks
})
})

// * Route: /books/:id
// *Method: PUT
// * Description : Updating a book by its id
// * Access :Public
// * Parameters: Id
// * Data:author, name, genre, price, publisher,id

router.put("/:id", (req,res)=>{
  const {id}=req.params;
  const {data}=req.body;

  const book= books.find((each)=> each.id === id)
  if(!book)
   return res.status(404).json({
        success:false,
        message:"book doesn't exist"})

    const updateData=books.map((each)=>{
      if(each.id === id){
         return {...each, ...data}
      }
      return each
    })
    return res.status(200).json({
      success:true,
      data:updateData
    })
})



module.exports=router;