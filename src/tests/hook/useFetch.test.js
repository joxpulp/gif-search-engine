import '@testing-library/jest-dom';
import {renderHook} from  '@testing-library/react-hooks'
import {useFetch} from '../../hook/useFetch'

describe('Pruebas en el hook useFetch', () => {

    test('Debe retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://api.giphy.com/v1/gifs/search?api_key=TSwctyoT1ZKon74EIDnDGdGY5QTz9Ezj&q=$cats&limit=12&offset=0&rating=g&lang=en'))
        const {data:gifs} = result.current
        await waitForNextUpdate()
        expect( gifs.data ).toEqual([])

    })


    test('Debe retornar un arreglo de imagenes', async() => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://api.giphy.com/v1/gifs/search?api_key=TSwctyoT1ZKon74EIDnDGdGY5QTz9Ezj&q=$cats&limit=12&offset=0&rating=g&lang=en'))
        await waitForNextUpdate()
        const {data:gifs} = result.current
        expect( gifs.data.length ).toBe(12)

    }) 
    
    
})
