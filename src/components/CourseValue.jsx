import React from "react";
import { useSelector } from "react-redux";

function CourseValue() {
  const totalCost = useSelector(({ form, course: { data, searchTerm } }) => {
    const filteredCourses = data.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    let cost = 0;
    for (let course of filteredCourses) {
      cost += course.cost;
    }
    return cost;
  });

  return (
    <div className="coursePrice animate__animated animate__jello">
      Total Cost : {totalCost} USD
    </div>
  );
}
export default CourseValue;
