//method 2 : 
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve( requestHandler(req, res, next) ).catch( (err) => next(err) )
    }
} 


export {asyncHandler}



 
// const asyncHandler = () => {}
// const asyncHandler = (func) => {}
// const asyncHandler = (func) => {() => {}}

//method 1 
//a asyncHandler variable is fnc and it takes fnc as a parameter and it has inner fnc which take req,rea,next as a parameter
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
        
//     } catch (error) {
//         res.status(err.code|| 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }


