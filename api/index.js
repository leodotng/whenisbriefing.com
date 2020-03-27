const getTime = (request, response) => {
  pool.query("SELECT * FROM time ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getTimeById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query("SELECT * FROM time WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
