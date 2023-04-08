import React from 'react';
import './CourseGoalItem.css';
export default function CourseGoalItem(props){
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };
  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
}