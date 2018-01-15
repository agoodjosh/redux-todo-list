export default store => next => action => {
    // Code Goes Here

    console.log('Logger:', action);

    const result = next(action);

    console.log(`next state:`, store.getState());

    return result;
};


// ES5 Middleware
//  export default function(store) {
//     return function(next) {
//         return(action){
//             //code goes here
//         }
//     }
// }