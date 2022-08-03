const Jokes = (prop) => {
    return(
        <div className="jokeContainer">
            {prop.setup && <h3 className="setup">{prop.setup}</h3>}
            <p className="punchline">{prop.punchline}</p>
        </div>
    )
}

export default Jokes;