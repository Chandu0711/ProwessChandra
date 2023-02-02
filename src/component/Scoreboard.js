import './CSS/styles.css';
import Scoretable from './Scoretable';
function Scoreboard(){
    return(
        <div class="scoreultimate">
            <div className="heading">
                <h1 className="score">Scoreboard</h1>
            </div>
            <div><Scoretable></Scoretable></div>
    </div>
    );
}
export default Scoreboard;
