import indexReducer from '../indexReducer';

const initialState = {
    currencies:[]
}
  
describe('Reducer test - Testing initialState, Add_To_Cart and Remove_From_Cart', () => {
  it('should return the initial state', () => {
    expect(indexReducer(undefined, {})).toEqual(initialState);
  });
});