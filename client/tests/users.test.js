import Users from '../pages/users';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

const mocks = [{
    request: {
        query: users
    },
    result: {
        data:{
            users:[
                {
                    name: 'test name 1',
                    address: 'test address 2'
                },
                {
                    name: 'test name 2',
                    address: 'test address 2'        
                }
            ]
        }
    }
}]

describe("Index page", () => {
    it("should render", () => {
      
        render(<MockedProvider mocks={mocks} addTypename={false}>
                <Users />
                </MockedProvider>);
    });
});