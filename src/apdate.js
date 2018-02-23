import apmonth from './apmonth';

/**
 * Returns an AP-formatted date string that corresponds with the supplied
 * Date. If an `input` is not passed, it will use the result of `new Date();`.
 *
 * @param  {Date} [date] JavaScript Date object, defaults to current date if
 *                       not passed
 * @return {String}
 * @example
 *
 * var journalize = require('journalize');
 *
 * // Remember that JavaScript zero-indexes months!
 * journalize.apdate(new Date(2016, 10, 8));
 * // returns 'Nov. 8, 2016'
 *
 * // Uses the current date if no parameter is passed
 * journalize.apdate();
 * // returns 'July 4, 2016' (pretend it is actually July 4, 2016)
 */
export default function apdate(date = new Date()) {
  const month = apmonth(date);
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  return `${month} ${dayOfMonth}, ${year}`;
}
