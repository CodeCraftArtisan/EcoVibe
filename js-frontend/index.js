const dataPie = {
  labels: [
    "planting trees",
    "cleanliness program",
    "helping people",
    "animal safety",
    "feeding the poor",
  ],
  datasets: [
    {
      data: [400, 350, 100, 100, 50],
      backgroundColor: [
        "rgb(190, 243, 192)",
        "rgb(172, 148, 241)",
        "rgb(255, 240, 202)",
        "rgb(249, 207, 100)",
        "rgb(243, 143, 191)",
      ],
      hoverOffset: 4,
    },
  ],
};

const configPie = {
  type: "pie",
  data: dataPie,
  options: {
    color: "white",
    labels: {
      font: {
        size: 30,
      },
    },
  },
};

var chartBar = new Chart(document.getElementById("chartPie"), configPie);
