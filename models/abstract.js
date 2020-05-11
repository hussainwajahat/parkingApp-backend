var _ = require("lodash");

var controller = function (Model) {
return {
    // Get list of models
    index: function (req, res) {
    Model.find(function (err, models) {
        if (err) {
        return handleError(res, err);
        }
        return res.status(200).json({ status: true, model: models });
    });
    },

    // Get a single model
    show: function (req, res) {
    Model.findById(req.params.id, function (err, model) {
        if (err) {
        return handleError(res, err);
        }
        if (!model) {
        return res.status(404).json({ status: false, message: "Not Found" });
        }
        return res.json({ status: true, model: model });
    });
    },

    // Creates a new model in the DB.
    create: function (req, res) {
    Model.create(req.body, function (err, model) {
        if (err) {
        return handleError(res, err);
        }
        console.log("abstract model : ", model);
        return res.status(200).json({ status: true, model: model });
    });
    },

    // Updates an existing model in the DB.
    update: function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Model.findById(req.params.id, function (err, model) {
        if (err) {
        return handleError(res, err);
        }
        if (!model) {
        return res.status(404).json({ status: false, message: "Not Found" });
        }
        var updated = _.merge(model, req.body);
        Model.update({ _id: req.params.id }, { $set: updated }, {}, function (
        err,
        result
        ) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json({ status: true, model: model });
        });
        // .save(function (err) {

        // });
    });
    },

    // Deletes a model from the DB.
    destroy: function (req, res) {
      //return res.status(200).send('Delete Mechanism has been halted by the admin');
    Model.findById(req.params.id, function (err, model) {
        if (err) {
        return handleError(res, err);
        }
        if (!model) {
        return res.status(404).json({ status: false, message: "Not Found" });
        }
        model.remove(function (err) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(204).send("No Content");
        });
    });
    },

    // find a model from db using condition
    findByCondition: function (req, res) {
    Model.find(req.body, function (err, model) {
        if (err) {
        return handleError(res, err);
        }
        if (!model) {
        return res.status(404).json({ status: false, message: "Not Found" });
        }
        if (model.length == 0) {
        return res.status(200).json({ status: false, model: model });
        }
        return res.status(200).json({ status: true, model: model });
    });
    },
};
function handleError(res, err) {
    return res.status(500).json({ status: false, message: err });
}
};
module.exports = controller;
