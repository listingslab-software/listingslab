const orderByEpoch = ( epochArray, epochField) => {
	if ( !epochArray.length ) return []
	console.log ( 'orderByEpoch', epochArray, epochField)
	var ea = []
	ea = [...epochArray]
    return ea.sort((a, b) => (a[epochField] > b[epochField]) ? -1 : 1)
}
export default orderByEpoch