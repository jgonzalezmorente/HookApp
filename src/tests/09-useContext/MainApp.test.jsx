import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routesConfig } from '../../09-useContext/routesConfig';

describe('Pruebas en <MainApp />', () => {

    test( 'Debe de mostrar el HomePage', () => {

        const router = createMemoryRouter( routesConfig, { initialEntries: ['/'] } );
        render( <RouterProvider router={router} /> );

        expect( screen.getByText( 'HomePage' ) ).toBeTruthy();

    });

    test( 'Debe de mostrar el LoginPage', () => {

        const router = createMemoryRouter( routesConfig, { initialEntries: ['/login'] } );
        render( <RouterProvider router={router} /> );

        expect( screen.getByText( 'LoginPage' ) ).toBeTruthy();        

    });
    
});