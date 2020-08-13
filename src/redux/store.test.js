import { createStore } from 'redux';
import rootReducer from './reducers';
import initalState from './reducers/initialState';
import * as courseActions from './actions/courseActions';

it("Should handle creating courses", function () {
    //arrange
    const store = createStore(rootReducer, initalState);
    const course = {
        title: "Clean Code"
    };

    //act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    //assert
    const createdCourse = store.getState().courses[0];
    expect(createdCourse).toEqual(course);
});