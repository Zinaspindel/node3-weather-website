const request = require('request')
const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')

const location = process.argv[2] 
if(location==undefined||Number(location)){
    console.log('please enter a location')
}else{
    const locationInput = geocode(location,(error,{latitude,longtitue,location})=>{
    if(error){
        return console.log(error)
    }
    forcast(latitude,longtitue,(error,forcastData)=>{
        if(error){
            return console.log(error)
        } else{
            const result= {forcastData} 
        }
    
    console.log(data.location)
    console.log(forcastData)
    
    })
})
}
const result = {}
