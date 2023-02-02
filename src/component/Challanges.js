import Card1 from './Card';
import './CSS/challanges.css';
function Challanges() {
    const cardInfo = [
        {
            prg: "Server Addition!",
            pnum: "15",
            lix: "Read File",
            lnum: "10"
        },
        {
            prg: "Reverse Gear!",
            pnum: "15",
            lix: "Hidden Files",
            lnum: "20"
        },
        {
            prg: "Math Beauty!",
            pnum: "95",
            lix: "Unique Flag",
            lnum: "20"
        },
        {
            lix: "Pain in a dash!",
            lnum: "25"
        },
        {
            lix: "Eleven",
            lnum: "30"
        },

    ];

return (
    <div class="cha-ultimate">
        <div className="class">
            <h1 className="challange">Challanges</h1>
        </div>
        <div>
            <h4 class="font"> Programming</h4>
        </div>
        <div class="one">
            <Card1 cardName={cardInfo[0].prg} cardNum={cardInfo[0].pnum} ></Card1>
            <Card1 cardName={cardInfo[1].prg} cardNum={cardInfo[1].pnum} ></Card1>
            <Card1 cardName={cardInfo[2].prg} cardNum={cardInfo[2].pnum} ></Card1>
        </div>
        <div>
            <h4 class="font"> Linux</h4>
        </div>
        <div class="one">
            <Card1 cardName={cardInfo[0].lix} cardNum={cardInfo[0].lnum} ></Card1>
            <Card1 cardName={cardInfo[1].lix} cardNum={cardInfo[1].lnum} ></Card1>
            <Card1 cardName={cardInfo[2].lix} cardNum={cardInfo[2].lnum} ></Card1>
            <Card1 cardName={cardInfo[3].lix} cardNum={cardInfo[3].lnum} ></Card1>
        </div>

    </div>

);
}
export default Challanges;
