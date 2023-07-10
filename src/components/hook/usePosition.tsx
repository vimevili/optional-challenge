import {useEffect, useState} from 'react'

const usePosition = () => {
    interface Position {
        latitude: string,
        longitude: string
    }
    const [position, setPosition] = useState<Position>()
    const [posError, setPosError] = useState<string>()

    const handlePositionUpdate = ({coords}) => {
        const {latitude, longitude} = coords
        setPosition({latitude, longitude });
    }

    const onError = (error) => {
        setPosError(error.message);
      };

    useEffect(() => {
        const geo = navigator.geolocation;
        if (!geo) {
          setPosError('Geolocation is not supported');
          return;
        }
        const watchId = geo.watchPosition(handlePositionUpdate, onError);
        return () => geo.clearWatch(watchId);
      }, [position]); 

      return {...position, posError};
}

export default usePosition
