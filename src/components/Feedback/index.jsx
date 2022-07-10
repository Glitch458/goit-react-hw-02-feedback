const Feedback = ({names, setValues}) => {

  return (
    <div className="feedback">
      <h2 className="header">Please leave feedback</h2>
      {names.map( name => (
        <button
          className="button"
          onClick={() => setValues(name)}
          key={name} 
          type="button">
            {name}
        </button>) )}
    </div>
  )
}

export default Feedback