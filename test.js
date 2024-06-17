// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
//   let sum = 0
//   let total = AssignmentGroup.assignments.forEach((element) => {
   
//       sum += element.points_possible
//       return sum
//   }
  
//   )

//   console.log(total)

function getTotalScore (learnerId, assignmentGroup, learnerSubmissions)
  {const LearnerSubForID = LearnerSubmissions.filter( e => e.learner_id === learnerId)

    let totalScore = 0
    //Make sure assignments  are correct using assignGroup_ID against assignment_id
    LearnerSubmissions.map((sub) => {
      //let assignment =  AssignmentGroup.assignments.id == LearnerSubmissions.assignment_id;
     // const assignment = assignmentGroup.assignments.find(assign => assign.id === submission.assignment_id);
        const assignment =  AssignmentGroup.assignments.find(e => e.id === sub.assignment_id)  
      if(assignment){
     
         const scoreRatio =   sub.submission.score / AssignmentGroup.assignments.points_possible
         totalScore += scoreRatio
      }
 
       return totalScore
    
    });
  }

const learnerId = 125;
const totalScore = getTotalScore(learnerId, AssignmentGroup, LearnerSubmissions);
console.log("Total Score for Learner:", totalScore);