import { Button } from "@mui/material"
import {ButtonGroup} from "@mui/material"

const Feedback = ({options, onLeaveFeedback}) => {

  return (
    <div>
      <ButtonGroup variant="contained">
      {options.map( name => (
        <Button
          onClick={() => onLeaveFeedback(name)}
          key={name} 
          type="button">
            {name}
        </Button>) )}
      </ButtonGroup>
    </div>
  )
}

export default Feedback