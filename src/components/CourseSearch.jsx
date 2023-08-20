import { changeSearchTerm } from "./store/slices/CourseSlice";
import { useDispatch, useSelector } from "react-redux";

function CourseSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.course.searchTerm;
  });
  const course = useSelector((state) => {
    return state.course.data;
  });
  if (course.length === 0) {
    return (
      <div className="emptyListHeader">
        <h2 className="title is-2">Welcome To Courses Project</h2>
        <p className="is-size-4 has-text-primary">Add a new course now</p>
      </div>
    );
  } else {
    return (
      <div className="listHeader">
        <h3 className="title is-3">My Courses</h3>
        <div className="search field is-horizontal">
          <label className="label">Search</label>
          <input
            className="input"
            onChange={(event) => {
              dispatch(changeSearchTerm(event.target.value));
            }}
            value={searchTerm}
          />
        </div>
      </div>
    );
  }
}

export default CourseSearch;
