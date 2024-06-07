const Progress = ({ label, value }) => {
  return (
    <div className="progress-wrapper">
      <h5>{label}</h5>
      <div className="progress mb-2" role="progressbar" aria-label="Basic example" aria-valuenow={value} aria-valuemin="0" aria-valuemax="5">
        <div className="progress-bar" style={{ width: `${value * 20}%` }}></div>
      </div>
    </div>
  )
}

export default Progress