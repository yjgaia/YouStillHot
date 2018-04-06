require('uppercase-core');

// 1분에 한번씩 요청 발송
INTERVAL(60, RAR(() => {
	
	let config = JSON.parse(READ_FILE({
		path : 'config.json',
		isSync : true
	}));

	EACH(config.urls, (url) => {
		POST({
			url : url,
			headers : {
				'Content-Type' : 'application/json'
			},
			paramStr : '{"__DONT_COLD_START":true}'
		});
	});
}));

console.log(CONSOLE_GREEN('You Still Hot이 실행중입니다...'));
