const fs = require ("fs")
const yargs = require('yargs')
const data10 = require("./data10")


//1-add
yargs.command({
    command: "add",
    describe: "to add an item",
    builder: {
        fname: {
            describe: "this is the first name desc in add command",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "this is the first name desc in add command",
            demandOption: true,
            type: "string"
        }
    }
    ,
    handler: (x) => {
        data10.addperson(x.id, x.fname, x.lname, x.city, x.phone)
    }
}) 


//2-delete
yargs.command({
    command: 'delete',
    describe: "to delete an item",
    handler: (x) => {
        data10.deletedata(x.id)
    }
})

//3-read
yargs.command({
    command: "read",
    describe: "to read an iteam",
    builder: {
        id: {
            describe: "this is  id  desc in read command",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data10.readData(x.id)
    }
})

//4-list
yargs.command({
    command:"list",
    describe:"to list data",
    handler: ()=>{
        data10.listData()
    }
})



yargs.parse()


