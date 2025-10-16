

**Description:**
Registers a new user. This creates an account in a pending state and sends an OTP to the user's email for verification.

**Request Body:**

```json
{
  "name": "string",
  "username": "string",
  "email": "string (email format)",
  "password": "string",
  "role": "User | Guardian",
  "birthdate": "date"
}
```

**Success Response (200 OK):**

```json
{
  "message": "user created success",
  "user": {
    "name": "string",
    "username": "string",
    "email": "string",
    "role": "string",
    "birthdate": "date",
    "confirmEmailOtp": "hashed_otp_string"
  }
}
```

**Error Responses:**

  * `400 Bad Request`: User already exists.
  * `500 Internal Server Error`: User could not be created.

-----

### **POST `/confirmEmail`**
POST /api/auth/confirmEmail

**Description:**
Confirms a new user's email address using the provided OTP.

**Request Body:**

```json
{
  "email": "string (email format)",
  "otp": "string (6 digits)"
}
```

**Success Response (200 OK):**

```json
{
  "message": "user loged in success",
  "Credentials": {
    "accessToken": "string",
    "refreshToken": "string"
  }
}
```

**Error Responses:**

  * `404 Not Found`: User not found.
  * `400 Bad Request`: The provided OTP is not valid.

-----
POST /api/auth/login

### **POST `/login`**

**Description:**
Logs in an existing user with their email and password.

**Request Body:**

```json
{
  "email": "string (email format)",
  "password": "string"
}
```

**Success Response (200 OK):**

```json
{
  "message": "user loged in success",
  "Credentials": {
    "accessToken": "string",
    "refreshToken": "string"
  }
}
```

**Error Responses:**

  * `404 Not Found`: User not found.
  * `400 Bad Request`: The provided password is not valid.
PATCH /api/auth/forget-password

-----

### **PATCH `/forget-password`**

**Description:**
Initiates the password reset process by sending an OTP to the user's email.

**Request Body:**

```json
{
  "email": "string (email format)"
}
```

**Success Response (200 OK):**

r

**Error Responses:**

  * `404 Not Found`: User not found.

-----

### **PATCH `/reset-password`**

**Description:**
Sets a new password for the user after they provide a valid OTP.

**Request Body:**

```json
{
  "email": "string (email format)",
  "otp": "string (6 digits)",
  "password": "string",
  "confirmPassword": "string"
}
```

**Success Response (200 OK):**

```json
{
  "message": "password reset Success"
}
```

**Error Responses:**

  * `404 Not Found`: User not found.
  * `400 Bad Request`: The OTP is invalid.
  * `400 Bad Request`: The `password` and `confirmPassword` fields must match.