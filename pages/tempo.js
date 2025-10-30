function Tempo() {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <h1>Data e hora atual:</h1>
            <h2>{dynamicDateString}</h2>
        </div>
    )   
}