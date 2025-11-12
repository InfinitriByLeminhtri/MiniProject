.PHONY: setup up down logs clean migrate seed

setup:
	@echo "🚀 Setting up environment files..."
	@[ -f services/auth-service/.env ] || cp services/auth-service/.env.example services/auth-service/.env
	@[ -f services/quiz-service/.env ] || cp services/quiz-service/.env.example services/quiz-service/.env
	@[ -f services/result-service/.env ] || cp services/result-service/.env.example services/result-service/.env
	@echo "✅ Setup complete!"

up: setup
	@echo "🚀 Starting all services..."
	docker-compose up -d

down:
	@echo "🛑 Stopping all services..."
	docker-compose down

logs:
	docker-compose logs -f

clean:
	@echo "🧹 Cleaning up (removing volumes)..."
	docker-compose down -v

migrate:
	@echo "📝 Running migrations..."
	docker-compose exec auth-service npm run db:migrate
	docker-compose exec result-service npm run db:migrate

seed:
	@echo "🌱 Seeding databases..."
	docker-compose exec auth-service npm run db:seed
	docker-compose exec result-service npm run db:seed

rebuild:
	@echo "🔄 Rebuilding services..."
	docker-compose up -d --build
