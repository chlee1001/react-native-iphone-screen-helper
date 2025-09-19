# Contributing to react-native-iphone-screen-helper

## 기여하기 / Contributing

이 프로젝트에 기여해 주셔서 감사합니다! / Thank you for contributing to this project!

## Commit Message Convention

이 프로젝트는 [Conventional Commits](https://www.conventionalcommits.org/) 규칙을 따릅니다.
This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format / 형식

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types / 타입

- `feat`: 새로운 기능 / A new feature
- `fix`: 버그 수정 / A bug fix
- `docs`: 문서 변경 / Documentation only changes
- `style`: 코드 스타일 변경 (포맷, 세미콜론 등) / Changes that do not affect the meaning of the code
- `refactor`: 리팩토링 / A code change that neither fixes a bug nor adds a feature
- `perf`: 성능 개선 / A code change that improves performance
- `test`: 테스트 추가/수정 / Adding missing tests or correcting existing tests
- `build`: 빌드 시스템 변경 / Changes that affect the build system
- `ci`: CI 설정 변경 / Changes to our CI configuration files and scripts
- `chore`: 기타 변경사항 / Other changes that don't modify src or test files

### Examples / 예시

```bash
feat: add iPhone 15 Pro Max support
fix: correct status bar height for iPhone 14 Pro
docs: update README with new device list
style: format code with prettier
refactor: improve performance of device detection
```

### iPhone 모델 추가 시 / When Adding iPhone Models

새로운 iPhone 모델을 추가할 때는 다음 형식을 사용해주세요:
When adding new iPhone models, please use this format:

```bash
feat: add iPhone [model] support

- Add device specifications for iPhone [model]
- Update status bar height mappings
- Include screen resolution and pixel density
```

## Development Workflow / 개발 워크플로우

1. Fork this repository / 이 저장소를 포크하세요
2. Create a feature branch / 기능 브랜치를 생성하세요
3. Make your changes / 변경사항을 만드세요
4. Follow commit conventions / 커밋 규칙을 따르세요
5. Push to your fork / 포크에 푸시하세요
6. Create a Pull Request / Pull Request를 생성하세요

## Release Process / 릴리즈 프로세스

- semantic-release가 자동으로 버전을 관리합니다 / semantic-release automatically manages versioning
- main/master 브랜치에 푸시하면 자동으로 릴리즈됩니다 / Releases are automatically created when pushing to main/master
- 태그와 릴리즈 노트가 자동으로 생성됩니다 / Tags and release notes are automatically generated

## Questions? / 질문이 있나요?

이슈를 열어주세요! / Please open an issue!