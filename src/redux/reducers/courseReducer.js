import * as types from '../actions/actionTypes'

export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            //state.push(action.course); It comes natural but it is WRONG ! This mutates state and state is immutable!
            //We should return modified copy of state!
            //Whatever is returned from reducer becomes new state for that particular reducer!
            return [...state, { ...action.course }];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        //Always return default state. If the reducer receivse action that it doesn't care about
        //it should return the unchaged state
        default:
            return state
    }
}

// For large data sets we can store by ID instead
// E.G. const courses = {
//     1:  {id: 1, title: "Course1"}
//     2:  {id: 2, title: "Course2"}
// }
//In our data set we can use courses.find(course => course.id == 2) to find course with id 2
//With the object data set we can  get the course by accessing the data set directly courses[2] which is performance benefitial
//More info about the pattern in Normalizing State Shape in Redux documentation