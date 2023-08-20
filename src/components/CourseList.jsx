import { useDispatch, useSelector } from "react-redux";
import { removeCourse } from "./store/slices/CourseSlice";

function CourseList() {
  const dispatch = useDispatch();
  const { course } = useSelector(({ form, course: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      course: filteredCourses,
    };
  });
  const renderedCourses = course.map((course, i) => {
    return (
      <div key={i} className="panel animate__animated animate__bounceInLeft">
        <h1>
          <span className="is-size-3 has-text-info-dark">Name :</span>{" "}
          {course.name}
        </h1>
        <p>
          <span className="is-size-4 has-text-info-dark">Description :</span>{" "}
          {course.description}
        </p>
        <p>
          <span className="is-size-5 has-text-info-dark">Cost :</span>{" "}
          {course.cost} USD
        </p>
        <button
          className="button is-danger"
          onClick={() => {
            dispatch(removeCourse(course.id));
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  return <div className="courseList">{renderedCourses}</div>;
}

export default CourseList;
