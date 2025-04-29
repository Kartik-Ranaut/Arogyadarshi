import React from "react";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import "./models.css";

const Models = () => {
  // Dummy data for performance metrics (Bar and Pie charts)
  const barChartData = {
    labels: ["Accuracy", "Precision", "Recall", "F1-Score"],
    datasets: [
      {
        label: "SVM Model",
        data: [0.85, 0.78, 0.75, 0.76],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Logistic Regression",
        data: [0.82, 0.74, 0.7, 0.72],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const pieChartData = {
    labels: ["SVM Accuracy", "Logistic Regression Accuracy"],
    datasets: [
      {
        data: [85, 82],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div className="models-container">
      <h2>Model Explanation and Use Case</h2>

      <div className="model">
        <h3>Support Vector Machine (SVM)</h3>
        <p>
          SVM is a powerful algorithm for classification, especially in
          high-dimensional spaces. It works by finding a hyperplane that best
          separates the data points into distinct classes.
        </p>
        <p>
          **Use Case**: In our heart disease prediction system, SVM is used to
          classify patients based on various health parameters, separating those
          at high risk from those at low risk.
        </p>
      </div>

      <div className="model">
        <h3>Logistic Regression (LR)</h3>
        <p>
          Logistic Regression is a statistical model used for binary
          classification. It predicts the probability that a given input belongs
          to a certain class, typically used for determining outcomes like risk
          or disease presence.
        </p>
        <p>
          **Use Case**: Logistic Regression is used in our diabetes prediction
          system, where the model helps determine whether a person is at risk
          for diabetes based on various health metrics. 
        </p> 
      </div>

      <div className="model">
        <h3>Performance Metrics Visualization</h3>
        <p>
          Here’s how our models perform in terms of Accuracy, Precision, Recall,
          and F1-Score:
        </p>
        <div className="chart-container">
          <Bar data={barChartData} options={{ responsive: true }} />
        </div>
        <div className="chart-container">
          <Pie data={pieChartData} options={{ responsive: true }} />
        </div>
      </div>

      <div className="model">
        <h3>Model Evolution and Improvements</h3>
        <p>
          Initially, we used simple Logistic Regression for binary
          classification of heart disease. Over time, we integrated more
          advanced techniques such as Support Vector Machines (SVM) for
          higher-dimensional data classification.
        </p>
        <p>
          We continuously improve our models by incorporating additional data
          features, fine-tuning hyperparameters, and validating using
          cross-validation techniques. We also explore new algorithms and
          advanced feature engineering techniques to enhance predictive accuracy
          and robustness.
        </p>
      </div>

      <div className="model">
        <h3>Model Performance and Tuning</h3>
        <p>
          Both models are tuned using cross-validation and metrics like
          accuracy, precision, and recall to ensure reliability and precision in
          predictions.
        </p>
      </div>
    </div>
  );
};

export default Models;
