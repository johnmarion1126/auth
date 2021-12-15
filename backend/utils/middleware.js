const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' });
}

const errorHandler = (err, req, res, next) => {
    console.error(err.message);

    if (err.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' });
    } else if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
    }

    next(err);
}

export { unknownEndpoint, errorHandler };
