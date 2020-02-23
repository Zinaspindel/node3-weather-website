const request = require('request')
const forcast = (latitude,longtitue, callback)=>{
    const url='https://api.darksky.net/forecast/875db875856c63d30fb3b3fefb559b06/'+ encodeURIComponent(latitude)+
    ','+encodeURIComponent(longtitue) +'?units=si'
    request({url, json: true},(error,response)=>{
        if(error){
            callback('Unable to connect to location services',undefined)
         } else if(response.body.error){
            callback('unable to find location',undefined)
         } else {
            callback(undefined,
                response.body.daily.data[0].summary + '\nIt is currently ' + response.body.currently.temperature +
                 ' degrees out. There is a '+ response.body.currently.precipProbability + '% chance of rain.')     
         }
    })
}
module.exports = forcast