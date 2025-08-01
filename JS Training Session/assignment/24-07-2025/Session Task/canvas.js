 window.onload = function () {
      var chartExam = new CanvasJS.Chart("chartContainerExam", {
        animationEnabled: true,
        title: { text: "Engineering Exam Scores - Semester 1" },
        axisY: {
          title: "Score",
          maximum: 100
        },
        data: [
          {
            type: "column",
            dataPoints: [
              { label: "Maths", y: 85 },
              { label: "Physics", y: 78 },
              { label: "Mechanics", y: 90 },
              { label: "Electrical", y: 88 },
              { label: "Programming", y: 95 }
            ]
          }
        ]
      });
      chartExam.render();

      var pieChart = new CanvasJS.Chart("pieChartContainer", {
        animationEnabled: true,
        title: {
          text: "Subject-wise Score Distribution"
        },
        data: [
          {
            type: "pie",
            startAngle: 240,
            indexLabel: "{label} - {y}%",
            dataPoints: [
              { y: 30, label: "Maths" },
              { y: 25, label: "Physics" },
              { y: 15, label: "Mechanics" },
              { y: 20, label: "Electrical" },
              { y: 10, label: "Programming" }
            ]
          }
        ]
      });
      pieChart.render();

      var lineChart = new CanvasJS.Chart("lineChartContainer", {
        animationEnabled: true,
        title: {
          text: "Engineering Weekly Test Scores"
        },
        axisY: {
          title: "Score",
          maximum: 100
        },
        data: [
          {
            type: "line",
            dataPoints: [
              { label: "Week 1", y: 72 },
              { label: "Week 2", y: 75 },
              { label: "Week 3", y: 80 },
              { label: "Week 4", y: 85 },
              { label: "Week 5", y: 89 }
            ]
          }
        ]
      });
      lineChart.render();
    };