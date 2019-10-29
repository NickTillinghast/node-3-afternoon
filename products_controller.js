module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, description, price, image_url } = req.body;
    dbInstance
      .create_product([name, description, price, image_url])
      .then(() => {
        res.status(200);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ errorMessage: "create something went wrong" });
      });
  },
  getOne: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    dbInstance
      .read_product(id)
      .then(product => {
        res.status(200).send(product);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ errorMessage: "get one went wrong" });
      });
  },
  getAll: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .read_products()
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ errorMessage: "get all went wrong" });
      });
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    const { description } = req.query;

    dbInstance
      .update_product([params.id, query.desc])
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ errorMessage: "update went wrong" });
      });
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;
    dbInstance
      .delete_product(id)
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ errorMessage: "delete went wrong" });
      });
  }
};
