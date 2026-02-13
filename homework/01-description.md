## 🏗️ Project Architecture

Your project follows the **MVC-style** pattern (minus the View):

```
my-hobby-server/
├── models/
│   └── Hobby.js
├── routes/
│   └── hobbyRoutes.js
├── server.js
└── package.json
```

### Standard CRUD Operations:

#### **CREATE - `createHobby`** ✏️

- **What it does:** Adds a new hobby to the database
- **HTTP Method:** POST
- **Endpoint:** `/api/hobbies`
- **Required fields:** `name`
- **Response:** Returns the created hobby with ID and timestamps

#### **READ - `getAllHobbies`** 📖

- **What it does:** Retrieves all hobbies from database
- **HTTP Method:** GET
- **Endpoint:** `/api/hobbies`
- **Response:** Array of all hobbies with count

#### **READ - `getHobbyById`** 🔍

- **What it does:** Finds a specific hobby by its ID
- **HTTP Method:** GET
- **Endpoint:** `/api/hobbies/:id`
- **Parameter:** Hobby ID from MongoDB
- **Response:** Single hobby object or 404 error if not found

#### **UPDATE - `updateHobby`** 🔄

- **What it does:** Modifies an existing hobby's information
- **HTTP Method:** PUT
- **Endpoint:** `/api/hobbies/:id`
- **Updatable fields:** name, description, category, frequency, isActive
- **Response:** Updated hobby object

#### **DELETE - `deleteHobby`** 🗑️

- **What it does:** Removes a hobby from the database
- **HTTP Method:** DELETE
- **Endpoint:** `/api/hobbies/:id`
- **Response:** Confirmation with deleted hobby details

```javascript
POST   /api/hobbies              → createHobby
GET    /api/hobbies              → getAllHobbies
GET    /api/hobbies/:id          → getHobbyById
PUT    /api/hobbies/:id          → updateHobby
DELETE /api/hobbies/:id          → deleteHobby
```

## 📝 Database Schema (Mongoose)

```javascript
{
  name: String (required, max 50),
  description: String (max 500),
  category: String (enum: sports, arts, music, gaming, reading, other),
  frequency: String (enum: daily, weekly, monthly, rarely),
  isActive: Boolean (default: true),
  timestamps: { createdAt, updatedAt } // Automatic
}
```

## 🧪 Sample API Calls

### Create a New Hobby

```
POST /api/hobbies
Content-Type: application/json

{
  "name": "Guitar Playing",
  "description": "Learning acoustic guitar songs",
  "category": "music",
  "frequency": "daily"
}
```

**Response (201 Created):**

```json
{
  "status": "success",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Guitar Playing",
    "description": "Learning acoustic guitar songs",
    "category": "music",
    "frequency": "daily",
    "isActive": true,
    "createdAt": "2026-02-10T10:30:00.000Z",
    "updatedAt": "2026-02-10T10:30:00.000Z"
  },
  "message": "Hobby created successfully"
}
```

### Get All Hobbies

```
GET /api/hobbies
```

**Response (200 OK):**

```json
{
  "status": "success",
  "count": 3,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Guitar Playing",
      "category": "music",
      ...
    },
    ...
  ]
}
```
