function camelize(str){
	return str
	.split('-')
	.map(
	function(word, index){
		if (index == 0){
			return word;
		}
		return word[0].toUpperCase() + word.slice(1);
		})
	.join('');
	}
