/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: API for user registration and authentication
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     tags: [Authentication]
 *     summary: Register a new user.
 *     description: Register a new user with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registration successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 token:
 *                   type: string
 *       400:
 *         description: Bad request. Passwords do not match.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: [Authentication]
 *     summary: Log in an existing user.
 *     description: Log in an existing user with the provided credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User login successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *                 token:
 *                   type: string
 *       401:
 *         description: Unauthorized. Invalid password.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /auth:
 *   get:
 *     tags: [Authentication]
 *     summary: Get all users.
 *     description: Retrieve a list of all registered users.
 *     responses:
 *       200:
 *         description: List of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       404:
 *         description: No users found.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * /auth/{id}:
 *   get:
 *     tags: [Authentication]
 *     summary: Get user by ID.
 *     description: Retrieve user details based on the provided ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: User ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found.
 *       500:
 *         description: Server error.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 */

