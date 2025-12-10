const courseAction = (newCourse) => {
    return {
        type: "CREATE_COURSE",
        newCourse
    };
}
export default courseAction;