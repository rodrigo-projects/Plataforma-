// module.exports = app => {
//     function existsOrError(value, msg) {
//         if(!value) conlose.log(msg)
//         if(Array.isArray(value) && value.length === 0) conlose.log(msg)
//         if(typeof value === 'string' && !value.trim()) conlose.log(msg)
//     }
    
//     function notExistsOrError(value, msg) {
//         try {
//             existsOrError(value, msg)
//         } catch(msg) {
//             return
//         }
//         throw msg
//     }
    
//     function equalsOrError(valueA, valueB, msg) {
//         if(valueA !== valueB) throw msg
//     }

//     return { existsOrError, notExistsOrError, equalsOrError }
// }


module.exports = app => {
    function exists(value, msg) {
               if(value==''){
                   throw msg
               }
            }
    return { exists }
}