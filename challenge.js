function dayOfProgrammer(year) {
  let dateCount = 0, date, month;
  const monthDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if(year < 1918 && year % 4===0){
      monthDate[1] = 29;
  }else if(year === 1918){
      monthDate[1] = 15
  }else if((year%400 === 0) || (year%4===0 && year%100!==0)){
      monthDate[1] = 29;
  }
  for(let i = 0; i < monthDate.length; i++){
      dateCount += monthDate[i]
      if(dateCount > 256){
          date = monthDate[i] - (dateCount - 256);
          month = i + 1;
          return `${('0' + date).slice(-2)}.${('0' + month).slice(-2)}.${year}` 
      }
    }      
}