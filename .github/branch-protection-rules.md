# Branch Protection Rules

## 🔒 Cấu hình Branch Protection trên GitHub

### Main Branch
1. Vào **Settings** → **Branches** → **Add rule**
2. Branch name pattern: `main`
3. Bật các options:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1-2 reviewers)
   - ✅ Require status checks to pass before merging
     - CI - Dev Branch
     - Validate Production Ready
   - ✅ Require branches to be up to date before merging
   - ✅ Do not allow bypassing the above settings
   - ✅ Restrict who can push to matching branches (chỉ admin)

### Dev Branch
1. Branch name pattern: `dev`
2. Bật các options:
   - ✅ Require a pull request before merging
   - ✅ Require approvals (1 reviewer)
   - ✅ Require status checks to pass before merging
     - CI - Feature Branches
     - Lint & Test All Services
     - Integration Test
   - ✅ Require branches to be up to date before merging
   - ✅ Do not allow bypassing the above settings

### Working Branches (Tất cả trừ main/dev)
- Không cần protection rules
- Tự do push và commit
- Phải tạo PR để merge vào dev
- **Tự do đặt tên branch** (trừ `main` và `dev`)

**Ví dụ:**
- `feature/login`, `fix-bug`, `minh-task`
- `update-ui`, `refactor-code`, `test-api`
- Bất kỳ tên nào miễn là không phải `main` hoặc `dev`

## 📋 Workflow

```
any-branch-name → PR → dev → PR → main
```

## 🚫 Chặn Direct Push

Các branch được bảo vệ:
- `main` - Chỉ merge từ `dev` qua PR
- `dev` - Chỉ merge từ `feature/*` qua PR

## ✅ CI/CD Pipeline

1. **Feature Branch**: Lint + Docker Build
2. **Dev Branch**: Lint + Integration Test + Docker Build
3. **Main Branch**: Validate + CD (TODO)
