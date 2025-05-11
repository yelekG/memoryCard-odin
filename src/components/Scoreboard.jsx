export default function Scoreboard({currentScore, bestScore}) {
    return (
        <div className="scoreboard">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Best Score: {bestScore}</p>
        </div>
    )

}