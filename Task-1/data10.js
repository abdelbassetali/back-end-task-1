const fs = require("fs")

//1-add
const addperson = (id, fname, lname, city, phone) => {
    const allData = loadInfo()
    const dublicatedData = allData.filter((obj) => {
        return obj.id === id
    })

if (dublicatedData.length == 0) {
    allData.push({
        id: id,
        fname: fname,
        lname: lname,
        city: city,
        phone: phone
    })
    savealldata(allData)
} else {
    console.log("Erorr")
}
}
const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync("data.json").toString()
        return JSON.parse(dataJson)
    } catch {
        return []
    }
}

const savealldata = (allData) => {
    const savealldatajson = JSON.stringify(allData)
    fs.writeFileSync("data.json", savealldatajson)
}

//2-deleted
const deletedata = (id) => {
    const allData = loadInfo()
    const datatokeep = allData.filter((obj) => {
        return obj.id !== id
    })
    savealldata(datatokeep)
}

//3-read
const readData = (id) => {
    const allData = loadInfo()

    const iteamnead = allData.find((obj) => {
        return obj.id == id
    })
    if (iteamnead) {
        console.log(iteamnead)
    } else {
        console.log("error")
    }
}

//4-list
const listData = ()=>{
    allData = loadInfo()
  
    allData.forEach((obj) => {
      console.log(obj.fname,obj.city)
    });
  }
module.exports = {
    addperson,
    deletedata,
    readData,
    listData
  }