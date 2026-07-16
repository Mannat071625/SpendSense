export const formatCurrency = (amount) =>{
    return `₹${amount}`;
}

export const formatDate = (date) =>{
    return new Date(date).toLocaleString();
}