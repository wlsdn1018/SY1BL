# 📱 푸시 알림 설정 가이드

## 🎯 목표
앱이 닫혀 있어도 알림을 받을 수 있도록 설정합니다!

---

## 📋 필요한 파일들

### 1. 메인 HTML 파일
- `construction_management_firebase_final.html`

### 2. Service Worker
- `service-worker.js` (백그라운드 알림 처리)

### 3. PWA Manifest
- `manifest.json` (앱 설치 정보)

### 4. 아이콘 파일들 (9개)
- `icon-72.png`
- `icon-96.png`
- `icon-128.png`
- `icon-144.png`
- `icon-152.png`
- `icon-192.png`
- `icon-384.png`
- `icon-512.png`
- `badge-72.png`

---

## 🔧 Firebase Cloud Messaging 설정

### Step 1: Firebase Console 접속
1. https://console.firebase.google.com/project/sy1bl-31462
2. **프로젝트 설정** (⚙️ 아이콘) 클릭
3. **Cloud Messaging** 탭 선택

### Step 2: VAPID 키 생성
1. **웹 푸시 인증서** 섹션 찾기
2. **키 쌍 생성** 버튼 클릭
3. 생성된 키 복사 (예: `BHxxx...xxx`)

### Step 3: HTML 파일 수정
HTML 파일에서 다음 부분 찾기:
```javascript
const token = await messaging.getToken({
    vapidKey: 'YOUR_VAPID_KEY_HERE', // 여기에 복사한 키 붙여넣기
    serviceWorkerRegistration: registration
});
```

`YOUR_VAPID_KEY_HERE`를 복사한 VAPID 키로 교체

---

## 📁 파일 업로드 (GitHub Pages)

### 필수 파일 구조:
```
your-repo/
├── construction_management_firebase_final.html
├── service-worker.js
├── manifest.json
├── icon-72.png
├── icon-96.png
├── icon-128.png
├── icon-144.png
├── icon-152.png
├── icon-192.png
├── icon-384.png
├── icon-512.png
└── badge-72.png
```

### GitHub에 업로드:
1. 모든 파일을 Repository에 업로드
2. GitHub Pages 활성화
3. HTTPS 필수! (HTTP는 Service Worker 작동 안 함)

---

## 📱 모바일 앱 설치 방법

### Android (Chrome)
1. 웹사이트 접속
2. 주소창 옆 "홈 화면에 추가" 버튼 클릭
3. 또는 메뉴 → "앱 설치" 선택
4. 홈 화면에 아이콘 생성됨

### iOS (Safari)
1. 웹사이트 접속
2. 하단 공유 버튼 (▢↑) 클릭
3. "홈 화면에 추가" 선택
4. 이름 확인 후 "추가" 클릭

---

## 🔔 알림 권한 허용

### 첫 방문 시
1. "알림을 허용하시겠습니까?" 팝업
2. **"허용"** 클릭 (필수!)

### 권한 거부한 경우
**Android Chrome:**
1. 사이트 설정 → 알림
2. "허용"으로 변경

**iOS Safari:**
1. 설정 → Safari → 알림
2. 해당 사이트 허용

---

## 🧪 테스트 방법

### 1. 앱 설치 확인
- 홈 화면에 아이콘이 생성되었는지 확인

### 2. 푸시 알림 테스트
```
1. 모바일에 앱 설치
2. 앱 실행 → 알림 권한 허용
3. 앱 완전히 종료 (백그라운드도 종료)
4. PC에서 공지사항 등록
5. 모바일에서 푸시 알림 받기 ✅
```

### 3. 백그라운드 알림 확인
```
- 앱이 닫혀있어도 알림 수신
- 알림 클릭 → 앱 자동 실행
- 진동 작동
```

---

## ⚠️ 주의사항

### HTTPS 필수
- HTTP에서는 Service Worker 작동 안 함
- GitHub Pages는 자동으로 HTTPS 제공

### 브라우저 지원
✅ Chrome (Android/Desktop)
✅ Edge
✅ Firefox
⚠️ Safari (iOS) - 제한적 지원
❌ IE11 - 지원 안 함

### iOS 제한사항
- iOS Safari는 PWA 푸시 알림 지원 제한적
- 앱을 홈 화면에 추가해야 작동
- 백그라운드 알림은 iOS 16.4+ 에서만 가능

---

## 🐛 문제 해결

### "Service Worker 등록 실패"
→ HTTPS 사용 확인
→ 파일 경로 확인 (/service-worker.js)

### "알림 권한 없음"
→ 브라우저 설정에서 알림 허용
→ 사이트별 알림 설정 확인

### "VAPID 키 오류"
→ Firebase Console에서 올바른 키 복사
→ HTML 파일에 정확히 붙여넣기

### "아이콘이 안 보임"
→ 아이콘 파일 업로드 확인
→ 파일명 정확히 일치 확인

---

## 📊 현재 vs 개선 후

| 기능 | 이전 | 현재 |
|------|------|------|
| 앱 열려있을 때 알림 | ✅ | ✅ |
| 앱 닫혀있을 때 알림 | ❌ | ✅ |
| 홈 화면 설치 | ❌ | ✅ |
| 오프라인 사용 | ❌ | ✅ |
| 네이티브 앱처럼 작동 | ❌ | ✅ |

---

## 🎊 완료!

이제 앱이 완전히 종료되어 있어도 푸시 알림을 받을 수 있습니다!

질문이나 문제가 있으면 언제든 문의하세요! 😊
