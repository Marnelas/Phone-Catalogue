export const getOnePhone = id => ({
    type: "GET_ONE_PHONE", 
    payload: id 
})

export const saveAllPhones = allPhones => ({
    type: "SAVE_ALL_PHONES", 
    payload: allPhones 
})
