# E-commerce Backend with NestJS + TypeScript

This project is a backend service for an e-commerce application, built using **NestJS** and **TypeScript**. It is designed to handle core backend functionalities such as user management, product management, and order processing, ensuring robust and scalable performance.

## Key Features

- **NestJS Framework**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **Sequelize ORM**: For interacting with relational databases.
- **TypeScript**: Enhances code quality and maintainability.
- **Validation**: Request validation with `class-validator` and `class-transformer`.
- **Environment Configuration**: Managed using the `dotenv` package.
- **Database Migrations**: Uses Sequelize CLI to handle migrations and seeders.

---

## ⚡️ Quick Install

### Run the Project Locally

```bash
# Clone the repository
git clone https://github.com/your-repo/ecommerce-be.git

# Navigate to the project directory
cd ecommerce-be

# Install the dependencies
npm install

# Set up the environment variables in a `.env` file at the root
# Example environment variables:
echo "NODE_ENV=production

# Database Configuration
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME_PRODUCTION=your_production_db_name
DB_HOST=your_db_host
DB_PORT=your_db_port
DB_DIALECT=postgres

DB_NAME_LOCAL=your_local_db_name
" > .env

# Run database migrations to add models to the database
npx sequelize-cli db:migrate

# Optionally, run the seeders to add dummy data
npx sequelize-cli db:seed:all

# Start the development server
npm run start:dev
```

### Run the Project on Production
```bash
# Build the application
npm run build

# Run database migrations to ensure all models are added to the database
npx sequelize-cli db:migrate

# Start the production server
npm run start:prod
```

## 📖 Documentation
### Project Description
This e-commerce backend service powers the core functionalities of an e-commerce platform. It includes features such as retrieving a product list with filters like category and pagination, as well as fetching detailed product information. Built with scalability and modularity in mind, this service is designed to support future enhancements like integration with advanced AI-based features. This backend serves as the foundation for a larger e-commerce ecosystem and ensures a seamless shopping experience for users.