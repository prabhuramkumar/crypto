import {convertToAMPM, formatDate} from '../utils/displayUtils';

describe('display Utils test', () => {
  it('should return time in pm', () => {
    const newTime = convertToAMPM('1200')
    expect(newTime).toEqual('12:00 PM');
  });

  it('should return time in am', () => {
    const newTime = convertToAMPM('0200')
    expect(newTime).toEqual('02:00 AM');
  });

  it('should return error for a time with invalid hour', () => {
    expect(() => {
      convertToAMPM('3200')
    }).toThrow();
  });

  it('should return error for a time with invalid min', () => {
    expect(() => {
      convertToAMPM('1190')
    }).toThrow();
  });

  it('should return error for a date with invalid month', () => {
    expect(() => {
      formatDate('20161401')
    }).toThrow();
  });

  it('should return error for a day with invalid month', () => {
    expect(() => {
      formatDate('20161141')
    }).toThrow();
  });

  it('should return formatted date for a valid date', () => {
    expect(formatDate('20161101')).toEqual('2016-11-01');
  });
});