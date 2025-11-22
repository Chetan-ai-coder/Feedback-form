import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'Please provide your name',],
        maxlength: [50, 'Name can not be more than 50 characters',],
        minlength:[3, 'Name can not be less than 3 characters',]
    },

    courseName: {
        type: String,
        required: [true, 'Please select a course',],
    },

    starRating: {
        type: Number,
        required: [true, 'Please provide a rating'],
        min: [1, 'Rating must be at least 1',],
        max:[5, 'Rating can not be more than 5'],
    },

    descriptionFeedback: {
        type: String,
        required: [true, 'Plese provide an detailed feedback so we can improve ourself'],
        trim: [true],
    },

    createdAt: {
        type: Data,
        default: Date.now,
        immutable: true,
    }
});

const Feedback = mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);

export default Feedback;