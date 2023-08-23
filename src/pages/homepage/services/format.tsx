interface ITimeUtility {
  format: (date: Date) => string;
  formatHours: (hours: number) => string;
  formatSegment: (segment: number) => string;
}
export const T: ITimeUtility = {
  format: (date: Date): string => {
    const hours: string = T.formatHours(date.getHours()),
          minutes: number = date.getMinutes(),
          seconds: number = date.getSeconds();
    
    return `${hours}:${T.formatSegment(minutes)}:${T.formatSegment(seconds)}`;
  },
  formatHours: (hours: number): any => {
    return (hours % 12 === 0 ? 12 : hours % 12);
  },
  formatSegment: (segment: number): any => {
    return segment < 10 ? `0${segment}` : segment;
  }
}

interface INumberUtility {
  clamp: (min: number, value: number, max: number) => number;
  rand: (min: number, max: number) => number;
}

export const N: INumberUtility = {
  clamp: (min: number, value: number, max: number) => Math.min(Math.max(min, value), max),
  rand: (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
}