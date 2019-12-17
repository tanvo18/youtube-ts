import moment from 'moment';

/**
 * Round number to Million or Thousand to abbreviate view count
 * @param {string} num Number of view count
 * 
 * @return {string} viewCount
 */
export const roundNumber = (num: string): string => {
  let viewCount: string; 
  let number: number;

  if (num) {
    number = parseInt(num, 10);
  } else {  
    number = 0;
  }

  if (number > 1000000) {
    number = Math.round(number/1000000);
    viewCount = `${number}M`;
  } else if (number > 1000) {
    number = Math.round(number/1000);
    viewCount = `${number}K`;
  } else {
    viewCount = `${number}`;
  }
  return viewCount;
};

/**
 * Calculate the length of date published and now
 * @param {string} dateString video date published
 * 
 * @return {string} string of date
 */
export const calculateDate = (dateString: string): any => {
  return moment(dateString, 'YYYY-MM-DD').fromNow();
};

/**
 * Convert date format
 * @param {string} dateString 
 * 
 * @return {string} string of date
 */
export const convertFormatDate = (dateString: string): any => {
  return moment(dateString, 'YYYY-MM-DD').format('MMM Do YY');
};
