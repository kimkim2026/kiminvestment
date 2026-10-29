## 새 글 배포 규칙
새 글을 추가하거나 이미지를 바꿀 때는 커밋 전에 반드시 다음 순서로 진행한다.
1. 새 이미지를 public/images/blog/ 에 넣었다면 npm run images 실행
2. npm run images가 실패하면(404 발견) 해당 이미지를 다른 Unsplash 사진으로 교체하고 다시 실행
   - 사이트에서 이미 쓰는 사진 ID 재사용 금지
   - 이미지 파일은 Read로 열지 말 것 (연결이 끊기는 문제가 있음)
3. npm run build
4. git add . && git commit && git push origin main
5. 결과 보고에 압축 전후 용량과 404 검사 결과 포함
