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
 *         password:
 *           type: string
 *         confirmPassword:
 *           type: string
 */


/**
 * @swagger
 * tags:
 *   name: Survey Questions
 *   description: API for displaying Survey Questions to the client
 */

/**
 * @swagger
 * /api/survey:
 *   post:
 *     tags: [Survey Questions]
 *     summary: Create a new survey.
 *     description: Create a new survey with provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               surveyQuestion:
 *                 type: string
 *               description:
 *                 type: string
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: Survey created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Survey'
 *       409:
 *         description: Details are not correct.
 *       500:
 *         description: Server error.
 *
 * /api/getallSurveys:
 *   get:
 *     tags: [Survey Questions]
 *     summary: Get all surveys.
 *     description: Retrieve a list of all surveys.
 *     responses:
 *       200:
 *         description: List of surveys.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Survey'
 *       404:
 *         description: No surveys found.
 *       500:
 *         description: Server error.
 *
 * /api/survey/{id}:
 *   put:
 *     tags: [Survey Questions]
 *     summary: Update a survey by ID.
 *     description: Update a survey with provided details based on the ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Survey ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               surveyQuestion:
 *                 type: string
 *               description:
 *                 type: string
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: Survey updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Survey'
 *       404:
 *         description: Survey not found.
 *       500:
 *         description: Server error.
 *
 * components:
 *   schemas:
 *     Survey:
 *       type: object
 *       properties:
 *         userID:
 *           type: integer
 *         surveyQuestion:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 */

/**
 * @swagger
 * /api/survey/{id}:
 *   delete:
 *     tags: [Survey Questions]
 *     summary: Delete a survey by ID.
 *     description: Delete a survey based on the provided ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Survey ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Survey deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       404:
 *         description: Survey not found.
 *       500:
 *         description: Server error.
 */