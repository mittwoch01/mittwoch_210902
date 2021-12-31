# 웹페이지 구성시 준비사항

1. 기본 자료
   1. 변수 선언 : 색상/font
   2. @mixin 세팅 : font, size, 이미지 ...
   3. reset, common : 작업을 위한 회사의 기본 가이드 

2. 작성 : 코드를 의미있게 작성하는 습관
3. html에서 id 속성은 의미에 맞게 사용 권장. label에서 input과 연동, anker와 연동

4. css에서 선택자 사용시 3단계까지만 유효. (nesting기법에서도 3단계까지만 작성, @at-root)

```
#wrap {
	margin:auto;
	> div {width:100%;}
	@at-root .box {height:300px;}
}
// ----------------------------------
#wrap {margin:auto;}
#wrap > div {width:100%;}
.box {height:300px;}
```

5. 이름 부여시

   - [x] Html 이름 부여 

   1. body 내부 첫 영역을 잡는 요소에 `#wrap`
   2. ``Id` 설정 : camelCase `#wrap`
   3. `class` 설정 : snake_case(under_score) `.box_area`
   4. `name` 설정 : id 이름과 동일하지만 구분형식(double__Under__Score)으로 `_` 를 두개 연속 삽입
   5. naming 방식 : BEM(block_element_modifier) 형태 - 모양 - 수식어 
      - **Level 구성 (element)** : `Box` > `_area` > `_inner` > `_part` > `_content` > `_detail`
      - **상태 처리(class 첨부)** : js에서 Dom 선택자 사용시 
        - hover상태 : `over`
        - 선택(체크)된 상태 :  `select`
        - focus 상태 : `focus`
        - 자료가 나타나있는 상태 :`on`
        - Error 표시 : `err`
        - Success 표시 : `suc`
        - Warning 표시 :  `warn`
        - 기타 상태 체크(대표예시) : `act`, `run`,`pause`

------

Directory 구성(개발용) : 

```
📂icon이 첨부된 형태는 폴더명, 고정이름

🛄icon은 폴더를 의미하며, 사용이름 또는 한글이름 폴더는 임의로 변경가능

📓icon은 파일를 의미하며, 일부 아이콘 없이 이름으로 처리한 형태도 존재

🗞icon은 파일를 의미하며, 사용자가 임의로 변경가능

파일명 앞에 `_`붙은 형태는 암묵적 파일의 의미로 해석
```



```
📚
|📓index.html
|> 📂css:scss 변환처리
|> 📂scss/ - 📂common/ - 📓_mixin.scss, 📓_variable.scss, 📓reset.scss, 📓common.scss
		  	   - 📂src/    - main.scss()  
		  	   - 📂page/   - 📂base/ - _headBox.scss, _footBox.scss
		  	               - 📂main/ - _slideBox.scss, _newBox.scss, _commercialBox.scss, 
		  	                           _bestBox.scss, _galleryBox.scss, _sponsorBox.scss
			 					       - 📂about/
			 					       - 📂product/
|> 📂font/ - 🛄userFontFolder, 🛄fontawesome 
|> 📂html/ - 📓main.html
|> 📂multi/ - 📂img/ - 🗞favicon.png(64*64)
						- 📂video/
						- 📂audio/
|> 📂js/    - 📂common/ - nomalize
					  - 📂src/
|> 📂data/  - 📂csv/ - 🗞페이지나 기능용도.csv
						- 📂json/ - 🗞페이지나 기능용도.json
|> 📂work/
```



------

File naming 기법 : 

1. 

------

브라우저 허용범위 : 

- IE10 기준 : flex, rem, vw, box-sizing, shadow, border-radius 체크