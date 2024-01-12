import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    Quantity: {
        type: Number,
        default: 0,
    },
});

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required:true,
    },
    Customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    OrderItems: {
        type :[orderItemSchema],
    },
    Address: {
        type : String,
        required:true,
    },
    status: {
        type: String,
        enum: ["pending", "cancelled", "delievered"],
        default: "pending",
    },

}, { timestamps: true });



export const Order = mongoose.model('Order', orderSchema);