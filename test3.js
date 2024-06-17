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


  function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions){
   let learnerData = [];

   LearnerSubmissions.forEach((submission) => {
    let learnerId = submission.learner_id;
    let assignmentId = submission.assignment_id;

       let assignment = AssignmentGroup.assignments.find(assign => assign.id == assignmentId)
       if(assignment){
           const pointsPossible = assignment.points_possible;
           const score = submission.submission.score

           let scorePercentage = 0;
           if(pointsPossible !== 0){
               scorePercentage = (score / pointsPossible) * 100
           }

           const newEntry = {
               id: learnerId,
               avg: 0,
               [assignmentId]: scorePercentage
           };

           learnerData.push(newEntry)
       } else {
        console.log(`Assignmnmet not found`)  
      }
   }); 
   learnerData.forEach((learner) => {
       let totalPoints = 0;
       let weightedSum = 0;

       AssignmentGroup.assignments.forEach((assignment) => {
           const assignmentId = assignment.id
           const pointsPossible = assignment.points_possible;

           if(learner.hasOwnProperty(assignmentId)) {
               totalPoints += pointsPossible
               weightedSum += (learner[assignmentId] / 100) * pointsPossible
           }
       });

       if(totalPoints !=0) {
           learner.avg = (weightedSum / totalPoints) * 100
       }

   });
  return learnerData

  }

  const learnerData = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions)
  console.log(learnerData)