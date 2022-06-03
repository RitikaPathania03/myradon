const printDate = Function() {
    let currentDate =new Date()
    console.log(currentDate)
}

const printMonth = Function(){
    let currentdate= new Date()
    let currentMonth = currentdate.getMonth()+1
    console.log('The current month is'+currentMonth)
}


const getBatchInfo = Function(){
batchInformation = 'Radon, W03, the topic of today is API'
console.log(batchInformation)
}


module.exports.printDate = printDate
module.exports.getCurrentMonth = printMonth
module.exports.getCohortData = getBatchInfo