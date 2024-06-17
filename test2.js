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


  getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmissions]){
      //determine if assignments are matching based off the inputs
    if(AssignmentGroup.course_id != CourseInfo.id){ 
        console.log("incorrect course")
    }
    continue;
    // I will push an object into this array at the end
    const learnerData = [];
   //Im looping over an array to get student/learnerID info which will be in an object
    LearnerSubmissions.forEach(submission => {
        //first requirement
        const learnerId = submission.learner_id;
        //second requirement
        const assignmentId = submission.assignment_id;

        const assignment = AssignmentGroup.assignments.find(assign => assign.id === assignmentId)
        if(assignment) {
            learnerData.push(learnerId)
        }
    })
    



    let pointsPossible = AssignmentGroup.assignments.pointsPossible
    let score = submission.score
    let scorePercentage = 0

    if (pointsPossible != 0){
        scorePercentage = (score/pointsPossible) * 100
    }
    

    // LearnerSubmissions.forEach((element) => {
    //     let score = element.submission.score

    // })

    let avgScore = score / totalPoints
    console.log(avgScore) 

    

  }

