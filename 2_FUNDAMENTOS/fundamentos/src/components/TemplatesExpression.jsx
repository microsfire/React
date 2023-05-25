const TemplatesExpression = () => {
    // Aqui e Javascript puro
    const name = 'Marcio';

    const data = {
        age: 36,
        jobs: 'Hacker'
    };

    return(
        <div>
            {/* Aqui é JSX */}
            <h2>Óla {name}, tudo bem?</h2>
            <p>Voce é um {data.jobs}!</p>
        </div>
    );
};

export default TemplatesExpression;