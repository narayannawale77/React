import './IteamDate.css'

function IteamDate(props){
    const day  = 20;
    const month = "July";
    const year = "1998";
    return(
        <div className='mfgDate'>
            <span>{props.day}</span>
            <span> {props.month}</span>
            <span> {props.year}</span>
        </div>
    );

}
export default IteamDate;