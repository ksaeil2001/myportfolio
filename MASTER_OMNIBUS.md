# MASTER_OMNIBUS.md
> **Ver Final (The Absolute Canon)**
>
> 이 문서는 프로젝트의 **기획부터 유지보수까지 전 과정(Lifecycle)**과 **기술적 기반(Foundation)**, **관리(Governance)**를 포함하는 전체 엔지니어링 표준이다.
> 표준 개발 절차(Standard)와 심층 방어(Deep Defense)가 모두 포함되어 있으며, 예외 발생 시 CTO 승인이 필요하다.

---

## 1. 순차적 개발 수명 주기 (Sequential Lifecycle)

### 1.1. 기획 (Planning)
- [ ] **요구사항 정의:** 비즈니스 및 기술적 요구사항 명세화.
- [ ] **핵심 기능 도출:** MVP 및 단계별 기능 범위 확정.
- [ ] **데이터 택소노미:** 데이터 분류 체계 및 용어 표준 정립.
- [ ] **멀티테넌시 전략:** 단일/다중 테넌트 아키텍처 및 데이터 격리 수준 결정.
- [ ] **데이터 주권 전략:** 국가별 데이터 저장 위치 및 규제(GDPR 등) 준수 계획.
- [ ] **디지털 승계 계획:** 관리자 유고(Bus Factor) 시 기술적/법적 권한 이양 절차 수립.

### 1.2. 분석/설계 (Analysis & Design)
- [ ] **아키텍처 설계:** 시스템 전체 구조, 모듈 간 관계, 인프라 구성도.
- [ ] **데이터 보존 정책:** 데이터 백업 주기, 보관 연한, 파기 절차 수립.
- [ ] **디자인 시스템:** UI/UX 일관성을 위한 컴포넌트 및 가이드라인.
- [ ] **알림 템플릿:** 이메일, Push, SMS 등 발송 메시지 표준화.
- [ ] **검색 전략:** 인덱싱, 검색 엔진 선택, 랭킹 알고리즘 정의.
- [ ] **약관 정책:** 이용약관, 개인정보처리방침 등 법적 고지 사항.
- [ ] **타임존 정책:** 글로벌 서비스 대응을 위한 UTC 기준 시간 처리 규칙.

### 1.3. 개발 (Development)
**[Infrastructure & Environment]**
- [ ] **Docker PID 1 Init:** 컨테이너 내 좀비 프로세스 방지를 위한 `tini` 등 Init 프로세스 적용.
- [ ] **시크릿 분리:** 코드와 환경 변수/비밀 키의 완전한 분리 및 안전한 저장.
- [ ] **Slowloris Protection:** 연결 지연 공격 방지를 위한 웹 서버 타임아웃 설정.
- [ ] **데이터 시딩 (Seeding):** 초기 구동에 필요한 기초 데이터 및 테스트 데이터 확보.
- [ ] **헬스 체크 (Health Check):** Liveness, Readiness Probe 엔드포인트 구현.
- [ ] **어드민 (Back-office):** 운영 및 관리를 위한 관리자 페이지 구축.

**[Logic & Reliability]**
- [ ] **API 코드젠:** Swagger/OpenAPI 등을 활용한 클라이언트/서버 코드 자동 생성.
- [ ] **트랜잭션 격리 수준:** 데이터 정합성을 위한 DB Isolation Level 설정.
- [ ] **낙관적 락 (Optimistic Lock):** 동시성 제어를 위한 버전 관리(Versioning).
- [ ] **정밀 연산:** 부동소수점 오차 방지를 위한 Decimal/Integer 연산.
- [ ] **부동소수점 결정론:** 플랫폼 간 연산 일치성 보장.
- [ ] **DLQ (Dead Letter Queue):** 메시지 처리 실패 시 재시도 및 격리 메커니즘.
- [ ] **비즈니스 로직 임계치:** 주문 한도, 횟수 제한 등 비즈니스 안전장치.
- [ ] **멱등성 키 구현:** 중복 요청 방지를 위한 `Idempotency-Key` 처리.
- [ ] **펜싱 토큰:** 분산 락 사용 시 GC Pause 안전장치.

**[Security & Validation]**
- [ ] **SSRF (Egress Filtering):** 사용자 입력 URL 호출 시 사설망 및 메타데이터 IP 접근 차단.
- [ ] **웹훅 검증:** 외부 수신 웹훅의 서명(Signature) 검증.
- [ ] **런타임 검사:** Zod 등을 활용한 I/O 데이터 타입 런타임 검증.
- [ ] **CSPRNG 사용:** 보안 난수 생성기 사용(`Math.random` 금지).
- [ ] **JWT Immediate Revocation:** 토큰 즉시 무효화를 위한 Redis Blacklist 구현.
- [ ] **Padding Oracle Defense:** 암호화 오류 시 응답 시간/메시지 통일.
- [ ] **캐시 스탬피드 방지:** PER(확률적 조기 만료) 알고리즘 적용.
- [ ] **해시 플러딩 방지:** SipHash 등 랜덤 시드 해시 사용.
- [ ] **ReDoS 방지:** 정규식 타임아웃 설정 및 안전한 패턴 사용.
- [ ] **호스트 헤더 검증:** 허용된 도메인 외 요청 차단.
- [ ] **파라미터 오염 방지 (HPP):** 중복 HTTP 파라미터 처리 규칙 정의.
- [ ] **쿼리 복잡도 제한:** GraphQL/ORM의 쿼리 깊이 제한.

**[Data Handling]**
- [ ] **DB 인덱싱 전략:** 쿼리 성능 최적화를 위한 인덱스 설계.
- [ ] **유니코드 정규화:** 사용자 입력 텍스트의 정규화(NFC) 처리.
- [ ] **쿼리 파라미터 PII 금지:** URL 파라미터에 민감 정보 노출 차단.
- [ ] **DTO 사용:** 내부 엔티티와 외부 응답 객체의 분리.
- [ ] **DB Charset:** `utf8mb4` 설정을 통한 이모지 및 다국어 지원.
- [ ] **로케일 독립 변환:** 언어 설정에 영향받지 않는 대소문자 변환.
- [ ] **프로토타입 오염 방지:** JS 객체 오염 방지(`Object.freeze` 등).
- [ ] **이메일 정규화:** `.` 무시 및 `+` Alias 제거를 통한 계정 식별.
- [ ] **EXIF 제거:** 이미지 업로드 시 메타데이터 삭제.
- [ ] **트로이 목마 소스 차단:** Bidi 제어 문자 등 악성 코드 패턴 차단.
- [ ] **데이터 무결성 체크 (Checksum):** 중요 데이터의 변조 여부 검증.
- [ ] **2038년 문제 대응:** 64-bit 시간 타입(`BIGINT`) 사용.

### 1.4. 협업/형상관리 (Collaboration & SCM)
- [ ] **브랜치 보호 규칙:** Main 브랜치 직접 푸시 금지 및 PR 필수화.
- [ ] **환경 격리:** Dev, Staging, Prod 환경의 물리적/논리적 분리.
- [ ] **줄바꿈 정규화:** OS 간 줄바꿈 문자(CRLF/LF) 통일 설정.

### 1.5. 테스트 (QA)
- [ ] **단위/통합 테스트:** 코드 커버리지 확보 및 기능 검증.
- [ ] **모킹 (Mocking):** 테스트 효율성을 위한 API 모킹 전략.
- [ ] **백업 복구 훈련:** 정기적인 데이터 복구 리허설.
- [ ] **카오스 테스트:** 장애 주입을 통한 시스템 회복력 검증.
- [ ] **접근성(a11y) 자동화:** 웹 접근성 표준 준수 자동 점검.
- [ ] **라이선스 오염 검사:** 오픈소스 라이선스 호환성 검사.
- [ ] **플래키 테스트 격리:** 간헐적 실패 테스트의 격리 및 수정.

### 1.6. 알파/베타 (Pre-release)
- [ ] **피드백 루프:** 사용자 피드백 수집 및 반영 채널 가동.
- [ ] **행동 데이터 수집:** 사용자 이용 행태 로그 적재.
- [ ] **클라우드 쿼타 증설:** 예상 트래픽 대비 클라우드 리소스 한도 상향.
- [ ] **예산 알림 설정:** 비용 초과 시 알림 임계치 설정.

### 1.7. 배포 (Deployment)
- [ ] **무중단 마이그레이션:** 서비스 중단 없는 DB 스키마 변경.
- [ ] **프로덕션 릴리스:** 배포 승인 절차 및 배포 실행.
- [ ] **최소 버전 체크:** 클라이언트 앱의 강제 업데이트 기능.
- [ ] **SSL 자동화:** 인증서 자동 갱신 체계 구축.
- [ ] **API 일몰 예고 (Sunset):** 구버전 API 종료 정책 공지.
- [ ] **SBOM 생성:** 소프트웨어 자재 명세서 생성 및 관리.
- [ ] **이메일 신뢰성 설정:** SPF, DKIM, DMARC 설정.
- [ ] **도메인 자동 갱신:** 도메인 만료 방지 설정.
- [ ] **불변 설치:** `npm ci` 등을 통한 의존성 버전 고정.
- [ ] **DNS TTL 전략:** 배포/이전 시 전파 지연 최소화 전략.
- [ ] **의존성 혼동 방지:** 사설 패키지 레지스트리 우선순위 설정.
- [ ] **앱스토어 심사용 계정:** 심사 승인을 위한 테스트 계정 및 로직.
- [ ] **비운영 검색 차단:** `noindex` 헤더로 비운영 환경 노출 차단.
- [ ] **HSTS 프리로딩:** 브라우저단 HTTPS 강제 접속 등록.
- [ ] **DMARC Reject 설정:** 메일 사칭 방지 정책 강화(`p=reject`).
- [ ] **재생산 가능한 빌드:** 빌드 결과물의 비트 단위 일치성 확보.
- [ ] **라이선스 스캔:** AGPL 등 전염성 라이선스 유입 차단.
- [ ] **스키마 호환성 검사:** 메시지/데이터 스키마 변경 시 호환성 검증.
- [ ] **MIME 스니핑 차단:** `nosniff` 헤더로 파일 실행 차단.
- [ ] **bfcache Disable:** 민감 페이지 뒤로 가기 시 정보 노출 차단.

### 1.8. 유지보수 (Maintenance)
- [ ] **지표 개선:** 모니터링 대시보드 및 알람 최적화.
- [ ] **의존성 업데이트:** 라이브러리 보안 패치 및 버전 업그레이드.
- [ ] **데이터 아카이빙:** Cold Data 분리 및 저장 비용 최적화.
- [ ] **런북 업데이트:** 장애 대응 매뉴얼 현행화.
- [ ] **키 로테이션:** 액세스 키, DB 패스워드 등의 주기적 변경.
- [ ] **비상 계정 관리:** 긴급 접속용 계정의 보안 관리.
- [ ] **알람 튜닝:** 오탐(False Positive) 감소 및 임계치 조정.
- [ ] **휴면 계정 정리:** 장기 미사용 계정의 분리 보관 또는 삭제.
- [ ] **섀도우 API 탐지:** 관리되지 않는 API 엔드포인트 식별 및 제거.
- [ ] **서브도메인 테이크오버 감사:** 연결 끊긴 DNS 레코드 점검.
- [ ] **고아 리소스 청소:** 미사용 클라우드 자원 삭제.
- [ ] **BGP RPKI 등록:** IP 라우팅 경로 보안 등록.
- [ ] **암호 유연성 점검:** 양자 내성 암호(PQC) 전환 가능성 검토.
- [ ] **CT 로그 모니터링:** 인증서 부정 발급 감시.
- [ ] **캐시 관통 차단:** Bloom Filter 등을 이용한 무효 요청 방어.

---

## 2. 기술 및 구조적 기반 (Structural Foundation)
*시스템이 물리적으로 안전하게 돌아가기 위해 항상 유지되어야 할 기술적 원칙.*

### 2.1. 알고리즘 및 데이터 구조 안정성
- [ ] **Hash Flooding Defense:** SipHash 사용.
- [ ] **Cache Penetration Block:** Bloom Filter/Null Caching 적용.
- [ ] **Recursive Query Limit:** 쿼리 깊이 제한.
- [ ] **Fencing Token:** 분산 락 정합성 보장.
- [ ] **Schema Registry:** 스키마 호환성 관리.

### 2.2. 브라우저 및 콘텐츠 해석 보안
- [ ] **MIME Sniffing Prevention:** `nosniff` 설정.
- [ ] **COOP/COEP Headers:** 프로세스 격리.
- [ ] **LLM Jailbreak Defense:** 프롬프트 인젝션 방어.
- [ ] **Clickjacking Protection:** 프레임 차단(`X-Frame-Options`).
- [ ] **Reverse Tabnapping Fix:** `rel="noopener noreferrer"` 강제.
- [ ] **UI 에러 바운더리:** 스크립트 에러 시 백지화 방지.

### 2.3. 인프라 및 암호학적 기반
- [ ] **신뢰 및 인증의 투명성:** CT Monitoring.
- [ ] **신기술 보안:** Post-Quantum Readiness.
- [ ] **시간 및 문자열:** Year 2038 Compliance, Grapheme Cluster.
- [ ] **인터넷 인프라:** BGP Hijacking Defense.
- [ ] **컴퓨팅 및 암호학:** CSPRNG, Constant-Time Compare.
- [ ] **코드 및 실행 환경:** Trojan Source Block, Memory Leak Prevention, Reproducible Builds.

### 2.4. 방어 기제 (Defense Mechanisms)
- [ ] **데이터 프라이버시:** ETag Tracking Prevention, EXIF Stripping.
- [ ] **빌드 및 세션:** `__Host-` Cookie, HPP Protection.
- [ ] **네트워크 심층 방어:** DNS Rebinding, Log Injection Block.
- [ ] **비즈니스 로직:** Email Canonicalization, TOCTOU, Idempotency.
- [ ] **사용자 인터페이스:** DMARC Reject, Homoglyph Protection.
- [ ] **글로벌 무결성:** Locale-Agnostic Coding.
- [ ] **보안 공격 방어:** Zip Bomb, ReDoS.
- [ ] **성능 제어:** Cache Stampede (PER).
- [ ] **프로토콜:** HTTP/2 End-to-End.
- [ ] **생존성:** Load Shedding, Immutable Backups.

### 2.5. 신뢰성과 효율성
- [ ] **디지털 포용성:** A11y Automation.
- [ ] **사용자 보호:** UGC Reporting, Secure Webhooks.
- [ ] **회복 탄력성:** DLQ, Chaos Engineering.
- [ ] **운영 추적성:** Back-office, Backup Verification.
- [ ] **안정성:** Synthetic Monitoring, Health Checks.
- [ ] **API 효율:** Cursor Pagination, Compression.

---

## 3. 횡단 관심사 및 품질 관리 (Cross-cutting Management)
*프로젝트 전체를 관통하며 지속적으로 관리되어야 할 거버넌스 항목.*

- [ ] **코드 거버넌스:** Branch Protection 등 코드 품질 관리 규칙.
- [ ] **문서화:** Incident Runbooks, ADR, API Docs 현행화.
- [ ] **자동화:** Dependency Automation 등을 통한 운영 효율화.
- [ ] **비밀 관리:** Secrets Mgmt를 통한 기밀 정보 보호.
- [ ] **분석:** Event Tracking을 통한 데이터 기반 의사결정 지원.
- [ ] **보안:** DevSecOps 내재화.
- [ ] **제어:** Feature Flags를 통한 기능 배포 제어.
- [ ] **비기능:** Compliance, FinOps, A11y/i18n 준수.
