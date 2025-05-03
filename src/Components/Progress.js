import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./progress.css";

export default function Progress(props) {
  const [member, setmember] = useState({});
  const reportRef = useRef();

const downloadPDF = () => {
  const input = reportRef.current;

  const originalStyle = input.getAttribute("style");
  input.setAttribute("style", "background-color: white; color: black;");

  html2canvas(input, { scale: 2, backgroundColor: "#fff" }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${member?.name || "user"}_report.pdf`);

    // Restore original style
    if (originalStyle !== null) {
      input.setAttribute("style", originalStyle);
    } else {
      input.removeAttribute("style");
    }
  });
};


  return (
    <div className="progress">
      <div className="select">
        {!props.islogedin ? (
          <div>Please login first</div>
        ) : (
          <select
            id="relation"
            name="relation"
            onChange={(e) => {
              const selectedMember = props.user.family.find(
                (relation) => relation._id === e.target.value
              );
              setmember(selectedMember);
            }}>
            <option value="">-- Select Member --</option>
            {props.user.family.map((relation, index) => (
              <option key={index} value={relation._id}>
                {relation.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <button className="download-btn" onClick={downloadPDF}>
        Download Report as PDF
      </button>

      <div ref={reportRef}>
        <div className="heartData">
          <h1>Heart Data</h1>
          {member?.heartPredictions?.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Age</th>
                  <th>Sex</th>
                  <th>Chest Pain</th>
                  <th>BP</th>
                  <th>Cholesterol</th>
                  <th>FBS</th>
                  <th>ECG</th>
                  <th>Max HR</th>
                  <th>Exercise Angina</th>
                  <th>Oldpeak</th>
                  <th>Slope</th>
                  <th>Percentage</th>
                  <th>Prediction</th>
                </tr>
              </thead>
              <tbody>
                {member.heartPredictions.map((data, index) => (
                  <tr key={index}>
                    <td>{member.age}</td>
                    <td>{member.gender}</td>
                    <td>{data.cp}</td>
                    <td>{data.trestbps}</td>
                    <td>{data.chol}</td>
                    <td>{data.fbs}</td>
                    <td>{data.restecg}</td>
                    <td>{data.thalach}</td>
                    <td>{data.exang}</td>
                    <td>{data.oldpeak}</td>
                    <td>{data.slope}</td>
                    <td>{data.percentage}</td>
                    <td>{data.percentage > 50 ? "At Risk" : "Healthy"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No heart prediction data available</p>
          )}
        </div>

        <div className="diabetesData">
          <h1>Diabetes Data</h1>
          {member?.diabetesPredictions?.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Pregnancies</th>
                  <th>Glucose</th>
                  <th>Blood Pressure</th>
                  <th>Skin Thickness</th>
                  <th>Insulin</th>
                  <th>BMI</th>
                  <th>Diabetes Pedigree</th>
                  <th>Age</th>
                  <th>Percentage</th>
                  <th>Prediction</th>
                </tr>
              </thead>
              <tbody>
                {member.diabetesPredictions.map((data, index) => (
                  <tr key={index}>
                    <td>{data.Pregnancies}</td>
                    <td>{data.Glucose}</td>
                    <td>{data.BloodPressure}</td>
                    <td>{data.SkinThickness}</td>
                    <td>{data.Insulin}</td>
                    <td>{data.BMI}</td>
                    <td>{data.DiabetesPedigreeFunction}</td>
                    <td>{member.age}</td>
                    <td>{data.percentage}</td>
                    <td>{data.percentage > 50 ? "At Risk" : "Healthy"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No diabetes prediction data available</p>
          )}
        </div>
      </div>
    </div>
  );
}
