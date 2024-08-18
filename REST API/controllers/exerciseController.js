import * as exerciseModel from "../models/exerciseModel.js";

/**
 *
 * @param {string} date
 * Return true if the date format is MM-DD-YY where MM, DD and YY are 2 digit integers
 */
function isDateValid(date) {
  // Test using a regular expression.
  // To learn about regular expressions see Chapter 6 of the text book
  const format = /^\d\d-\d\d-\d\d$/;
  return format.test(date);
}

async function createExercise(req, res) {
  const { name, reps, weight, unit, date } = req.body;

  const repsInt = Number(reps);
  const weightInt = Number(weight);

  if (
    name !== undefined &&
    name.length >= 1 &&
    repsInt !== undefined &&
    repsInt > 0 &&
    Number.isInteger(repsInt) &&
    weightInt !== undefined &&
    weightInt > 0 &&
    Number.isInteger(weightInt) &&
    unit !== undefined &&
    (unit === "kgs" || unit === "lbs") &&
    isDateValid(date)
  ) {
    const result = await exerciseModel.createExercise(
      name,
      reps,
      weight,
      unit,
      date
    );
    res.status(201).type("application/json").send(result);
  } else {
    res.status(400).type("application/json").send({ Error: "Invalid request" });
  }
}

async function readManyExercises(req, res) {
  const result = await exerciseModel.readManyExercises();

  res.status(200).type("application/json").send(result);
}

async function readByIdExercise(req, res) {
  const _id = req.params;
  const result = await exerciseModel.readByIdExercise(_id);
  if (result) {
    res.status(200).type("application/json").send(result);
  } else {
    res.status(404).type("application/json").send({ Error: "Not found" });
  }
}

async function updateExercise(req, res) {
  const _id = req.params;
  const { name, reps, weight, unit, date } = req.body;

  const repsInt = Number(reps);
  const weightInt = Number(weight);

  let update = {};
  if (
    _id !== undefined &&
    name !== undefined &&
    name.length >= 1 &&
    repsInt !== undefined &&
    repsInt > 0 &&
    Number.isInteger(repsInt) &&
    weightInt !== undefined &&
    weightInt > 0 &&
    Number.isInteger(weightInt) &&
    unit !== undefined &&
    (unit === "kgs" || unit === "lbs") &&
    isDateValid(date)
  ) {
    (update.name = name),
      (update.reps = repsInt),
      (update.weight = weightInt),
      (update.unit = unit),
      (update.date = date);
  } else {
    return res
      .status(400)
      .type("application/json")
      .send({ Error: "Invalid request" });
  }

  const result = await exerciseModel.updateExercise(_id, update);
  if (result) {
    res.status(200).type("application/json").send(result);
  } else {
    res.status(404).type("application/json").send({ Error: "Not found" });
  }
}

async function deleteExercise(req, res) {
  const _id = req.params;
  const result = await exerciseModel.deleteExercise(_id);

  if (result.deletedCount == 1) {
    res.status(204).send();
  } else {
    res.status(404).type("application/json").send({ Error: "Not found" });
  }
}

export {
  createExercise,
  readManyExercises,
  readByIdExercise,
  updateExercise,
  deleteExercise,
};
