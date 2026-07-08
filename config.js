/**
 * Vintage Film Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "오지운",
    nameEn: "Jiwoon",
    father: "오현진",
    mother: "최윤영",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "남민지",
    nameEn: "Minji",
    father: "남경민",
    mother: "신은정",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-01-09",
    time: "11:30",
    venue: "더 파티움 안양",
    hall: "5층 브리에홀",
    address: "경기도 안양시 동안구 시민대로 311 5층 (금강스마트빌딩)",
    mapLinks: {
      kakao: "https://place.map.kakao.com/138147430",
      naver: "https://naver.me/IFgdHqLz"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "우리의 세번째 1월, 아흐레에 초대합니다.",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "함께하면 더 편하고, 더 재밌어서\n결국엔 인생을 함께하기로 했습니다.\n\n좋은 일, 힘든 일도 나눌 수 있는\n든든한 사람이 되어주려 합니다.\n\n귀한 걸음으로 자리를 빛내주시고\n따뜻한 축복을 보내주신다면\n더없는 기쁨으로 간직하겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "오지운", bank: "국민은행", number: "938002-00-679730" },
      { role: "아버지", name: "오현진", bank: "우체국은행", number: "110-0098-90065" },
      { role: "어머니", name: "최윤영", bank: "카카오뱅크", number: "3333-04-3581264" }
    ],
    bride: [
      { role: "신부", name: "남민지", bank: "토스뱅크", number: "1000-2502-0698" },
      { role: "아버지", name: "남경민", bank: "신협은행", number: "010-5777-9176" },
      { role: "어머니", name: "신은정", bank: "농협은행", number: "819-12-424764" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "지운 ♥ 민지의 결혼식에 초대합니다",
    description: "2027년 1월 9일, 우리의 모든 계절이 사랑이되었습니다."
  }
};
