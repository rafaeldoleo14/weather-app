
import coldImg from '../../../assets/cold-bg.jpg'
import warnImg from '../../../assets/warm-bg.jpg';
import { useAppSelector } from '../../hooks/hooks';
import { useLoading } from '../../hooks/useLoading'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { CityInfo, Points, SearchInput, TypesWeather } from '../index'
import { Loading } from '../Loading/Loading';

export const Main = () => {

  const {onloading} = useLoading();
  const {temp, ok, errorMessage} = useAppSelector(state => state.weather);

  return (
    <>

        <div className='d-flex justify-content-center align-items-center container-fluid w-100 vh-100 bg-dark'>

            <div style={{minWidth: '19em'}} className='d-flex flex-column justify-content-center gap-2 align-items-center bg-dark h-75 position-relative'>

                {/* Imagen de fondo */}
                <img src={temp > 20 ? warnImg : coldImg} alt='Imagen frio' className='opacity-75 img-fluid w-100 h-100 position-absolute'/>

                <SearchInput/>

                {

                  !ok && errorMessage !== '' ? (<ErrorMessage/>) :

                  !onloading ? (<Loading/>) :

                  (
                    <>
                    
                      <CityInfo/>

                      <Points/>

                      <TypesWeather/>
                    
                    </>
                  )

                }

            </div>

        </div>

    </>
  )
}
