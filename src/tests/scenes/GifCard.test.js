import React from 'react'
import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
import GifCard from '../../scenes/gifcard/GifCard'

describe('Pruebas componente <GifCard/>', () => {
    
    test('GifCard se renderiza correctamente', () => {

        const url= 'https://localhost/gif.jpg'
        const wrapper = shallow( <GifCard gifurl={url}/> )
        
        expect( wrapper ).toMatchSnapshot()
        
    })

}) 