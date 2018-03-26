require('uppercase-core');

let config = JSON.parse(READ_FILE({
	path : 'config.json',
	isSync : true
}));

let urls = config.urls;

// 4분에 한번씩 요청 발송
INTERVAL(4 * 60, RAR(() => {
	EACH(urls, (url) => {
		GET(url);
	});
}));

console.log(CONSOLE_GREEN('You Still Hot이 실행중입니다...'));
