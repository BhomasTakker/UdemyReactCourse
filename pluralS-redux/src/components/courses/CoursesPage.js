import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends React.Component {
  //constructor(props) {
  //  super(props);
  state = {
    course: {
      title: "",
    },
  };

  //}
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
    console.log("submitted");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Course</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}
CoursesPage.PropTypes = {
  dispatch: PropTypes.func.isRequired,
};
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
  };
}
// function mapDispatchToProps(){

// }mapDispatchToProps
export default connect(mapStateToProps)(CoursesPage);
