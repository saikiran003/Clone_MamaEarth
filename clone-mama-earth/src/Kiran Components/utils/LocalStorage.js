function saveData(key,data){
    localStorage.setItem(key,JSON.stringify(data))
}

function loadData(key){
    try{
        let data = JSON.parse(localStorage.getItem(key));
        return data
    }catch(err){
        return undefined
    }
}

export {loadData,saveData}