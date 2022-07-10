const Statistics = ({good, neutral, bad}) => (
  <div className="statistic">
    <h2 className="header">Statistics</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
  </div>
)

export default Statistics