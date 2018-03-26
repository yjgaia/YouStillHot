# You Still Hot
AWS Lambda 및 Google Cloud Functions의 Cold Start 문제를 해결하기 위한 스케줄러 애플리케이션

1분에 한번씩 요청을 보내 Warm Start를 유지합니다.

## 설치하기
```
git clone https://github.com/Hanul/YouStillHot
```

## 설정
`config.json` 파일을 수정합니다.
```javascript
{
	"urls": [
		"{{URL 1}}",
		"{{URL 2}}",
		"{{URL 3}}"
	]
}
```

## 실행
```
node YouStillHot.js
```
```
forever start YouStillHot.js
```

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)