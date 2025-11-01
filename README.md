# Full Stack E-Commerce Application

A modern, secure full-stack e-commerce application built with Spring Boot 3.5.5 and Angular 20.3, featuring payment processing via Stripe and HTTPS support.

## 🏗️ Architecture Overview

This project follows a monorepo structure with clear separation of concerns:

```
ecommerce/
├── 02-backend/spring-boot-ecommerce2/    # Spring Boot REST API
├── 03-frontend/angular-ecommerce/        # Angular SPA
└── 01-starter-files/                     # Initial setup files
```

## 🚀 Technology Stack

### Backend
- **Spring Boot 3.5.5** - Modern Java framework
- **Spring Data JPA** - Database abstraction layer
- **Spring Data REST** - RESTful API generation
- **MySQL 8** - Relational database
- **Lombok** - Reduce boilerplate code
- **Stripe Java SDK 30.0.0** - Payment processing
- **HTTPS/SSL** - Secure communication with PKCS12 keystore

### Frontend
- **Angular 20.3** - Modern web framework
- **TypeScript 5.9.2** - Type-safe JavaScript
- **Bootstrap 5.2** - Responsive UI framework
- **ng-bootstrap 19.0.1** - Angular Bootstrap components
- **Font Awesome 7.0.1** - Icons library
- **Stripe.js 19.1.0** - Payment integration
- **RxJS 7.8** - Reactive programming
- **Angular SSR** - Server-side rendering support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Java Development Kit (JDK) 24** or compatible version
- **Node.js 20+** and npm
- **Maven 3.6+** (or use included Maven wrapper)
- **MySQL 8.0+**
- **Git**

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Simbadonkey/ecommerce.git
cd ecommerce
```

### 2. Database Setup

Create the MySQL database and user:

```sql
CREATE DATABASE `full-stack-ecommerce`;
CREATE USER 'ecommerceapp'@'localhost' IDENTIFIED BY 'ecommerceapp';
GRANT ALL PRIVILEGES ON `full-stack-ecommerce`.* TO 'ecommerceapp'@'localhost';
FLUSH PRIVILEGES;
```

### 3. Backend Configuration

Navigate to the backend directory:

```bash
cd 02-backend/spring-boot-ecommerce2
```

#### Configure Application Properties

Edit `src/main/resources/application.properties`:

```properties
# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/full-stack-ecommerce?useSSL=false&useUnicode=yes&characterEncoding=UTF-8&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username=ecommerceapp
spring.datasource.password=ecommerceapp

# CORS Configuration
allowed.origins=https://localhost:4200

# Stripe API Key (Replace with your key)
stripe.key.secret=sk_test_YOUR_STRIPE_SECRET_KEY
```

⚠️ **Security Best Practice**: Never commit sensitive credentials to Git. Use environment variables or external configuration for production.

#### Build and Run Backend

Using Maven Wrapper (recommended):

```bash
./mvnw clean install
./mvnw spring-boot:run
```

Or with Maven:

```bash
mvn clean install
mvn spring-boot:run
```

The backend will start on `https://localhost:8443` (HTTPS enabled by default).

### 4. Frontend Configuration

Navigate to the frontend directory:

```bash
cd 03-frontend/angular-ecommerce
```

#### Install Dependencies

```bash
npm install
```

#### SSL Certificate Setup

The application uses HTTPS for secure communication. SSL certificates are located in `ssl-localhost/` directory.

**For Development**: The included self-signed certificates work for localhost testing. Your browser will show a security warning - this is expected for self-signed certificates.

**For Production**: Replace with valid SSL certificates from a Certificate Authority (CA).

#### Run Frontend

```bash
npm start
```

The frontend will start on `https://localhost:4200` with SSL enabled.

## 🐳 Docker Deployment (Coming Soon)

Docker configuration will be added to the `mcp-docker-github` branch for easy containerized deployment.

## 📁 Project Structure

### Backend Structure

```
02-backend/spring-boot-ecommerce2/
├── src/
│   ├── main/
│   │   ├── java/com/myProject/ecommerce/
│   │   │   ├── config/          # Configuration classes
│   │   │   ├── controller/      # REST controllers
│   │   │   ├── dao/             # Data access objects
│   │   │   ├── entity/          # JPA entities
│   │   │   ├── dto/             # Data transfer objects
│   │   │   └── service/         # Business logic
│   │   └── resources/
│   │       ├── application.properties
│   │       └── abcd-keystore.p12
│   └── test/                    # Unit and integration tests
├── pom.xml
└── mvnw                         # Maven wrapper
```

### Frontend Structure

```
03-frontend/angular-ecommerce/
├── src/
│   ├── app/
│   │   ├── components/          # Angular components
│   │   ├── services/            # Angular services
│   │   ├── models/              # TypeScript models
│   │   └── app.component.ts
│   ├── assets/                  # Static assets
│   └── environments/            # Environment configs
├── ssl-localhost/               # SSL certificates
├── package.json
└── angular.json
```

## 🔐 Security Features

- **HTTPS/SSL**: All communication encrypted using TLS
- **CORS Protection**: Configured to only allow requests from trusted origins
- **Secure Password Storage**: Database credentials managed securely
- **Stripe Integration**: PCI-compliant payment processing
- **Input Validation**: Server-side validation for all user inputs

## 🎯 Best Practices Implemented

### Backend Best Practices

1. **Layered Architecture**: Clear separation between controllers, services, and repositories
2. **DTO Pattern**: Use DTOs to decouple API from domain models
3. **Exception Handling**: Centralized exception handling with meaningful error messages
4. **API Versioning**: Base path `/api` for all REST endpoints
5. **Hibernate Optimization**: Configured with MySQL8Dialect for optimal performance
6. **Maven Wrapper**: Included for consistent builds across environments
7. **Lombok Integration**: Reduces boilerplate code with annotations

### Frontend Best Practices

1. **Component-Based Architecture**: Modular, reusable components
2. **Service Layer**: Centralized HTTP communication and business logic
3. **Reactive Programming**: RxJS for handling asynchronous operations
4. **Type Safety**: Full TypeScript implementation
5. **Code Formatting**: Prettier configuration for consistent code style
6. **Lazy Loading**: Improved performance with lazy-loaded routes
7. **Server-Side Rendering**: Angular SSR for better SEO and initial load performance

### Development Best Practices

1. **Version Control**: Proper `.gitignore` files to exclude build artifacts and dependencies
2. **Environment Configuration**: Separate configurations for development and production
3. **SSL in Development**: Matches production security model
4. **Code Quality**: ESLint and Prettier for code consistency
5. **Testing Framework**: Jasmine and Karma configured for unit testing

## 🔧 Development Workflow

### Running Tests

**Backend Tests:**
```bash
cd 02-backend/spring-boot-ecommerce2
./mvnw test
```

**Frontend Tests:**
```bash
cd 03-frontend/angular-ecommerce
npm test
```

### Building for Production

**Backend:**
```bash
./mvnw clean package
# Generates JAR in target/ directory
```

**Frontend:**
```bash
npm run build
# Generates optimized build in dist/ directory
```

## 🌐 API Endpoints

Base URL: `https://localhost:8443/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/product-category` | Get product categories |
| GET | `/api/products/search/findByCategoryId` | Search products by category |
| POST | `/api/checkout/purchase` | Process order checkout |

*Note: Additional endpoints may be available based on Spring Data REST auto-generation.*

## 🚨 Common Issues & Troubleshooting

### Backend Issues

**Issue**: Database connection fails
- **Solution**: Verify MySQL is running and credentials in `application.properties` are correct

**Issue**: Port 8443 already in use
- **Solution**: Change `server.port` in `application.properties` or stop conflicting service

**Issue**: SSL certificate errors
- **Solution**: Accept self-signed certificate in browser or import it to trusted certificates

### Frontend Issues

**Issue**: CORS errors
- **Solution**: Ensure backend `allowed.origins` matches frontend URL

**Issue**: npm install fails
- **Solution**: Clear npm cache (`npm cache clean --force`) and retry

**Issue**: SSL certificate warning in browser
- **Solution**: This is expected for self-signed certificates in development. Click "Advanced" and proceed.

## 📦 Environment Variables (Production)

For production deployment, use environment variables instead of hardcoded values:

```bash
# Database
DB_URL=jdbc:mysql://your-db-host:3306/database
DB_USERNAME=your-username
DB_PASSWORD=your-password

# Stripe
STRIPE_SECRET_KEY=sk_live_your_live_key

# SSL
SSL_KEYSTORE_PASSWORD=your-secure-password

# CORS
ALLOWED_ORIGINS=https://your-production-domain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Additional Resources

- [Spring Boot Documentation](https://spring.io/projects/spring-boot)
- [Angular Documentation](https://angular.io/docs)
- [Stripe API Documentation](https://stripe.com/docs/api)
- [MySQL Documentation](https://dev.mysql.com/doc/)

## 📞 Support

For issues and questions, please open an issue in the GitHub repository.

---

**Built with ❤️ using Spring Boot and Angular**
