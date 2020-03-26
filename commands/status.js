module.exports = {
    name: 'status',
    description: "says ping!",
    async execute(msg, args, axios){

        if(args[1] == 'global'){
        let getCase = async () => {
          let response = await axios.get('https://coronavirus-19-api.herokuapp.com/all');
          let data = response.data;
          return data;
        }
        let dat = await getCase();
        console.log(dat);
        msg.channel.send("Covid19 global status: \n \n" + "Cases: " + dat.cases + "\nDeaths: " + dat.deaths+ "\nRecovered: " + dat.recovered +"");
      }
      else if(args[1] == 'us'){
        let getCase = async () => {
          let response = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/us');
          let data = response.data;
          return data;
        }
        let dat = await getCase();
        console.log(dat);
        msg.channel.send("Covid19 United States status: \n \n" + "Cases: " + dat.cases + "\nInfected Today: " + dat.todayCases + "\nDeaths: " + dat.deaths+ "\nDeaths Today: " + dat.todayDeaths + "\nRecovered: " + dat.recovered +"\nActive: " + dat.active + "\nCritical: " + dat.critical);
      }
      else{
        var countryName = args[1];
        var url = "https://coronavirus-19-api.herokuapp.com/countries/"
        let getCase = async () => {
          let response = await axios.get(url + countryName).catch(err =>{
              msg.channel.send("You did not enter a valid country!");
          });
          let data = response.data;
          return data;
        }
        let dat = await getCase();
        console.log(dat);
        if(dat == "Country not found"){
          msg.channel.send("*Please enter a valid country, or spell it differently.*");
          
        }
        msg.channel.send("Covid19 " + countryName.substring(0,1).toUpperCase() + countryName.substring(1) +" status: \n \n" + "Cases: " + dat.cases + "\nInfected Today: " + dat.todayCases + "\nDeaths: " + dat.deaths+ "\nDeaths Today: " + dat.todayDeaths + "\nRecovered: " + dat.recovered +"\nActive: " + dat.active + "\nCritical: " + dat.critical);
      }
    }
}