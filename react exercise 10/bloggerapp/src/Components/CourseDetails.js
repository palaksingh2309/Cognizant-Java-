import React, { useState } from 'react';

const coursesData = [
  {
    id: 'course-301',
    name: 'React Native & Expo: Mobile Engineering',
    instructor: 'David Miller',
    duration: '22 Hours',
    rating: '4.8 ★',
    fee: '$129',
    level: 'Intermediate',
    description: 'Learn to compile native iOS and Android apps using React syntax, custom native modules, camera integrations, and geolocation APIs.'
  },
  {
    id: 'course-302',
    name: 'Intro to React & Component Lifecycles',
    instructor: 'Laura Chen',
    duration: '10 Hours',
    rating: '4.6 ★',
    fee: '$49',
    level: 'Beginner',
    description: 'Perfect for beginners. Master elements, JSX syntax, props, basic functional hooks, and styling structures from scratch.'
  },
  {
    id: 'course-303',
    name: 'Advanced React Architecture and Performance',
    instructor: 'Kent C. Dodds',
    duration: '35 Hours',
    rating: '4.9 ★',
    fee: '$199',
    level: 'Advanced',
    description: 'Deep dive into concurrent rendering, state machine structures, custom hooks performance audits, code splitting, and memoization.'
  },
  {
    id: 'course-304',
    name: 'State Management with Redux Toolkit',
    instructor: 'Siddharth Roy',
    duration: '15 Hours',
    rating: '4.7 ★',
    fee: '$89',
    level: 'Intermediate',
    description: 'Learn standard global store setups, actions, reducers, RTK Query caching triggers, and side-effect middleware integrations.'
  }
];

function CourseDetails() {
  const [selectedLevel, setSelectedLevel] = useState('ALL');

  // Filter courses based on difficulty level selector
  const filteredCourses = selectedLevel === 'ALL' 
    ? coursesData 
    : coursesData.filter(course => course.level === selectedLevel);

  // OBJECTIVE: Explain element variables
  // We declare the variable `courseContent` and conditionally assign JSX trees to it.
  let courseContent;

  if (filteredCourses.length > 0) {
    courseContent = (
      <div className="courses-grid animate-fade-in">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-card-header">
              <span className={`level-badge ${course.level.toLowerCase()}`}>
                {course.level}
              </span>
              <span className="rating">{course.rating}</span>
            </div>
            <h4>{course.name}</h4>
            <p className="instructor">Instructor: <strong>{course.instructor}</strong></p>
            <p className="course-desc">{course.description}</p>
            
            <div className="course-card-footer">
              <div className="duration">⏱️ {course.duration}</div>
              <div className="price-badge">{course.fee}</div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    courseContent = (
      <div className="no-courses-box animate-fade-in">
        <p>No courses currently scheduled for <strong>{selectedLevel}</strong> level.</p>
      </div>
    );
  }

  return (
    <div className="details-container animate-fade-in">
      <div className="sub-header">
        <h3>🎓 Training Courses</h3>
        <p>Browse our engineering syllabus. Filter by experience levels using the buttons below.</p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {['ALL', 'Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
          <button 
            key={lvl}
            className={`filter-tab-btn ${selectedLevel === lvl ? 'active' : ''}`}
            onClick={() => setSelectedLevel(lvl)}
          >
            {lvl}
          </button>
        ))}
      </div>

      {/* Render the dynamically resolved Element Variable content */}
      {courseContent}

    </div>
  );
}

export default CourseDetails;
