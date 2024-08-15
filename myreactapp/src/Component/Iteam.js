import './Iteam.css'
function Iteam(props){
    const name = "Nirma"
    return(
        <div>
            {props.children}
            <div className = 'Nirma'>{props.name}</div>  
        </div>

    );

}
export default Iteam