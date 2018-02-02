let defaultState={
    itemList:[]
}

const mainReducer=(state=defaultState,action)=>{
switch(action.type){
    case "AddValue":
    let idAlreadyExists = state.itemList.indexOf(action.payload) > -1;
    // make a copy of the existing array
    let itemList = state.itemList.slice();

    if(idAlreadyExists) {
        itemList = itemList.filter(id => id != action.payload);                
    }     
    else {
        // modify the COPY, not the original
        itemList.push(action.payload);            
    }      

    return{
        ...state,
        itemList
    };
     default:
        return{
            ...state
        };
            

}
}
export default mainReducer;