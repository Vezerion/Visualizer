import { useSelector } from "react-redux";

const Description = () => {
const description = useSelector(({description}) => description.text) 
const styles ={
    marginTop: '100px',
    fontSize: '30px',
  }
    return (
        <div style={styles}>
            {description}
        </div>
    )
}

export default Description;