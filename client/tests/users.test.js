import Users from '../pages/users';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { gql } from '@apollo/client';
import client from '../apollo.config'

jest.mock('../apollo.config', ()=> {
jest.fn()
})

const USER_QUERY = gql`
query Users($offset: Int, $limit: Int) {
  users(offset: $offset, limit: $limit) {
  name
  phoneNumber
}}`

const mocks = [{
    client: client,
    request: {
        query: USER_QUERY
    },
    result: {
        data:{
            users:[
                {
                    name: 'test name 1',
                    address: '890352234'
                },
                {
                    name: 'test name 2',
                    address: '235524635'        
                }
            ]
        }
    }
    }]

describe("Index page", () => {
 
it("should render", async () => {
    const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
            <Users />
            </MockedProvider>);
        await new Promise(resolve => setTimeout(resolve, 0));
        const p = component.root.findAllByType('a');
        expect(p[0].children.join('')).toContain('Home');
});

it("should throw error for user details", async () => {
    const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
            <Users />
            </MockedProvider>);
        await new Promise(resolve => setTimeout(resolve, 0));
        const p = component.root.findByType('p');
        expect(p.children.join('')).toContain('error');
});

});
