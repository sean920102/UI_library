import React from "react";
import { T,N } from "../../services/format";

interface IInfoProps {
  id?: string;
}
const useCurrentDateEffect = (): Date => {
  const [date, setDate] = React.useState<Date>(new Date());

  React.useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      const update: Date = new Date();

      if(update.getSeconds() !== date.getSeconds()) {
        setDate(update);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [date]);
  
  return date;
}

const WeatherSnap: React.FC = () => {  
  const [temperature] = React.useState<number>(N.rand(65, 85));
  
  return(
    <span className="weather">
      {/* <i className="weather-type" className="fa-duotone fa-sun" /> */}
      <i className="weather-type" />
      <span className="weather-temperature-value">{temperature}</span>
      <span className="weather-temperature-unit">°F</span>
    </span>
  )
}

const Time: React.FC = () => {
  const date: Date = useCurrentDateEffect();
  
  return(
    <span className="time">{T.format(date)}</span>
  )
}

const Info: React.FC<IInfoProps> = ({id}) => {  
  return(
    <div id={id} className="info">
      <Time />
      <WeatherSnap />
    </div>
  )
}
export default Info