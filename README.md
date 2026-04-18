# Evergreen Metropolis Mall - Sales and Leasing Tool

## Documentation

### Tech Stack
- **Frontend:** React.js 
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **AI Tools:** TensorFlow for predictive analytics

### Setup Instructions
1. **Clone the repository**: 
   ```bash
   git clone https://github.com/Sidd444/Evergreen-Metropolis-Mall---Sales---Leasing-Tool.git
   ```
2. **Navigate to the directory**: 
   ```bash
   cd Evergreen-Metropolis-Mall---Sales---Leasing-Tool
   ```
3. **Install dependencies**: 
   ```bash
   npm install
   ```
4. **Set up environment variables** (create a `.env` file):
   ```plaintext
   DATABASE_URL=mongodb://<username>:<password>@url:port/database
   PORT=5000
   ```
5. **Start the server**: 
   ```bash
   npm start
   ```

### Design Decisions
- Chose a microservices architecture for the backend for scalability.
- Utilized MongoDB for its flexibility with schema design.
- Frontend built in React to ensure a responsive user experience.

### AI Tools Used
- Implemented machine learning algorithms to predict sales trends based on historical data.
- TensorFlow was selected for its comprehensive support for various machine learning models and ease of use.