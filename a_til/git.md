## Web-factory

````shell
[글머리] 작성된 data요약 (file명) : 설명 ( )
````

#### 앞 글머리로 붙이는 형태

- **feat** : 새로운 기능에 대한 커밋
- **fix** : 버그 수정에 대한 커밋
- **build** : 빌드 관련 파일 수정에 대한 커밋
- **Petty** : 그 외 자잘한 수정에 대한 커밋
- **ci** : CI관련 설정 수정에 대한 커밋
- **docs** : 문서 수정에 대한 커밋
- **style** : 코드 스타일 혹은 포맷 등에 관한 커밋
- **Refactoring** : 코드 리팩토링에 대한 커밋
- **test** : 테스트 코드 수정에 대한 커밋

---

#### 중간 아이콘 처리

- :new:새로운 문서 또는 세팅  
- :ab: 단계별 체크

- :ambulance: 긴급 수정(오탈자 등)
- :airplane: 웹 배포 및 웹 확인 테스트
- :arrow_backward: 이슈 발생으로 이전단계로 수정
- :notebook: doc 메모

---

## 깃 명령어

- ```git clone '주소'``` : repository에 자료를 받아서 사용
- ```git status``` : 현재 작성중인 디렉토리 기준 내가 위치한 부분 상태파악 
- ```git add [ 첨부파일 ]``` : git으로 보낼 자료 선택
- ```git commit -m '설명'``` : 보낼 자료에 대한 설명
- ```git push``` : 자료 전송
- ```git push --origin-upstream``` : 최초의 상태에서 자료를 보내는 경우 ( 브랜치를 생성하더라도 동일 )
- ```git pull``` : 자료 추가로 받아오기
- ```git branch -a``` : branch 목록 받아오기 ( 현재 디렉토리 뿐 아니라, 서버의 자료까지 받아오는 것 )
- ```git checkout [ 브랜치 명 ]``` : 해당 브랜치로 이동
- ```git checkout -b [ 브랜치 명 ]``` : 현재 디렉토리에는 없으나 서버에 존재하는 자료를 받아오게 처리
- ```git merge [ 브랜치 명 ]``` : 해당 branch를 병합 처리
- ```git branch -d [ 브랜치 명 ]``` : 선택된 브랜치는 삭제 ( local )
- ```git push origin --delete [ 브랜치 명 ]``` : git 사이트에 존재하는 branch를 삭제
- ```git reset HEAD~n``` : git 현재 내용을 이전 n 단계만큼 이전상태로 처리
- ```git revert HEAD~n``` : git reset과 유사하지만, n 단계만큼 이전상태의 내용을 현재로 복사하여 가져오는 기능

---

#### 프로젝트 구성

##### HTML 이름 구성



---

**JS에서 변수 이름 설정**

1. element 선택자 : 변수명 앞에 ```el``` 첨부 > ```elDIv```
2. element 생성 : 변수명 앞에 ```mk``` 첨부 > mkUl
3. function 생성 : 변수명 앞에 ```fn``` 을 첨부 > ```fnFunction```

4. 지역변수 생성 / 선택 : 변수명 앞에 ```_``` 를 첨부 > _div
5. 생성자 함수 : 변수명을 ```PascalCase``` 방식 > FnData
6. 정해진 조건의 일부를 판단 : 변수명앞에 ```ck``` 첨부 > ckIndex
7. string형태의 변수 : 변수명을 대문자로 > OPTION_STRING
8. 이외 단순한 형태(반복문용 변수 등) : 변수명을 1~3글자 이내의 형태 > ```i,  j, l,n, ...```



**JS**



