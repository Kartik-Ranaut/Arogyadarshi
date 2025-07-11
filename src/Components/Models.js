import React from "react";
import { Bar } from "react-chartjs-2";
import "./models.css";

const Models = () => {
  const barChartData1 = {
    labels: ["0.2", "0.3", "0.5"],
    datasets: [
      {
        label: "SVM",
        data: [82, 82, 85],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Logistic Regression",
        data: [82, 85, 83],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  const barChartData2 = {
    labels: ["0.2", "0.3", "0.5"],
    datasets: [
      {
        label: "SVM",
        data: [77, 77, 77],
        backgroundColor: ["#36A2EB"],
      },
      {
        label: "Logistic Regression",
        data: [75, 76, 77],
        backgroundColor: ["#FF6384"],
      },
    ],
  };
  return (
    <div className="models-container">
      <h2>Model Explanation and Use Case</h2>

      <div className="model">
        <h3>Support Vector Machine (SVM)</h3>
        <p>
          Support Vector Machines (SVMs) are supervised learning models widely
          used for classification tasks, particularly effective in handling
          high-dimensional and complex datasets. The core idea of SVM is to find
          the optimal hyperplane that maximizes the margin between two classes
          of data. By using kernel tricks, SVMs can transform data into higher
          dimensions where it becomes linearly separable, allowing for more
          accurate classification even with non-linear relationships.
          <br></br>
          SVMs are robust to overfitting, especially in cases where the number
          of features exceeds the number of samples, making them highly suitable
          for medical diagnosis problems.
        </p>
        <p>
          <strong>Use Case:</strong> In our heart disease prediction system, the
          SVM model processes health indicators such as blood pressure,
          cholesterol levels, and BMI to distinguish between high-risk and
          low-risk individuals. Its ability to handle multi-dimensional decision
          boundaries helps improve classification performance in nuanced patient
          data.
        </p>
      </div>

      <div className="model">
        <h3>Logistic Regression (LR)</h3>
        <p>
          Logistic Regression is a foundational statistical model used for
          binary classification. It estimates the probability that an input
          belongs to a certain category using the logistic (sigmoid) function.
          Unlike linear regression, it constrains the output between 0 and 1,
          making it suitable for classification tasks like disease prediction.
          <br></br>
          Logistic Regression provides interpretable coefficients that indicate
          the direction and magnitude of feature contributions. This
          transparency is particularly important in healthcare applications
          where decision accountability is crucial.
        </p>
        <p>
          <strong>Use Case:</strong> In our diabetes risk assessment module,
          Logistic Regression is used to evaluate features such as glucose
          levels, insulin, BMI, age, and lifestyle factors. The model predicts
          whether an individual falls into a diabetic risk category, aiding
          early diagnosis and preventive care strategies.
        </p>
      </div>

      <div className="model con">
        <h3>Performance Metrics Visualization</h3>
        <p>
          Here’s how our models perform in terms of Accuracy for various test
          size splits:
        </p>
        <div className="chart-wrapper">
          <div className="chart-container bar-chart">
            <Bar
              data={barChartData1}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    labels: { color: "#fff" },
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Test Split Size",
                      color: "#fff",
                      font: {
                        size: 14,
                      },
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: "Model Accuracy (%)",
                      color: "#fff",
                      font: {
                        size: 14,
                      },
                    },
                    beginAtZero: true,
                  },
                },
              }}
            />
            <div className="dis">
              ACCURACY RESULTS FOR HEART DISEASE DETECTION
            </div>
          </div>

          <div className="chart-container">
            <Bar
              data={barChartData2}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    labels: { color: "#fff" },
                  },
                },
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "Test Split Size",
                      color: "#fff",
                      font: {
                        size: 14,
                      },
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: "Model Accuracy (%)",
                      color: "#fff",
                      font: {
                        size: 14,
                      },
                    },
                    beginAtZero: true,
                  },
                },
              }}
            />
            <div className="dis">ACCURACY RESULTS FOR DIABETES DETECTION</div>
          </div>
        </div>
      </div>

      <div className="model">
        <h3>Model Performance and Tuning</h3>
        <p>
          Both models are tuned using cross-validation and metrics like
          accuracy, precision, and recall to ensure reliability and precision in
          predictions.
        </p>
        <p>
          We continuously improve our models by incorporating additional data
          features, fine-tuning hyperparameters, and validating using
          cross-validation techniques. We also explore new algorithms and
          advanced feature engineering techniques to enhance predictive accuracy
          and robustness.
        </p>
      </div>
    </div>
  );
};

export default Models;
