import react , {createContext , useContext , useState} from 'react'

const Ubercontext = createContext();

const UberContextProvider = ({children}) => {
    const [origin , setOrigin] = useState(null);
    const [destination,  setDestination] = useState(null);
    const [trveltimeinformation , setTraveTimeInformation ] = useState(null);

    const values = {
        origin,
        setOrigin,
        destination,
        setDestination,
        trveltimeinformation,
        setOrigin,
        setTraveTimeInformation
    };
 
   return(
    <Ubercontext.Provider value={values}>
                {children}
    </Ubercontext.Provider>
   )
}

export const useUberContext = () => (
    useContext(Ubercontext)
)

export default UberContextProvider