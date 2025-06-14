# EmailJS Secrets Inspection

The CI workflow failed due to missing EmailJS environment variables. The following table summarizes the check.

| 점검 항목 | 상태 | 원인/설명 | Codex 개선 예시 |
|-----------|------|-----------|----------------|
| EMAILJS_SERVICE_ID | 누락 | GitHub Secrets에 값이 없거나 잘못 등록됨 | EmailJS 대시보드에서 발급받아 등록 |
| EMAILJS_TEMPLATE_ID | 누락 | GitHub Secrets에 값이 없거나 잘못 등록됨 | 동일 |
| EMAILJS_USER_ID | 누락 | GitHub Secrets에 값이 없거나 잘못 등록됨 | 동일 |

Codex 기준 위반 없음. Best Practice: secrets는 반드시 실제 운영 환경에서만 등록/사용할 것.
