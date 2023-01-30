import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: {
		type: String,
		required: [ true, 'First name is required' ]
	},
	// Define roles as many you want here
	role: {
		type: String,
		enum: [ 'user', 'admin'],
		default: 'user'
	},

	createdAt: {
		type: Date,
		default: new Date()
	}
});

const User = mongoose.model('user', userSchema);
export default User;
