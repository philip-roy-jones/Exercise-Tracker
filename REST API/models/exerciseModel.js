import mongoose from "mongoose";

const EXERCISE_DB_NAME = 'exercise_db';
const EXERCISE_CLASS_NAME = 'Exercise';

let connection = undefined;
let Exercise = undefined;

async function connect(MONGODB_CONNECT_STRING) {
    try {
        connection = await mongoose.connect(MONGODB_CONNECT_STRING, {dbName: EXERCISE_DB_NAME});
        console.log('Successfully connected to MongoDB')
        Exercise = await createModel()
    } catch(error) {
        console.error(error);
        throw Error(`Could not connect to MongoDB ${error.message}`)
    }
}

async function createModel() {
    const exerciseSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return v && v.trim().length > 0;
                },
                message: 'Name must be a non-empty string.'
            }
        },
        reps: {
            type: Number,
            required: true,
            validate: {
                validator: Number.isInteger,
                message: 'Reps must be an integer.'
            },
            min: [1, 'Reps must be greater than 0.']
        },
        weight: {
            type: Number,
            required: true,
            validate: {
                validator: Number.isInteger,
                message: 'Weight must be an integer.'
            },
            min: [1, 'Weight must be greater than 0.']
        },
        unit: {
            type: String,
            required: true,
            enum: {
                values: ['kgs', 'lbs'],
                message: 'Unit must be either "kgs" or "lbs".'
            }
        },
        date: {
            type: String,
            required: true,
            validate: {
                validator: function(v) {
                    return /^\d\d-\d\d-\d\d$/.test(v);
                },
                message: 'Date must be in the format MM-DD-YY.'
            }
        }
    }, { strict: true });                                                   // Doesn't allow properties not present in the schema to be added
    return mongoose.model(EXERCISE_CLASS_NAME, exerciseSchema);
}

async function createExercise(name,reps,weight,unit,date) {
    const newExercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date})
    const savedUser = await newExercise.save()

    return savedUser;
}

async function readManyExercises() {
    const exercises = await Exercise.find()
    return exercises;
}

async function readByIdExercise(id) {
    return await Exercise.findById(id)
}

async function updateExercise(id, update) {
    await Exercise.updateOne({_id: id}, {$set: update})
    return await Exercise.findById(id)
}

async function deleteExercise(id) {
    return await Exercise.deleteOne({_id: id})
}

export {connect, createExercise, readManyExercises, readByIdExercise, updateExercise, deleteExercise};