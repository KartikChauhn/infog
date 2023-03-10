

base_url = "https://api.rawg.io/api/";

const getCurrentMonth = () =>{
    const month = new Date().getMonth()+1;
    if(month<10){
        return `0${month}`;
    }
    else{
        return month;
    }
}


const getCurrentDay = () =>{
    const day = new Date().getDate();
    if(day<10){
        return `0${day}`;
    }
    else{
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay};`;
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay};`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay};`;

const popular_games =  `games?key=0e9f315ec917469085bd16cd0cf74bc0&dates=${lastYear},${currentDate}&ordering=-rating&page-size=10`

 const popularGamesURL = () => `${base_url}${popular_games}`; 
 console.log(popularGamesURL);