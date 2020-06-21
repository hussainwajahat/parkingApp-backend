let lockList = [];

module.exports = function (io) {
	io.on('connection', client => {
        console.log('**socket connected** client ID -> ', client.id)
        
		client.on('updateInfo', function (info, cb) {
			console.log('Requesting change in data', info)
			io.emit('updateDobSSN',info);  
		});

		client.on('disconnect', () => {
			console.log('**socket disconnected** client ID -> ', client.id)
		});
	});

}