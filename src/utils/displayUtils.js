import {isValidDate} from './logicUtils';

const convertToAMPM = (time) => {
  let Hour = +time.substr(0, 2);
  let Min = +time.substr(2, 2);

  if(Hour>24 || Hour<0 || Min >60 || Min<0)
  	throw new Error('Invalid Time');

  let h = (Hour % 12) || 12;
  h = (h < 10)?("0"+h):h; 
  let ampm = Hour < 12 ? " AM" : " PM";
  let newTime = h + ":"+ time.substr(2, 3) + ampm;
  return newTime;
};

const formatDate = (date) => {
  const year = date.substr(0, 4);
  const month = date.substr(4, 2);
  const day = date.substr(6, 2);
  const newDate =  `${year}-${month}-${day}`;

  if(!isValidDate(newDate))
  	throw new Error('Invalid Date');
  
  return newDate;
};


export {convertToAMPM, formatDate}